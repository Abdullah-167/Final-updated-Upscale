"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

/**
 * SCROLL-DRIVEN sequence (tied to scrollYProgress across a tall section,
 * with a sticky viewport-height stage inside it):
 *
 *   progress 0          -> "Let's" is off-screen left, "build" off-screen right
 *   progress 0..0.45     -> both slide toward the center as the user scrolls
 *   progress 0.45         -> they meet/collide in the center (flash + punch)
 *   progress 0.45..0.58   -> hold, tagline fades in
 *   progress >= 0.58      -> shatters into flying/rotating/falling tiles
 *                            (canvas particle burst, plays out over time once
 *                            triggered)
 *
 *   Scrolling back up past ~0.5 un-shatters and re-forms the words, so the
 *   whole thing scrubs naturally with the scrollbar in both directions.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  sx: number;
  sy: number;
  w: number;
  h: number;
  rotation: number;
  vRot: number;
  alpha: number;
  life: number;
  maxLife: number;
}

const TILE = 9; // px, size of each shattered fragment
const GRAVITY = 900; // px/s^2
const ENTER_END = 0.45; // scroll progress where the words finish colliding
const SHATTER_ON = 0.58; // scroll progress that triggers the shatter (going down)
const SHATTER_OFF = 0.5; // scroll progress that un-shatters (going back up)
const SHATTER_MS = 1400;

export default function SplitTextSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const leftWordRef = useRef<HTMLSpanElement>(null);
  const rightWordRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const genRef = useRef(0);

  const [shattered, setShattered] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, ENTER_END], ["-60vw", "0vw"]);
  const rightX = useTransform(scrollYProgress, [0, ENTER_END], ["60vw", "0vw"]);
  const wordsOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
  const taglineOpacity = useTransform(
    scrollYProgress,
    [ENTER_END, ENTER_END + 0.06],
    [0, 1]
  );
  const taglineY = useTransform(
    scrollYProgress,
    [ENTER_END, ENTER_END + 0.06],
    [8, 0]
  );
  const flashOpacity = useTransform(
    scrollYProgress,
    [ENTER_END - 0.02, ENTER_END, ENTER_END + 0.1],
    [0, 0.35, 0]
  );
  const flashScale = useTransform(
    scrollYProgress,
    [ENTER_END - 0.02, ENTER_END + 0.12],
    [0.4, 1.6]
  );
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const runShatter = useCallback(async (generation: number) => {
    const stage = stageRef.current;
    const left = leftWordRef.current;
    const right = rightWordRef.current;
    const canvas = canvasRef.current;
    if (!stage || !left || !right || !canvas) return;

    if (typeof document !== "undefined" && "fonts" in document) {
      try {
        await (document as Document & { fonts: FontFaceSet }).fonts.ready;
      } catch {
        /* proceed even if font loading detection fails */
      }
    }
    // If the user scrolled back up (or re-triggered) before fonts resolved,
    // bail out so we don't start a stale burst.
    if (genRef.current !== generation) return;

    const stageRect = stage.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = stageRect.width * dpr;
    canvas.height = stageRect.height * dpr;
    canvas.style.width = `${stageRect.width}px`;
    canvas.style.height = `${stageRect.height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // Draw both words onto an offscreen source canvas at their live positions
    const source = document.createElement("canvas");
    source.width = stageRect.width * dpr;
    source.height = stageRect.height * dpr;
    const sctx = source.getContext("2d");
    if (!sctx) return;
    sctx.scale(dpr, dpr);

    const drawWord = (el: HTMLSpanElement, color: string) => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      sctx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      sctx.fillStyle = color;
      sctx.textBaseline = "top";
      sctx.fillText(
        el.textContent || "",
        rect.left - stageRect.left,
        rect.top - stageRect.top
      );
      return rect;
    };

    // Let's = Black, build = Blue
    const leftRect = drawWord(left, "#000000");
    const rightRect = drawWord(right, "#1570EF");

    const bbox = {
      left: Math.min(leftRect.left, rightRect.left) - stageRect.left,
      right: Math.max(leftRect.right, rightRect.right) - stageRect.left,
      top: Math.min(leftRect.top, rightRect.top) - stageRect.top,
      bottom: Math.max(leftRect.bottom, rightRect.bottom) - stageRect.top,
    };
    const centerX = (bbox.left + bbox.right) / 2;
    const centerY = (bbox.top + bbox.bottom) / 2;

    const imgData = sctx.getImageData(0, 0, source.width, source.height).data;

    const particles: Particle[] = [];
    for (let ty = Math.floor(bbox.top); ty < bbox.bottom; ty += TILE) {
      for (let tx = Math.floor(bbox.left); tx < bbox.right; tx += TILE) {
        const px = Math.floor(tx * dpr + (TILE * dpr) / 2);
        const py = Math.floor(ty * dpr + (TILE * dpr) / 2);
        if (px < 0 || py < 0 || px >= source.width || py >= source.height) continue;
        const idx = (py * source.width + px) * 4;
        const alpha = imgData[idx + 3];
        if (alpha < 40) continue;

        const dx = tx + TILE / 2 - centerX;
        const dy = ty + TILE / 2 - centerY;
        const dist = Math.max(Math.hypot(dx, dy), 1);
        const outward = 60 + Math.random() * 220;

        particles.push({
          x: tx,
          y: ty,
          sx: tx,
          sy: ty,
          w: TILE,
          h: TILE,
          vx: (dx / dist) * outward + (Math.random() - 0.5) * 60,
          vy: (dy / dist) * outward - 120 - Math.random() * 140,
          rotation: 0,
          vRot: (Math.random() - 0.5) * 8,
          alpha: 1,
          life: 0,
          maxLife: 0.9 + Math.random() * 0.5,
        });
      }
    }

    let lastT = performance.now();
    const startT = lastT;

    const step = (now: number) => {
      if (genRef.current !== generation) return; // superseded (scrolled back up)
      const dt = Math.min((now - lastT) / 1000, 0.033);
      lastT = now;
      ctx.clearRect(0, 0, stageRect.width, stageRect.height);

      let anyAlive = false;
      for (const p of particles) {
        p.life += dt;
        if (p.life >= p.maxLife) continue;
        anyAlive = true;

        p.vy += GRAVITY * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rotation += p.vRot * dt;
        p.alpha = 1 - p.life / p.maxLife;

        ctx.save();
        ctx.globalAlpha = Math.max(p.alpha, 0);
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate(p.rotation);
        ctx.drawImage(
          source,
          p.sx * dpr,
          p.sy * dpr,
          p.w * dpr,
          p.h * dpr,
          -p.w / 2,
          -p.h / 2,
          p.w,
          p.h
        );
        ctx.restore();
      }

      if (anyAlive && now - startT < SHATTER_MS + 400) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        ctx.clearRect(0, 0, stageRect.width, stageRect.height);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduceMotion) return;
    if (!shattered && v >= SHATTER_ON) {
      setShattered(true);
    } else if (shattered && v <= SHATTER_OFF) {
      setShattered(false);
    }
  });

  useEffect(() => {
    genRef.current += 1;
    const generation = genRef.current;

    if (shattered) {
      runShatter(generation);
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearCanvas();
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shattered, runShatter]);

  if (reduceMotion) {
    return (
      <section className="flex h-screen w-full items-center justify-center bg-white">
        <div className="flex items-baseline justify-center gap-4 text-6xl font-bold sm:text-7xl md:text-[200px]">
          <span className="text-black">Let&rsquo;s</span>
          <span className="text-[#1570EF]">build</span>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[280vh] w-full bg-white">
      <div
        ref={stageRef}
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden"
      >
        {/* collision flash */}
        <motion.div
          className="pointer-events-none absolute h-40 w-40 rounded-full bg-[#1570EF] blur-3xl"
          style={{ opacity: flashOpacity, scale: flashScale }}
        />

        <div className="relative flex items-baseline justify-center gap-4 text-6xl font-bold sm:text-7xl md:text-[200px]">
          <motion.span
            ref={leftWordRef}
            className="text-black"
            style={{
              x: leftX,
              opacity: wordsOpacity,
              visibility: shattered ? "hidden" : "visible",
            }}
          >
            Let&rsquo;s
          </motion.span>
          <motion.span
            ref={rightWordRef}
            className="text-[#1570EF]"
            style={{
              x: rightX,
              opacity: wordsOpacity,
              visibility: shattered ? "hidden" : "visible",
            }}
          >
            build
          </motion.span>
        </div>

        {/* shatter canvas overlay, sits exactly on top of the words */}
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0"
        />

        {/* scroll hint, fades out as soon as the user starts scrolling */}
        <motion.p
          className="absolute bottom-8 text-[11px] font-medium uppercase tracking-[0.25em] text-gray-400"
          style={{ opacity: hintOpacity }}
        >
          Scroll to explore
        </motion.p>
      </div>
    </section>
  );
}