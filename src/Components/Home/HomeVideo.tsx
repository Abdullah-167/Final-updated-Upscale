'use client';

import React, { useRef, useEffect, useState } from "react";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/dist/client/link";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

const HomeVideo = () => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.play().catch(() => { });
        }
    }, []);

    return (
        <section>
            <div className="bg-[#1570EF] p-4 sm:p-5 rounded-4xl  w-full">
                <div
                    className="relative group"

                >
                    <video
                        ref={videoRef}
                        loop
                        playsInline
                        muted
                        src="/sample-upscale-alliance-new.mp4"
                        className=" w-full h-full  rounded-[30px]"
                    />

                </div>
            </div>
        </section>
    )
}

export default HomeVideo