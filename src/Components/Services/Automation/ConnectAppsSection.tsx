"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Calendar } from "lucide-react";

const ConnectAppsSection = () => {
  // 28 Images Array - 7 columns x 4 rows
  const appImages = [
    // Row 1
    { id: 1, name: "Gmail", logo: "/mail.png", alt: "Gmail logo - Email service by Google | UpscaleAlliance.com" },
    { id: 2, name: "Slack", logo: "/slack.png", alt: "Slack logo - Team communication platform | UpscaleAlliance.com" },
    { id: 3, name: "Zoom", logo: "/zoom.png", alt: "Zoom logo - Video conferencing platform | UpscaleAlliance.com" },
    { id: 4, name: "Salesforce", logo: "/salesforce1.png", alt: "Salesforce logo - CRM platform | UpscaleAlliance.com" },
    { id: 5, name: "HubSpot", logo: "/hubspotmini.png", alt: "HubSpot logo - Marketing and sales platform | UpscaleAlliance.com" },
    { id: 6, name: "Shopify", logo: "/shopify.png", alt: "Shopify logo - E-commerce platform | UpscaleAlliance.com" },
    { id: 7, name: "Zendesk", logo: "/zendesk.png", alt: "WordPress logo - Website building platform | UpscaleAlliance.com" },
    
    // Row 2
    { id: 8, name: "Mailchimp", logo: "/mailchimp.png", alt: "Mailchimp logo - Email marketing platform | UpscaleAlliance.com" },
    { id: 9, name: "Stripe", logo: "/stripe.png", alt: "Stripe logo - Payment processing platform | UpscaleAlliance.com" },
    { id: 10, name: "Webflow", logo: "/Webflow.png", alt: "Webflow logo - Online payment system | UpscaleAlliance.com" },
    { id: 11, name: "trello", logo: "/trello.png", alt: "trello logo - Accounting software | UpscaleAlliance.com" },
    { id: 12, name: "teams", logo: "/teams.png", alt: "Xero logo - Accounting software | UpscaleAlliance.com" },
    { id: 13, name: "Asana", logo: "/asana.png", alt: "Asana logo - Project management tool | UpscaleAlliance.com" },
    { id: 14, name: "Outlook", logo: "/Outlook.png", alt: "Trello logo - Project management tool | UpscaleAlliance.com" },
    
    // Row 3
    { id: 15, name: "Marketo.com", logo: "/Marketo.png", alt: "Monday.com logo - Work operating system | UpscaleAlliance.com" },
    { id: 16, name: "Notion", logo: "/notion.png", alt: "Notion logo - Workspace platform | UpscaleAlliance.com" },
    { id: 17, name: "Airtable", logo: "/Airtable.png", alt: "Airtable logo - Spreadsheet-database hybrid | UpscaleAlliance.com" },
    { id: 18, name: "Jira", logo: "/Jira.png", alt: "Zapier logo - Automation platform | UpscaleAlliance.com" },
    { id: 19, name: "drive", logo: "/drive.png", alt: "Make logo - Visual automation platform | UpscaleAlliance.com" },
    { id: 20, name: "DocuSign", logo: "/DocuSign.png", alt: "n8n logo - Workflow automation tool | UpscaleAlliance.com" },
    { id: 21, name: "discord", logo: "/discord.png", alt: "Pipedrive logo - Sales CRM | UpscaleAlliance.com" },
    
    // Row 4
    { id: 22, name: "ClickUp", logo: "/ClickUp.png", alt: "ClickUp logo - Business software suite | UpscaleAlliance.com" },
    { id: 23, name: "Calendly", logo: "/Calendly.png", alt: "Google Drive logo - Cloud storage service | UpscaleAlliance.com" },
    { id: 24, name: "pppp", logo: "/pppp.png", alt: "Dropbox logo - File hosting service | UpscaleAlliance.com" },
    { id: 25, name: "twitter", logo: "/twitter.png", alt: "Microsoft Teams logo - Team collaboration platform | UpscaleAlliance.com" },
    { id: 26, name: "facebook", logo: "/facebook.png", alt: "Discord logo - Communication platform | UpscaleAlliance.com" },
    { id: 27, name: "Calendly", logo: "/Calendly.png", alt: "Calendly logo - Scheduling automation | UpscaleAlliance.com" },
    { id: 28, name: "meet", logo: "/meet.png", alt: "Typeform logo - Form and survey platform | UpscaleAlliance.com" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50" id="systemsintegration">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#1570EF]" />
              <span className="text-[#1570EF] font-medium text-sm">INTEGRATIONS</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We connect to <br />
              <span className="text-[#1570EF]">all your apps</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8">
              Plus thousands more through APIs, custom code and web hooks.
            </p>

            {/* CTA Button */}
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" cursor-pointer px-8 py-4 bg-gradient-to-r from-[#1570EF] to-blue-600 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3 group"
              >
                <Calendar className="w-5 h-5" />
                Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Trust Indicator */}
            <p className="text-sm text-gray-400 mt-4">
              *No obligation. 30-minute strategy call.
            </p>
          </motion.div>

          {/* Right Side - 7x4 Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 7 Columns x 4 Rows Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
              {appImages.map((app, idx) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="p-2 flex items-center justify-center group"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src={app.logo}
                      alt={app.alt}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full "
                      title={app.name}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectAppsSection;