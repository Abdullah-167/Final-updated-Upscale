import type { Metadata } from "next";
import VideoEditingPage from "@/Components/Services/VideoEditing/VideoEdit";
import React from "react";

export const metadata: Metadata = {
    title:
        "Professional Video Editing Services | Corporate, Brand & Motion Graphics | Upscale Alliance",

    description:
        "Upscale Alliance delivers professional video editing services for startups, enterprises, agencies and creators. We specialize in corporate videos, motion graphics, social media content, YouTube editing, real estate videos, commercials, wedding films, product videos and cinematic storytelling that helps brands grow.",
    keywords: [
        "video editing services",
        "professional video editing",
        "video production company",
        "motion graphics",
        "corporate video editing",
        "commercial video editing",
        "brand video production",
        "social media video editing",
        "YouTube video editing",
        "TikTok video editing",
        "Instagram Reel editing",
        "real estate video editing",
        "property video editing",
        "wedding video editing",
        "cinematic video editing",
        "explainer videos",
        "promotional videos",
        "marketing videos",
        "video editors",
        "video editing agency",
        "video post production",
        "video content creation",
        "professional video editors",
        "4K video editing",
        "creative video agency",
    ],

    alternates: {
        canonical: "https://upscalealliance.com/services/video-editing",
    },

    openGraph: {
        title:
            "Professional Video Editing Services | Upscale Alliance",
        description:
            "Professional cinematic video editing for brands, startups, real estate, corporate businesses, weddings, and social media. Delivering engaging videos that drive results.",
        url: "https://upscalealliance.com/services/video-editing",
        siteName: "Upscale Alliance",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://upscalealliance.com/og/video-editing.jpg",
                width: 1200,
                height: 630,
                alt: "Professional Video Editing Services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Professional Video Editing Services | Upscale Alliance",
        description:
            "Cinematic video editing for brands, businesses, creators, and real estate companies.",
        images: ["https://upscalealliance.com/og/video-editing.jpg"],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },

    category: "Video Editing",
};

const page = () => {
    return <VideoEditingPage />;
};

export default page;