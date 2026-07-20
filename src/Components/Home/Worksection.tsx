"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";

// Type for individual work item
type WorkItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  caseStudyUrl: string;
  tags: string[];
  category: string;
};

// Sample work data - Replace with your actual data
const workData: WorkItem[] = [
  {
    id: "1",
    title: "Data Wizz",
    description: "Designing the new branding, website, pitch deck and marketing collateral for a $12.5M seed AI platform",
    image: "/projects/web/datawizz/DATAWIZZ.avif",
    video: "/projects/web/datawizz/DATAWIZZ_CASE_STUDY_web.mp4",
    caseStudyUrl: "/projects/product-development/datawizz",
    tags: ["Branding", "Web Design", "AI"],
    category: "Web Design & Branding",
  },
  {
    id: "2",
    title: "N3XT.io",
    description: "Designed the brand and digital experience for a $72M-funded next-gen narrow bank platform.",
    image: "/projects/web/n3xt/n3xtcard.avif",
    video: "/projects/web/n3xt/N3XT_CASESTUDY_web.mp4",
    caseStudyUrl: "/projects/product-development/n3xt",
    tags: ["Web Design", "E-Commerce"],
    category: "Web Design & Dev",
  },
  {
    id: "3",
<<<<<<< HEAD
    title: "Droxy",
    description: "Strategic content ecosystem that generated 12,000+ qualified leads in 12 months.",
    image: "/projects/web/droxy/droxy.webp",
    video: "/projects/web/droxy/droxy_CASESTUDY_web.mp4",
    caseStudyUrl: "/projects/product-development/droxy",
    tags: ["Content Writing", "Strategy"],
    category: "Content Marketing",
  },
    {
    id: "4",
=======
>>>>>>> 9ed8837d3db91405f367e1ace42a02532566995d
    title: "Spatial",
    description: "Brand refresh and a new website presence for a spatial computing and 3D collaboration platform.",
    image: "/projects/web/spatial/Spatial.avif",
    video: "/projects/web/spatial/Spatial_web.mp4",
    caseStudyUrl: "/projects/product-development/spatial",
    tags: ["Link Building", "SEO"],
    category: "Link Building",
  },
  {
<<<<<<< HEAD
=======
    id: "4",
    title: "Droxy",
    description: "Strategic content ecosystem that generated 12,000+ qualified leads in 12 months.",
    image: "/projects/web/droxy/droxy.webp",
    video: "/work/content-demo.mp4",
    caseStudyUrl: "/projects/product-development/droxy",
    tags: ["Content Writing", "Strategy"],
    category: "Content Marketing",
  },
  {
>>>>>>> 9ed8837d3db91405f367e1ace42a02532566995d
    id: "5",
    title: "Zave.it",
    description: "Designing the brand, site and product for an AI operating layer that helps real estate investment firms scale AUM.",
    image: "/projects/web/zaveit/zaveit1.avif",
    video: "/projects/web/zaveit/zaveitweb.mp4",
    caseStudyUrl: "/projects/product-development/zaveit",
    tags: ["Social Media", "Branding"],
    category: "Social Media Marketing",
  },
  {
    id: "6",
    title: "GanAI",
    description: "Future-proofed AI search optimization that made our client the #1 answer in ChatGPT and Perplexity results.",
    image: "/projects/web/genai/genai.webp",
    video: "/work/geo-demo.mp4",
    caseStudyUrl: "/projects/product-development/gan-ai",
    tags: ["GEO", "AI Search"],
    category: "GEO & AI",
  },
];

// Individual Card Component
const WorkCard = ({ item }: { item: WorkItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Handle video time update
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setVideoDuration(video.duration);
      setCurrentTime(video.currentTime);
      // If video reached the end, loop back to start
      if (video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0;
        video.play().catch(() => { });
      }
    }
  };

  // Handle video ended event
  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => { });
    }
  };

  // Handle hover enter - ENTIRE CARD
  const handleMouseEnter = () => {
    setIsHovering(true);
    const video = videoRef.current;
    if (video && !videoError) {
      video.muted = true;

      // If video hasn't started playing yet, start from beginning
      if (!hasStartedPlaying) {
        video.currentTime = 0;
        setHasStartedPlaying(true);
      }

      // Play from current position
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Video auto-play prevented:", error);
        });
      }
    }
  };

  // Handle hover leave - ENTIRE CARD
  const handleMouseLeave = () => {
    setIsHovering(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      // Keep current time - don't reset
    }
  };

