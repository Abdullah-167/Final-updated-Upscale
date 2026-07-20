"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Zap,
  ArrowRight,
  Sparkles,
  Network,
  Workflow,
  Brain,
  Cpu,
  Database,
  Server,
  Shield,
  CheckCircle2,
  Star,
  Users,
  Target,
  BarChart3,
  MessageSquare,
  FileText,
  Search,
  Layers,
  GitBranch,
  RefreshCw,
  Rocket,
  Clock,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Play,
  ChevronRight,
  Circle,
  Hexagon,
  Globe,
  Settings,
  Code,
  BookOpen,
  GraduationCap,
  Building2,
  Briefcase,
  Megaphone,
  Headphones,
  Truck,
  ShoppingCart,
  DollarSign,
  Cloud,
  Heart,
  Menu,
  X,
} from "lucide-react";

const AICAgentsPage = () => {
  // Agent features data
  const agentFeatures = [
    {
      icon: <Network className="w-5 h-5 text-[#1570EF]" />,
      text: "3 Agents collaborate autonomously to complete tasks end-to-end",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#1570EF]" />,
      text: "24/7 operation without breaks",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#1570EF]" />,
      text: "Consistent, reliable execution",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#1570EF]" />,
      text: "Process thousands of tasks simultaneously",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#1570EF]" />,
      text: "Continuous learning and improvement",
    },
  ];

  // What We Build data
  const whatWeBuild = [
    {
      icon: <Database className="w-8 h-8 text-[#1570EF]" />,
      title: "Custom RAG systems",
      description:
        "Retrieval-Augmented Generation systems that let your AI access and reason over your proprietary data, documents, and knowledge bases.",
      features: ["Document ingestion pipelines", "Semantic search", "Context-aware responses"],
    },
    {
      icon: <Code className="w-8 h-8 text-[#1570EF]" />,
      title: "API-first integrations",
      description:
        "Direct connections between your AI systems and existing tools. CRM, ERP, marketing platforms, and custom applications.",
      features: ["Works with your existing stack from day one"],
    },
    {
      icon: <Network className="w-8 h-8 text-[#1570EF]" />,
      title: "Multi-agent architectures",
      description:
        "Orchestrated AI systems where multiple specialised agents collaborate to solve complex problems and automate end-to-end workflows.",
      features: ["Agent orchestration", "Task delegation"],
    },
    {
      icon: <Brain className="w-8 h-8 text-[#1570EF]" />,
      title: "Fine-tuned models",
      description:
        "Custom AI models trained on your data for superior performance on your specific use cases. From classification to generation.",
      features: ["Domain-specific training", "Superior accuracy"],
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#1570EF]" />,
      title: "Workflow automation",
      description:
        "Intelligent automation that goes beyond simple triggers. AI that understands context, handles exceptions, and makes smart decisions.",
      features: ["n8n & Make integrations", "Decision intelligence"],
    },
    {
      icon: <Shield className="w-8 h-8 text-[#1570EF]" />,
      title: "Enterprise AI platforms",
      description:
        "Complete AI infrastructure for organisations ready to scale. Governance, security, and management tools included.",
      features: ["Governance tools", "Security first"],
    },
  ];

  // Industries data
  const industries = [
    {
      name: "Sales",
      items: ["Lead qualification", "Outreach automation", "CRM enrichment", "Meeting scheduling"],
    },
    {
      name: "Marketing",
      items: ["Content generation", "Campaign analysis", "Audience segmentation", "A/B testing automation"],
    },
    {
      name: "Operations",
      items: ["Document processing", "Data entry automation", "Inventory management", "Reporting"],
    },
    {
      name: "Customer service",
      items: ["Intelligent ticketing", "Sentiment analysis", "Knowledge base search", "Escalation routing"],
    },
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your workflow, data, and constraints. No cookie-cutter solutions.",
    },
    {
      step: "02",
      title: "Architecture",
      description: "Design systems that scale. Technical spec, integration plan, security review.",
    },
    {
      step: "03",
      title: "Build",
      description: "Rapid development with weekly demos. You see progress, not just updates.",
    },
    {
      step: "04",
      title: "Deploy",
      description: "Production launch with monitoring, documentation, and handoff training.",
    },
  ];

  // Tools data
  const tools = [
    { name: "OpenAI", logo: "/openai.png" },
    { name: "Claude", logo: "/Claude.webp" },
    { name: "Gemini", logo: "/gemeni.png" },
    { name: "LangChain", logo: "/langchain.png" },
    { name: "n8n", logo: "/n8n.png" },
    { name: "Zapier", logo: "/zapier.png" },
    { name: "Make", logo: "/make.png" },
    { name: "AWS", logo: "/aws.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0A1A] via-[#0A0A2E] to-[#0A0A1A] min-h-screen flex items-center">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/5 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/20 rounded-full border border-[#1570EF]/30 mb-6">
                <Bot className="w-4 h-4 text-[#1570EF]" />
                <span className="text-[#1570EF] text-sm font-medium">
                  AI Agents & Custom Solutions
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                Deploy Intelligent
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1570EF] via-blue-400 to-purple-400">
                  AI Agents That
                </span>
                <br />
                Work 24/7
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
                Custom AI solutions built for your specific workflows. From RAG
                systems to multi-agent architectures, we build the machines that
                build your advantage.
                <span className="block mt-3 text-[#1570EF] font-medium">
                  Done-for-you technical implementation that delivers results,
                  not decks.
                </span>
              </p>

              {/* Feature List with Bullets */}
              <ul className="space-y-3 mb-10">
                {[
                  "Built for your exact workflows, not templates",
                  "From RAG systems to multi-agent pipelines",
                  "Battle-tested before it touches your operations",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1570EF] flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-[#1570EF] text-white font-semibold rounded-lg hover:bg-[#0A5BD0] transition-all flex items-center gap-2"
                  >
                    View all services
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    Discuss your project
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right - Hero Visual with Orbiting Nodes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                {/* Central Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gradient-to-br from-[#1570EF] to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                  <Bot className="w-14 h-14 text-white" />
                </div>

                {/* Orbiting Nodes */}
                {[
                  { icon: <Database className="w-6 h-6" />, x: "5%", y: "10%" },
                  { icon: <Network className="w-6 h-6" />, x: "78%", y: "5%" },
                  { icon: <Brain className="w-6 h-6" />, x: "88%", y: "72%" },
                  { icon: <Cpu className="w-6 h-6" />, x: "8%", y: "78%" },
                  { icon: <Shield className="w-6 h-6" />, x: "45%", y: "90%" },
                  { icon: <Zap className="w-6 h-6" />, x: "90%", y: "40%" },
                ].map((node, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.15, duration: 0.5 }}
                    className="absolute w-14 h-14 bg-[#1A1A3E] border border-[#1570EF]/30 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/10 hover:border-[#1570EF] transition-colors"
                    style={{
                      left: node.x,
                      top: node.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="text-[#1570EF]">{node.icon}</div>
                  </motion.div>
                ))}

                {/* Decorative Circles */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <circle
                      cx="200"
                      cy="200"
                      r="120"
                      fill="none"
                      stroke="#1570EF"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      opacity="0.3"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="170"
                      fill="none"
                      stroke="#1570EF"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      opacity="0.2"
                    />
                  </svg>
                </div>

                {/* Pulse Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#1570EF]/10 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#1570EF]/5 rounded-full animate-pulse delay-500" />
              </div>
            </motion.div>
          </div>

          {/* Agent Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {agentFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-400 text-sm"
                >
                  <div className="w-8 h-8 bg-[#1570EF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== BEYOND CHATBOTS SECTION ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Beyond Chatbots, Beyond{" "}
              <span className="text-[#1570EF]">Automation</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              AI agents are digital workers that can reason, act, and learn. They don't
              just follow rules; they make decisions, handle exceptions, and get better
              over time.
            </p>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              When off-the-shelf tools fall short, we build custom solutions designed for
              your exact needs. We're not consultants who've never shipped. We build AI
              products daily. Every system we deploy has been battle-tested in real
              operations first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== WHAT WE BUILD SECTION ==================== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4">
              <span className="text-[#1570EF] font-medium text-sm tracking-wider">
                — WHAT WE BUILD —
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Systems That Scale Your{" "}
              <span className="text-[#1570EF]">Advantage</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Custom AI systems designed for your specific business challenges. Each solution is built to
              work with your existing stack from day one.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeBuild.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#1570EF]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#1570EF] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AGENTS DEPLOYED ACROSS INDUSTRIES ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              AI Agents Deployed Across{" "}
              <span className="text-[#1570EF]">Industries</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              The same systems that work in real operations, deployed for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF] hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <ul className="space-y-3">
                  {industry.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-[#1570EF] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              From Concept to Production in{" "}
              <span className="text-[#1570EF]">Weeks, Not Months</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              We embed into your workflow like we're on payroll. Shared Slack channels, two-week
              sprints, daily standups when needed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-[#1570EF]/20 mb-3">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BUILT WITH BEST-IN-CLASS TOOLS ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Built with <span className="text-[#1570EF]">Best-in-Class</span> Tools
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              We use the right tool for the job, never locked into a single vendor.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="w-24 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={96}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== THE OFFER / CTA SECTION ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A0A1A] via-[#0A0A2E] to-[#0A0A1A] py-20 px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* THE OFFER Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/20 rounded-full border border-[#1570EF]/30 mb-6">
              <Rocket className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] text-sm font-medium tracking-wider">
                THE OFFER
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Build Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1570EF] to-purple-400">
                AI Advantage?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              We build custom AI solutions that deliver real business results for teams in Brisbane,
              Sydney, Melbourne, and New York City.
            </p>

            {/* What a discovery call covers - Box */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 mb-8 text-left max-w-2xl mx-auto">
              <p className="text-white font-semibold mb-4 text-lg">
                What a discovery call covers:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1570EF] flex-shrink-0 mt-0.5" />
                  <span>Discovery call to understand your workflows and goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1570EF] flex-shrink-0 mt-0.5" />
                  <span>Technical assessment of your current stack and data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1570EF] flex-shrink-0 mt-0.5" />
                  <span>Custom AI architecture recommendation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1570EF] flex-shrink-0 mt-0.5" />
                  <span>Clear build timeline and investment estimate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1570EF] flex-shrink-0 mt-0.5" />
                  <span>ROI projections for each proposed system</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1570EF] text-white font-semibold rounded-xl hover:bg-[#0A5BD0] transition-all flex items-center gap-2 mx-auto text-lg"
              >
                Discuss your project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <p className="text-sm text-gray-400 mt-4 max-w-xl mx-auto">
              We go deep with every client. No assembly-line approach. Start
              with a conversation and see exactly what custom AI could do for
              your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== AI CONSULTING & TRAINING ==================== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Consulting */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1570EF] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#1570EF]/10 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-[#1570EF]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Consulting</h3>
              <p className="text-gray-600 mb-4">
                Strategic consulting to identify where AI creates unfair advantage. Build your
                roadmap to market leadership.
              </p>
              <Link href="/consulting">
                <button className="text-[#1570EF] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            {/* AI Training */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1570EF] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#1570EF]/10 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-[#1570EF]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Training</h3>
              <p className="text-gray-600 mb-4">
                Practical AI training programs that change how your team works. From
                executive workshops to team masterclasses.
              </p>
              <Link href="/training">
                <button className="text-[#1570EF] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== BOTTOM CTA ==================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Build AI That Works{" "}
              <span className="text-[#1570EF]">for Your Business</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Custom agents, RAG systems, and multi-agent pipelines, built
              around your operations, not templates.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1570EF] text-white font-semibold rounded-xl hover:bg-[#0A5BD0] transition-all flex items-center gap-2 mx-auto text-lg"
              >
                Discuss your project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICAgentsPage;