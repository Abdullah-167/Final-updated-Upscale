import AIAutomationLanding from "@/Components/Services/Automation/AIAutomationLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI & Automation Agency | Custom AI Agents & Workflow Automation | Upscale Alliance",
  description: "Top-rated AI automation agency building custom AI agents, agentic AI, and workflow automation. We help businesses replace manual work with AI-powered systems. 50,000+ hours saved. 1,200% average ROI.",
  keywords: "AI automation agency, AI agents, agentic AI, workflow automation, business process automation, AI consulting, custom AI development, Zapier experts, Make.com consultants, CRM integration, sales automation, marketing automation, AI readiness assessment, systems integration, RPA automation",
  openGraph: {
    title: "AI & Automation Agency | Custom AI Agents & Workflow Automation",
    description: "Build intelligent systems that replace manual work. Custom AI agents, agentic AI, and end-to-end automation. ROI guaranteed.",
    url: "https://upscalealliance.com/services/ai-automation",
    siteName: "Upscale Alliance",
    images: [
      {
        url: "https://upscalealliance.com/ai-automation.png",
        width: 1200,
        height: 630,
        alt: "Upscale Alliance AI Automation Agency - Custom AI Agents and Workflow Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Agency | Custom AI Agents & Workflow Automation",
    description: "Build intelligent systems that replace manual work. Custom AI agents, agentic AI, and end-to-end automation.",
    images: ["https://upscalealliance.com/ai-automation.png"],
    creator: "@upscalealliance",
  },
  alternates: {
    canonical: "https://upscalealliance.com/services/ai-automation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const page = () => {
  return (
    <div>
        <AIAutomationLanding />
    </div>
  );
};

export default page;