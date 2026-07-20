'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";

const GenaiPage = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const images = [
        "/projects/web/ganai/ganai1.webp",
        "/projects/web/ganai/ganai2.webp",
        "/projects/web/ganai/ganai3.jpeg",
        "/projects/web/ganai/ganai4.webp",
        "/projects/web/ganai/ganai5.webp",
        "/projects/web/ganai/ganai6.webp",
        "/projects/web/ganai/ganai7.jpeg",
        "/projects/web/ganai/ganai8.jpeg",
        "/projects/web/ganai/ganai9.webp",
        "/projects/web/ganai/ganai10.webp",
        "/projects/web/ganai/ganai11.webp",
        "/projects/web/ganai/ganai12.webp",
        "/projects/web/ganai/ganai13.webp",
        "/projects/web/ganai/ganai14.webp",
        "/projects/web/ganai/ganai15.webp",
        "/projects/web/ganai/ganai17.webp",
        "/projects/web/ganai/ganai18.webp",
        "/projects/web/ganai/ganai19.webp",
        "/projects/web/ganai/ganai20.webp",
        "/projects/web/ganai/ganai21.webp",
        "/projects/web/ganai/ganai22.webp",
        "/projects/web/ganai/ganai23.webp",
        "/projects/web/ganai/ganai24.webp",
        "/projects/web/ganai/ganai25.webp",
        "/projects/web/ganai/ganai26.webp",
        "/projects/web/ganai/ganai27.webp",
        "/projects/web/ganai/ganai28.webp",
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
                    2 months to refresh a brand, website, and product for a $5M Seed TTS startup
                </h1>
                <p className="text-[16px] sm:text-[17px] lg:text-[18px] text-gray-700 max-w-3xl leading-relaxed">
                    Gan.AI needed a sharper website and launch experience for a fast-moving AI video platform. We helped clarify the product story and make the digital presence feel more polished, credible, and launch-ready.
                </p>
            </div>
            <div className=" bg-gradient-to-r from-[#faf7ff] to-[#faf7ff] p-5 flex justify-between gap-2 mb-5">
                <div className="w-full">
                    <div className="mb-2 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-auto">
                        <h3 className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold text-gray-900">
                            8 weeks
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            To launch the new website
                        </p>
                    </div>
                    <div className="mb-2 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-auto">
                        <h3 className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold text-gray-900">
                            50+
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            Product screens redesigned
                        </p>
                    </div>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-auto">
                        <h3 className="text-[28px] sm:text-[32px] lg:text-[35px] font-bold text-gray-900">
                            1st
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            Product of the Week on Product Hunt
                        </p>
                    </div>
                </div>
                <div className="max-w-[500px] bg-white p-5 rounded-xl">
                    <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-gray-700 leading-relaxed mb-6">
                        "The team delivered under intense timelines and we launched our website on Product Hunt with confidence. It's been a pleasure working together. Thank you for all the effort!"                    </p>
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                            <Image
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                                src={"/projects/web/ganai/avator.avif"}
                                alt={"Ali Elzein"}
                                width={48}
                                height={48}
                            />
                        </div>
                        <div>
                            <p className="text-[14px] sm:text-[16px] font-semibold text-gray-900">
                                Suvrat Bhooshan
                            </p>
                            <p className="text-[12px] sm:text-[13px] text-gray-500">
                                Co-founder and CEO
                            </p>
                        </div>
                    </div>
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

export default GenaiPage;