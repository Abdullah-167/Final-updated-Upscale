"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Cookie,
  CheckCircle,
  FileText,
  Users,
  Globe,
  ArrowRight,
  Sparkles,
  Calendar,
  Phone,
  Mail,
} from "lucide-react";

// ============ CTA SECTION (Same as Homepage) ==========
const CallToAction = () => {
  return (
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
              Your privacy matters to us, so now…
            </p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Ready to work with a trusted partner?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
              Let's build something great together while keeping your data safe and secure.
            </p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/contact-us"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Get in Touch
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
  );
};

const PrivacyPolicyPage = () => {
  const lastUpdated = "July 2026";

  const sections = [
    {
      title: "Information We Collect",
      icon: <Eye className="w-5 h-5" />,
      content: `We collect information that you provide directly to us, including when you fill out contact forms, request services, or communicate with us. This may include:
      • Personal information (name, email, phone number, company)
      • Professional information (job title, business needs)
      • Communication preferences
      • Payment information (for paid services only)`,
    },
    {
      title: "How We Use Your Information",
      icon: <Users className="w-5 h-5" />,
      content: `We use the information we collect for legitimate business purposes, including:
      • Providing and improving our services
      • Communicating with you about your projects
      • Sending updates and marketing communications (with consent)
      • Processing payments and billing
      • Legal compliance and fraud prevention`,
    },
    {
      title: "Information Sharing",
      icon: <Globe className="w-5 h-5" />,
      content: `We do not sell your personal information. We may share information with:
      • Service providers who assist in our operations (under strict confidentiality agreements)
      • Legal authorities when required by law
      • Third parties with your explicit consent
      
      All third-party providers are vetted for privacy compliance.`,
    },
    {
      title: "Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: `We implement industry-standard security measures to protect your information:
      • Encryption of sensitive data
      • Secure servers and network protection
      • Regular security audits
      • Employee training on data protection
      • Access controls and authentication measures`,
    },
    {
      title: "Cookies & Tracking",
      icon: <Cookie className="w-5 h-5" />,
      content: `Our website uses cookies and similar technologies to:
      • Improve website functionality and user experience
      • Analyze site traffic and performance
      • Personalize content and advertisements
      
      You can control cookie preferences through your browser settings. Essential cookies are required for site functionality.`,
    },
    {
      title: "Your Rights",
      icon: <CheckCircle className="w-5 h-5" />,
      content: `Depending on your location, you may have rights including:
      • Access to your personal information
      • Correction of inaccurate data
      • Deletion of your data (right to be forgotten)
      • Opt-out of marketing communications
      • Data portability
      • Objection to processing
      
      To exercise these rights, contact us using the information below.`,
    },
    {
      title: "International Data Transfers",
      icon: <Globe className="w-5 h-5" />,
      content: `As a digital agency serving clients globally, your information may be transferred to and processed in countries outside your country of residence. We ensure appropriate safeguards are in place and comply with applicable data protection laws including GDPR for EU residents.`,
    },
    {
      title: "Children's Privacy",
      icon: <Users className="w-5 h-5" />,
      content: `Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`,
    },
    {
      title: "Changes to This Policy",
      icon: <FileText className="w-5 h-5" />,
      content: `We may update this privacy policy periodically. The "Last Updated" date at the top of this page indicates when changes were made. We encourage you to review this policy regularly. Material changes will be communicated through our website or directly to you when required by law.`,
    },
  ];

  const contactInfo = {
    email: "info@upscalealliance.com",
    address: "1501 South Greeley Hwy Ste C #1100 Cheyenne, WY 82007",
    phone: "+1 (917) 947-0117",
  };

  const complianceStandards = [
    "GDPR (General Data Protection Regulation)",
    "CCPA (California Consumer Privacy Act)",
    "PIPEDA (Canada)",
    "LGPD (Brazil)",
    "Other applicable privacy laws",
  ];

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-body)]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1570EF]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full border border-[#1570EF]/20 mb-6"
            >
              <Shield className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] font-medium text-sm tracking-wider">
                Privacy & Data Protection
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Privacy Policy
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6 max-w-3xl mx-auto border border-gray-200"
            >
              <p className="text-lg text-gray-600 mb-4">
                At Upscale Alliance, we take your privacy seriously. This policy
                explains how we collect, use, protect, and share your personal
                information.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Last Updated: {lastUpdated}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 mb-12 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Introduction
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Upscale Alliance ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy applies to all
                personal information collected through our website, services,
                and communications.
              </p>
              <p>
                We provide digital marketing services including website
                development, SEO, social media management, and PPC advertising.
                This policy outlines our practices regarding your personal data.
              </p>
              <p>
                By using our services, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </div>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF]/20 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] flex-shrink-0">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {section.title}
                    </h3>
                    <div className="text-gray-600 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#1570EF] to-blue-500 rounded-2xl p-8 text-white shadow-lg shadow-[#1570EF]/25"
          >
            <h3 className="text-2xl font-bold mb-6">
              Contact Us About Privacy
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="font-semibold mb-2">Email</div>
                <div className="text-white/90">{contactInfo.email}</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Address</div>
                <div className="text-white/90">{contactInfo.address}</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Phone</div>
                <div className="text-white/90">{contactInfo.phone}</div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/80">
                For privacy-related inquiries, data access requests, or to
                exercise your rights, please contact us. We respond to all
                privacy requests within 30 days.
              </p>
            </div>
          </motion.div>

          {/* Compliance Standards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Compliance Standards
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {complianceStandards.map((standard, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#1570EF]/5 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-[#1570EF] flex-shrink-0" />
                  <span className="text-gray-700">{standard}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Data Retention
            </h3>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                We retain personal information only for as long as necessary to
                fulfill the purposes outlined in this policy, unless a longer
                retention period is required or permitted by law.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-gray-900 mb-2">
                    Active Clients
                  </div>
                  <div className="text-gray-600">
                    Data is retained for the duration of our business
                    relationship and for a reasonable period thereafter for
                    legal and operational purposes.
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-gray-900 mb-2">
                    Inactive Accounts
                  </div>
                  <div className="text-gray-600">
                    Data may be retained for up to 7 years for legal and tax
                    purposes, after which it is securely deleted or anonymized.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h3>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                We use trusted third-party services that may process your data.
                These include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email marketing platforms (with opt-in consent)</li>
                <li>Analytics and tracking tools</li>
                <li>Payment processors</li>
                <li>Project management software</li>
                <li>Customer relationship management (CRM) systems</li>
              </ul>
              <p className="mt-4">
                All third-party providers are carefully selected and required to
                maintain appropriate security measures and comply with
                applicable privacy laws.
              </p>
            </div>
          </motion.div>

          {/* Consent & Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Consent & Policy Updates
            </h3>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <p>
                By using our website and services, you consent to our Privacy
                Policy. If you do not agree with this policy, please do not use
                our services.
              </p>
              <p>
                We reserve the right to update this privacy policy at any time.
                We will notify users of any material changes through our website
                or via email when appropriate.
              </p>
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#1570EF]" />
                  <span className="font-medium text-gray-900">
                    This policy was last updated in {lastUpdated}. Please review
                    it regularly for any changes.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CTA SECTION (Same as Homepage) ========== */}
      <CallToAction />
    </div>
  );
};

export default PrivacyPolicyPage;