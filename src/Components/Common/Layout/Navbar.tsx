"use client";

import Image from "next/image";
import {
  IoIosArrowDown,
  IoIosMenu,
  IoIosClose,
  IoIosArrowForward,
} from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import {
  Search,
  TrendingUp,
  Share2,
  Target,
  Link as LinkIcon,
  BriefcaseMedical,
  PenTool,
  Globe,
  MessageSquare,
  Bot,
  Sparkles,
  DollarSign,
  UserCheck,
  GitBranch,
  Network,
  ArrowRight,
  Phone,
  Film,
  Calendar,
} from "lucide-react";
import { Drawer } from "vaul";

const servicesMegaMenu = [
  {
    category: "Automation",
    services: [
      {
        name: "AI & Automation",
        description: "Autonomous AI agents that think & execute",
        icon: <Bot className="w-4 h-4" />,
        link: "/services/ai-automation",
      },
      {
        name: "Business Process",
        description: "End-to-end workflow automation",
        icon: <GitBranch className="w-4 h-4" />,
        link: "/services/ai-automation/#businessprocessautomation",
      },
      {
        name: "Systems Integration",
        description: "Connect CRM, ERP & business apps",
        icon: <Network className="w-4 h-4" />,
        link: "/services/ai-automation/#systemsintegration",
      },
    ],
  },
  {
    category: "Search & Visibility",
    services: [
      {
        name: "SEO Services",
        description: "Improve search rankings",
        icon: <Search className="w-4 h-4" />,
        link: "/services/seo",
      },
      {
        name: "GEO (AI Search)",
        description: "Optimize for AI assistants",
        icon: <Sparkles className="w-4 h-4" />,
        link: "/services/generative-engine-optimization",
      },
      {
        name: "Link Building",
        description: "Build authority backlinks",
        icon: <LinkIcon className="w-4 h-4" />,
        link: "/services/link-building",
      },
    ],
  },
  {
    category: "Social & Content",
    services: [
      {
        name: "Social Media Marketing",
        description: "Grow your social presence",
        icon: <Share2 className="w-4 h-4" />,
        link: "/services/paid-advertising",
      },
      {
        name: "Content Writing",
        description: "Professional content creation",
        icon: <PenTool className="w-4 h-4" />,
        link: "/services/content-writing",
      },
      {
        name: "Video Editing",
        description: "Cut it. Polish it. Make it pop.",
        icon: <Film className="w-4 h-4" />,
        link: "/services/video-editing",
      },
    ],
  },
  {
    category: "Website & Dev",
    services: [
      {
        name: "Website Development",
        description: "Custom website design & build",
        icon: <Globe className="w-4 h-4" />,
        link: "/services/website-development",
      },
      {
        name: "Conversion Optimization",
        description: "Turn visitors into customers",
        icon: <TrendingUp className="w-4 h-4" />,
        link: "/services/website-development",
      },
    ],
  },
  {
    category: "Healthcare & RCM",
    services: [
      {
        name: "Revenue Cycle Mgmt",
        description: "Medical billing & revenue optimization",
        icon: <BriefcaseMedical className="w-4 h-4" />,
        link: "/services/revenue-cycle-management",
      },
      {
        name: "Medical Billing & AR",
        description: "Claims processing & denial mgmt",
        icon: <DollarSign className="w-4 h-4" />,
        link: "/services/medical-billing-ar",
      },
      {
        name: "Patient Eligibility",
        description: "Real-time insurance verification",
        icon: <UserCheck className="w-4 h-4" />,
        link: "/services/patient-eligibility-verification",
      },
    ],
  },
];

