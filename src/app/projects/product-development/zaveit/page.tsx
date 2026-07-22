import type { Metadata } from "next";
import ZaveitPage from "@/Components/Projects/Product/Zaveit/ZaveitPage";

export const metadata: Metadata = {
  title: "Zave.it Case Study | Cashback App UI/UX & Product Design | Upscale Alliance",
  description:
    "Explore how Upscale Alliance helped Zave.it go from concept to over 300,000 users in just three months through strategic product design, mobile app UI/UX, branding, and digital experiences.",
  keywords: [
    "Zave.it case study",
    "Cashback app design",
    "Mobile app UI UX",
    "App product design",
    "Mobile app development",
    "Startup case study",
    "Fintech app design",
    "Product design agency",
    "UI UX agency",
    "App launch case study",
    "Digital product design",
    "Upscale Alliance",
  ],
  openGraph: {
    title: "Zave.it Case Study | Cashback App Product Design",
    description:
      "See how Upscale Alliance partnered with Zave.it to design a modern cashback platform that attracted over 300,000 users within three months of launch.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zave.it Case Study | Cashback App UI/UX",
    description:
      "Discover how Upscale Alliance transformed Zave.it from an idea into one of Germany's fastest-growing cashback apps.",
  },
};

export default function Page() {
  return <ZaveitPage />;
}