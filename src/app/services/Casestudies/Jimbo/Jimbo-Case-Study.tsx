"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  DollarSign
} from "lucide-react";
import Link from "next/link";

const JimdoCaseStudy = () => {
  const timeline = [
    { month: "Month 1", activity: "Website Audit & Strategy Development" },
    { month: "Month 2-3", activity: "Technical SEO Implementation" },
    { month: "Month 4", activity: "Content Optimization & GEO Setup" },
    { month: "Month 5-6", activity: "Performance Monitoring & Scaling" }
  ];

  const results = [
    { metric: "Organic Traffic", before: "45,000", after: "189,000", increase: "320%" },
    { metric: "Keyword Rankings", before: "850", after: "3,200", increase: "276%" },
    { metric: "Conversion Rate", before: "2.3%", after: "4.8%", increase: "109%" },
    { metric: "ROI", before: "1.8x", after: "5.2x", increase: "189%" }
  ];

  const strategies = [
    {
      title: "Technical SEO Overhaul",
      description: "Complete website infrastructure optimization",
      items: ["Core Web Vitals optimization", "Mobile-first indexing", "Site architecture restructure", "Schema markup implementation"]
    },
    {
      title: "GEO Optimization",
      description: "AI search visibility enhancement",
      items: ["ChatGPT plugin development", "Structured data for AI", "Conversational content", "Voice search optimization"]
    },
    {
      title: "Content Strategy",
      description: "Data-driven content creation",
      items: ["Keyword intent analysis", "User journey mapping", "Multimedia content", "Interactive elements"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-[#1570EF]" />
                <span className="text-[#1570EF] font-medium text-sm">SEO Case Study</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Jimdo: <span className="text-[#1570EF]">320% Traffic Growth</span> in 6 Months
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                How we transformed Jimdo's online presence through comprehensive SEO strategy, 
                technical optimization, and AI search readiness.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Industry</div>
                  <div className="font-semibold">Website Builder SaaS</div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">Timeline</div>
                  <div className="font-semibold">6 Months</div>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500">ROI</div>
                  <div className="font-semibold text-green-600">5.2x</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/jimbo1.png"
                    alt="Jimdo Website"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-[#1570EF] mb-1">320%</div>
                    <div className="text-sm text-gray-600">Traffic Increase</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-1">109%</div>
                    <div className="text-sm text-gray-600">Conversion Lift</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Jimdo, a leading website builder, faced:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Stagnant organic traffic growth for 18 months</li>
                  <li>Poor mobile performance scores (Core Web Vitals)</li>
                  <li>Low visibility in AI search platforms</li>
                  <li>Inefficient site architecture affecting crawl budget</li>
                  <li>High bounce rates on key landing pages</li>
                </ul>
                <p>They needed a comprehensive strategy to regain market visibility and improve user experience.</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We implemented a three-phase approach:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Phase 1:</strong> Technical SEO audit and infrastructure optimization</li>
                  <li><strong>Phase 2:</strong> Content restructuring for AI and traditional search</li>
                  <li><strong>Phase 3:</strong> Performance monitoring and continuous optimization</li>
                </ul>
                <p>The strategy combined traditional SEO best practices with cutting-edge GEO optimization for AI search platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The impact of our 6-month engagement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {results.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="text-2xl font-bold text-[#1570EF] mb-2">{result.increase}</div>
                <div className="text-gray-900 font-medium mb-3">{result.metric}</div>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-500">Before: {result.before}</div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <div className="text-gray-900 font-semibold">After: {result.after}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Implementation Timeline</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1570EF] flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {idx + 1}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{item.month}</div>
                  <div className="text-sm text-gray-600">{item.activity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Strategies Implemented</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive approach to SEO success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1570EF]/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF] mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{strategy.title}</h3>
                <p className="text-gray-600 mb-4">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#1570EF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Improvements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Largest Contentful Paint</span>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-semibold">4.2s →</span>
                      <span className="text-green-600 font-semibold">1.8s</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">First Input Delay</span>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-semibold">320ms →</span>
                      <span className="text-green-600 font-semibold">45ms</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Cumulative Layout Shift</span>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-semibold">0.35 →</span>
                      <span className="text-green-600 font-semibold">0.02</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">SEO Metrics</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Crawl Efficiency</span>
                    <div className="text-green-600 font-semibold">+85%</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Index Coverage</span>
                    <div className="text-green-600 font-semibold">98.5%</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mobile Usability</span>
                    <div className="text-green-600 font-semibold">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#1570EF] to-[#0EA5E9] rounded-2xl p-12 text-white">
            <BarChart3 className="w-12 h-12 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Traffic?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can achieve similar results for your business
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" cursor-pointer px-8 py-3.5 bg-white text-[#1570EF] font-[600] rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Book Strategy Session
                </motion.button>
              </Link>
              <Link href="/case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-colors"
                >
                  View More Case Studies
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JimdoCaseStudy;