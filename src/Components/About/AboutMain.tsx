"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Award,
  Heart,
  Globe,
  ArrowRight,
  Check,
  Clock,
  BarChart3,
  Sparkles,
  Linkedin,
  Mail,
  Phone,
  Rocket,
} from "lucide-react";
import Services from "../Home/Services";
import Reviews from "../Home/Reviews";
import NewServicesSection from "../Home/Newaervice";

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "We measure success by your business growth",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-First",
      description: "Your goals are our priority",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Staying ahead with cutting-edge strategies",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      description: "Transparent, honest partnerships",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Our Beginning",
      description: "Founded with a vision to transform digital marketing",
    },
    {
      year: "2021",
      title: "First Milestone",
      description: "Helped 50+ clients achieve growth",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Added SEO, PPC, and social media services",
    },
    {
      year: "2023",
      title: "Recognition",
      description: "Awarded Top Digital Agency",
    },
    {
      year: "2024",
      title: "Today",
      description: "Serving 100+ clients globally",
    },
  ];

  const teamStats = [
    { value: "15+", label: "Digital Experts" },
    { value: "100+", label: "Happy Clients" },
    { value: "95%", label: "Client Retention" },
    { value: "300+", label: "Projects Delivered" },
  ];

  const servicesOverview = [
    {
      title: "Website Development",
      description: "Custom websites that perform",
    },
    {
      title: "SEO & GEO",
      description: "Search engine visibility",
    },
    {
      title: "Social Media",
      description: "Community building & engagement",
    },
    {
      title: "PPC Advertising",
      description: "Immediate, targeted traffic",
    },
    {
      title: "Content Creation",
      description: "Compelling brand storytelling",
    },
    {
      title: "Link Building",
      description: "Authority & backlink strategy",
    },
  ];

  const clientResults = [
    {
      metric: "Traffic Growth",
      average: "+250%",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      metric: "Conversion Rate",
      average: "+45%",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      metric: "ROI",
      average: "3-5x",
      icon: <Award className="w-5 h-5" />,
    },
    {
      metric: "Client Satisfaction",
      average: "98%",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  // Founders Data
  const founders = [
    {
      name: "Rehan",
      role: "Co-Founder",
      image: "/rehan.jpeg", // Replace with actual image path
      linkedin: "https://linkedin.com/in/syed-rehan-shah",
      description: "Visionary leader with a passion for building systems that scale",
    },
    {
      name: "Abdullah",
      role: "Director & CTO",
      image: "/abdullahpadhana.jpg",
      linkedin: "https://linkedin.com/in/realabdullah",
      description: "Strategic thinker dedicated to delivering measurable results",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-body)]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1570EF]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full border border-[#1570EF]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#1570EF]" />
            <span className="text-[#1570EF] font-medium text-sm tracking-wider">
              ABOUT UPSCALE ALLIANCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.08] mb-6"
          >
            We Transform{" "}
            <span className="bg-gradient-to-r from-[#1570EF] to-blue-400 bg-clip-text text-transparent">
              Digital Presence
            </span>
            <br />
            Into Business Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We're more than a digital marketing agency. We're your growth
            partner, combining technical expertise with creative strategy to
            drive measurable results for your business.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4 border border-[#1570EF]/20"
            >
              <Heart className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] font-medium text-sm tracking-wider">
                OUR STORY
              </span>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Story Behind{" "}
                <span className="text-[#1570EF]">Upscale Alliance</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Upscale Alliance was founded by two friends Rehan and{" "}
                  Abdullah. Both started their careers as freelancers,
                  working on different projects and honing their skills in their respective
                  fields.
                </p>

                <p>
                  Rehan developed expertise in project management and
                  client relations, while Abdullah built a strong
                  reputation in technical expertise and digital strategy. Despite their
                  different backgrounds, they shared one belief {" "}
                  "whatever we set our minds to, we will achieve."
                </p>

                <p>
                  After some time, their paths crossed, and they realized that combining
                  their skills to build something of their own was the natural next step.
                  This shared vision gave birth to Upscale Alliance.
                </p>

                <p>
                  Today, Upscale Alliance has grown into a full-fledged
                  company. But the secret to their success remains the same the{" "}
                  deep friendship between Rehan and Abdullah, their{" "}
                  mutual trust, and their{" "}
                  unwavering determination to see through whatever they
                  commit to.
                </p>

                <p className="text-[#1570EF] font-semibold italic">
                  "Friendship brought us together, determination built Upscale Alliance."
                </p>
              </div>
            </motion.div>

            {/* Founders Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {founders.map((founder, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-6">
                    {/* Founder Image */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#1570EF]/20 group-hover:border-[#1570EF] transition-all duration-300 flex-shrink-0 bg-gray-100">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className={`object-cover ${founder.name === "Abdullah" ? "object-top" : "object-center"}`}
                        sizes="(max-width: 640px) 96px, 112px"
                        priority
                      />
                    </div>

                    {/* Founder Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {founder.name}
                      </h3>
                      <p className="text-[#1570EF] font-medium text-sm mb-1">
                        {founder.role}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {founder.description}
                      </p>
                    </div>

                    {/* LinkedIn Icon */}
                    <Link
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-[#1570EF]/10 hover:text-[#1570EF] transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                      aria-label={`Connect with ${founder.name} on LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-[#1570EF] transition-colors" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* Our Values */}
      <section className="py-16 sm:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4 border border-[#1570EF]/20"
            >
              <Target className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] font-medium text-sm tracking-wider">
                OUR VALUES
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mb-4 group-hover:bg-[#1570EF] group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <NewServicesSection />
      {/* Client Results */}
      <Reviews />

      {/* Our Approach */}
      <section className="py-16 sm:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4 border border-[#1570EF]/20"
            >
              <Zap className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] font-medium text-sm tracking-wider">
                OUR APPROACH
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we work to ensure your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "We start by deeply understanding your business, goals, and challenges to create a customized strategy.",
              },
              {
                step: "02",
                title: "Implementation",
                description:
                  "Our team executes the plan with precision, using data-driven tactics and best practices.",
              },
              {
                step: "03",
                title: "Optimization & Growth",
                description:
                  "We continuously analyze performance and optimize strategies to drive ongoing growth.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1570EF]/20 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#1570EF] flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-lg shadow-[#1570EF]/25">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4 border border-[#1570EF]/20"
            >
              <Shield className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] font-medium text-sm tracking-wider">
                WHY CHOOSE US
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Upscale Alliance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the digital marketing landscape
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Transparent Communication",
                  description:
                    "Regular updates, clear reporting, and open channels ensure you're always informed.",
                },
                {
                  title: "Data-Driven Decisions",
                  description:
                    "We base every decision on data and analytics, not assumptions or guesswork.",
                },
                {
                  title: "Customized Solutions",
                  description:
                    "No cookie-cutter approaches. Every strategy is tailored to your unique needs.",
                },
                {
                  title: "Long-Term Partnerships",
                  description:
                    "We focus on building lasting relationships that grow with your business.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      {/* ========== CTA SECTION (Same as Homepage) ========== */}
      <section className="relative overflow-hidden" aria-label="Call to action">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative z-10 bg-[#1570EF] mx-auto px-8 py-40"
        >
          <div className="flex items-center max-w-[1200px] mx-auto relative flex-wrap lg:flex-nowrap">
            <div className="gap-6">
              <p className="font-[family-name:var(--font-body)] text-sm md:text-lg pb-7 text-white/80">
                You've seen what we can do, so now…
              </p>
              <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
                Ready to grow with us?
              </h3>
              <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
                Let's build a partnership that drives real results for your business.
              </p>
            </div>
            <div className="mt-[260px] ml-auto">
              <Link href={"/contact-us"}>
                <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                  Start Your Journey
                  <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-[#1570EF]" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute -top-18 -right-20 z-10" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="h-[28rem] w-[28rem] animate-[spin_15s_linear_infinite] text-blue-500" fill="none">
              <g stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                <path d="M30 31 L44 49" /><path d="M61 28 L44 49" /><path d="M44 49 L32 70" />
              </g>
              <rect x="19" y="20" width="22" height="22" rx="7.5" fill="currentColor" />
              <rect x="46" y="13" width="30" height="30" rx="10" fill="currentColor" />
              <rect x="33" y="38" width="22" height="22" rx="7.5" fill="currentColor" />
              <rect x="21" y="59" width="22" height="22" rx="7.5" fill="currentColor" />
            </svg>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;