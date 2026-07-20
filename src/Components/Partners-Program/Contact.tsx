"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Building2,
  Users,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  FileText,
  MessageSquare,
  Video,
  CheckCircle2,
  ArrowRight,
  Handshake,
  Target,
  Briefcase,
  Globe,
  UserCheck,
  Star,
  Sparkles,
  Send,
  User,
  Building,
  DollarSign,
  TrendingUp,
  ChevronDown,
  Loader2,
} from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Type definitions
type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  companySize: string;
  role: string;
  partnershipType: string;
  currentChallenges: string;
  referralSource: string;
  timeline: string;
  additionalInfo: string;
};

type DropdownRefs = {
  firstName: React.RefObject<HTMLInputElement | null>;
  lastName: React.RefObject<HTMLInputElement | null>;
  company: React.RefObject<HTMLInputElement | null>;
  email: React.RefObject<HTMLInputElement | null>;
  phone: React.RefObject<HTMLDivElement | null>;
  companySize: React.RefObject<HTMLDivElement | null>;
  role: React.RefObject<HTMLDivElement | null>;
  partnershipType: React.RefObject<HTMLDivElement | null>;
  currentChallenges: React.RefObject<HTMLTextAreaElement | null>;
  referralSource: React.RefObject<HTMLDivElement | null>;
  timeline: React.RefObject<HTMLDivElement | null>;
  additionalInfo: React.RefObject<HTMLTextAreaElement | null>;
};

type ValidRefKey = keyof DropdownRefs;

