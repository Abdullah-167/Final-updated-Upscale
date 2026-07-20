"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  CheckCircle2,
  XCircle,
  Shield,
  Clock,
  Users,
  FileText,
  Activity,
  Calendar,
  Target,
  BarChart3,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Check,
  Zap,
  DollarSign,
  AlertTriangle,
  CreditCard,
  Smartphone,
  Mail,
  Phone,
  UserCheck,
  FileSearch,
  Database,
  Cloud,
  Lock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import Link from "next/link";

// Main Page Component
export default function PatientEligibilityVerificationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Eligibility Process */}
      <EligibilityProcess />

      {/* Real-time Verification Dashboard */}
      <VerificationDashboard />

      {/* Coverage Types */}
      <CoverageTypes />

      {/* Technology & Integration */}
      <TechnologySection />

      {/* ROI & Results */}
      <ResultsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTASection />
    </div>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const verificationStats = [
    {
      value: "98.7%",
      label: "Accuracy Rate",
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      value: "<30s",
      label: "Average Verification",
      icon: Clock,
      color: "text-blue-600",
    },
    {
      value: "99.1%",
      label: "Success Rate",
      icon: Shield,
      color: "text-purple-600",
    },
    {
      value: "24/7",
      label: "Real-time Updates",
      icon: Activity,
      color: "text-orange-600",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-700">
                REAL-TIME ELIGIBILITY VERIFICATION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Patient Eligibility Verification{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                That Prevents Revenue Loss
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
              Real-time insurance verification and benefit checking to ensure
              clean claims, reduce denials, and eliminate payment delays before
              services are rendered.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/rcm-contact"}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className=" cursor-pointer w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule Assessment
                  <Calendar className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Verification Interface Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  Real-time Verification Interface
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600">Live Data</span>
                </div>
              </div>

              {/* Verification Form Preview */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Information
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-500">Patient Name</div>
                      <div className="text-sm font-medium text-gray-900">
                        John M. Smith
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-500">DOB</div>
                      <div className="text-sm font-medium text-gray-900">
                        05/15/1982
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Insurance Details
                  </label>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-blue-700">
                            Insurance Provider
                          </div>
                          <div className="text-sm font-medium text-gray-900">
                            Blue Cross Blue Shield
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-xs text-green-700">
                          Policy Status
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          Active ✓
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-xs text-green-700">
                          Effective Date
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          01/01/2024
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coverage Summary */}
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-4 rounded-xl border border-blue-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Coverage Summary
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Deductible Met
                      </span>
                      <span className="text-sm font-medium text-green-700">
                        $1,250 / $1,500
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Co-payment</span>
                      <span className="text-sm font-medium text-blue-700">
                        $30
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Co-insurance
                      </span>
                      <span className="text-sm font-medium text-blue-700">
                        20%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Out-of-pocket Max
                      </span>
                      <span className="text-sm font-medium text-gray-900">
                        $4,500
                      </span>
                    </div>
                  </div>
                </div>

                {/* Verification Status */}
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-green-900">
                        Eligibility Confirmed
                      </div>
                      <div className="text-xs text-green-700">
                        Verified 30 seconds ago
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Claim Status</div>
                    <div className="text-sm font-bold text-green-700">
                      Ready to Submit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== BENEFITS SECTION ====================
function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Reduce Claim Denials",
      description:
        "Eliminate front-end denials by verifying coverage before services are rendered",
      impact: "Up to 85% reduction in eligibility-related denials",
    },
    {
      icon: Clock,
      title: "Accelerate Payments",
      description:
        "Clean claims with verified eligibility are processed 40% faster by payers",
      impact: "Improve cash flow by reducing AR days by 15-20 days",
    },
    {
      icon: DollarSign,
      title: "Increase Collections",
      description:
        "Accurate benefit verification ensures proper patient responsibility collection",
      impact: "Increase point-of-service collections by 60-75%",
    },
    {
      icon: Users,
      title: "Improve Patient Experience",
      description:
        "Transparent cost estimates and clear insurance coverage information",
      impact: "95% patient satisfaction with pre-service financial counseling",
    },
    {
      icon: FileSearch,
      title: "Compliance Assurance",
      description:
        "HIPAA-compliant verification process with audit trail for every check",
      impact: "100% compliance with payer requirements and regulations",
    },
    {
      icon: Database,
      title: "Data Accuracy",
      description:
        "Real-time updates from 900+ payers including Medicare and Medicaid",
      impact: "98.7% accuracy rate in coverage verification",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Patient Intake Process
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive eligibility verification that impacts every aspect of
            your revenue cycle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-semibold text-blue-900">
                    {benefit.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== ELIGIBILITY PROCESS ====================
function EligibilityProcess() {
  const processSteps = [
    {
      step: "01",
      title: "Patient Registration",
      description: "Capture demographic and insurance information",
      checks: [
        "Insurance card scanning",
        "Demographic validation",
        "Policy number verification",
      ],
      icon: Users,
    },
    {
      step: "02",
      title: "Real-time Verification",
      description: "Instant connection to payer systems",
      checks: [
        "Active coverage check",
        "Eligibility status",
        "Effective dates",
      ],
      icon: Activity,
    },
    {
      step: "03",
      title: "Benefit Verification",
      description: "Detailed coverage analysis",
      checks: [
        "Deductible status",
        "Co-pay/Co-insurance",
        "Authorization requirements",
      ],
      icon: FileSearch,
    },
    {
      step: "04",
      title: "Patient Responsibility",
      description: "Clear financial communication",
      checks: [
        "Out-of-pocket estimates",
        "Payment options",
        "Financial agreements",
      ],
      icon: CreditCard,
    },
    {
      step: "05",
      title: "Documentation",
      description: "Complete audit trail",
      checks: [
        "Verification records",
        "Patient consents",
        "Regulatory compliance",
      ],
      icon: FileText,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            5-Step Eligibility Verification Process
          </h2>
          <p className="text-xl text-gray-600">
            A systematic approach to ensure complete coverage verification
            before service delivery
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 to-emerald-200" />

          <div className="grid grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Step Content */}
                  <div className="text-center px-2">
                    <div className="text-sm font-semibold text-blue-700 mb-1">
                      STEP {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {step.description}
                    </p>

                    <div className="space-y-1">
                      {step.checks.map((check, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          {check}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-blue-700">
                      STEP {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>

                  <div className="space-y-1">
                    {step.checks.map((check, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                        {check}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== VERIFICATION DASHBOARD ====================
function VerificationDashboard() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [verificationsToday, setVerificationsToday] = useState(0);

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);

      // Simulate increasing verification count
      setVerificationsToday((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const verificationData = [
    { status: "Verified", count: 892, color: "#10B981" },
    { status: "Pending", count: 45, color: "#F59E0B" },
    { status: "Requires Follow-up", count: 18, color: "#EF4444" },
    { status: "No Coverage", count: 7, color: "#6B7280" },
  ];

  const payerPerformance = [
    { payer: "BCBS", successRate: 98.5, avgTime: 2.1 },
    { payer: "United", successRate: 97.8, avgTime: 2.8 },
    { payer: "Aetna", successRate: 99.1, avgTime: 1.9 },
    { payer: "Cigna", successRate: 96.4, avgTime: 3.2 },
    { payer: "Medicare", successRate: 99.5, avgTime: 4.5 },
  ];

  return (
    <section
      id="demo-section"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live Verification Dashboard
          </h2>
          <p className="text-xl text-gray-600">
            Real-time visibility into your eligibility verification performance
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Live Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Live Stats Header */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    Real-time Verification System
                  </h3>
                  <p className="text-blue-100">Live updates every 3 seconds</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-200">Current Time</div>
                  <div className="text-lg font-mono font-bold">
                    {currentTime}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">
                    {verificationsToday}
                  </div>
                  <div className="text-sm text-blue-100">
                    Verifications Today
                  </div>
                </div>
                <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-1">2.4s</div>
                  <div className="text-sm text-blue-100">Avg Response Time</div>
                </div>
              </div>
            </div>

            {/* Payer Performance */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Payer Performance
              </h4>
              <div className="space-y-4">
                {payerPerformance.map((payer, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-700">
                          {payer.payer.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {payer.payer}
                        </div>
                        <div className="text-xs text-gray-500">
                          {payer.avgTime}s avg
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-700">
                        {payer.successRate}%
                      </div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Charts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Verification Status Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Today's Verification Status
              </h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={verificationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="count"
                      label={({ status, percent }: any) =>
                        `${status}: ${(percent * 100).toFixed(1)}%`
                      }
                    >
                      {verificationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: any) => [
                        `${value} verifications`,
                        "Count",
                      ]}
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Denial Prevention Impact */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Denial Prevention Impact
                  </h4>
                  <p className="text-gray-600 mb-3">
                    With real-time eligibility verification, practices typically
                    prevent:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">
                        85% of front-end denials
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">
                        $45-75 per claim in rework costs
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">
                        15-20 days in AR reductions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ==================== COVERAGE TYPES ====================
function CoverageTypes() {
  const coverageTypes = [
    {
      type: "Commercial Insurance",
      icon: CreditCard,
      providers: ["BCBS", "UnitedHealth", "Aetna", "Cigna", "Humana"],
      features: [
        "Real-time eligibility",
        "Deductible status",
        "Co-pay amounts",
        "Network status",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "Government Programs",
      icon: Shield,
      providers: ["Medicare", "Medicaid", "TRICARE", "VA", "CHIP"],
      features: [
        "Part A/B verification",
        "Medi-Medi crossover",
        "VA authorization",
        "State-specific rules",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "Exchange/Marketplace",
      icon: Smartphone,
      providers: [
        "HealthCare.gov",
        "State exchanges",
        "ACA plans",
        "Catastrophic plans",
      ],
      features: [
        "Subsidy verification",
        "Metal tier benefits",
        "Out-of-pocket tracking",
        "Network adequacy",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      type: "Specialty Coverage",
      icon: FileSearch,
      providers: [
        "Workers' Comp",
        "Auto Insurance",
        "Liability",
        "Disability",
        "Supplemental",
      ],
      features: [
        "Claim liability",
        "Attorney representation",
        "State fund verification",
        "Secondary coverage",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Coverage Verification
          </h2>
          <p className="text-xl text-gray-600">
            Support for all major insurance types and government programs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coverageTypes.map((coverage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                {/* Header */}
                <div
                  className={`p-6 bg-gradient-to-r ${coverage.color} text-white`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                      <coverage.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{coverage.type}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Providers */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Major Providers
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coverage.providers.map((provider, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {provider}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">
                      Verification Features
                    </h4>
                    <ul className="space-y-2">
                      {coverage.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== TECHNOLOGY & INTEGRATION ====================
function TechnologySection() {
  const integrations = [
    {
      name: "EMR/EHR Integration",
      icon: Database,
      description:
        "Seamless integration with major electronic health record systems",
      compatability: [
        "Epic",
        "Cerner",
        "Allscripts",
        "NextGen",
        "Athenahealth",
      ],
    },
    {
      name: "Practice Management",
      icon: BarChart3,
      description: "Direct connection to practice management software",
      compatability: [
        "GE Centricity",
        "eClinicalWorks",
        "Greenway",
        "McKesson",
      ],
    },
    {
      name: "Patient Portal",
      icon: Users,
      description: "Patient self-service verification through portals",
      compatability: [
        "Patient engagement platforms",
        "Mobile apps",
        "Web portals",
      ],
    },
    {
      name: "Clearinghouse",
      icon: Cloud,
      description: "Real-time connections through major clearinghouses",
      compatability: [
        "Change Healthcare",
        "Availity",
        "Waystar",
        "SSI",
        "ZirMed",
      ],
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      text: "HIPAA Compliant",
      description: "256-bit encryption & secure data handling",
    },
    {
      icon: Lock,
      text: "SOC 2 Certified",
      description: "Enterprise-grade security protocols",
    },
    {
      icon: Activity,
      text: "99.9% Uptime",
      description: "Redundant systems & 24/7 monitoring",
    },
    {
      icon: FileText,
      text: "Audit Trail",
      description: "Complete audit trail for compliance",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Advanced Technology & Seamless Integration
          </h2>
          <p className="text-xl text-gray-600">
            Built for modern healthcare IT infrastructure with enterprise-grade
            security
          </p>
        </motion.div>

        {/* Integration Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            System Integration
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <integration.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {integration.name}
                </h4>
                <p className="text-gray-600 mb-4">{integration.description}</p>

                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700">
                    Compatible With:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {integration.compatability.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Enterprise Security & Compliance
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl border border-blue-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {feature.text}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== ROI & RESULTS ====================
function ResultsSection() {
  const resultsData = [
    {
      metric: "Claim Denials",
      before: 18.5,
      after: 2.8,
      unit: "%",
      improvement: "84.9% reduction",
    },
    {
      metric: "Clean Claim Rate",
      before: 81.5,
      after: 97.2,
      unit: "%",
      improvement: "19.3% improvement",
    },
    {
      metric: "AR Days",
      before: 45.2,
      after: 22.8,
      unit: "days",
      improvement: "49.6% faster",
    },
    {
      metric: "Point-of-Service Collections",
      before: 35,
      after: 78,
      unit: "%",
      improvement: "122.9% increase",
    },
    {
      metric: "Patient Satisfaction",
      before: 72,
      after: 94,
      unit: "%",
      improvement: "30.6% improvement",
    },
    {
      metric: "Staff Productivity",
      before: 65,
      after: 92,
      unit: "%",
      improvement: "41.5% increase",
    },
  ];

  const financialImpact = [
    {
      category: "Denial Reduction",
      amount: "$285,000",
      description: "Annual savings from reduced claim rework",
    },
    {
      category: "Faster Payments",
      amount: "$420,000",
      description: "Improved cash flow from reduced AR days",
    },
    {
      category: "Increased Collections",
      amount: "$175,000",
      description: "Additional revenue from improved collections",
    },
    {
      category: "Staff Efficiency",
      amount: "$95,000",
      description: "Savings from reduced manual verification",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Measurable Results & Financial Impact
          </h2>
          <p className="text-xl text-gray-600">
            Data-driven outcomes from implementing real-time eligibility
            verification
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Performance Metrics */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Performance Improvement
            </h3>
            <div className="space-y-4">
              {resultsData.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">
                      {result.metric}
                    </span>
                    <span className="text-sm font-semibold text-green-700">
                      {result.improvement}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Before</div>
                      <div className="text-lg font-bold text-gray-700">
                        {result.before}
                        {result.unit}
                      </div>
                    </div>

                    <ArrowUpRight className="w-6 h-6 text-blue-500" />

                    <div className="text-right">
                      <div className="text-xs text-gray-500">After</div>
                      <div className="text-lg font-bold text-green-700">
                        {result.after}
                        {result.unit}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Financial Impact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Annual Financial Impact*
            </h3>
            <div className="space-y-4">
              {financialImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-50 to-emerald-50 p-6 rounded-xl border border-blue-200"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {impact.category}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {impact.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-700">
                        {impact.amount}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">
                    Total Annual Impact
                  </div>
                  <div className="text-3xl font-bold text-green-700">
                    $975,000
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    *Based on average 50-physician practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FAQ SECTION ====================
function FAQSection() {
  const faqs = [
    {
      question: "How accurate is real-time eligibility verification?",
      answer:
        "Our system maintains a 98.7% accuracy rate by connecting directly to payer systems and using multiple verification sources including clearinghouses, payer portals, and direct connections.",
    },
    {
      question: "What insurance payers do you support?",
      answer:
        "We support all major commercial payers (BCBS, United, Aetna, Cigna, Humana), government programs (Medicare, Medicaid, TRICARE), and 900+ regional and specialty plans.",
    },
    {
      question: "How quickly can we implement your solution?",
      answer:
        "Most implementations are completed in 2-4 weeks, depending on your EMR/PMS integration requirements. Our team handles the entire setup process with minimal disruption.",
    },
    {
      question: "Is the system HIPAA compliant?",
      answer:
        "Yes, we are fully HIPAA compliant with SOC 2 certification. All data is encrypted in transit and at rest, with complete audit trails and role-based access controls.",
    },
    {
      question: "Can patients verify their own eligibility?",
      answer:
        "Yes, we offer patient portal integration that allows patients to verify their insurance coverage before appointments, reducing front-desk workload and improving patient experience.",
    },
    {
      question: "What happens when insurance verification fails?",
      answer:
        "Our system provides detailed error codes and recommended actions. We also offer concierge follow-up services to resolve complex verification issues on your behalf.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about eligibility verification services
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-6 border border-blue-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  Q
                </span>
                {faq.question}
              </h3>
              <div className="pl-9">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    A
                  </span>
                  <p className="text-gray-700">{faq.answer}</p>
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
    <section
      id="contact-form"
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <UserCheck className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">
              ELIGIBILITY VERIFICATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Eliminate Eligibility-Related Denials?
          </h2>

          <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
            Schedule a live demo to see how real-time verification can transform
            your patient intake process and boost your revenue cycle
            performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={"/rcm-contact"}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className=" cursor-pointer w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Assessment
                <Calendar className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>

          {/* Contact Options */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-sm">Email Us</div>
                  <div className="font-medium">info@upscalealliance.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-sm">Call Us</div>
                  <div className="font-medium">+1 (917) 947-0117</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-sm">Response Time</div>
                  <div className="font-medium">Within 2 Business Hours</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
