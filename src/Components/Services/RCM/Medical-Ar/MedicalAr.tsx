"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  Shield,
  TrendingUp,
  Clock,
  Users,
  FileText,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

// Main Page Component
export default function MedicalBillingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Who We Serve */}
      <TargetAudience />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Overview */}
      <SolutionSection />

      {/* Core Services */}
      <CoreServices />

      {/* Why Choose Us */}
      <DifferentiationSection />

      {/* Results & Outcomes */}
      <ResultsSection />

      {/* Our Process */}
      <ProcessSection />

      {/* Pricing Models */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTASection />
    </div>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  // Real-time comparison data
  const comparisonData = [
    { month: "Jan", otherCompanies: 65, upscale: 72 },
    { month: "Feb", otherCompanies: 68, upscale: 76 },
    { month: "Mar", otherCompanies: 70, upscale: 81 },
    { month: "Apr", otherCompanies: 72, upscale: 85 },
    { month: "May", otherCompanies: 70, upscale: 88 },
    { month: "Jun", otherCompanies: 68, upscale: 92 },
    { month: "Jul", otherCompanies: 65, upscale: 94 },
    { month: "Aug", otherCompanies: 63, upscale: 96 },
    { month: "Sep", otherCompanies: 65, upscale: 98 },
    { month: "Oct", otherCompanies: 67, upscale: 97 },
    { month: "Nov", otherCompanies: 65, upscale: 98 },
    { month: "Dec", otherCompanies: 66, upscale: 99 },
  ];

  // Benefits data
  const benefits = [
    { metric: "Clean Claim Rate", before: 65, after: 98, improvement: "+33%" },
    { metric: "Days in AR", before: 45, after: 22, improvement: "-23 days" },
    { metric: "Denial Rate", before: 25, after: 5, improvement: "-20%" },
    { metric: "Collection Rate", before: 68, after: 96, improvement: "+28%" },
    {
      metric: "RCM Cost (% of revenue)",
      before: 8,
      after: 4,
      improvement: "-4%",
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-bold text-gray-900 mb-2">{label}</p>
          <div className="space-y-1">
            <p className="text-red-500 text-sm">
              <span className="font-semibold">Other Companies:</span>{" "}
              {payload[0].value}%
            </p>
            <p className="text-green-600 text-sm">
              <span className="font-semibold">Upscale Alliance:</span>{" "}
              {payload[1].value}%
            </p>
            <p className="text-blue-600 text-sm font-bold mt-2">
              Improvement: +{payload[1].value - payload[0].value}%
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-100 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-blue-700">
                REVENUE CYCLE OPTIMIZATION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Get Paid Faster. Lose Less Revenue.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
              We help healthcare providers, clinics, and medical groups improve
              cash flow, reduce denials, and get paid faster through compliant,
              end-to-end Revenue Cycle Management.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
              <Link href="/rcm-contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Request a Revenue Assessment
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </Link>
            </div>

            {/* Quick Stats - Mobile Hidden */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "98%", label: "Clean Claim Rate" },
                { value: "40%", label: "Faster Payments" },
                { value: "85%", label: "Denial Reduction" },
                { value: "99.9%", label: "Accuracy Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Graph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl p-4 md:p-6 border border-gray-200">
              {/* Graph Header */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Performance Comparison
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mt-1">
                  12-Month Timeline
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs md:text-sm text-gray-600">
                      Other Companies
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs md:text-sm text-gray-600">
                      With Upscale Alliance
                    </span>
                  </div>
                </div>
              </div>

              {/* Graph Container */}
              <div className="h-[250px] md:h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={comparisonData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="month"
                      stroke="#666"
                      tick={{ fill: "#666", fontSize: 12 }}
                    />
                    <YAxis
                      stroke="#666"
                      tick={{ fill: "#666", fontSize: 12 }}
                      domain={[60, 100]}
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                    />
                    <Area
                      type="monotone"
                      dataKey="otherCompanies"
                      stroke="#ef4444"
                      fill="#fecaca"
                      fillOpacity={0.3}
                      strokeWidth={2}
                      name="Other Companies"
                      dot={{ stroke: "#ef4444", strokeWidth: 2, r: 3 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="upscale"
                      stroke="#10b981"
                      fill="#a7f3d0"
                      fillOpacity={0.3}
                      strokeWidth={3}
                      name="Upscale Alliance"
                      dot={{ stroke: "#10b981", strokeWidth: 3, r: 4 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-green-600">98%</div>
                  <div className="text-xs md:text-sm text-gray-600">Clean Claim</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-green-600">85%</div>
                  <div className="text-xs md:text-sm text-gray-600">Denial Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-green-600">40%</div>
                  <div className="text-xs md:text-sm text-gray-600">Faster Payments</div>
                </div>
              </div>

              {/* RCM Metrics Note */}
              <div className="mt-3 md:mt-4 p-2 md:p-3 bg-blue-50 rounded-lg">
                <p className="text-xs md:text-sm text-blue-700 font-medium">
                  <span className="font-bold">Key Insight:</span> Daniel Rate increased from $85 to $142
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== TRUST BADGES ====================
function TrustBadges() {
  const badges = [
    { icon: Shield, text: "HIPAA-Compliant" },
    { icon: FileText, text: "US Healthcare Standards" },
    { icon: TrendingUp, text: "Denial Reduction" },
    { icon: Clock, text: "Full Visibility" },
  ];

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-800">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TARGET AUDIENCE ====================
function TargetAudience() {
  const providers = [
    "Medical Clinics & Group Practices",
    "Hospitals & Specialty Centers",
    "Mental Health & Behavioral Health Providers",
    "DME Providers",
    "Telemedicine & Virtual Care Clinics",
    "Independent Physicians & Multi-location Practices",
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              WHO WE WORK WITH
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Designed for Healthcare Organizations That Need Accuracy,
              Compliance & Predictable Revenue
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Tailored billing solutions for diverse healthcare providers
            </p>
          </div>

          {/* Provider Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {providers.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 md:p-6 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                      {provider}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      Customized billing solutions for specific needs
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== PROBLEM SECTION ====================
function ProblemSection() {
  const painPoints = [
    "High claim denial rates impacting revenue",
    "Slow reimbursements and aging accounts receivable",
    "Coding errors leading to underpayments",
    "Staff overload and operational burnout",
    "Limited visibility into financial performance",
    "Constant changes in payer rules & compliance requirements",
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-red-100 text-red-700 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              THE PROBLEM
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Why Most Healthcare Providers Struggle With Revenue
            </h2>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full" />
                  </div>
                  <span className="text-sm md:text-base text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <div className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <p className="text-base md:text-lg font-semibold text-blue-900">
                Revenue loss isn't just a billing issue it's a systems issue.
                That's where we come in.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-8">
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-full blur-xl opacity-50" />
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Common Revenue Leaks
              </h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    label: "Unsubmitted Claims",
                    value: "15%",
                    color: "bg-red-500",
                  },
                  {
                    label: "Denied Claims",
                    value: "25%",
                    color: "bg-orange-500",
                  },
                  {
                    label: "Underpayments",
                    value: "30%",
                    color: "bg-yellow-500",
                  },
                  {
                    label: "Aged AR (90+ days)",
                    value: "20%",
                    color: "bg-blue-500",
                  },
                ].map((leak, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1 md:mb-2">
                      <span className="text-sm md:text-base text-gray-700">{leak.label}</span>
                      <span className="font-bold text-gray-900">
                        {leak.value}
                      </span>
                    </div>
                    <div className="h-2 md:h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${leak.color} rounded-full transition-all duration-1000`}
                        style={{ width: leak.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== SOLUTION SECTION ====================
function SolutionSection() {
  const rcmFlow = [
    "Patient Registration",
    "Insurance Verification",
    "Medical Coding",
    "Claim Submission",
    "Payment Posting",
    "Denial Management",
    "AR Follow-Ups",
    "Financial Reporting",
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            OUR SOLUTION
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            End-to-End Revenue Cycle Management
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12">
            We manage the entire medical billing lifecycle from patient intake
            to final payment ensuring accuracy, compliance, and maximum
            reimbursement.
          </p>
        </motion.div>

        {/* RCM Flow Visual */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex justify-between overflow-x-auto pb-8">
              {rcmFlow.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center min-w-[120px] mx-2"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                    <span className="text-white font-bold text-base md:text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-center font-medium text-gray-800 text-sm md:text-base max-w-[110px]">
                    {step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-3 md:space-y-4">
            {rcmFlow.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-white to-blue-50 rounded-xl border border-gray-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span className="font-medium text-gray-800 text-sm md:text-base">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== CORE SERVICES ====================
function CoreServices() {
  const services = [
    {
      icon: FileText,
      title: "Medical Billing Services",
      features: [
        "Accurate claim creation & submission",
        "CPT, ICD-10 & HCPCS coding compliance",
        "Electronic & paper claim handling",
        "Clean claims process to reduce rejections",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: DollarSign,
      title: "Accounts Receivable (AR) Management",
      features: [
        "Active follow-ups on unpaid & underpaid claims",
        "Aging AR analysis (30 / 60 / 90+ days)",
        "Payer-specific follow-up strategies",
        "Faster collections & improved cash flow",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Denial Management",
      features: [
        "Root-cause analysis of denials",
        "Corrected & resubmitted claims",
        "Appeal management",
        "Continuous denial rate reduction",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Payment Posting & Reconciliation",
      features: [
        "Accurate EOB & ERA posting",
        "Underpayment identification",
        "Contractual adjustment validation",
        "Financial accuracy & transparency",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Compliance & Security",
      features: [
        "HIPAA-compliant processes",
        "Secure data handling",
        "Updated payer rules & regulations",
        "Audit-ready documentation",
      ],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Comprehensive Core Services
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Complete solutions covering every aspect of your revenue cycle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                {/* Icon Header */}
                <div className={`p-6 md:p-8 bg-gradient-to-r ${service.color}`}>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center mx-auto">
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== DIFFERENTIATION ====================
function DifferentiationSection() {
  const valuePoints = [
    "Healthcare-focused RCM expertise",
    "Dedicated billing & AR specialists",
    "Transparent reporting no black boxes",
    "Scalable for small clinics to large groups",
    "Reduced overhead vs in-house billing teams",
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Why Healthcare Providers Trust Us
            </h2>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {valuePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                  </div>
                  <span className="text-base md:text-lg text-gray-800">{point}</span>
                </div>
              ))}
            </div>

            <div className="p-4 md:p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <p className="text-base md:text-xl font-bold text-blue-900">
                We don't just process claims we protect your revenue.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {[
              { value: "15+", label: "Years RCM Experience" },
              { value: "180+", label: "Healthcare Clients" },
              { value: "98.5%", label: "Client Retention" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-200 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== RESULTS SECTION ====================
function ResultsSection() {
  const outcomes = [
    "Reduced claim denial rates",
    "Faster reimbursement cycles",
    "Improved AR recovery",
    "Higher net collections",
    "More time for patient care",
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            What You Can Expect
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Measurable improvements in your revenue cycle performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900">
                  {outcome}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl md:rounded-2xl p-6 md:p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "30-40%", label: "Improvement in Collections" },
              { value: "60%", label: "Reduction in Aged AR" },
              { value: "50%", label: "Faster Payment Posting" },
              { value: "90%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">{stat.value}</div>
                <div className="text-blue-100 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==================== PROCESS SECTION ====================
function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Revenue Assessment",
      description: "Evaluate current billing & AR performance",
    },
    {
      number: "02",
      title: "Workflow Setup",
      description: "Align processes with your practice",
    },
    {
      number: "03",
      title: "Billing & AR Execution",
      description: "Daily claim & follow-up management",
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "Continuous improvements",
    },
    {
      number: "05",
      title: "Reporting & Insights",
      description: "Clear financial visibility",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Our RCM Implementation Process
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            A structured approach to transform your revenue cycle
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex justify-between overflow-x-auto pb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex-1 min-w-[180px] mx-2"
                >
                  <div className="flex flex-col items-center">
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-blue-200 to-cyan-200" />
                    )}

                    {/* Step Circle */}
                    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                      <span className="text-white font-bold text-base md:text-xl">
                        {step.number}
                      </span>
                    </div>

                    {/* Step Content */}
                    <div className="text-center px-2">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="lg:hidden space-y-4 md:space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-r from-white to-blue-50 rounded-xl md:rounded-2xl border border-gray-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== PRICING SECTION ====================
function PricingSection() {
  const models = [
    {
      title: "Percentage-Based Billing",
      description: "Pay only a percentage of collections",
      features: [
        "No monthly fees",
        "Aligned with your revenue",
        "Ideal for growing practices",
      ],
    },
    {
      title: "Monthly RCM Management",
      description: "Fixed monthly fee for complete RCM services",
      features: [
        "Predictable budgeting",
        "Full RCM coverage",
        "Priority support",
      ],
    },
    {
      title: "AR Cleanup Projects",
      description: "One-time projects for backlog clearance",
      features: [
        "Focus on aged AR",
        "Quick revenue recovery",
        "No long-term commitment",
      ],
    },
    {
      title: "White-Label RCM for Agencies",
      description: "Resell our services under your brand",
      features: [
        "Agency partnerships",
        "Revenue share model",
        "Complete backend support",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Flexible Engagement Models
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
            Pricing depends on claim volume, specialty, and service scope
          </p>
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold">
            Contact us for customized pricing
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full flex flex-col"
            >
              <div className="h-full bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col">
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-6">{model.description}</p>

                  <ul className="space-y-2 md:space-y-3 mb-8">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 md:p-8 pt-0">
                  <Link href="/rcm-contact">
                    <button className="w-full cursor-pointer py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      Get Custom Quote
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ SECTION ====================
function FAQSection() {
  const faqs = [
    {
      question: "Do you work with US healthcare providers only?",
      answer:
        "Yes, our services are designed specifically for US healthcare billing standards and payer requirements.",
    },
    {
      question: "Are your services HIPAA compliant?",
      answer:
        "Absolutely. Compliance and data security are core to our operations. We follow strict HIPAA guidelines with encrypted data handling and secure access controls.",
    },
    {
      question: "Can you take over from our existing billing team?",
      answer:
        "Yes — we handle full transitions with zero disruption. Our team manages the entire migration process ensuring continuity in your revenue cycle.",
    },
    {
      question: "Do you manage denied and old AR claims?",
      answer:
        "Yes, AR cleanup and denial recovery are core services. We specialize in recovering revenue from aged accounts receivable and systematically reducing denial rates.",
    },
    {
      question: "How quickly can you improve our collections?",
      answer:
        "Most clients see measurable improvements within 30-60 days, with significant revenue impact within the first quarter of partnership.",
    },
    {
      question: "What makes your RCM different from other services?",
      answer:
        "We combine healthcare expertise with advanced technology and transparent reporting. Our focus is on protecting your revenue, not just processing claims.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Clear answers to common questions about our RCM services
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300"
            >
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2 md:mb-3 flex items-start gap-3">
                <span className="w-5 h-5 md:w-6 md:h-6 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  Q
                </span>
                {faq.question}
              </h3>
              <div className="pl-8 md:pl-9">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 md:w-6 md:h-6 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    A
                  </span>
                  <p className="text-gray-700 text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== FINAL CTA ====================
function FinalCTASection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6">
            Stop Losing Revenue. Start Getting Paid What You Deserve.
          </h2>

          <p className="text-base md:text-xl text-blue-200 mb-8 md:mb-12 max-w-3xl mx-auto">
            Let our medical billing and AR experts optimize your revenue cycle
            so you can focus on patient care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link href="/rcm-contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-6 py-4 md:px-10 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
              >
                Request a Free RCM Assessment
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </motion.button>
            </Link>
          </div>

          {/* Trust Assurance */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                "No Long-Term Contracts",
                "30-Day Money-Back Guarantee",
                "Dedicated Account Manager",
                "24/7 Support Access",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 text-white/80"
                >
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                  <span className="text-xs md:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}