const Navbar = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setMegaOpen(true);
  };

  const handleNavLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] ${
          isScrolled 
            ? "top-[10px] rounded-full w-[95%] " 
            : "top-0 rounded-none w-full "
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 md:px-8 lg:px-12 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "py-1" : ""
        }`}>
          <div className={`flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? "h-14" : "h-16"
          }`}>

            {/* Logo */}
            <a href="/" className="flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <Image
                src="/UpscaleAllianceLLc.png"
                width={isScrolled ? 140 : 180}
                height={isScrolled ? 42 : 54}
                alt="Upscale Alliance LLC Logo"
                className={`object-contain transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isScrolled ? "h-9 w-auto" : "h-11 w-auto"
                }`}
                priority
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <a href="/" className={`font-medium text-gray-700 hover:text-[#1570EF] rounded-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isScrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}>
                Home
              </a>

              {/* Services trigger — hover zone covers button only */}
              <div onMouseEnter={handleNavEnter} onMouseLeave={handleNavLeave}>
                <button
                  className={`flex items-center gap-1 font-medium rounded-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isScrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
                  } ${
                    megaOpen ? "text-[#1570EF]" : "text-gray-700 hover:text-[#1570EF]"
                  }`}
                >
                  Services
                  <IoIosArrowDown
                    className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      megaOpen ? "rotate-180 text-[#1570EF]" : ""
                    } ${
                      isScrolled ? "w-3 h-3" : "w-4 h-4"
                    }`}
                  />
                </button>
              </div>

              <a href="/partners-program" className={`font-medium text-gray-700 hover:text-[#1570EF] rounded-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isScrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}>
                Partners Program
              </a>
              <a href="/about-us" className={`font-medium text-gray-700 hover:text-[#1570EF] rounded-lg transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isScrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              }`}>
                About Us
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href="/contact-us"
                className={`bg-[#1570EF] text-white font-semibold rounded-lg hover:bg-[#0e4dab] hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm hover:shadow-md ${
                  isScrolled ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm"
                }`}
              >
                Book Free Consultation
              </a>
            </div>

            {/* Mobile Hamburger */}
            <Drawer.Root direction="right">
              <Drawer.Trigger asChild>
                <button className={`lg:hidden rounded-lg hover:bg-gray-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isScrolled ? "p-1.5" : "p-2"
                }`}>
                  <IoIosMenu className={`text-gray-700 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isScrolled ? "text-xl" : "text-2xl"
                  }`} />
                </button>
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-all duration-300" />
                <Drawer.Content className="fixed top-0 right-0 bottom-0 z-50 flex flex-col w-full max-w-sm bg-white/95 backdrop-blur-xl outline-none">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <Drawer.Title className="text-lg font-semibold text-gray-900">Menu</Drawer.Title>
                    <Drawer.Close className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <IoIosClose className="text-2xl text-gray-700" />
                    </Drawer.Close>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-1">
                    <Drawer.Close asChild>
                      <a href="/" className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                        Home
                      </a>
                    </Drawer.Close>

                    {/* Mobile Services Accordion */}
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        Services
                        <IoIosArrowDown className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        mobileServicesOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                      }`}>
                        <div className="py-2 space-y-4">
                          {servicesMegaMenu.map((cat) => (
                            <div key={cat.category}>
                              <p className="text-xs font-bold text-[#1570EF] uppercase tracking-wider mb-2 px-4">
                                {cat.category}
                              </p>
                              {cat.services.map((s) => (
                                <Drawer.Close key={s.name} asChild>
                                  <a href={s.link} className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50 rounded-lg transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1570EF] flex-shrink-0">
                                      {s.icon}
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-gray-800">{s.name}</div>
                                      <div className="text-xs text-gray-500">{s.description}</div>
                                    </div>
                                  </a>
                                </Drawer.Close>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Drawer.Close asChild>
                      <a href="/partners-program" className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                        Partners Program
                      </a>
                    </Drawer.Close>
                    <Drawer.Close asChild>
                      <a href="/about-us" className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                        About Us
                      </a>
                    </Drawer.Close>
                    <Drawer.Close asChild>
                      <a href="/contact-us" className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                        Contact
                      </a>
                    </Drawer.Close>

                    <div className="pt-6 mt-4 border-t border-gray-100 space-y-3 text-sm text-gray-500">
                      <div className="flex items-center gap-2 px-4"><MessageSquare className="w-4 h-4" /> 24/7 Support Available</div>
                      <div className="flex items-center gap-2 px-4"><Sparkles className="w-4 h-4" /> Free Initial Consultation</div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-200">
                    <Drawer.Close asChild>
                      <a href="/contact-us" className="block w-full text-center px-6 py-4 bg-[#1570EF] text-white font-semibold rounded-lg hover:bg-[#0e4dab] transition-all shadow-md">
                        Book Free Consultation
                      </a>
                    </Drawer.Close>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>

          </div>
        </div>
      </nav>

      {/* ─────────────────────────────────────────────────────────────
          MEGA MENU — rendered as a sibling of <nav>, fixed positioned
          so it sits flush below the navbar and spans full width.
          Mouse bridge: the top padding keeps hover alive while
          the cursor moves from the button down to the panel.
      ───────────────────────────────────────────────────────────── */}
      {megaOpen && (
        <div
          className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? "top-[calc(30px+56px)] w-[95%]" : "top-16 w-full"
          }`}
          onMouseEnter={handleNavEnter}
          onMouseLeave={handleNavLeave}
        >
          {/* Invisible bridge so mouse doesn't leave the hover zone */}
          <div className="h-0" />

          <div className="px-4 md:px-8 lg:px-12 animate-fadeIn">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="flex">

                  {/* ── LEFT: All 5 categories in one row ── */}
                  <div className="flex-1 p-6">
                    <div className="grid grid-cols-5 divide-x divide-gray-100/50">
                      {servicesMegaMenu.map((cat) => (
                        <div key={cat.category} className="px-4 first:pl-0 last:pr-0">
                          <p className="text-[10px] font-bold text-[#1570EF] uppercase tracking-widest mb-3">
                            {cat.category}
                          </p>
                          <div className="space-y-1">
                            {cat.services.map((s) => (
                              <a
                                key={s.name}
                                href={s.link}
                                className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-blue-50/50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                              >
                                <div className="w-7 h-7 rounded-lg bg-blue-50/50 border border-blue-100/50 flex items-center justify-center text-[#1570EF] group-hover:bg-[#1570EF] group-hover:text-white group-hover:border-[#1570EF] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0 mt-0.5">
                                  {s.icon}
                                </div>
                                <div className="min-w-0">
                                  <p className="text-[12px] font-semibold text-gray-800 group-hover:text-[#1570EF] leading-snug transition-colors">
                                    {s.name}
                                  </p>
                                  <p className="text-[11px] text-gray-400 leading-snug mt-0.5">
                                    {s.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-8px) scale(0.98); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;