<<<<<<< HEAD
  // Update the WorkCard component
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    console.error(`Video failed to load:`);
    console.error(`  - Path: ${item.video}`);
    console.error(`  - Error: ${video.error?.message || 'Unknown error'}`);
    console.error(`  - Network State: ${video.networkState}`);
    console.error(`  - Ready State: ${video.readyState}`);
    setVideoError(true);
  };

  // Clean up on unmount
// In WorkCard component, add this useEffect
useEffect(() => {
  const video = videoRef.current;
  if (video && !videoError) {
    // Force reload the video
    video.load();
    
    // Log when video is ready
    const handleCanPlay = () => {
      console.log('Video can play:', item.video);
    };
    
    video.addEventListener('canplay', handleCanPlay);
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }
}, [item.video, videoError]);
=======
  const handleVideoError = () => {
    setVideoError(true);
    console.error(`Video failed to load: ${item.video}`);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, []);
>>>>>>> 9ed8837d3db91405f367e1ace42a02532566995d

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      // 🟢 HOVER ON ENTIRE CARD
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
    >
      {/* Media Container */}
      <Link href={item.caseStudyUrl}>
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
          {/* Default Image - visible when not hovering */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out z-10 ${isHovering ? "opacity-0" : "opacity-100"
              }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/work/fallback-image.jpg";
              }}
            />
          </div>

          {/* Video - visible when hovering */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out z-20 ${isHovering ? "opacity-100" : "opacity-0"
              }`}
          >
            {!videoError ? (
<<<<<<< HEAD
              // In WorkCard component
              <video
                key={item.video} // Add this key
=======
              <video
>>>>>>> 9ed8837d3db91405f367e1ace42a02532566995d
                ref={videoRef}
                src={item.video}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
                poster={item.image}
                onError={handleVideoError}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnded}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    setVideoDuration(videoRef.current.duration);
<<<<<<< HEAD
                    console.log('Video loaded successfully:', item.video);
=======
>>>>>>> 9ed8837d3db91405f367e1ace42a02532566995d
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <span className="text-gray-500 text-sm">Video unavailable</span>
              </div>
            )}
          </div>

          {/* Category Badge - always visible */}
          <div className="absolute top-4 left-4 z-30 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
            {item.category}
          </div>

          {/* Play Icon Overlay - shows on hover before video plays */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-30 pointer-events-none ${isHovering ? "opacity-0" : "opacity-0 group-hover:opacity-100"
              }`}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-full p-4 transform transition-transform duration-500 group-hover:scale-110">
              <Play className="w-8 h-8 text-white fill-white/10" />
            </div>
          </div>

          {/* Progress bar - shows when video is playing */}
          {isHovering && !videoError && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30 z-30">
              <div
                className="h-full bg-blue-500 transition-all duration-100"
                style={{
                  width: videoDuration > 0
                    ? `${(currentTime / videoDuration) * 100}%`
                    : '0%'
                }}
              />
            </div>
          )}
        </div>

        {/* Content Area - Also triggers hover since it's inside the card */}
        <div className="p-6 relative z-10 bg-white">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {item.description}
          </p>

        </div>
      </Link>
    </motion.div>
  );
};

// Main Work Section Component
const WorkSection = () => {
  const row1 = workData.slice(0, 3);
  const row2 = workData.slice(3, 6);

  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-[1250px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="w-3 h-0.5 bg-blue-600 rounded-full" />
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">
              Our Work
            </span>
            <span className="w-3 h-0.5 bg-blue-600 rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Case Studies That <br className="sm:hidden" />
            <span className="text-blue-600">Prove Our Impact</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
          >
            See how we've helped businesses like yours achieve measurable growth
            through strategy, innovation, and execution.
          </motion.p>
        </div>

        {/* Row 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8"
        >
          {row1.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {row2.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link href="/case-studies">
            <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-500 px-8 py-3.5 font-semibold rounded-lg text-sm cursor-pointer">
              View All Case Studies →
            </button>
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
};

export default WorkSection;