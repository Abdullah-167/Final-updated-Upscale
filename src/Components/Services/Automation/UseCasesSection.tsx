"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const UseCasesSection = () => {
  const useCases = [
    {
      id: 1,
      title: "Sales and marketing automation",
      description: "Content creation, full-funnel automation, lead routing, CRM, outbound, payments, contracts and much more.",
      image: "/sales.svg", // Replace with your image path
      category: "sales"
    },
    {
      id: 2,
      title: "Image, voice, text recognition and analysis",
      description: "Analyze and parse documents, biometrics, emotion, facial, products, videos and more to summarize or automate actions based off keywords, identity, sentiment, etc.",
      image: "/Image.svg", // Replace with your image path
      category: "ecommerce"
    },
    {
      id: 3,
      title: "Predictive analytics",
      description: "Data-driven decision making through risk analytics, demand or inventory forecasting and other future planning tasks.",
      image: "/Predictive.svg", // Replace with your image path
      category: "analytics"
    },
    {
      id: 4,
      title: "Conversational AI",
      description: "Prompt engineering, automatic replies and more for customer service, sales, chat bots, front-office and marketing.",
      image: "/Conversational.svg", // Replace with your image path
      category: "conversational"
    },
    {
      id: 5,
      title: "Project management",
      description: "We connect all manual, repetitive steps in a process, from task handoff to completion. Such as onboarding, admin, accounting, invoicing.",
      image: "/Project.svg", // Replace with your image path
      category: "project"
    },
    {
      id: 6,
      title: "Staff augmentation",
      description: "Save employees hours a day by automating their most tedious daily tasks. We've even replaced entire teams of virtual assistants.",
      image: "/Staff.svg", // Replace with your image path
      category: "staff"
    },
    {
      id: 7,
      title: "Data silos",
      description: "We automate data entry, collection, cleansing and reporting from nuanced and silo'd locations, for fast and accurate decision making.",
      image: "/Data.svg", // Replace with your image path
      category: "data"
    },
    {
      id: 8,
      title: "Customer service",
      description: "Most customer service questions and responses are similar and repetitive. As a result, most CS tasks can be automated.",
      image: "/Customer.svg", // Replace with your image path
      category: "customer"
    },
    {
      id: 9,
      title: "Connect apps",
      description: "Most of your apps can be integrated with each-other for instant handoffs of data and consolidation of information.",
      image: "/Connect.svg", // Replace with your image path
      category: "connect"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
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
            <span className="text-[#1570EF] font-medium text-sm">ENDLESS POSSIBILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            The Endless Use Cases of <span className="text-[#1570EF]">AI and Automation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our clients make their employees <span className="font-semibold text-[#1570EF]">10X more efficient</span> by taking tedious, 
            repetitive tasks off their plate. <span className="block mt-2">We are industry agnostic.</span>
          </motion.p>
        </div>

        {/* Use Cases Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-[#1570EF] hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="mb-6">
                <div className="w-16 h-16 relative">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1570EF] transition-colors">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {useCase.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">
                  Use Case #{useCase.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
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
    </section>
  );
};

export default UseCasesSection;