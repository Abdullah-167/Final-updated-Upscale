"use client";

import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const comparisonData = [
  { metric: "Website Traffic", before: 45, after: 85 },
  { metric: "Search Visibility", before: 35, after: 78 },
  { metric: "Conversion Rate", before: 28, after: 65 },
  { metric: "Brand Mentions", before: 20, after: 72 },
  { metric: "Domain Authority", before: 40, after: 75 },
  { metric: "Lead Generation", before: 30, after: 82 },
];

const DataDriven = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-28 px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-[1250px] mx-auto">
        <div className="flex lg:flex-nowrap flex-wrap justify-between items-center gap-x-10">
          <div className="max-w-[600px]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight pb-4 sm:pb-5">
              Data-Driven Digital Services That Accelerate Your Growth
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-[450px] pb-5">
              We combine analytics, modern development, and performance marketing to build scalable digital systems that improve visibility, increase revenue, and strengthen your brand's competitive edge.
            </p>
            <Link href={"/contact-us"}>
              <button className="bg-[#1570EF] hover:bg-[#101828] transition-all duration-500 text-white px-5 sm:px-6 py-2.5 font-[600] rounded-lg shadow-md cursor-pointer text-sm sm:text-base">
                Book a Free Consultation
              </button>
            </Link>
          </div>

          <div className="lg:mt-0 mt-8 sm:mt-10 w-full max-w-[600px] bg-white p-4 sm:p-6 rounded-[35px] shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center">
              Performance Metrics Comparison
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 text-center mb-4">
              Before vs After Working With Us
            </p>
            <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={comparisonData}
                  margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" tick={{ fontSize: 10 }} interval={0} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, '']} contentStyle={{ backgroundColor: 'white', borderRadius: '8px' }} />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="before" name="Before" fill="#94A3B8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" name="After Working With Us" fill="#1570EF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <p className="text-[10px] sm:text-xs text-gray-500">Marketing Visibility</p>
                <p className="text-base sm:text-lg font-bold text-[#1570EF]">↑ 123%</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] sm:text-xs text-gray-500">Brand Authority</p>
                <p className="text-base sm:text-lg font-bold text-[#1570EF]">↑ 87%</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] sm:text-xs text-gray-500">ROI Growth</p>
                <p className="text-base sm:text-lg font-bold text-[#1570EF]">↑ 156%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDriven;