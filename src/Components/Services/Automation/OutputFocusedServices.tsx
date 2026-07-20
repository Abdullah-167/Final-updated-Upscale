"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Megaphone, 
  PenTool, 
  Video, 
  Layout, 
  Globe, 
  Workflow,
  Bot,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Mail,
  MessageSquare,
  Image,
  Film,
  Code,
  Zap,
  Users,
  BarChart,
  Settings,
  Smartphone,
  Monitor,
  Share2,
  Target,
  TrendingUp,
  Clock,
  Shield
} from "lucide-react";
import Link from "next/link";

const OutputFocusedServices = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Copy & Content",
      icon: <FileText className="w-8 h-8" />,
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      hoverBorder: "hover:border-blue-300",
      items: [
        "Web Copy",
        "Blog Posts",
        "Video Scripts",
        "Lead Magnets",
        "Ad Copy",
        "Email Sequences",
      ]
    },
    {
      id: 2,
      title: "Social Media",
      icon: <Megaphone className="w-8 h-8" />,
      color: "green",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      hoverBorder: "hover:border-green-300",
      items: [
        "Posts & Captions",
        "Scheduling",
        "Engagement",
        "Analytics",
      ]
    },
    {
      id: 3,
      title: "Graphic Design",
      icon: <PenTool className="w-8 h-8" />,
      color: "purple",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      hoverBorder: "hover:border-purple-300",
      items: [
        "Social Graphics",
        "Banners",
        "Flyers",
        "Posters",
        "Branding",
      ]
    },
    {
      id: 4,
      title: "Video Editing",
      icon: <Video className="w-8 h-8" />,
      color: "orange",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
      hoverBorder: "hover:border-orange-300",
      items: [
        "Reels/Shorts",
        "Podcast Editing",
        "Case Study Videos",
        "YouTube Edits",
        "Video Ads",
        "Motion Graphics",
      ]
    },
    {
      id: 5,
      title: "Landing Pages",
      icon: <Layout className="w-8 h-8" />,
      color: "red",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      borderColor: "border-red-200",
      hoverBorder: "hover:border-red-300",
      items: [
        "Sales Pages",
        "Opt-in Pages",
        "VSL Pages",
        "Thank You Pages",
        "Product Launch Pages",
      ]
    },
    {
      id: 6,
      title: "Websites",
      icon: <Globe className="w-8 h-8" />,
      color: "indigo",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
      hoverBorder: "hover:border-indigo-300",
      items: [
        "Full Site Builds",
        "Site Updates",
        "Maintenance",
        "E-commerce Sites",
        "Business Websites",
        "Membership Sites"
      ]
    },
    {
      id: 7,
      title: "Funnels & Automation",
      icon: <Workflow className="w-8 h-8" />,
      color: "teal",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
      hoverBorder: "hover:border-teal-300",
      items: [
        "Automated Workflows",
        "CRM Setup",
        "Zapier/Make",
        "Integrations",
        "Email Automation",
      ]
    },
    {
      id: 8,
      title: "AI Agents",
      icon: <Bot className="w-8 h-8" />,
      color: "cyan",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      hoverBorder: "hover:border-cyan-300",
      items: [
        "AI Chatbots",
        "AI Receptionists",
        "Smart Workflows",
        "24/7 Support",
        "AI Assistants",
      ]
    },
    {
      id: 9,
      title: "Marketing Analytics",
      icon: <BarChart className="w-8 h-8" />,
      color: "amber",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      hoverBorder: "hover:border-amber-300",
      items: [
        "Campaign Tracking",
        "ROI Analysis",
        "Dashboard Setup",
        "Conversion Tracking",
        "Attribution Modeling",
        "A/B Testing",
        "Customer Analytics",
        "Performance Reports"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1570EF]" />
            <span className="text-[#1570EF] font-medium text-sm">OUTPUT-FOCUSED</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Everything Your <span className="text-[#1570EF]">Marketing Needs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tangible assets you can use to grow. From content to AI agents we deliver results, not just promises.
          </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-2xl border ${category.borderColor} ${category.hoverBorder} hover:shadow-xl transition-all duration-300 p-6 group`}
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center ${category.textColor} group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Service List */}
              <div className="space-y-2.5">
                {category.items.slice(0, 8).map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${category.bgColor} ${category.textColor} mt-2`}></div>
                    <span className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
                
                {/* Show indicator if more items exist */}
                {category.items.length > 8 && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-gray-400">+{category.items.length - 8} more</span>
                  </div>
                )}
              </div>

              {/* Decorative Element */}
              <div className="mt-5 pt-4 border-t border-dashed border-gray-200">
                <span className={`text-xs font-medium ${category.textColor} opacity-70`}>
                  Custom solutions available
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "And Much More" Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl border border-gray-200 shadow-md">
            <Sparkles className="w-6 h-6 text-[#1570EF]" />
            <span className="text-lg text-gray-700">
              <span className="font-semibold text-gray-900">...and much more.</span> Every service custom-built for your specific needs.
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" cursor-pointer px-8 py-4 bg-gradient-to-r from-[#1570EF] to-blue-600 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3 group"
            >
             Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default OutputFocusedServices;