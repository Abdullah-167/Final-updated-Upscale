'use client';

import React, { useRef, useEffect, useState } from "react";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/dist/client/link";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const display = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-display",
});

const body = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-body",
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-mono",
});

const Digital = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.play().catch(() => { });
            setIsPlaying(true);
        }
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            const progress = (video.currentTime / video.duration) * 100;
            setProgress(progress);
            if (video.duration) {
                setDuration(video.duration);
            }
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current;
        if (video) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            const percentage = x / width;
            video.currentTime = percentage * video.duration;
            setProgress(percentage * 100);
        }
    };

    const handleFullscreen = () => {
        const video = videoRef.current;
        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            }
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <section
            className={`max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-[40px] ${display.variable} ${body.variable} ${mono.variable} py-24 w-full overflow-x-hidden`}
        >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div className="max-w-[650px]">
                    <h2 className="font-[family-name:var(--font-display)] text-[40px] sm:text-[50px] lg:text-[60px] leading-[50px] sm:leading-[60px] lg:leading-[70px] pb-6 sm:pb-10">
                        Work with <span className="text-[#1570EF]"> Marketing Experts </span> Who Truly Care
                    </h2>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] pb-6 sm:pb-10 text-gray-600">
                        Digital marketing for businesses isn't just our service it's our passion. We treat your business like our own, focusing on campaigns that truly move the needle (not vanity metrics). We are deeply committed to our valued clients and their success.
                    </p>
                    <Link href={"/contact-us"}>
                        <button className="bg-[#1570EF] hover:bg-[#101828] transition-all duration-500 text-white px-6 py-3 font-[600] rounded-lg shadow-md cursor-pointer text-sm sm:text-base">
                            Book a Free Consultation
                        </button>
                    </Link>
                </div>

                <div className="bg-[#1570EF] p-4 sm:p-5 rounded-4xl max-w-[320px] w-full">
                    <div
                        className="relative group"
                        onMouseEnter={() => setShowControls(true)}
                        onMouseLeave={() => setShowControls(false)}
                    >
                        <video
                            ref={videoRef}
                            loop
                            playsInline
                            src="/reviews.mp4"
                            className="mx-auto w-full h-full max-w-[350px] max-h-[500px] rounded-[30px]"
                            onTimeUpdate={handleTimeUpdate}
                            onClick={togglePlay}
                        />

                        {/* Play/Pause Overlay Button */}
                        <button
                            onClick={togglePlay}
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 sm:p-5 hover:bg-black/70 transition-colors">
                                {isPlaying ? (
                                    <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                ) : (
                                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                                )}
                            </div>
                        </button>

                        {/* Controls Bar */}
                        <div
                            className={`absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm rounded-xl p-2 sm:p-3 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            {/* Progress Bar */}
                            <div
                                className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-2"
                                onClick={handleProgressClick}
                            >
                                <div
                                    className="h-full bg-[#1570EF] rounded-full transition-all duration-100"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Controls Row */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <button
                                        onClick={togglePlay}
                                        className="text-white hover:text-[#1570EF] transition-colors"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                                        ) : (
                                            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                                        )}
                                    </button>

                                    <button
                                        onClick={toggleMute}
                                        className="text-white hover:text-[#1570EF] transition-colors"
                                    >
                                        {isMuted ? (
                                            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                                        ) : (
                                            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                        )}
                                    </button>

                                    <span className="text-white text-xs sm:text-sm font-mono">
                                        {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                                    </span>
                                </div>

                                <button
                                    onClick={handleFullscreen}
                                    className="text-white hover:text-[#1570EF] transition-colors"
                                >
                                    <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Digital;