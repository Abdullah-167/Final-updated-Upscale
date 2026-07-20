"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const LeadingCompanies = () => {
  const companies = [
    // Row 1
    { id: 1, name: "ChatGPT", logo: "/chatgpt.png", alt: "ChatGPT logo - AI chatbot by OpenAI | UpscaleAlliance.com" },
    { id: 2, name: "OpenAI", logo: "/openai.png", alt: "OpenAI logo - Artificial intelligence research company | UpscaleAlliance.com" },
    { id: 3, name: "Claude", logo: "/Claude.webp", alt: "Claude AI logo - Anthropic's AI assistant | UpscaleAlliance.com" },
    { id: 4, name: "Gemini", logo: "/gemeni.png", alt: "Google Gemini logo - AI model by Google | UpscaleAlliance.com" },
    { id: 5, name: "HubSpot", logo: "/Hubspot.png", alt: "HubSpot logo - CRM and marketing platform | UpscaleAlliance.com" },
    
    // Row 2
    { id: 6, name: "Salesforce", logo: "/salesforce.png", alt: "Salesforce logo - Customer relationship management platform | UpscaleAlliance.com" },
    { id: 7, name: "Zapier", logo: "/zapier.png", alt: "Zapier logo - Automation platform connecting apps | UpscaleAlliance.com" },
    { id: 8, name: "Zoho", logo: "/zoho.png", alt: "Zoho logo - Business software suite | UpscaleAlliance.com" },
    { id: 9, name: "Monday.com", logo: "/monday.png", alt: "Monday.com logo - Work operating system | UpscaleAlliance.com" },
    { id: 10, name: "UI Path", logo: "/UI-path.png", alt: "UI Path logo - Robotic process automation platform | UpscaleAlliance.com" },
    
    // Row 3
    { id: 11, name: "Make", logo: "/make.png", alt: "Make logo - Visual automation platform | UpscaleAlliance.com" },
    { id: 12, name: "Pipedrive", logo: "/pipedrive.png", alt: "Pipedrive logo - Sales CRM software | UpscaleAlliance.com" },
    { id: 13, name: "GoHighLevel", logo: "/highlevel.png", alt: "GoHighLevel logo - Marketing and sales platform | UpscaleAlliance.com" },
    { id: 14, name: "n8n", logo: "/n8n.png", alt: "n8n logo - Fair-code workflow automation tool | UpscaleAlliance.com" },
    // Last two will be centered automatically
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#1570EF]" />
            <span className="text-[#1570EF] font-medium text-sm">
              TRUSTED PARTNERS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Leading AI Companies <br />
            <span className="text-[#1570EF]">We Work With</span>
          </h2>
        </motion.div>

        {/* Responsive Grid - 5 columns on desktop, last items centered */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {companies.map((company, idx) => {
            // Check if this is one of the last two items (indices 12 and 13 for 14 items)
            const isLastTwo = companies.length === 14 && (idx === 12 || idx === 13);
            
            return (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`
                  flex items-center justify-center group
                  ${isLastTwo ? 'lg:col-start-2 lg:col-span-1' : ''}
                `}
                style={isLastTwo ? { gridColumn: 'span 1' } : {}}
              >
                {/* Company Logo */}
                <div className="w-24 h-16 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={96}
                    height={48}
                    className="object-contain w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    title={company.name}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Add flexbox fallback for centering last two */}
        <style jsx>{`
          @media (min-width: 1024px) {
            .grid > :nth-last-child(2) {
              grid-column: 2 / span 1;
            }
            .grid > :last-child {
              grid-column: 3 / span 1;
            }
          }
        `}</style>

        {/* Additional Trust Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          *and many more industry-leading AI partners
        </motion.p>
      </div>
    </section>
  );
};

export default LeadingCompanies;