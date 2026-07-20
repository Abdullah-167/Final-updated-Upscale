"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Search,
  ArrowRight,
  Zap,
  Sparkles,
  Globe,
  Code,
  Target,
  Layers,
  Rocket,
  Star,
  Eye,
  Navigation,
  AlertCircle,
  MessageSquare,
  Users,
} from "lucide-react";

const NotFoundPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  const searchSuggestions = [
    "SEO Services",
    "Website Development",
    "Digital Marketing",
    "Case Studies",
    "Contact Us",
    "About Our Process",
    "GEO Optimization",
    "Paid Advertising",
  ];

  const quickLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    {
      name: "Services",
      path: "/services",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      name: "Case Studies",
      path: "/case-studies",
      icon: <Target className="w-4 h-4" />,
    },
    {
      name: "Process",
      path: "/process",
      icon: <Navigation className="w-4 h-4" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <MessageSquare className="w-4 h-4" />,
    },
  ];

  const stats = [
    { label: "Pages Found", value: "500+", color: "text-blue-400" },
    { label: "Projects Delivered", value: "100+", color: "text-cyan-400" },
    { label: "Happy Clients", value: "50+", color: "text-purple-400" },
    { label: "Success Rate", value: "98%", color: "text-green-400" },
  ];

  return (
    <div className="sm:min-h-screen overflow-hidden  pt-40">
      {/* Main Content */}
      <div className=" flex lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse justify-between items-center max-w-6xl mx-auto">
        <div className=" px-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-blue-200 mb-5">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold">
              Need Immediate Help?
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Get You Back on Track
          </h2>

          <p className="text-gray-600 mb-8">
            Our team of digital navigators is ready to guide you to the right
            destination. Whether it's a missing page or a new project, we're
            here to help.
          </p>

          <div className="flex flex-wrap gap-4 ">
            <Link href={"/contact-us"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" cursor-pointer px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Contact Support Team
              </motion.button>
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Video Container */}
          <video
            ref={videoRef}
            autoPlay
            loop
            playsInline
            muted
            src="/404.mp4"
            className="flex justify-center mx-auto max-w-[300px] sm:max-w-[550px] max-h-[550px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
