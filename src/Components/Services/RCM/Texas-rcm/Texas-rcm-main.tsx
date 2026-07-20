"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import {
  Hospital,
  Stethoscope,
  Building,
  Users,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const TexasRCMPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSpecialtyTab, setActiveSpecialtyTab] = useState("hospitals");
  const [expandedMobileSections, setExpandedMobileSections] = useState<
    string[]
  >(["hospitals"]);

  const faqs = [
    {
      question: "Why choose a Texas-based RCM company for healthcare billing?",
      answer:
        "Texas-based RCM companies understand local payer requirements, Texas Medicaid regulations, and regional healthcare networks. We have established relationships with major Texas payers like Blue Cross Blue Shield of Texas, Texas Medicaid, and local Medicare administrators, ensuring faster claim processing and better reimbursement rates for Texas healthcare providers.",
    },
    {
      question:
        "What makes UpscaleAlliance different from other RCM companies in Texas?",
      answer:
        "As a Texas-rooted RCM specialist, we combine deep local market knowledge with advanced technology. Our Texas-based team understands regional compliance requirements, provides dedicated account management from our Texas offices, and offers bilingual support for Spanish-speaking patients across Texas communities.",
    },
    {
      question: "How do you handle Texas Medicaid and CHIP billing?",
      answer:
        "We have certified Texas Medicaid billing specialists who manage all aspects of Texas Medicaid and CHIP claims including TMHP portal management, Texas Medicaid-specific coding requirements, prior authorizations for Texas programs, and compliance with Texas Medicaid regulations for both fee-for-service and managed care plans.",
    },
    {
      question: "What Texas healthcare specialties do you serve?",
      answer:
        "We serve all major Texas healthcare specialties including Houston medical centers, Dallas hospital systems, San Antonio clinics, Austin private practices, Fort Worth specialty groups, El Paso border health providers, and rural Texas healthcare facilities across all 254 Texas counties.",
    },
    {
      question:
        "Can you help with Texas workers' compensation and personal injury billing?",
      answer:
        "Yes, we specialize in Texas workers' comp billing following Texas Department of Insurance guidelines, Texas Division of Workers' Compensation rules, and personal injury protection (PIP) claims specific to Texas auto insurance requirements and Texas trauma service areas.",
    },
    {
      question: "Do you offer bilingual RCM support for Texas providers?",
      answer:
        "Absolutely. Our Texas-based team provides bilingual English/Spanish support for patient billing inquiries, insurance verification for Texas-Mexico border communities, and culturally competent revenue cycle management for diverse Texas patient populations across major metropolitan areas and rural regions.",
    },
    {
      question: "How quickly can Texas providers see improved revenue?",
      answer:
        "Most Texas healthcare providers see measurable improvements within 30-60 days, including 40% faster reimbursements from Texas payers, 85% reduction in Texas Medicaid denials, and improved cash flow from major Texas insurance networks and hospital systems across the state.",
    },
    {
      question:
        "Are you familiar with Texas health information exchange requirements?",
      answer:
        "Yes, we ensure compliance with Texas Health Services Authority (THSA) requirements, Texas HIE participation, and state-specific data sharing regulations while maintaining HIPAA compliance and Texas Medical Board billing guidelines for all healthcare providers in Texas.",
    },
  ];

  const specialties = {
    hospitals: {
      title: "Hospital Systems",
      icon: <Hospital className="w-4 h-4" />,
      items: [
        "Texas Hospital Systems",
        "Houston Medical Centers",
        "Dallas Hospital Networks",
        "San Antonio Healthcare Systems",
        "Austin Hospital Groups",
        "Texas Trauma Centers",
        "Texas Children's Hospitals",
        "Women's Hospitals Texas",
        "Texas Rehabilitation Hospitals",
        "Psychiatric Hospitals Texas",
        "Critical Access Hospitals Texas",
        "Long-Term Acute Care Texas",
        "Texas Academic Medical Centers",
        "VA Hospitals Texas",
        "Military Hospitals Texas",
        "Texas Cancer Centers",
        "Cardiac Hospitals Texas",
        "Texas Surgical Hospitals",
        "Behavioral Health Hospitals",
        "Texas Specialty Hospitals",
      ],
    },
    clinics: {
      title: "Clinics & Centers",
      icon: <Building className="w-4 h-4" />,
      items: [
        "Dallas-Fort Worth Clinics",
        "Austin Private Practices",
        "San Antonio Specialty Clinics",
        "El Paso Border Health Clinics",
        "Texas Multi-Specialty Clinics",
        "Texas Surgical Centers",
        "Ambulatory Surgery Centers Texas",
        "Texas Outpatient Clinics",
        "Rural Health Clinics Texas",
        "Federally Qualified Health Centers",
        "Community Health Centers Texas",
        "Texas Urgent Care Chains",
        "Occupational Medicine Clinics",
        "Texas Dental Clinics",
        "Vision Care Clinics Texas",
        "Texas Podiatry Clinics",
        "Chiropractic Clinics Texas",
        "Physical Therapy Clinics",
        "Texas Wellness Centers",
        "Mobile Clinics Texas",
      ],
    },
    specialties: {
      title: "Medical Specialties",
      icon: <Stethoscope className="w-4 h-4" />,
      items: [
        "Cardiology Texas",
        "Orthopedics Texas",
        "Oncology Texas",
        "Urgent Care Texas",
        "Mental Health Texas",
        "Behavioral Health Texas",
        "Pediatrics Texas",
        "Texas Emergency Medicine",
        "Family Medicine Texas",
        "Internal Medicine Texas",
        "Texas Gastroenterology",
        "Texas Pulmonology",
        "Texas Endocrinology",
        "Texas Rheumatology",
        "Texas Nephrology",
        "Texas Neurology",
        "Texas Urology",
        "Texas Obstetrics & Gynecology",
        "Texas Dermatology",
        "Texas Ophthalmology",
        "Texas Otolaryngology",
        "Texas Plastic Surgery",
        "Texas Vascular Surgery",
        "Texas Neurosurgery",
        "Texas Anesthesiology",
        "Texas Radiology",
      ],
    },
    programs: {
      title: "Programs & Services",
      icon: <Users className="w-4 h-4" />,
      items: [
        "Texas Medicaid Providers",
        "CHIP Texas Programs",
        "Texas Workers Compensation",
        "Personal Injury Texas",
        "Telehealth Texas Providers",
        "Texas Rural Healthcare",
        "Texas Home Health Agencies",
        "Texas Hospice Care",
        "Texas Skilled Nursing Facilities",
        "Texas Assisted Living",
        "Texas Memory Care",
        "Texas Substance Abuse Centers",
        "Texas Eating Disorder Clinics",
        "Texas Autism Centers",
        "Texas Developmental Centers",
        "Texas Wound Care Centers",
        "Texas Infusion Centers",
        "Texas Dialysis Centers",
        "Texas Sleep Centers",
        "Texas Pain Management",
      ],
    },
    regions: {
      title: "Texas Regions",
      icon: <MapPin className="w-4 h-4" />,
      items: [
        "North Texas RCM",
        "Central Texas Healthcare",
        "South Texas Medical Billing",
        "West Texas Providers",
        "East Texas Rural Health",
        "Gulf Coast Healthcare",
        "Texas Panhandle Providers",
        "Hill Country Practices",
        "Texas Border Health",
        "Metroplex Healthcare",
        "Texas Coastal Bend",
        "Piney Woods East Texas",
        "Texas South Plains",
        "Permian Basin Healthcare",
        "Trans-Pecos Region",
        "Texas Prairies & Lakes",
        "Big Bend Country Providers",
        "Texas Hill Country West",
        "Texas Plains Providers",
        "Texas Metro Healthcare",
      ],
    },
  };

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  };

  const processSteps = [
    {
      number: "01",
      title: "Texas Patient Intake & Eligibility",
      description:
        "Verify Texas-specific insurance including Texas Medicaid, Blue Cross Blue Shield of Texas, and regional Texas payers to prevent claim denials.",
      icon: "👤",
    },
    {
      number: "02",
      title: "Texas-Compliant Medical Coding",
      description:
        "Certified Texas coders ensure accurate CPT, ICD-10 coding for all major Texas metropolitan areas and rural communities.",
      icon: "📋",
    },
    {
      number: "03",
      title: "Texas Claims Submission",
      description:
        "Claims scrubbed for Texas requirements and submitted to TMHP, Texas Medicaid MCOs, and regional Texas insurance networks.",
      icon: "📤",
    },
    {
      number: "04",
      title: "Texas Payment Posting",
      description:
        "Post payments from Texas payers, reconcile Texas EOBs/ERAs, identify Texas-specific underpayments.",
      icon: "💰",
    },
    {
      number: "05",
      title: "Texas Denial Management",
      description:
        "Texas-specific denial analysis and appeals for Texas Medicaid reconsiderations and commercial payer appeals.",
      icon: "🔄",
    },
    {
      number: "06",
      title: "Texas AR Follow-Ups",
      description:
        "Continuous follow-ups with Texas payers and detailed financial reporting for Texas healthcare revenue.",
      icon: "📊",
    },
  ];

  const texasCities = [
    { name: "Dallas", patients: "2.5M+", providers: "850+" },
    { name: "Houston", patients: "3.2M+", providers: "950+" },
    { name: "Austin", patients: "1.8M+", providers: "620+" },
    { name: "San Antonio", patients: "2.1M+", providers: "720+" },
    { name: "Fort Worth", patients: "1.5M+", providers: "540+" },
    { name: "El Paso", patients: "1.1M+", providers: "380+" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Navigation Helper */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Link href="#cta" aria-label="Get Texas RCM Consultation">
          <button className="bg-[#1570EF] text-white p-4 rounded-full shadow-2xl hover:bg-[#101828] transition-all duration-300 animate-bounce">
            <Phone className="w-6 h-6" />
          </button>
        </Link>
      </div>

      {/* Texas RCM Hero Section - Mobile Optimized */}
      <section
        className="w-full pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50"
        itemScope
        itemType="https://schema.org/MedicalBusiness"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col justify-between lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
            {/* Left Content - Mobile First */}
            <div className="w-full lg:max-w-[600px] order-2 lg:order-1">
              <span className="inline-block mb-3 text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Texas Revenue Cycle Management
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-5">
                <span className="block">Texas Revenue Cycle</span>
                <span className="block">Management for</span>
                <span className="text-blue-600">Healthcare Providers</span>
              </h1>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-7">
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  UpscaleAlliance provides specialized{" "}
                  <strong className="text-gray-800">
                    Revenue Cycle Management in Texas
                  </strong>{" "}
                  for hospitals, clinics, and private practices across all 254
                  Texas counties.
                </p>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Our{" "}
                  <strong className="text-gray-800">
                    Texas-based RCM team
                  </strong>{" "}
                  understands local payer requirements, Texas Medicaid
                  regulations, and regional healthcare networks.
                </p>
              </div>

              {/* Mobile Optimized CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="/rcm-contact" className="w-full sm:w-auto">
                  <button className="cursor-pointer w-full bg-[#1570EF] hover:bg-[#101828] transition-all duration-300 text-white px-6 py-3.5 font-semibold rounded-lg shadow-md active:scale-[0.98]">
                    Book Free Texas RCM Consultation
                  </button>
                </Link>
                <Link href="#texas-speci" className="w-full sm:w-auto">
                  <button className="cursor-pointer w-full bg-white hover:bg-gray-50 transition-all duration-300 text-[#1570EF] px-6 py-3.5 font-semibold rounded-lg border border-[#1570EF] active:scale-[0.98]">
                    View Texas Specialties
                  </button>
                </Link>
              </div>

              {/* Trust Indicators - Mobile Stacked */}
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 md:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Texas HIPAA-Compliant</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Texas Medicaid Experts</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Texas-Based Specialists</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact - Mobile Only */}
              <div className="mt-8 lg:hidden">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <a href="tel:+18325551234" className="font-medium">
                    (832) 555-1234
                  </a>
                  <span className="text-gray-400">•</span>
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a
                    href="mailto:info@upscalealliance.com"
                    className="font-medium"
                  >
                    info@upscalealliance.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image - Mobile Optimized */}
            <div className="w-full max-w-[520px] hidden md:flex order-1 lg:order-2">
              <Image
                src="/rcm-hero.png"
                alt="Healthcare revenue cycle management and medical billing services"
                width={520}
                height={520}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Texas Cities Coverage - Mobile Optimized */}
      <section className="py-8 px-4 bg-white border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-center text-gray-700 text-sm font-semibold mb-6">
            Serving Major Texas Cities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {texasCities.map((city, index) => (
              <div
                key={index}
                className="text-center p-3 bg-blue-50 rounded-xl"
              >
                <p className="font-bold text-gray-900 text-lg">{city.name}</p>
                <p className="text-gray-600 text-xs mt-1">
                  {city.patients} patients
                </p>
                <p className="text-gray-600 text-xs">
                  {city.providers} providers
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texas Specialties Statement - Mobile Optimized */}
      <div id="texas-speci" className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-[#F5F9FF] text-neutral-900 rounded-2xl md:rounded-3xl shadow-sm p-6 md:p-8 lg:p-12"
        >
          <div className="mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-100/50 rounded-full mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-blue-700">
                Texas Healthcare RCM Solutions
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Texas Revenue Cycle
              </span>
              <span className="block">Management Specialists</span>
            </h2>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              for Texas Healthcare Providers
            </p>

            <p className="text-gray-600 text-sm md:text-base lg:text-lg mt-4 md:mt-6 max-w-3xl">
              Serving <strong>Dallas RCM</strong>,{" "}
              <strong>Houston medical billing</strong>,{" "}
              <strong>Austin healthcare</strong>,{" "}
              <strong>San Antonio clinics</strong>,{" "}
              <strong>Fort Worth providers</strong>,{" "}
              <strong>El Paso border health</strong>, and all 254 Texas counties
            </p>
          </div>

          {/* Desktop Tabs (Hidden on Mobile) */}
          <div className="hidden lg:block mb-6">
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(specialties).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveSpecialtyTab(key)}
                  className={`flex items-center gap-2 cursor-pointer px-5 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSpecialtyTab === key
                      ? "bg-[#296BFC] text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {category.icon}
                  {category.title}
                </button>
              ))}
            </div>

            <motion.div
              key={activeSpecialtyTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px]"
            >
              <div className="flex flex-wrap gap-3">
                {specialties[
                  activeSpecialtyTab as keyof typeof specialties
                ].items.map((specialty, index) => (
                  <motion.span
                    key={specialty}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                    className="bg-[#296BFC] text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-sm hover:bg-[#0F5BD3] transition-colors cursor-pointer"
                  >
                    {specialty}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Accordion (Visible on Mobile) */}
          <div className="lg:hidden mb-6">
            <AnimatePresence>
              {Object.entries(specialties).map(([key, category]) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-3 border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleMobileSection(key)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-blue-600">{category.icon}</div>
                      <span className="font-semibold text-gray-900">
                        {category.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        expandedMobileSections.includes(key) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedMobileSections.includes(key) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <div className="flex flex-wrap gap-2">
                            {category.items.slice(0, 8).map((item, index) => (
                              <motion.span
                                key={item}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#296BFC] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-sm"
                              >
                                {item}
                              </motion.span>
                            ))}
                            {category.items.length > 8 && (
                              <span className="text-xs text-gray-500 px-3 py-1.5">
                                +{category.items.length - 8} more
                              </span>
                            )}
                          </div>
                          {category.items.length > 8 && (
                            <button
                              onClick={() => setActiveSpecialtyTab(key)}
                              className="mt-3 text-blue-600 text-sm font-medium flex items-center gap-1 hover:text-blue-700"
                            >
                              View all {category.items.length} items
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Mobile Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-xs text-gray-600">Texas Specialties</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                <div className="text-2xl font-bold text-blue-600">254</div>
                <div className="text-xs text-gray-600">Texas Counties</div>
              </div>
            </div>
          </div>

          {/* Tab Description (Desktop Only) */}
          <div className="hidden lg:block mt-6 p-5 bg-blue-50/50 rounded-xl border border-blue-100">
            <p className="text-gray-700">
              {activeSpecialtyTab === "hospitals" &&
                "We provide specialized RCM solutions for all types of Texas hospital systems, from major medical centers to specialized care facilities across the state."}
              {activeSpecialtyTab === "clinics" &&
                "Comprehensive RCM services for Texas clinics, surgical centers, and outpatient facilities of all sizes and specialties."}
              {activeSpecialtyTab === "specialties" &&
                "Specialty-specific medical billing and coding expertise for Texas healthcare providers across all medical disciplines with Texas-specific coding requirements."}
              {activeSpecialtyTab === "programs" &&
                "Managed care and specialized program billing for Texas Medicaid, CHIP, workers' comp, and other state-specific healthcare programs."}
              {activeSpecialtyTab === "regions" &&
                "Regional RCM expertise serving healthcare providers across all Texas geographical regions, from urban centers to rural communities."}
            </p>
          </div>

          {/* Additional Services (Desktop Only) */}
          <div className="hidden lg:block mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Texas RCM Services
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                "Texas Medicaid & TMHP Billing",
                "Texas Workers' Comp Claims",
                "Personal Injury Protection (PIP)",
                "Texas Auto Accident Claims",
                "Veterans Affairs (VA) Billing",
                "Texas CHIP Program Management",
                "Texas Health Plan Credentialing",
                "Texas Provider Enrollment",
                "Texas Medical License Support",
                "Texas Compliance Audits",
                "Texas Revenue Analytics",
                "Texas AR Recovery Services",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white/80 rounded-lg hover:bg-white transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Quick Services */}
          <div className="lg:hidden mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Key Texas Services
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                "Texas Medicaid Billing",
                "Workers' Comp Texas",
                "Telehealth RCM Texas",
                "Texas Provider Credentialing",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="mt-8 pt-6 border-t border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/rcm-contact" className="block">
                <button className=" cursor-pointer w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-base md:text-lg">
                  Get Custom Texas RCM Solution
                </button>
              </Link>
              <Link href="#Texas-RCM-FAQ" className="block">
                <button className="w-full bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all active:scale-[0.98] text-base md:text-lg">
                  View Texas RCM FAQs
                </button>
              </Link>
            </div>

            <p className="text-center text-gray-600 text-sm mt-4">
              All Texas regions served • Bilingual support available • 24/7
              Texas-based support
            </p>
          </div>
        </motion.div>
      </div>

      {/* Texas RCM Process - Mobile Optimized */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="inline-block mb-3 text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Texas RCM Process
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 md:mb-4">
              Texas-Specific Revenue Cycle Workflow
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our <strong>Texas Revenue Cycle Management process</strong> is
              tailored for Texas healthcare providers, addressing local
              requirements across the Lone Star State.
            </p>
          </div>

          {/* Process Steps - Mobile Stacked */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">{step.icon}</div>
                  </div>
                  <div>
                    <div className="text-blue-600 font-bold text-lg md:text-xl mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Texas RCM Results - Mobile Optimized */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12">
            Texas Healthcare RCM Outcomes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { value: "40%", label: "Faster Texas Reimbursements" },
              { value: "85%", label: "Reduction in Texas Denials" },
              { value: "99%", label: "Texas Clean Claim Rate" },
              { value: "25%", label: "Increased Texas Collections" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 md:p-6 bg-white/80 rounded-xl md:rounded-2xl shadow-sm"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm md:text-base mt-6 md:mt-8 max-w-2xl mx-auto">
            Average results for Texas healthcare providers across major Texas
            metropolitan areas
          </p>
        </div>
      </section>

      {/* Texas RCM System Flow - Mobile Optimized */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-[#0B1220] text-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-10 md:mb-16 max-w-[700px]">
            <span className="text-xs md:text-sm font-semibold text-blue-400 uppercase tracking-wider">
              UpscaleAlliance Texas RCM System
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
              Texas Revenue Cycle Management Built for Texas Providers
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Our <strong>Texas-based RCM system</strong> addresses unique
              challenges like Texas Medicaid billing and local compliance
              requirements.
            </p>
          </div>

          {/* Flow - Mobile Vertical */}
          <div className="flex flex-col gap-6 md:gap-8">
            {[
              {
                step: "Step 1",
                title: "Texas Local Market Expertise",
                description:
                  "Deep understanding of Texas healthcare markets, local payer contracts, and regional billing requirements.",
              },
              {
                step: "Step 2",
                title: "Texas Compliance Focus",
                description:
                  "Texas-specific compliance including Medicaid regulations, Medical Board requirements, and local healthcare laws.",
              },
              {
                step: "Step 3",
                title: "Texas Revenue Optimization",
                description:
                  "Maximize reimbursements from Texas payers and improve cash flow for healthcare providers statewide.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 md:gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="bg-blue-900/30 text-blue-400 text-sm font-medium px-3 py-1.5 rounded-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                {index < 2 && (
                  <ArrowRight className="hidden lg:block w-8 h-8 text-gray-500 ml-auto" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-10 md:mt-12 pt-8 border-t border-gray-800">
            <Link href="/rcm-contact">
              <button className=" cursor-pointer w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98]">
                Start Your Texas RCM Assessment
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Texas Who We Serve - Mobile Optimized */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="inline-block mb-3 text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Texas Healthcare Providers
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 md:mb-4">
              Serving Texas Healthcare Statewide
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We serve healthcare providers across all Texas regions including
              major cities, rural communities, and border health facilities.
            </p>
          </div>

          {/* Texas Providers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                title: "Texas Hospital Systems",
                description:
                  "Serving major Texas hospital networks in Dallas-Fort Worth, Houston Medical Center, San Antonio, and Austin.",
              },
              {
                title: "Texas Private Practices",
                description:
                  "End-to-end billing for solo and group practices across Texas including specialty and family medicine.",
              },
              {
                title: "Texas Specialty Clinics",
                description:
                  "Specialty-specific RCM for cardiology, orthopedics, oncology across Texas metropolitan areas.",
              },
              {
                title: "Texas Urgent Care Centers",
                description:
                  "Fast-paced RCM for Texas urgent care chains across major cities and suburban communities.",
              },
              {
                title: "Texas Behavioral Health",
                description:
                  "Mental health and behavioral health RCM for therapy practices and counseling centers statewide.",
              },
              {
                title: "Texas Rural Healthcare",
                description:
                  "Specialized RCM for rural Texas hospitals and clinics serving underserved communities.",
              },
            ].map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-5 md:p-6 bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                  {provider.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {provider.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Texas RCM FAQ - Mobile Optimized */}
      <section
        id="Texas-RCM-FAQ"
        className="py-12 md:py-20 px-4 sm:px-6 bg-white"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="inline-block mb-3 text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Texas RCM FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3 md:mb-4">
              Texas Revenue Cycle Management Questions
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Common questions about Revenue Cycle Management services for Texas
              healthcare providers.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full p-4 md:p-6 text-left flex justify-between items-center hover:bg-blue-50 transition-colors active:bg-blue-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 pr-4 text-left">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* FAQ Contact CTA */}
          <div className="mt-10 md:mt-12 pt-8 border-t border-gray-100">
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Still have questions about Texas RCM?
              </p>
              <Link href="/rcm-contact">
                <button className=" cursor-pointer inline-flex items-center gap-2 bg-[#1570EF] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#101828] transition-colors active:scale-[0.98]">
                  <Phone className="w-5 h-5" />
                  Speak with Texas RCM Expert
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Texas RCM CTA - Mobile Optimized */}
      <section id="cta" className="py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-neutral-900 rounded-2xl md:rounded-3xl px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 text-white overflow-hidden relative"
          >
            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xs md:text-sm uppercase tracking-widest text-blue-400 mb-3 md:mb-4"
              >
                Texas Revenue Clarity Starts Here
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6"
              >
                <span className="block">Ready to Optimize Your</span>
                <span className="block">Texas Healthcare Revenue?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-neutral-300 text-sm md:text-base lg:text-lg mb-6 md:mb-8 lg:mb-10 max-w-2xl"
              >
                Partner with Texas&apos; leading Revenue Cycle Management
                company. Reduce denials, accelerate reimbursements, and gain
                complete revenue visibility.
              </motion.p>

              {/* CTA Actions - Mobile Stacked */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                <Link href="/rcm-contact">
                  <button className=" cursor-pointer w-full bg-[#296BFC] text-white px-6 py-4 rounded-xl font-medium shadow-sm hover:bg-[#0F5BD3] transition-colors active:scale-[0.98] text-base md:text-lg">
                    Request Texas Revenue Assessment
                  </button>
                </Link>
                <Link href="/rcm-contact">
                  <button className="cursor-pointer w-full bg-white/5 text-white px-6 py-4 rounded-xl font-medium border border-white/10 hover:bg-white/10 transition-colors active:scale-[0.98] text-base md:text-lg">
                    Talk to Texas RCM Specialist
                  </button>
                </Link>
              </motion.div>

              {/* Contact Info - Mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <a
                      href="tel:+18325551234"
                      className="hover:text-blue-400 transition-colors"
                    >
                      (832) 555-1234
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a
                      href="mailto:info@upscalealliance.com"
                      className="hover:text-blue-400 transition-colors"
                    >
                      info@upscalealliance.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Serving In Texas Regions</span>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-neutral-400 text-xs md:text-sm mt-6 text-center"
              >
                Serving Our Best To Texas healthcare providers
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TexasRCMPage;
