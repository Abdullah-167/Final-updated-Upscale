"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  Code, 
  RefreshCw,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      step: "STEP 1",
      title: "We map out your processes",
      description: "We'll create a visual map of all your systems, manual tasks and apps.",
      icon: <Search className="w-8 h-8" />,
      color: "blue"
    },
    {
      id: 2,
      step: "STEP 2",
      title: "We find areas to add AI and automate",
      description: "We audit your workflows to pinpoint opportunities with the highest ROI.",
      icon: <Target className="w-8 h-8" />,
      color: "green"
    },
    {
      id: 3,
      step: "STEP 3",
      title: "We build and test",
      description: "We use a mix of custom code, AI tools, Zapier, Make.com and your tech stack.",
      icon: <Code className="w-8 h-8" />,
      color: "purple"
    },
    {
      id: 4,
      step: "STEP 4",
      title: "We manage and iterate",
      description: "Every client we work with grows, so there's always new things to automate.",
      icon: <RefreshCw className="w-8 h-8" />,
      color: "orange"
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
            <span className="text-[#1570EF] font-medium text-sm">OUR PROCESS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            How Our <span className="text-[#1570EF]">AI and Automation</span> Agency Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We get under the hood of your business and find opportunities to replace the most manual, 
            repetitive and expensive bottlenecks with AI-powered, automated processes. 
            <span className="block mt-2 font-medium text-[#1570EF]">We only use AI if there's a practical use case.</span>
          </motion.p>
        </div>

        {/* Steps Grid with Animated Connectors */}
        <div className="relative">
          {/* Desktop Connectors (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0">
            <svg width="100%" height="40" className="text-gray-300">
              <defs>
                <pattern id="dashPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="40" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
                </pattern>
              </defs>
              
              {/* Animated dashes from Step 1 to 2 */}
              <motion.g
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <line 
                  x1="15%" 
                  y1="20" 
                  x2="30%" 
                  y2="20" 
                  stroke="#1570EF" 
                  strokeWidth="2" 
                  strokeDasharray="5 5"
                  className="animate-dash"
                />
              </motion.g>

              {/* Animated dashes from Step 2 to 3 */}
              <motion.g
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <line 
                  x1="40%" 
                  y1="20" 
                  x2="60%" 
                  y2="20" 
                  stroke="#1570EF" 
                  strokeWidth="2" 
                  strokeDasharray="5 5"
                  className="animate-dash"
                />
              </motion.g>

              {/* Animated dashes from Step 3 to 4 */}
              <motion.g
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1.5 }}
              >
                <line 
                  x1="70%" 
                  y1="20" 
                  x2="85%" 
                  y2="20" 
                  stroke="#1570EF" 
                  strokeWidth="2" 
                  strokeDasharray="5 5"
                  className="animate-dash"
                />
              </motion.g>
            </svg>
          </div>

          {/* Steps Grid - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
              >
                {/* Step Card */}
                <div className="  p-8 text-center  h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-${step.color}-50 flex items-center justify-center text-${step.color}-600 mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                      {step.icon}
                    </div>
                    
                    {/* Connection Point Indicator */}
                    <div className={`absolute top-1/2 -right-4 w-3 h-3 rounded-full bg-${step.color}-400 hidden lg:block ${idx < 3 ? 'opacity-100' : 'opacity-0'}`}>
                      <div className={`absolute inset-0 rounded-full bg-${step.color}-400 animate-ping`}></div>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="text-sm font-semibold text-[#1570EF] mb-3">
                    {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Mobile Connector (visible only on mobile between steps) */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden mt-6">
                      <ArrowRight className="w-6 h-6 text-[#1570EF] mx-auto rotate-90 animate-bounce" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" cursor-pointer px-8 py-4 bg-gradient-to-r from-[#1570EF] to-blue-600 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3 group"
            >
              Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-dash {
          stroke-dasharray: 5 5;
          stroke-dashoffset: 10;
          animation: dash 1s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;