const PartnersContactPage = () => {
  // Refs for form fields
  const refs: DropdownRefs = {
    firstName: useRef<HTMLInputElement | null>(null),
    lastName: useRef<HTMLInputElement | null>(null),
    company: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    phone: useRef<HTMLDivElement | null>(null),
    companySize: useRef<HTMLDivElement | null>(null),
    role: useRef<HTMLDivElement | null>(null),
    partnershipType: useRef<HTMLDivElement | null>(null),
    currentChallenges: useRef<HTMLTextAreaElement | null>(null),
    referralSource: useRef<HTMLDivElement | null>(null),
    timeline: useRef<HTMLDivElement | null>(null),
    additionalInfo: useRef<HTMLTextAreaElement | null>(null),
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    companySize: "",
    role: "",
    partnershipType: "",
    currentChallenges: "",
    referralSource: "",
    timeline: "",
    additionalInfo: "",
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Theme colors
  const themeColors = {
    primary: "#1570EF",
    primaryLight: "#EFF8FF",
    primaryHover: "#0E5DC9",
    border: "#D1D5DB",
    borderHover: "#94A3B8",
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    backgroundLight: "#F9FAFB",
  };

  // Options for dropdowns
  const companySizeOptions = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501+ employees",
  ];

  const roleOptions = [
    "Founder / CEO",
    "Executive",
    "Director",
    "Manager",
    "Other",
  ];

  const partnershipTypeOptions = [
    "White-Label Delivery",
    "Revenue Share",
    "Backend Execution",
    "Co-Branded",
    "Exploratory Discussion",
  ];

  const referralOptions = [
    "Search Engine",
    "Social Media",
    "Referral",
    "Industry Event",
    "Content / Blog",
    "Other",
  ];

  const timelineOptions = [
    "Immediate (0-30 days)",
    "Short-term (1-3 months)",
    "Medium-term (3-6 months)",
    "Exploratory (6+ months)",
  ];

  // Validation and scrolling functions
  const scrollToError = (key: ValidRefKey) => {
    refs[key]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    if (
      key !== "phone" &&
      key !== "companySize" &&
      key !== "role" &&
      key !== "partnershipType" &&
      key !== "referralSource" &&
      key !== "timeline"
    ) {
      refs[key]?.current?.focus?.();
    }
  };

  const validate = (): boolean => {
    const validations: Array<{
      key: ValidRefKey;
      value: string | boolean;
    }> = [
      { key: "firstName", value: formData.firstName.trim() !== "" },
      { key: "lastName", value: formData.lastName.trim() !== "" },
      { key: "company", value: formData.company.trim() !== "" },
      { key: "email", value: formData.email.trim() !== "" },
      { key: "phone", value: formData.phone.trim() !== "" },
      { key: "companySize", value: formData.companySize.trim() !== "" },
      { key: "role", value: formData.role.trim() !== "" },
      { key: "partnershipType", value: formData.partnershipType.trim() !== "" },
      { key: "referralSource", value: formData.referralSource.trim() !== "" },
      { key: "timeline", value: formData.timeline.trim() !== "" },
    ];

    for (const validation of validations) {
      if (!validation.value) {
        scrollToError(validation.key);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/partners-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setShowSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        companySize: "",
        role: "",
        partnershipType: "",
        currentChallenges: "",
        referralSource: "",
        timeline: "",
        additionalInfo: "",
      });

      setTimeout(() => {
        document.getElementById("successMessage")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);

      setTimeout(() => window.location.reload(), 5000);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const selectOption = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setOpenDropdown(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const renderDropdown = (
    name: ValidRefKey,
    options: string[],
    label?: string,
  ) => {
    const isActive = activeField === name;
    const value = formData[name as keyof FormData];

    return (
      <div
        ref={refs[name] as React.RefObject<HTMLDivElement>}
        className="relative"
      >
        <button
          type="button"
          onClick={() => toggleDropdown(name)}
          onFocus={() => handleFocus(name)}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-left flex justify-between items-center transition-all duration-200 ${
            isActive
              ? "border-[#1570EF] ring-2 ring-[#EFF8FF]"
              : "border-gray-200 hover:border-gray-300"
          }`}
          style={{
            borderColor: isActive ? themeColors.primary : undefined,
            boxShadow: isActive
              ? `0 0 0 2px ${themeColors.primaryLight}`
              : undefined,
          }}
        >
          <span className="text-gray-700 truncate">
            {value ? value : label || "Select an option"}
          </span>
          <motion.span
            animate={{ rotate: openDropdown === name ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400 flex-shrink-0 ml-2"
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>
        <AnimatePresence>
          {openDropdown === name && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto"
            >
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => selectOption(name as keyof FormData, option)}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 flex justify-between items-center border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-700">{option}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const inputClass = (fieldName: string) => {
    const isActive = activeField === fieldName;
    return `w-full px-4 py-3 bg-gray-50 border rounded-xl transition-all duration-200 focus:outline-none placeholder:text-gray-400 ${
      isActive
        ? "border-[#1570EF] ring-2 ring-[#EFF8FF]"
        : "border-gray-200 hover:border-gray-300"
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pb-16 sm:pb-20 md:pb-24 pt-40">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6 sm:mb-8"
            >
              <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span className="text-sm font-semibold text-white tracking-wide">
                PARTNERSHIP INQUIRY
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Let's Build Something{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
                Exceptional
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12">
              Complete the form below for a confidential discussion about
              partnership opportunities.
            </p>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                {
                  icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
                  text: "NDA Protected",
                },
                {
                  icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                  text: "24h Response",
                },
                {
                  icon: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />,
                  text: "Qualified Leads Only",
                },
                {
                  icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />,
                  text: "No Spam Ever",
                },
              ].map((signal, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-2 justify-center px-3 py-2 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-blue-400">{signal.icon}</div>
                  <span className="text-xs sm:text-sm text-gray-300">
                    {signal.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    id="successMessage"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 sm:p-8 md:p-10 text-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      Thank You for Your Interest!
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                      Our partnership team will review your submission and
                      contact you within 24 hours to schedule an introductory
                      call.
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center justify-center gap-3">
                        <Calendar className="w-4 h-4 text-green-600" />
                        <span className="text-sm sm:text-base text-gray-700">
                          Next Steps: Introductory Call
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <Clock className="w-4 h-4 text-green-600" />
                        <span className="text-sm sm:text-base text-gray-700">
                          30-minute discovery session
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <FileText className="w-4 h-4 text-green-600" />
                        <span className="text-sm sm:text-base text-gray-700">
                          Partnership overview PDF will be shared
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showSuccess && (
                <>
                  {/* Form Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                          Partnership Inquiry Form
                        </h2>
                        <p className="text-blue-100 text-sm sm:text-base">
                          All fields are required
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form Content */}
                  <form
                    onSubmit={handleSubmit}
                    className="p-6 sm:p-8 space-y-6"
                  >
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-600" />
                        Personal Information
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            ref={refs.firstName}
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            onFocus={() => handleFocus("firstName")}
                            onBlur={handleBlur}
                            className={inputClass("firstName")}
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            ref={refs.lastName}
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            onFocus={() => handleFocus("lastName")}
                            onBlur={handleBlur}
                            className={inputClass("lastName")}
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-600" />
                        Company Information
                      </h3>
                      <div className="space-y-4 grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name *
                          </label>
                          <input
                            ref={refs.company}
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={() => handleFocus("company")}
                            onBlur={handleBlur}
                            className={inputClass("company")}
                            placeholder="Acme Inc."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Size *
                          </label>
                          {renderDropdown(
                            "companySize",
                            companySizeOptions,
                            "Select company size",
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        Contact Information
                      </h3>
                      <div className="space-y-4 grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            ref={refs.email}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus("email")}
                            onBlur={handleBlur}
                            className={inputClass("email")}
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div
                            ref={refs.phone}
                            className="w-full"
                            onFocus={() => handleFocus("phone")}
                            onBlur={handleBlur}
                          >
                            <PhoneInput
                              country={"us"}
                              value={formData.phone}
                              onChange={(phone) =>
                                setFormData({
                                  ...formData,
                                  phone,
                                })
                              }
                              inputStyle={{
                                width: "100%",
                                height: "52px",
                                background: "#f9fafb",
                                borderRadius: "12px",
                                border: `1px solid ${activeField === "phone" ? themeColors.primary : "#e5e7eb"}`,
                                fontSize: "16px",
                                boxShadow:
                                  activeField === "phone"
                                    ? `0 0 0 2px ${themeColors.primaryLight}`
                                    : "none",
                                transition: "all 0.2s ease",
                              }}
                              buttonStyle={{
                                background: "transparent",
                                border: "none",
                              }}
                              containerStyle={{
                                borderRadius: "12px",
                                border: `1px solid ${activeField === "phone" ? themeColors.primary : "#e5e7eb"}`,
                                transition: "all 0.2s ease",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Partnership Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                        Partnership Details
                      </h3>
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Your Role *
                            </label>
                            {renderDropdown(
                              "role",
                              roleOptions,
                              "Select your role",
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Partnership Interest *
                            </label>
                            {renderDropdown(
                              "partnershipType",
                              partnershipTypeOptions,
                              "Select partnership type",
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Current Challenges
                          </label>
                          <textarea
                            ref={refs.currentChallenges}
                            name="currentChallenges"
                            value={formData.currentChallenges}
                            onChange={handleChange}
                            onFocus={() => handleFocus("currentChallenges")}
                            onBlur={handleBlur}
                            rows={3}
                            className={inputClass("currentChallenges")}
                            placeholder="What challenges are you facing that a partnership could solve?"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        Additional Information
                      </h3>
                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              How did you hear about us? *
                            </label>
                            {renderDropdown(
                              "referralSource",
                              referralOptions,
                              "Select referral source",
                            )}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Timeline for Partnership *
                            </label>
                            {renderDropdown(
                              "timeline",
                              timelineOptions,
                              "Select timeline",
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Information
                          </label>
                          <textarea
                            ref={refs.additionalInfo}
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            onFocus={() => handleFocus("additionalInfo")}
                            onBlur={handleBlur}
                            rows={3}
                            className={inputClass("additionalInfo")}
                            placeholder="Any other details you'd like to share..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 30px rgba(21, 112, 239, 0.2)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      type="submit"
                      className="cursor-pointer w-full bg-gradient-to-r from-[#1570EF] to-[#0EA5E9] text-white py-4 rounded-xl font-medium text-lg flex items-center justify-center gap-3 transition-all duration-200 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Partnership Inquiry
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted about partnership
                      opportunities.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>

          {/* Right Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 sm:space-y-12"
          >
            {/* What to Expect */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl sm:rounded-3xl border border-blue-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    What to Expect Next
                  </h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">
                    3-Step Partnership Process
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    step: "1. Initial Review",
                    description:
                      "Our partnership team reviews your submission within 24 hours",
                    details: ["NDA sent if required", "Initial qualification"],
                    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                  {
                    step: "2. Discovery Call",
                    description:
                      "30-minute introductory call to discuss mutual goals",
                    details: ["No obligation", "Confidential discussion"],
                    icon: <Video className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                  {
                    step: "3. Formal Proposal",
                    description:
                      "Customized partnership proposal based on your needs",
                    details: ["Clear scope & terms", "Success metrics"],
                    icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="text-blue-600">{item.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-1">
                          {item.step}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.details.map((detail, dIdx) => (
                            <span
                              key={dIdx}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Direct Contact Options
                  </h3>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">
                    Alternative ways to reach us
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
                    title: "Partnership Email",
                    value: "info@upscalealliance.com",
                    description: "For detailed inquiries",
                  },
                  {
                    icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
                    title: "Direct Phone",
                    value: "+1 (917) 947-0117",
                    description: "Available 9am-6pm EST",
                  },
                  {
                    icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
                    title: "Primary Location",
                    value: "Cheyenne, WY",
                    description: "EST Time Zone",
                  },
                  {
                    icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                    title: "Response Time",
                    value: "Within 24 hours",
                    description: "For all inquiries",
                  },
                ].map((contact, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">{contact.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                        {contact.title}
                      </h4>
                      <p className="font-medium text-gray-900 text-sm sm:text-base mb-1">
                        {contact.value}
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersContactPage;
