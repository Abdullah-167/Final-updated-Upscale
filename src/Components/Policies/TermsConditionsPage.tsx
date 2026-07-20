"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Scale,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Shield,
  Clock,
  User,
  Building,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Calendar,
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
              You've reviewed our terms, so now…
            </p>
            <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
              Ready to work with us?
            </h3>
            <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
              Let's build a transparent, trustworthy partnership that drives real results for your business.
            </p>
          </div>
          <div className="mt-[260px] ml-auto">
            <Link href={"/contact-us"}>
              <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                Get Started Today
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

const TermsConditionsPage = () => {
  const effectiveDate = "July 2026";
  const companyName = "Upscale Alliance";
  const companyAddress = "1501 South Greeley Hwy Ste C #1100 Cheyenne, WY 82007";
  const companyEmail = "info@upscalealliance.com";

  const sections = [
    {
      title: "Agreement to Terms",
      icon: <Scale className="w-5 h-5" />,
      content: `By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.

These terms constitute a legally binding agreement between you and ${companyName}.`,
    },
    {
      title: "Services Description",
      icon: <Building className="w-5 h-5" />,
      content: `${companyName} provides digital marketing services including but not limited to:
• Revenue Cycle Management (RCM)
• Medical Billing & AR Management
• Patient Eligibility Verification
• Website Development & Design
• Search Engine Optimization (SEO)
• Generative Engine Optimization (GEO)
• Ai Automation 
• Video Editing
• Social Media Marketing & Management
• Pay-Per-Click (PPC) Advertising
• Content Writing & Strategy
• Link Building Services

Service specifics, scope, and deliverables are outlined in individual service agreements or proposals.`,
    },
    {
      title: "Client Responsibilities",
      icon: <User className="w-5 h-5" />,
      content: `As a client, you agree to:
• Provide accurate and complete information
• Grant necessary access to accounts and platforms
• Make timely payments as agreed
• Provide feedback and approvals within agreed timelines
• Comply with platform terms where we manage your accounts
• Maintain legal rights to any content you provide

Delays caused by client inaction may affect project timelines.`,
    },
    {
      title: "Payments & Billing",
      icon: <DollarSign className="w-5 h-5" />,
      content: `• Services are billed as outlined in your service agreement
• Monthly retainers are billed in advance
• Project-based work requires deposits
• Late payments may incur fees or service suspension
• All fees are in USD unless otherwise specified
• Prices are subject to change with 30-day notice for existing clients

Payment terms, methods, and schedules are detailed in individual agreements.`,
    },
    {
      title: "Intellectual Property",
      icon: <Shield className="w-5 h-5" />,
      content: `• Client retains ownership of pre-existing materials
• ${companyName} retains ownership of proprietary tools and methodologies
• Upon full payment, clients receive rights to deliverables as specified
• ${companyName} may use anonymized work for portfolio purposes
• Third-party assets (fonts, stock images, etc.) are subject to their licenses
• Source code ownership terms vary by project type

Specific IP rights are detailed in service agreements.`,
    },
    {
      title: "Confidentiality",
      icon: <AlertCircle className="w-5 h-5" />,
      content: `Both parties agree to maintain confidentiality of:
• Business strategies and plans
• Financial information
• Proprietary methodologies
• Client lists and contact information
• Any information marked as confidential

Confidentiality obligations survive termination of services.`,
    },
    {
      title: "Term & Termination",
      icon: <Clock className="w-5 h-5" />,
      content: `• Month-to-month services require 30-day written notice for cancellation
• Project-based agreements terminate upon completion
• Either party may terminate for material breach with 14-day cure period
• ${companyName} may suspend services for non-payment
• Upon termination, clients receive all paid-for deliverables

Termination specifics vary by service type and agreement.`,
    },
    {
      title: "Limitations of Liability",
      icon: <AlertCircle className="w-5 h-5" />,
      content: `${companyName}'s total liability shall not exceed fees paid for the specific service giving rise to the claim.

We are not liable for:
• Third-party platform changes or algorithms
• Indirect, incidental, or consequential damages
• Loss of data or profits
• Delays caused by third parties or force majeure
• Client actions or decisions based on our advice

Service level agreements outline specific performance guarantees.`,
    },
    {
      title: "Guarantees & Results",
      icon: <CheckCircle className="w-5 h-5" />,
      content: `While we employ industry best practices, we cannot guarantee specific results such as:
• Exact search engine rankings
• Specific traffic numbers or conversion rates
• Social media follower counts
• Advertising ROI percentages

We guarantee diligent work, professional standards, and adherence to agreed strategies. Results depend on many external factors beyond our control.`,
    },
    {
      title: "Third-Party Services",
      icon: <Building className="w-5 h-5" />,
      content: `We may use or recommend third-party services including:
• Google Analytics, Search Console
• Social media platforms
• Advertising networks
• Content management systems
• Project management tools

Clients are responsible for complying with third-party terms. We are not liable for third-party service issues.`,
    },
    {
      title: "Indemnification",
      icon: <Shield className="w-5 h-5" />,
      content: `You agree to indemnify and hold harmless ${companyName} from any claims arising from:
• Your use of our services
• Content you provide
• Violation of these terms
• Infringement of third-party rights
• Your business decisions or actions

This includes legal fees and settlement costs.`,
    },
    {
      title: "Changes to Terms",
      icon: <FileText className="w-5 h-5" />,
      content: `We reserve the right to modify these terms at any time. Changes will be effective upon posting to our website.

For existing clients, material changes will be communicated with reasonable notice. Continued use of services constitutes acceptance of updated terms.`,
    },
    {
      title: "Governing Law",
      icon: <Scale className="w-5 h-5" />,
      content: `These terms are governed by the laws of New York, USA, without regard to conflict of law principles.

Any disputes shall be resolved in the courts of New York County, New York.

Both parties agree to attempt mediation before litigation for any disputes over $5,000.`,
    },
    {
      title: "Contact Information",
      icon: <User className="w-5 h-5" />,
      content: `For questions about these terms, contact:

${companyName}
${companyAddress}
Email: ${companyEmail}
Phone: +1 (555) 123-4567

Legal notices should be sent via certified mail to the address above.`,
    },
  ];

  const importantNotes = [
    "These terms apply to all services unless superseded by a signed agreement",
    "Digital marketing results depend on many external factors",
    "Monthly services require ongoing commitment for best results",
    "All communications should be documented for clarity",
    "Emergency contact procedures are outlined in service agreements",
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
              <FileText className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] font-medium text-sm tracking-wider">
                Legal Terms
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Terms & Conditions
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6 max-w-3xl mx-auto border border-gray-200"
            >
              <p className="text-lg text-gray-600 mb-4">
                These terms govern your use of Upscale Alliance's services.
                Please read them carefully.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Effective Date: {effectiveDate}
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {companyName}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Important Notice
                </h2>
                <div className="text-gray-700 space-y-3 leading-relaxed">
                  <p>
                    These Terms & Conditions apply to all services provided by{" "}
                    {companyName} unless specifically superseded by a signed
                    service agreement. By using our services, you agree to these
                    terms.
                  </p>
                  <p>
                    For specific project terms, please refer to your signed
                    proposal or service agreement, which takes precedence over
                    these general terms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Important Notes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Important Notes for Clients
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {importantNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#1570EF]/5 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-[#1570EF] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{note}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Specific Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Service-Specific Terms
            </h3>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  SEO & GEO Services
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Results depend on search engine algorithms</li>
                  <li>Minimum 3-6 month commitment recommended for SEO</li>
                  <li>We follow white-hat SEO practices only</li>
                  <li>Client must provide necessary website access</li>
                </ul>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Social Media Management
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Client grants necessary platform access</li>
                  <li>Content approval processes vary by package</li>
                  <li>Response time targets depend on service level</li>
                  <li>Platform changes may affect strategy effectiveness</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Website Development
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Project scope defined in separate agreement</li>
                  <li>Additional features may incur extra costs</li>
                  <li>Hosting and maintenance may be separate</li>
                  <li>Client provides all necessary content and assets</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Payment Terms Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#1570EF] to-blue-500 rounded-2xl p-8 text-white shadow-lg shadow-[#1570EF]/25"
          >
            <h3 className="text-2xl font-bold mb-6">Payment Terms Summary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold mb-2">Monthly Services</div>
                <div className="text-white/90 text-sm">
                  Billed monthly in advance
                  <br />
                  30-day notice to cancel
                  <br />
                  Auto-renew unless cancelled
                </div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold mb-2">Project Work</div>
                <div className="text-white/90 text-sm">
                  50% deposit to start
                  <br />
                  25% at midpoint
                  <br />
                  25% upon completion
                </div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="font-semibold mb-2">Late Payments</div>
                <div className="text-white/90 text-sm">
                  1.5% monthly interest
                  <br />
                  $50 late fee after 15 days
                  <br />
                  Services may be suspended
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Specific payment terms are detailed in individual service
                agreements. All fees are non-refundable unless otherwise
                specified.
              </p>
            </div>
          </motion.div>

          {/* Cancellation Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cancellation & Refund Policy
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-gray-900 mb-2">
                    Service Cancellation
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>30-day written notice required</li>
                    <li>Final invoice for work completed</li>
                    <li>No refunds for partial months</li>
                    <li>All files delivered upon final payment</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-gray-900 mb-2">
                    Project Cancellation
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Client may cancel with written notice</li>
                    <li>Pay for work completed to date</li>
                    <li>Deposit is non-refundable</li>
                    <li>Receive all completed work</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Refunds are only provided if we fail to deliver services as
                explicitly guaranteed in your service agreement. No refunds for
                dissatisfaction with results, as results depend on many external
                factors.
              </p>
            </div>
          </motion.div>

          {/* Dispute Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dispute Resolution
            </h3>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-[#1570EF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Step 1: Direct Communication
                  </p>
                  <p>Contact your account manager to resolve issues directly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-[#1570EF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Step 2: Escalation
                  </p>
                  <p>If unresolved, escalate to management at {companyEmail}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#1570EF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">
                    Step 3: Mediation
                  </p>
                  <p>
                    For claims over $5,000, mediation is required before legal
                    action
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#1570EF]" />
                  <span className="font-medium text-gray-900">
                    We aim to resolve all disputes amicably and professionally.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CTA SECTION (Same as Homepage) ========== */}
      <CallToAction />

      {/* Footer Note */}
      <div className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            These Terms & Conditions were last updated on {effectiveDate}. By
            using our services, you acknowledge that you have read and agree to
            these terms.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;