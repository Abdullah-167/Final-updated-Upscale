"use client";

import { motion, useAnimation } from "framer-motion";
import {
  Search,
  Target,
  Code,
  CheckCircle,
  Users,
  FileText,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";

interface ProcessCardProps {
  title: string;
  description: string;
  step: number;
  icon: React.ReactNode;
  deliverables: string[];
  focusAreas: string[];
  isWide?: boolean;
  circleSize: { width: number; height: number };
  circlePosition?: { top: number; left: number };
}

function ProcessCard({
  title,
  description,
  step,
  icon,
  deliverables,
  focusAreas,
  isWide = false,
  circleSize,
  circlePosition = { top: -48, left: -150 },
}: ProcessCardProps) {
  const circleControls = useAnimation();

  const handleMouseEnter = () => {
    circleControls.start({
      x: 0,
      y: 0,
      opacity: 0.08,
      scale: 1.05,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    });
  };

  const handleMouseLeave = () => {
    circleControls.start({
      x: -180,
      y: -120,
      opacity: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 140, damping: 18 },
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg relative overflow-hidden border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group ${
        isWide ? "md:col-span-2" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="bg-gradient-to-br from-blue-50/60 to-blue-100/30 absolute rounded-full"
        style={{
          width: `${circleSize.width}px`,
          height: `${circleSize.height}px`,
          top: `${circlePosition.top}px`,
          left: `${circlePosition.left}px`,
        }}
        animate={circleControls}
        initial={{ x: -180, y: -120, opacity: 0, scale: 1 }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
                <span className="text-white font-bold text-lg sm:text-xl">{step}</span>
              </div>
              <div className="absolute -bottom-5 -right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white border-2 border-white shadow-lg flex items-center justify-center">
                <div className="text-blue-600 text-sm sm:text-base">{icon}</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Focus Areas
            </div>
            <div className="flex gap-2">
              {focusAreas.slice(0, 2).map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-100"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8">{description}</p>

          <div className="hidden md:block">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Key Deliverables
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50/50 rounded-lg hover:bg-blue-50/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-white border border-blue-100 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-bold text-blue-600">Step {step} of 5</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 h-2 rounded-full shadow-inner"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 5) * 100}%` }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const processData = [
    {
      title: "Deep Analysis",
      description: "We begin by thoroughly understanding your business objectives, target audience, and competitive landscape. This research-intensive phase forms the strategic foundation for all subsequent work.",
      step: 1,
      icon: <Search className="w-5 h-5" />,
      deliverables: ["Comprehensive Business Analysis", "Competitive Landscape Report", "Target Audience Personas", "SWOT Analysis Document"],
      focusAreas: ["Research", "Analysis", "Strategy"],
      isWide: true,
      circleSize: { width: 320, height: 320 },
      circlePosition: { top: -140, left: -240 },
    },
    {
      title: "Strategic Roadmapping",
      description: "Based on insights gathered, we develop a detailed strategic plan with clear objectives, KPIs, timelines, and resource allocation to ensure alignment with your business goals.",
      step: 2,
      icon: <Target className="w-5 h-5" />,
      deliverables: ["Strategic Roadmap Document", "KPI & Success Metrics", "Project Timeline & Milestones", "Resource Allocation Plan"],
      focusAreas: ["Planning", "Strategy", "Roadmapping"],
      isWide: false,
      circleSize: { width: 260, height: 260 },
      circlePosition: { top: -100, left: -180 },
    },
    {
      title: "Design & Development Execution",
      description: "Our team implements the strategic plan through precise design and development work, ensuring technical excellence, user-centric design, and optimal performance.",
      step: 3,
      icon: <Code className="w-5 h-5" />,
      deliverables: ["Technical Implementation", "Design Systems & Components", "Quality Assurance Reports", "Performance Optimization"],
      focusAreas: ["Execution", "Development", "Design"],
      isWide: false,
      circleSize: { width: 280, height: 280 },
      circlePosition: { top: -110, left: -200 },
    },
    {
      title: "Testing & Quality Assurance",
      description: "We rigorously test all deliverables across multiple parameters to ensure functionality, performance, security, and user experience meet our high standards.",
      step: 4,
      icon: <Shield className="w-5 h-5" />,
      deliverables: ["Comprehensive Testing Reports", "Performance Benchmarks", "Security Audit Results", "User Experience Reviews"],
      focusAreas: ["Testing", "Quality", "Security"],
      isWide: false,
      circleSize: { width: 240, height: 240 },
      circlePosition: { top: -90, left: -160 },
    },
    {
      title: "Launch & Continuous Optimization",
      description: "After successful deployment, we monitor performance, gather data insights, and implement continuous improvements to drive ongoing growth and success.",
      step: 5,
      icon: <TrendingUp className="w-5 h-5" />,
      deliverables: ["Launch & Deployment Report", "Performance Analytics Dashboard", "Optimization Recommendations", "Growth Strategy Updates"],
      focusAreas: ["Optimization", "Growth", "Analysis"],
      isWide: false,
      circleSize: { width: 300, height: 300 },
      circlePosition: { top: -130, left: -220 },
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4 sm:mb-6"
          >
            <div className="w-3 h-0.5 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Our Methodology
            </span>
            <div className="w-3 h-0.5 bg-blue-600 rounded-full"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900"
          >
            A <span className="text-blue-600">Structured Approach</span> to Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our proven 5-phase methodology ensures precision, transparency, and measurable results at every step of your project journey.
          </motion.p>
        </div>

        <div className="relative mb-8 sm:mb-12 hidden md:block">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>
          <div className="relative flex justify-between px-4">
            {processData.map((_, index) => (
              <div key={index} className="relative">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-blue-200"></div>
                {index < processData.length - 1 && (
                  <div className="absolute top-1/2 left-6 right-0 h-0.5 bg-blue-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {processData.map((item, index) => (
            <ProcessCard
              key={index}
              title={item.title}
              description={item.description}
              step={item.step}
              icon={item.icon}
              deliverables={item.deliverables}
              focusAreas={item.focusAreas}
              isWide={item.isWide}
              circleSize={item.circleSize}
              circlePosition={item.circlePosition}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-3xl p-6 sm:p-8"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Core Principles of Our Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              These guiding principles ensure every project delivers exceptional value and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
                title: "Client-Centric Approach",
                description: "Your goals and vision drive every decision we make throughout the process.",
              },
              {
                icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
                title: "Transparent Communication",
                description: "Regular updates, clear documentation, and open channels for feedback.",
              },
              {
                icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
                title: "Agile & Adaptive",
                description: "Flexible methodology that adapts to changing requirements and opportunities.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-2xl bg-gray-50/50 hover:bg-blue-50/50 transition-colors"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {principle.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {principle.title}
                </h4>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}