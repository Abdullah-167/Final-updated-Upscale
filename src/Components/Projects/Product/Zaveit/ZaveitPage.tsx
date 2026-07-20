'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";

const ZaveitPage = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const images = [
        "/projects/web/zaveit/zaveit1.avif",
        "/projects/web/zaveit/zaveit2.avif",
        "/projects/web/zaveit/zaveit3.webp",
        "/projects/web/zaveit/zaveit4.webp",
        "/projects/web/zaveit/zaveit5.webp",
        "/projects/web/zaveit/zaveit6.webp",
        "/projects/web/zaveit/zaveit7.avif",
        "/projects/web/zaveit/zaveit8.webp",
        "/projects/web/zaveit/zaveit9.webp"
    ];

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === '=' || e.key === '+') {
                zoomIn();
            } else if (e.key === '-') {
                zoomOut();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, scale]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
            setScale(1);
            setPosition({ x: 0, y: 0 });
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
            setScale(1);
            setPosition({ x: 0, y: 0 });
        }
    };

    const zoomIn = () => {
        setScale(prev => Math.min(prev + 0.25, 5));
    };

    const zoomOut = () => {
        setScale(prev => Math.max(prev - 0.25, 0.5));
    };

    const resetZoom = () => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    };

    // Mouse events for dragging
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (scale > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging && scale > 1) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Touch events for mobile
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (scale > 1 && e.touches.length === 1) {
            setIsDragging(true);
            setDragStart({
                x: e.touches[0].clientX - position.x,
                y: e.touches[0].clientY - position.y
            });
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (isDragging && scale > 1 && e.touches.length === 1) {
            setPosition({
                x: e.touches[0].clientX - dragStart.x,
                y: e.touches[0].clientY - dragStart.y
            });
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <section className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16 pt-20 sm:pt-24 lg:pt-28'>
            {/* Hero Section */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
                <h1 className="text-[32px] sm:text-[40px] lg:text-[51px] leading-[1.2] sm:leading-[1.3] lg:leading-[60px] pb-4 sm:pb-6 lg:pb-10 font-bold text-gray-900">
                    Zave.it’s record-breaking journey from concept to 300,000 app users in 3 months.
                </h1>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] text-gray-700 max-w-3xl leading-relaxed">
                    Zave.it came to us with a bold vision: to revolutionize the cashback experience with a fresh, young, and modern app that would appeal to users across Germany. In just 3 months, we took Zave.it from concept to market-ready, launching one of Germany's most successful cashback apps.
                </p>
            </div>

            <div className=" bg-gradient-to-r from-[#faf7ff] to-[#faf7ff] p-5 flex justify-between gap-2 mb-5">
                <div className="w-full">
                    <div className="mb-2 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-auto">
                        <h3 className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold text-gray-900">
                            300k+
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            Users within first 3 months since launch
                        </p>
                    </div>
                    <div className="mb-2 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-auto">
                        <h3 className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold text-gray-900">
                            3 months
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            From early app drafts to launch
                        </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-auto">
                        <h3 className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold text-gray-900">
                            4.8/5.0 rated
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            From 6500+ App Store reviews
                        </p>
                    </div>
                </div>
                <div className="max-w-[500px] bg-white p-5 rounded-xl">
                    <div className="mb-4">
                        <Image
                            className="w-[100px] sm:w-[120px] brightness-0 h-auto"
                            src={"/projects/web/zaveit/logo.png"}
                            alt={"Droxy Logo"}
                            width={120}
                            height={30}
                        />
                    </div>
                    <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-gray-700 leading-relaxed mb-6">
                        "We set new launch records in Germany. Upscale Alliance's super modern and user-friendly design for zave.it was a key factor in the app’s extremely warm reception. Our app received 200,000+ sign ups within the first month, it was a huge success."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <Image
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                src={"/projects/web/zaveit/avator.avif"}
                                alt={"Ali Elzein"}
                                width={48}
                                height={48}
                            />
                        </div>
                        <div>
                            <p className="text-[14px] sm:text-[16px] font-semibold text-gray-900">
                                Dominik Oppelt
                            </p>
                            <p className="text-[12px] sm:text-[13px] text-gray-500">
                                CEO of zave.it
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Videos Grid - Individual cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-black w-full">
                    <video
                        autoPlay
                        loop
                        playsInline
                        muted
                        src="/projects/web/zaveit/zaveitweb.mp4"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Gallery - Masonry style with columns */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid mb-4 sm:mb-6 cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                            <Image
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                src={src}
                                alt={`Droxy project image ${index + 1}`}
                                width={1000}
                                height={1000}
                                priority={index < 3}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeLightbox();
                    }}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-300 transition-colors z-10 p-2"
                        aria-label="Close lightbox"
                    >
                        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Zoom Controls */}
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 bg-black/70 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 z-10">
                        <button
                            onClick={zoomOut}
                            className="text-white hover:text-gray-300 transition-colors p-1"
                            aria-label="Zoom out"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                        </button>
                        <span className="text-white text-sm sm:text-base min-w-[40px] text-center">
                            {Math.round(scale * 100)}%
                        </span>
                        <button
                            onClick={zoomIn}
                            className="text-white hover:text-gray-300 transition-colors p-1"
                            aria-label="Zoom in"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                        <button
                            onClick={resetZoom}
                            className="text-white hover:text-gray-300 transition-colors p-1 ml-1 sm:ml-2 border-l border-white/30 pl-2 sm:pl-3"
                            aria-label="Reset zoom"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white text-sm sm:text-base z-10 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        {selectedImage + 1} / {images.length}
                    </div>

                    {/* Image Container */}
                    <div
                        className="relative w-full h-full flex items-center justify-center p-4 sm:p-8"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ cursor: scale > 1 ? 'grab' : 'default' }}
                    >
                        <div
                            className="relative transition-transform duration-200 ease-out"
                            style={{
                                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                                maxWidth: '90%',
                                maxHeight: '90%',
                            }}
                        >
                            <Image
                                src={images[selectedImage]}
                                alt={`Project image ${selectedImage + 1}`}
                                width={1200}
                                height={1200}
                                className="object-contain max-h-[80vh] sm:max-h-[85vh] w-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ZaveitPage;