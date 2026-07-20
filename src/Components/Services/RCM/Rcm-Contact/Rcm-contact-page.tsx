"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Users,
  FileText,
  Shield,
  ChevronDown,
  MessageSquare,
  Calendar,
  User,
  BriefcaseMedical,
  DollarSign,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  practice: string;
  specialty: string;
  practiceSize: string;
  revenue: string;
  preferredDate: string;
  message: string;
  submittedDate: string;
}

export default function Rcmcontactpage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    practice: "",
    specialty: "",
    practiceSize: "",
    revenue: "",
    preferredDate: "",
    message: "",
    submittedDate: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    }),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/rcm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedDate: new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short",
          }),
          logo: "https://upscalealliance.com/UpscaleAllianceLLc.png", // Add your logo URL here
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      if (result.success) {
        setSubmittedEmail(formData.email); // ✅ SAVE EMAIL
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          practice: "",
          specialty: "",
          practiceSize: "",
          revenue: "",
          preferredDate: "",
          message: "",
          submittedDate: new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short",
          }),
        });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8 mt-18">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 max-w-lg"
        >
          <div className="text-[#296BFC] text-6xl mb-6">🎉</div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#296BFC] mb-4">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-6">
            Your RCM assessment request has been received. Our specialist will
            contact you within 24 hours to schedule your free consultation.
          </p>
          <p className="text-gray-600 mb-6">
            A confirmation email has been sent to {submittedEmail}.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-sm font-medium text-blue-700">
              Response guaranteed within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white pt-40 pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact RCM Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Get a free revenue cycle assessment tailored to your medical
            specialty
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Left Section - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=" "
          >
            <div className="bg-white max-w-[400px] rounded-2xl shadow-lg border border-blue-100 p-8 h-full">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Let's Connect
                </h2>
                <p className="text-gray-600">
                  Schedule a free RCM assessment with our specialists. We'll
                  analyze your revenue cycle and provide actionable insights.
                </p>
              </div>

              <div className="space-y-6">
                <ContactItem
                  icon={<Phone className="w-5 h-5" />}
                  title="+1 (917) 947-0117"
                  subtitle="Mon-Fri, 8AM-8PM EST"
                  color="text-blue-600"
                />
                <ContactItem
                  icon={<Mail className="w-5 h-5" />}
                  title="info@upscalealliance.com"
                  subtitle="Response within 4 hours"
                  color="text-blue-600"
                />
                <ContactItem
                  icon={<MapPin className="w-5 h-5" />}
                  title="1501 South Greeley Hwy"
                  subtitle="Ste C #1100 Cheyenne, WY 82007"
                  color="text-blue-600"
                />
                <ContactItem
                  icon={<Clock className="w-5 h-5" />}
                  title="Free Assessment Hours"
                  subtitle="Mon-Sat, 9AM-7PM EST"
                  color="text-blue-600"
                />
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">
                    HIPAA Compliant
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  All information is encrypted and protected. We follow strict
                  healthcare compliance protocols.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 h-full">
              <div className="mb-8 max-w-[400px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Request Free RCM Assessment
                  </h2>
                </div>
                <p className="text-gray-600">
                  Fill out this form to receive a personalized revenue cycle
                  analysis for your practice.
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-600">{error}</p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                id="contact-form"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline w-4 h-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Dr. John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="john@yourpractice.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline w-4 h-4 mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <BriefcaseMedical className="inline w-4 h-4 mr-1" />
                      Practice Name *
                    </label>
                    <input
                      type="text"
                      name="practice"
                      value={formData.practice}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Smith Medical Group"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Medical Specialty *
                    </label>
                    <select
                      name="specialty"
                      value={formData.specialty}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                      <option value="">Select your specialty</option>
                      <option value="Neurology">Neurology</option>
                      <option value="Cardiology">Cardiology</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Internal Medicine">
                        Internal Medicine
                      </option>
                      <option value="Family Medicine">Family Medicine</option>
                      <option value="Mental & Behavioral Health">
                        Mental & Behavioral Health
                      </option>
                      <option value="Other">Other Specialty</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="inline w-4 h-4 mr-1" />
                      Practice Size *
                    </label>
                    <select
                      name="practiceSize"
                      value={formData.practiceSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                      <option value="">Select practice size</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-15">6-15 employees</option>
                      <option value="16-30">16-30 employees</option>
                      <option value="31-50">31-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="100+">100+ employees</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="inline w-4 h-4 mr-1" />
                      Estimated Monthly Revenue *
                    </label>
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                      <option value="">Select revenue range</option>
                      <option value="Under $50K">Under $50,000</option>
                      <option value="$50K-$100K">$50,000 - $100,000</option>
                      <option value="$100K-$250K">$100,000 - $250,000</option>
                      <option value="$250K-$500K">$250,000 - $500,000</option>
                      <option value="$500K-$1M">$500,000 - $1,000,000</option>
                      <option value="$1M+">$1,000,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your RCM challenges *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="Describe your current billing issues, denials, coding challenges, or specific goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className=" cursor-pointer w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Free Assessment
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                RCM Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Common questions about Revenue Cycle Management for healthcare
              providers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className=" cursor-pointer w-full p-6 bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-center text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg">{faq.icon}</div>
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-blue-50/50 border border-t-0 border-blue-100 rounded-b-xl">
                        <p className="text-gray-700 mb-3">{faq.answer}</p>
                        {faq.bullets && (
                          <ul className="space-y-2 mt-3">
                            {faq.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-600">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Optimize Your Revenue Cycle?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join 500+ healthcare providers who have increased their collections
            by an average of 27% with our RCM solutions.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Schedule Your Free Assessment Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, subtitle, color }: any) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300"
    >
      <div className={`${color} p-2 bg-white rounded-lg shadow-sm`}>{icon}</div>
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </motion.div>
  );
}

const faqs = [
  {
    icon: <DollarSign className="w-5 h-5 text-blue-600" />,
    question: "How quickly can RCM services improve our collection rates?",
    answer:
      "Most practices see measurable improvements within 30-60 days. The timeline depends on your current processes, but typical results include:",
    bullets: [
      "15-30% reduction in claim denials within first 90 days",
      "20-40% decrease in accounts receivable days",
      "10-25% increase in clean claim rate immediately",
      "Full optimization achieved within 3-6 months",
    ],
  },
  {
    icon: <BriefcaseMedical className="w-5 h-5 text-blue-600" />,
    question: "Do you support our specific EHR/EMR system?",
    answer:
      "Yes, we integrate with all major EHR/EMR systems including Epic, Cerner, Allscripts, eClinicalWorks, NextGen, and more. Our team specializes in seamless integration without disrupting your workflow.",
    bullets: [
      "Certified integrations with 50+ EHR systems",
      "HL7/FHIR API connectivity",
      "Custom interface development available",
      "Data migration support included",
    ],
  },
  {
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    question: "What's the typical ROI for RCM services?",
    answer:
      "Our clients average 3-5x ROI within the first year. Specific benefits include:",
    bullets: [
      "Average 27% increase in collections",
      "$100K+ annual savings from reduced denials",
      "15-25% reduction in administrative costs",
      "95%+ clean claim rate achievement",
    ],
  },
  {
    icon: <Shield className="w-5 h-5 text-blue-600" />,
    question: "How do you ensure compliance with healthcare regulations?",
    answer:
      "We maintain strict HIPAA compliance and stay current with all regulatory changes:",
    bullets: [
      "HIPAA & HITECH compliant infrastructure",
      "Regular security audits & penetration testing",
      "Staff certified in healthcare compliance",
      "Real-time monitoring of regulatory updates",
    ],
  },
  {
    icon: <Users className="w-5 h-5 text-blue-600" />,
    question: "What's included in the free RCM assessment?",
    answer:
      "Our comprehensive assessment provides actionable insights including:",
    bullets: [
      "Detailed analysis of your current revenue cycle",
      "Identification of revenue leakage points",
      "Benchmarking against specialty-specific metrics",
      "Customized improvement roadmap",
      "ROI projection for recommended solutions",
    ],
  },
  {
    icon: <Clock className="w-5 h-5 text-blue-600" />,
    question: "How long does implementation take?",
    answer:
      "Implementation timelines vary based on practice size and complexity:",
    bullets: [
      "Small practices (1-10 providers): 2-4 weeks",
      "Medium practices (11-25 providers): 4-6 weeks",
      "Large practices (26+ providers): 6-10 weeks",
      "Multi-specialty groups: 8-12 weeks",
    ],
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
    question: "Can you handle billing for multiple specialties?",
    answer: "Absolutely! We specialize in multi-specialty RCM with:",
    bullets: [
      "Specialty-specific coding expertise",
      "Separate workflows for different service lines",
      "Consolidated reporting across specialties",
      "Cross-specialty revenue optimization",
    ],
  },
  {
    icon: <DollarSign className="w-5 h-5 text-blue-600" />,
    question: "What are your pricing models?",
    answer: "We offer flexible pricing options to fit your practice:",
    bullets: [
      "Percentage of collections (most popular)",
      "Flat fee per claim",
      "Monthly subscription",
      "Performance-based pricing",
      "Hybrid models available",
    ],
  },
];
