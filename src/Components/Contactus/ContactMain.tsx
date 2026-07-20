"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  ChevronDown,
  Building,
  User,
  Globe,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Type definitions
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  services: string[];
  budget: string;
  region: string;
  referralSource: string;
  projectDetails: string;
};

// Only include fields that have refs in DropdownRefs
type DropdownRefs = {
  firstName: React.RefObject<HTMLInputElement | null>;
  email: React.RefObject<HTMLInputElement | null>;
  company: React.RefObject<HTMLInputElement | null>;
  phone: React.RefObject<HTMLDivElement | null>;
  industry: React.RefObject<HTMLDivElement | null>;
  services: React.RefObject<HTMLDivElement | null>;
  budget: React.RefObject<HTMLDivElement | null>;
  region: React.RefObject<HTMLDivElement | null>;
  referralSource: React.RefObject<HTMLDivElement | null>;
  projectDetails: React.RefObject<HTMLTextAreaElement | null>;
};

// Keys that exist in both FormData and DropdownRefs (excluding lastName)
type ValidRefKey = keyof DropdownRefs;

const ContactMain = () => {
  // Update refs to include null in the generic type
  const refs: DropdownRefs = {
    firstName: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    company: useRef<HTMLInputElement | null>(null),
    phone: useRef<HTMLDivElement | null>(null),
    industry: useRef<HTMLDivElement | null>(null),
    services: useRef<HTMLDivElement | null>(null),
    budget: useRef<HTMLDivElement | null>(null),
    region: useRef<HTMLDivElement | null>(null),
    referralSource: useRef<HTMLDivElement | null>(null),
    projectDetails: useRef<HTMLTextAreaElement | null>(null),
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    services: [],
    budget: "",
    region: "",
    referralSource: "",
    projectDetails: "",
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

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

  const serviceOptions = [
    "RCM (Revenue Cycle Management)",
    "AI Automation",
    "Social Media Marketing",
    "PPC Advertising",
    "Content Writing",
    "Website Development",
    "SEO Optimization",
    "GEO Marketing",
    "Link Building",
  ];

  const industryOptions = [
    "Healthcare & Medical",
    "Urgent Care Facilities",
    "Mental Health Services",
    "Ecommerce & Retail",
    "SaaS Technology",
    "Real Estate",
    "Other Industry",
  ];

  const budgetOptions = [
    "Under $5,000",
    "$5,000 – $10,000",
    "$10,000 – $25,000",
    "$25,000 – $50,000",
    "$50,000+",
  ];

  const regionOptions = [
    "United States",
    "Canada",
    "United Kingdom",
    "Middle East",
    "Asia Pacific",
    "Other Region",
  ];

  const referralOptions = [
    "Google Search",
    "Social Media",
    "Client Referral",
    "Email Campaign",
    "Industry Event",
    "Other Source",
  ];

  const scrollToError = (key: ValidRefKey) => {
    refs[key]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    if (key !== "phone") {
      refs[key]?.current?.focus?.();
    }
  };

  const validate = (): boolean => {
    const validations: Array<{
      key: ValidRefKey;
      value: string | string[] | boolean;
    }> = [
      { key: "firstName", value: formData.firstName },
      { key: "email", value: formData.email },
      { key: "company", value: formData.company },
      { key: "phone", value: formData.phone },
      { key: "industry", value: formData.industry },
      { key: "services", value: formData.services.length > 0 },
      { key: "budget", value: formData.budget },
      { key: "region", value: formData.region },
      { key: "projectDetails", value: formData.projectDetails },
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Submission failed");

      setShowSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        industry: "",
        services: [],
        budget: "",
        region: "",
        referralSource: "",
        projectDetails: "",
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

  const selectOption = (name: keyof FormData, value: string, multi = false) => {
    if (multi && name === "services") {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(value)
          ? prev.services.filter((item: string) => item !== value)
          : [...prev.services, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    setOpenDropdown(null);
  };

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const getDropdownValue = (name: keyof FormData): string => {
    const value = formData[name];
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value as string;
  };

  const renderDropdown = (
    name: ValidRefKey,
    options: string[],
    multi = false,
    label?: string,
  ) => {
    const isActive = activeField === name;
    const value = getDropdownValue(name);

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
                  onClick={() => selectOption(name, option, multi)}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 flex justify-between items-center border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-700">{option}</span>
                  {multi &&
                    name === "services" &&
                    formData.services.includes(option) && (
                      <CheckCircle className="text-[#1570EF] w-5 h-5" />
                    )}
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
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Contact <span className="text-[#1570EF]">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Share your requirements and goals. We'll craft the perfect
              solution tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
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
                    className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-8 rounded-2xl text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="text-[#1570EF] w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#1570EF] mb-3">
                      Inquiry Successfully Submitted!
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Our team will contact you within 24 hours. Thank you for
                      choosing Upscale Alliance.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showSuccess && (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      Project Inquiry Form
                    </h2>
                    <p className="text-gray-500">
                      Fill out the details below and we'll get back to you
                      promptly
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                        <User className="w-5 h-5 text-[#1570EF]" />
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <input
                            ref={refs.firstName}
                            className={inputClass("firstName")}
                            placeholder="First Name *"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                firstName: e.target.value,
                              })
                            }
                            onFocus={() => handleFocus("firstName")}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div>
                          <input
                            className={inputClass("lastName")}
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                lastName: e.target.value,
                              })
                            }
                            onFocus={() => handleFocus("lastName")}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <input
                            ref={refs.email}
                            type="email"
                            className={inputClass("email")}
                            placeholder="Email Address *"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            onFocus={() => handleFocus("email")}
                            onBlur={handleBlur}
                          />
                        </div>
                        <div>
                          <input
                            ref={refs.company}
                            className={inputClass("company")}
                            placeholder="Company / Organization *"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                company: e.target.value,
                              })
                            }
                            onFocus={() => handleFocus("company")}
                            onBlur={handleBlur}
                          />
                        </div>
                      </div>

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

                    {/* Business Requirements */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
                        <Building className="w-5 h-5 text-[#1570EF]" />
                        Business Requirements
                      </h3>
                      <div className="space-y-6">
                        {renderDropdown(
                          "industry",
                          industryOptions,
                          false,
                          "Select Industry *",
                        )}
                        {renderDropdown(
                          "services",
                          serviceOptions,
                          true,
                          "Services Interested In *",
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              Estimated Budget *
                            </h4>
                            {renderDropdown(
                              "budget",
                              budgetOptions,
                              false,
                              "Select Budget *",
                            )}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-600 mb-2 flex items-center gap-1">
                              <Globe className="w-4 h-4" />
                              Region *
                            </h4>
                            {renderDropdown(
                              "region",
                              regionOptions,
                              false,
                              "Select Region *",
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600 mb-2">
                            How did you hear about us?
                          </h4>
                          {renderDropdown(
                            "referralSource",
                            referralOptions,
                            false,
                            "Select Referral Source",
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium text-gray-800">
                        Project Details
                      </h3>
                      <textarea
                        ref={refs.projectDetails}
                        className={inputClass("projectDetails")}
                        rows={5}
                        placeholder="Please describe your project requirements, goals, and timeline *"
                        value={formData.projectDetails}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectDetails: e.target.value,
                          })
                        }
                        onFocus={() => handleFocus("projectDetails")}
                        onBlur={handleBlur}
                      />
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
                          Submit Inquiry
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <Link
                  href="mailto:info@upscalealliance.com"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#1570EF] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-[#1570EF] transition-colors duration-200">
                    <Mail className="w-6 h-6 text-[#1570EF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900 font-medium group-hover:text-[#1570EF] transition-colors duration-200">
                      info@upscalealliance.com
                    </p>
                  </div>
                </Link>

                <Link
                  href="tel:+19179470117"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#1570EF] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-[#1570EF] transition-colors duration-200">
                    <Phone className="w-6 h-6 text-[#1570EF] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900 font-medium group-hover:text-[#1570EF] transition-colors duration-200">
                      +1 (917) 947-0117
                    </p>
                  </div>
                </Link>

                <div className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#1570EF]" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-sm text-gray-500 mb-1">Headquarters</p>
                    <p className="text-gray-900 font-medium leading-relaxed">
                      1501 South Greeley Hwy Ste C #1100 Cheyenne, WY 82007
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Office Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Location
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden border border-gray-200">
                  <iframe
                    className="w-full h-full"
                    src="https://maps.google.com/maps?q=Cheyenne%2C%20Wyoming&z=6&output=embed"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Upscale Alliance Headquarters Location"
                  />
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                ⚡ Quick Response
              </h4>
              <p className="text-gray-600 mb-4">
                We typically respond within 2 hours during business days
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    24/7 Email Support
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Phone Support 9AM-6PM EST
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Emergency Support Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMain;
