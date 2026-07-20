"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import {
  DollarSign,
  TrendingUp,
  UserCheck,
  Globe,
  Search,
  Link as LinkIcon,
  CreditCard,
  FileText,
  Smartphone,
  Database,
  BarChart3,
  Target,
  Shield,
  Activity,
  Sparkles,
  PenTool,
  Share2,
} from "lucide-react";
import { useState } from "react";

const servicesData = [
  // Healthcare RCM Services
  {
    title: "Revenue Cycle Management (RCM)",
    link: "/services/revenue-cycle-management",
    description:
      "Complete revenue cycle management solutions for healthcare organizations to optimize financial performance and operational efficiency.",
    icon: TrendingUp,
    category: "Healthcare RCM",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600",
  },
  {
    title: "Medical Billing & AR Management",
    link: "/services/medical-billing-ar",
    description:
      "End-to-end medical billing and accounts receivable management to maximize revenue, reduce denials, and improve cash flow for healthcare providers.",
    icon: DollarSign,
    category: "Healthcare RCM",
    color: "bg-gradient-to-r from-blue-600 to-cyan-500",
  },
  {
    title: "Patient Eligibility Verification",
    link: "/services/patient-eligibility-verification",
    description:
      "Real-time insurance verification and benefit checking to ensure clean claims and reduce denials before services are rendered.",
    icon: UserCheck,
    category: "Healthcare RCM",
    color: "bg-gradient-to-r from-blue-600 to-purple-600",
  },

  // Digital Marketing Services
  {
    title: "Website Development",
    link: "/services/website-development",
    description:
      "Build fast, responsive, and scalable websites tailored to your business goals with modern technologies and best practices.",
    icon: Globe,
    category: "Digital Marketing",
    color: "bg-gradient-to-r from-blue-600 to-cyan-500",
  },
  {
    title: "GEO (Generative Engine Optimization)",
    link: "/services/generative-engine-optimization",
    description:
      "Leverage AI-driven optimization for higher visibility and traffic on search engines through generative content strategies.",
    icon: Sparkles,
    category: "Digital Marketing",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600",
  },
  {
    title: "(SEO) Search Engine Optimization",
    link: "/services/seo",
    description:
      "Comprehensive SEO strategies including on-page optimization, technical SEO, and content optimization for better search rankings.",
    icon: Target,
    category: "Digital Marketing",
    color: "bg-gradient-to-r from-blue-600 to-purple-600",
  },
  {
    title: "Link Building",
    link: "/services/link-building",
    description:
      "Increase domain authority and trust through strategic backlinks and content promotion with white-hat techniques.",
    icon: LinkIcon,
    category: "Digital Marketing",
    color: "bg-gradient-to-r from-blue-600 to-cyan-500",
  },
  {
    title: "Paid Advertising & PPC",
    link: "/services/paid-advertising",
    description:
      "Maximize ROI on paid ads with data-driven campaigns across multiple platforms including Google Ads, Meta Ads, and more.",
    icon: CreditCard,
    category: "Digital Marketing",
    color: "bg-gradient-to-r from-blue-600 to-indigo-600",
  },
  {
    title: "Content Writing",
    link: "/services/content-writing",
    description:
      "Create compelling content that attracts, educates, and converts your audience across all digital channels.",
    icon: FileText,
    category: "Digital Marketing",
    color: "bg-gradient-to-r from-blue-600 to-purple-600",
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter services based on active category
  const filteredServices = servicesData.filter(
    (service) =>
      activeCategory === "All" || service.category === activeCategory,
  );

  // Categories for tabs
  const categories = ["All", "Healthcare RCM", "Digital Marketing"];

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Solutions for Your Business
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-[700px] mx-auto">
            From healthcare revenue cycle management to digital marketing, we
            provide end-to-end solutions to drive growth and efficiency.
          </p>
        </motion.div>
      </div>

      {/* Category Filters - Working Tabs */}
      <div className="max-w-[1200px] mx-auto mb-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={` cursor-pointer px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1200px] mx-auto">
        {filteredServices.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              No services found in this category
            </div>
            <button
              onClick={() => setActiveCategory("All")}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View all services
            </button>
          </motion.div>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.category === "Healthcare RCM"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-cyan-100 text-cyan-700"
                    }`}
                  >
                    {service.category}
                  </span>
                </div>

                {/* Header with Gradient */}
                <div
                  className={`h-40 ${service.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Animated Arrow */}
                  <div className="absolute top-6 right-6">
                    <IoIosArrowForward className="transition-transform duration-500 group-hover:translate-x-4 text-white/80 w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Footer with CTA */}
                <div className="p-6 pt-0">
                  <Link
                    href={service.link}
                    className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
