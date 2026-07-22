"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    Play,
    Film,
    Video,
    Camera,
    Edit,
    Layers,
    Clock,
    Check,
    ArrowRight,
    TrendingUp,
    Star,
    Users,
    Award,
    Calendar,
    PlayCircle,
    Scissors,
    Palette,
    Music,
    Globe,
    Briefcase,
    Zap,
    Eye,
    Infinity,
    ChevronDown,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    ExternalLink,
    MoveRight,
    Circle,
    Grid3x3,
    LayoutGrid,
    Square,
    ArrowUpRight,
    Shield,
    Heart,
    Monitor,
    Smartphone,
    Tablet,
    X,
    ChevronLeft,
    ChevronRight,
    Loader2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// ---------- CTA SECTION (Same as Homepage) ----------
const CallToAction = () => {
    return (
        <section className="relative overflow-hidden" aria-label="Call to action">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10 bg-[#1570EF] mx-auto px-8 py-40"
            >
                <div className="flex items-center max-w-[1200px] mx-auto relative flex-wrap lg:flex-nowrap">
                    <div className="gap-6">
                        <p className="font-[family-name:var(--font-body)] text-sm md:text-lg pb-7 text-white/80">
                            You've seen what strategic partnerships can do, so now…
                        </p>
                        <h3 className="font-[family-name:var(--font-cabinet)] text-3xl md:text-[96px] font-bold text-white mb-4 max-w-[700px] leading-[85px] pb-5">
                            Turn Your Vision Into Cinematic Reality
                        </h3>
                        <p className="font-[family-name:var(--font-body)] text-white/90 text-lg md:text-xl max-w-2xl">
                            Book a free consultation and let's discuss how professional video editing can elevate your brand.
                        </p>
                    </div>
                    <div className="mt-[260px] ml-auto">
                        <Link href={"/partnership-program-contact"}>
                            <button className="cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-white backdrop-blur-md lg:font-[family-name:var(--font-body)] font-semibold isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-[#1570EF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-2xl group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none">
                                Start Your Content Journey
                                <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-[#1570EF]" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="absolute -top-18 -right-20 z-10" aria-hidden="true">
                    <svg viewBox="0 0 100 100" className="h-[28rem] w-[28rem] animate-[spin_15s_linear_infinite] text-blue-500" fill="none">
                        <g stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M30 31 L44 49" /><path d="M61 28 L44 49" /><path d="M44 49 L32 70" />
                        </g>
                        <rect x="19" y="20" width="22" height="22" rx="7.5" fill="currentColor" />
                        <rect x="46" y="13" width="30" height="30" rx="10" fill="currentColor" />
                        <rect x="33" y="38" width="22" height="22" rx="7.5" fill="currentColor" />
                        <rect x="21" y="59" width="22" height="22" rx="7.5" fill="currentColor" />
                    </svg>
                </div>
            </motion.div>
        </section>
    );
};

const VideoEditingPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControls, setShowControls] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const modalVideoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);

    // Hero video controls
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.play().catch(() => { });
            setIsPlaying(true);
        }
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            const progress = (video.currentTime / video.duration) * 100;
            setProgress(progress);
            if (video.duration) {
                setDuration(video.duration);
            }
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current;
        if (video) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            const percentage = x / width;
            video.currentTime = percentage * video.duration;
            setProgress(percentage * 100);
        }
    };

    const handleFullscreen = () => {
        const video = videoRef.current;
        if (video) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            }
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    // Video styles
    const videoStyles = [
        {
            id: "motion-graphics",
            name: "Motion Graphics",
            icon: <Layers className="w-6 h-6" />,
            description: "Dynamic animated content that brings ideas to life",
            color: "from-blue-500 to-cyan-400",
            bg: "bg-blue-50",
        },
        {
            id: "corporate",
            name: "Corporate",
            icon: <Briefcase className="w-6 h-6" />,
            description: "Professional brand storytelling",
            color: "from-indigo-500 to-purple-400",
            bg: "bg-indigo-50",
        },
        {
            id: "brands",
            name: "Brands",
            icon: <Globe className="w-6 h-6" />,
            description: "Scroll-stopping platform content",
            color: "from-pink-500 to-rose-400",
            bg: "bg-pink-50",
        },
        {
            id: "realestate",
            name: "Real Estate",
            icon: <Building className="w-6 h-6" />,
            description: "Luxury property showcases",
            color: "from-emerald-500 to-teal-400",
            bg: "bg-emerald-50",
        },
        {
            id: "wedding",
            name: "Wedding",
            icon: <Heart className="w-6 h-6" />,
            description: "Capture the energy of live events",
            color: "from-amber-500 to-orange-400",
            bg: "bg-amber-50",
        },
    ];

    const allProjects = [
        // ========== MOTION GRAPHICS ==========
        {
            id: 1,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/Artisan.mp4",
        },
        {
            id: 2,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/Boxem.mp4",
        },
        {
            id: 3,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/DoksAI.mp4",
        },
        {
            id: 4,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/HappyCompanies.mp4",
        },
        {
            id: 5,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/HarnsTechMarketingVideo.mp4",
        },
        {
            id: 6,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/Infinity.mp4",
        },
        {
            id: 7,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/InstantlyAi.mp4",
        },
        {
            id: 8,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/LangEase2.mp4",
        },
        {
            id: 9,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/NeuraFlow.mp4",
        },
        {
            id: 10,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/Teamble.mp4",
        },
        {
            id: 11,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/Tome.mp4",
        },
        {
            id: 12,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/DATAWIZZ_CASE_STUDY_web.mp4",
        },
        {
            id: 13,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/droxyweb.mp4",
        },
        {
            id: 14,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/LIGHTDASH_web.mp4",
        },
        {
            id: 15,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/n3xtcard.mp4",
        },
        {
            id: 16,
            category: "motion-graphics",
            video: "/projects/video-editing/motion-graphics/ViaKonnect_Web.mp4",
        },

        // ========== CORPORATE ==========
        {
            id: 17,
            category: "corporate",
            video: "/projects/video-editing/corporate/AdelaideAustralia.mp4",
        },
        {
            id: 18,
            category: "corporate",
            video: "/projects/video-editing/corporate/ANNOVIREVERBERI.mp4",
        },
        {
            id: 19,
            category: "corporate",
            video: "/projects/video-editing/corporate/BDOSingapore.mp4",
        },
        {
            id: 20,
            category: "corporate",
            video: "/projects/video-editing/corporate/Bossplast.mp4",
        },
        // REMOVED: id: 21 - Bradley.mp4
        {
            id: 21, // Previously 22
            category: "corporate",
            video: "/projects/video-editing/corporate/CINEMATICFactoryBROLL.mp4",
        },
        {
            id: 22, // Previously 23
            category: "corporate",
            video: "/projects/video-editing/corporate/CubesInternational.mp4",
        },
        {
            id: 23, // Previously 24
            category: "corporate",
            video: "/projects/video-editing/corporate/DMCC.mp4",
        },
        {
            id: 24, // Previously 25
            category: "corporate",
            video: "/projects/video-editing/corporate/Eurofarma.mp4",
        },
        {
            id: 25, // Previously 26
            category: "corporate",
            video: "/projects/video-editing/corporate/Gryphon.mp4",
        },
        {
            id: 26, // Previously 27
            category: "corporate",
            video: "/projects/video-editing/corporate/HistoriaMezeGrill.mp4",
        },
        {
            id: 27, // Previously 28
            category: "corporate",
            video: "/projects/video-editing/corporate/HMM.mp4",
        },
        {
            id: 28, // Previously 29
            category: "corporate",
            video: "/projects/video-editing/corporate/Ignace.mp4",
        },
        {
            id: 29, // Previously 30
            category: "corporate",
            video: "/projects/video-editing/corporate/IVYRestaurant&Bar.mp4",
        },
        {
            id: 30, // Previously 31
            category: "corporate",
            video: "/projects/video-editing/corporate/JoeyMeyer.mp4",
        },
        {
            id: 31, // Previously 32
            category: "corporate",
            video: "/projects/video-editing/corporate/NicroS.p.a.45thAnniversary.mp4",
        },
        {
            id: 32, // Previously 33
            category: "corporate",
            video: "/projects/video-editing/corporate/SamsungElectronicsRegional.mp4",
        },
        {
            id: 33, // Previously 34
            category: "corporate",
            video: "/projects/video-editing/corporate/SimeDarbyBerhadCorporateVideo2023.mp4",
        },
        {
            id: 34, // Previously 35
            category: "corporate",
            video: "/projects/video-editing/corporate/ThreeSixtyPropertyGroup.mp4",
        },

        // ========== BRANDS ==========
        {
            id: 35, // Previously 36
            category: "brands",
            video: "/projects/video-editing/brand/AstraWarrior.mp4",
        },
        {
            id: 36, // Previously 37
            category: "brands",
            video: "/projects/video-editing/brand/AttireiumNewLaunch.mp4",
        },
        {
            id: 37, // Previously 38
            category: "brands",
            video: "/projects/video-editing/brand/AttireiumShoot2.mp4",
        },
        {
            id: 38, // Previously 39
            category: "brands",
            video: "/projects/video-editing/brand/AttireiumShootNew.mp4",
        },
        {
            id: 39, // Previously 40
            category: "brands",
            video: "/projects/video-editing/brand/AttireiumShortsShoot.mp4",
        },
        {
            id: 40, // Previously 41
            category: "brands",
            video: "/projects/video-editing/brand/Attireium.mp4",
        },
        {
            id: 41, // Previously 42
            category: "brands",
            video: "/projects/video-editing/brand/KrossFits.mp4",
        },
        {
            id: 42, // Previously 43
            category: "brands",
            video: "/projects/video-editing/brand/NoorScent.mp4",
        },
        {
            id: 43, // Previously 44
            category: "brands",
            video: "/projects/video-editing/brand/Oxley.mp4",
        },
        {
            id: 44, // Previously 45
            category: "brands",
            video: "/projects/video-editing/brand/Radiance360.mp4",
        },
        {
            id: 45, // Previously 46
            category: "brands",
            video: "/projects/video-editing/brand/ReviveScent.mp4",
        },
        {
            id: 46, // Previously 47
            category: "brands",
            video: "/projects/video-editing/brand/SpectreBagsVarient2.mp4",
        },
        {
            id: 47, // Previously 48
            category: "brands",
            video: "/projects/video-editing/brand/SpectreBags.mp4",
        },
        {
            id: 48, // Previously 49
            category: "brands",
            video: "/projects/video-editing/brand/SuitsByScentYou.mp4",
        },
        {
            id: 49, // Previously 50
            category: "brands",
            video: "/projects/video-editing/brand/ZimshyVitaminC.mp4",
        },

        // ========== REAL ESTATE ==========
        {
            id: 50, // Previously 51
            category: "realestate",
            video: "/projects/video-editing/real-estate/MRCRES.mp4",
        },
        {
            id: 51, // Previously 52
            category: "realestate",
            video: "/projects/video-editing/real-estate/$10,000,000mansion_.mp4",
        },
        {
            id: 52, // Previously 53
            category: "realestate",
            video: "/projects/video-editing/real-estate/£11,500,000ThePenthouse.mp4",
        },
        {
            id: 53, // Previously 54
            category: "realestate",
            video: "/projects/video-editing/real-estate/Areyoureadyforthis.mp4",
        },
        {
            id: 54, // Previously 55
            category: "realestate",
            video: "/projects/video-editing/real-estate/Colorado.mp4",
        },
        {
            id: 55, // Previously 56
            category: "realestate",
            video: "/projects/video-editing/real-estate/DamacIslandsmadehistory.mp4",
        },
        {
            id: 56, // Previously 57
            category: "realestate",
            video: "/projects/video-editing/real-estate/Didyouknow_.mp4",
        },
        {
            id: 57, // Previously 58
            category: "realestate",
            video: "/projects/video-editing/real-estate/Dreamingofowningatownhouseorvilla.mp4",
        },
        {
            id: 58, // Previously 59
            category: "realestate",
            video: "/projects/video-editing/real-estate/ExperiencelifeatOneatPalmJumeirah.mp4",
        },
        {
            id: 59, // Previously 60
            category: "realestate",
            video: "/projects/video-editing/real-estate/Fullyupgraded5bedroomvilla.mp4",
        },
        {
            id: 60, // Previously 61
            category: "realestate",
            video: "/projects/video-editing/real-estate/HeyJenny!.mp4",
        },
        {
            id: 61, // Previously 62
            category: "realestate",
            video: "/projects/video-editing/real-estate/Inside$70,000,000MegaMansion_.mp4",
        },
        {
            id: 62, // Previously 63
            category: "realestate",
            video: "/projects/video-editing/real-estate/Isthistheviralrealestate.mp4",
        },
        {
            id: 63, // Previously 64
            category: "realestate",
            video: "/projects/video-editing/real-estate/Killerlistingsrequirekilleragents.mp4",
        },
        {
            id: 64, // Previously 65
            category: "realestate",
            video: "/projects/video-editing/real-estate/LondonRoadChandler.mp4",
        },
        {
            id: 65, // Previously 66
            category: "realestate",
            video: "/projects/video-editing/real-estate/LookingforapenthouseintheCity.mp4",
        },
        {
            id: 66, // Previously 67
            category: "realestate",
            video: "/projects/video-editing/real-estate/LookingforapropertyinDubai.mp4",
        },
        {
            id: 67, // Previously 68
            category: "realestate",
            video: "/projects/video-editing/real-estate/LuxuryApartmentsforsaleinDubai.mp4",
        },
        {
            id: 68, // Previously 69
            category: "realestate",
            video: "/projects/video-editing/real-estate/MikeStudio.mp4",
        },
        {
            id: 69, // Previously 70
            category: "realestate",
            video: "/projects/video-editing/real-estate/Notjustanotherrealestate_.mp4",
        },
        {
            id: 70, // Previously 71
            category: "realestate",
            video: "/projects/video-editing/real-estate/PalmJumeirahBrandNewTurnkeyVilla_.mp4",
        },
        {
            id: 71, // Previously 72
            category: "realestate",
            video: "/projects/video-editing/real-estate/PrimeLondonrundown!.mp4",
        },
        {
            id: 72, // Previously 73
            category: "realestate",
            video: "/projects/video-editing/real-estate/PropertyTour.mp4",
        },
        {
            id: 73, // Previously 74
            category: "realestate",
            video: "/projects/video-editing/real-estate/Realestatevideobutmakeitepic.mp4",
        },
        {
            id: 74, // Previously 75
            category: "realestate",
            video: "/projects/video-editing/real-estate/Sharethispostuntilrealtors_.mp4",
        },
        {
            id: 75, // Previously 76
            category: "realestate",
            video: "/projects/video-editing/real-estate/SingledigitreturnsinCanada.mp4",
        },
        {
            id: 76, // Previously 77
            category: "realestate",
            video: "/projects/video-editing/real-estate/Thishousesatonthemarketformonths.mp4",
        },
        {
            id: 77, // Previously 78
            category: "realestate",
            video: "/projects/video-editing/real-estate/THISISWHATYOUCANGET.mp4",
        },
        {
            id: 78, // Previously 79
            category: "realestate",
            video: "/projects/video-editing/real-estate/thisproperylocatedinEncino.mp4",
        },
        {
            id: 79, // Previously 80
            category: "realestate",
            video: "/projects/video-editing/real-estate/Under$14kdonforaDallas_.mp4",
        },
        {
            id: 80, // Previously 81
            category: "realestate",
            video: "/projects/video-editing/real-estate/Wanttobuypropertyabroad_.mp4",
        },
        {
            id: 81, // Previously 82
            category: "realestate",
            video: "/projects/video-editing/real-estate/Whereelsecanyouprofitably.mp4",
        },
        {
            id: 82, // Previously 83
            category: "realestate",
            video: "/projects/video-editing/real-estate/WhyDubairealestate.mp4",
        },
        {
            id: 83, // Previously 84
            category: "realestate",
            video: "/projects/video-editing/real-estate/Zacharietakesusonatour_.mp4",
        },

        // ========== WEDDING ==========
        {
            id: 84, // Previously 85
            category: "wedding",
            video: "/projects/video-editing/WeddingEdits/AlfredoAgency.mp4",
        },
        {
            id: 85, // Previously 86
            category: "wedding",
            video: "/projects/video-editing/WeddingEdits/AidaxOmidWedding.mp4",
        },
        {
            id: 86, // Previously 87
            category: "wedding",
            video: "/projects/video-editing/WeddingEdits/AleynaxAbdullahWedding.mp4",
        },
        {
            id: 87, // Previously 88
            category: "wedding",
            video: "/projects/video-editing/WeddingEdits/Aya_sWedding.mp4",
        },
        {
            id: 88, // Previously 89
            category: "wedding",
            video: "/projects/video-editing/WeddingEdits/MinalxAhsanWedding.mp4",
        },
        {
            id: 89, // Previously 90
            category: "wedding",
            video: "/projects/video-editing/WeddingEdits/PaulxSaraWedding.mp4",
        },
        {
            id: 90, // Previously 91
            category: "wedding",
            video: "/projects/video-editing/WeddingEdits/SadiquexRiyaWedding.mp4",
        },
        {
            id: 91, // Previously 92
            category: "wedding",
            video: "/projects/video-editing/WeddingEdits/SudexBarisWedding.mp4",
        },
    ];

    // Shuffle function
    const shuffleArray = (array: typeof allProjects) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Shuffled projects for "all" category
    const [shuffledProjects, setShuffledProjects] = useState(() => shuffleArray(allProjects));

    // Get filtered projects based on active filter
    const getFilteredProjects = () => {
        if (activeFilter === "all") {
            return shuffledProjects;
        }
        return allProjects.filter((p) => p.category === activeFilter);
    };

    const filteredProjects = getFilteredProjects();
    const hasMore = visibleCount < filteredProjects.length;

    // Load more handler with loading animation
    const handleLoadMore = () => {
        setIsLoading(true);
        // Show gray cards for 2-3 seconds
        setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + 6, filteredProjects.length));
            setIsLoading(false);
        }, 2500);
    };

    // Reset visible count when filter changes
    useEffect(() => {
        setVisibleCount(6);
        // Re-shuffle when switching to "all"
        if (activeFilter === "all") {
            setShuffledProjects(shuffleArray(allProjects));
        }
    }, [activeFilter]);

    // Get current project for modal
    const currentProject = allProjects.find((p) => p.id === selectedProject);
    const currentIndex = currentProject
        ? filteredProjects.findIndex((p) => p.id === selectedProject)
        : -1;

    // Navigate to previous/next video in filtered list
    const goToPrevious = () => {
        if (currentIndex > 0) {
            setSelectedProject(filteredProjects[currentIndex - 1].id);
        }
    };

    const goToNext = () => {
        if (currentIndex < filteredProjects.length - 1) {
            setSelectedProject(filteredProjects[currentIndex + 1].id);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedProject === null) return;

            if (e.key === "Escape") {
                setSelectedProject(null);
            } else if (e.key === "ArrowLeft") {
                goToPrevious();
            } else if (e.key === "ArrowRight") {
                goToNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedProject, currentIndex, filteredProjects]);

    // Stats
    const stats = [
        { value: "500+", label: "Videos Edited", icon: <Film className="w-5 h-5" /> },
        { value: "50+", label: "Clients Served", icon: <Users className="w-5 h-5" /> },
        { value: "98%", label: "Satisfaction Rate", icon: <Star className="w-5 h-5" /> },
        { value: "24hr", label: "Avg Turnaround", icon: <Zap className="w-5 h-5" /> },
    ];

    // Process steps
    const processSteps = [
        { step: "01", title: "Discovery", desc: "Understand your vision & goals", duration: "1-2 days" },
        { step: "02", title: "Storyboard", desc: "Plan the visual narrative", duration: "2-3 days" },
        { step: "03", title: "Production", desc: "Filming or animation", duration: "3-7 days" },
        { step: "04", title: "Editing", desc: "Precision cutting & effects", duration: "3-5 days" },
        { step: "05", title: "Review", desc: "Collaborative refinement", duration: "2-3 days" },
        { step: "06", title: "Delivery", desc: "Optimized for all platforms", duration: "1 day" },
    ];

    // Pricing tiers
    const pricingTiers = [
        {
            name: "Essential",
            price: "$499",
            description: "Perfect for social media content",
            features: ["1 Video (up to 60s)", "Basic Color Grading", "Stock Music", "2 Revisions", "48hr Delivery"],
            popular: false,
            cta: "Start Project",
        },
        {
            name: "Professional",
            price: "$1,499",
            description: "Ideal for marketing campaigns",
            features: ["2 Videos (up to 120s)", "Advanced Color Grading", "Custom Sound Design", "Motion Graphics", "3 Revisions", "72hr Delivery"],
            popular: true,
            cta: "Start Project",
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Comprehensive video production",
            features: ["Custom Package", "Full Production", "Animation & VFX", "Unlimited Revisions", "Priority Delivery", "Strategy Included"],
            popular: false,
            cta: "Contact Us",
        },
    ];

    // Testimonials
    const testimonials = [
        {
            quote: "The team delivered under intense timelines and we launched with confidence. It's been a pleasure working together.",
            name: "Suvrat Bhooshan",
            title: "CEO, GenAi",
            rating: 5,
        },
        {
            quote: "They crafted our brand identity, dynamic website, and top-notch marketing assets. The team made all updates swiftly and precisely.",
            name: "Ali Elzein",
            title: "Co-founder, Droxy.ai",
            rating: 5,
        },
        {
            quote: "I was impressed with their great outputs and wonderful design outcomes! Excellent project management capability.",
            name: "Aurelien Bonnel",
            title: "CTO, N3XT",
            rating: 5,
        },
    ];

    // FAQ
    const faqs = [
        {
            question: "What types of videos do you edit?",
            answer: "We edit all types including commercials, corporate videos, social media content, explainer animations, event highlights, testimonial videos, and more.",
        },
        {
            question: "How long does video editing take?",
            answer: "Standard turnaround is 3-5 business days. Rush delivery (24-48 hours) is available for a 25% premium.",
        },
        {
            question: "Can you match my brand's style?",
            answer: "Absolutely! We start with a brand discovery session to understand your style, tone, and visual identity.",
        },
        {
            question: "What formats do you deliver?",
            answer: "We deliver in all standard formats including MP4, MOV, AVI, and platform-specific formats for YouTube, Instagram, TikTok, LinkedIn, and more.",
        },
    ];




    return (
        <div ref={containerRef} className="min-h-screen bg-white overflow-x-hidden">
            {/* ========== HERO - MODERN SPLIT LAYOUT ========== */}
            <motion.section
                style={{ scale: heroScale, opacity: heroOpacity }}
                className="relative min-h-screen flex items-center px-6 pt-32 pb-20"
            >
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full border border-[#1570EF]/20">
                                <span className="w-2 h-2 rounded-full bg-[#1570EF] animate-pulse"></span>
                                <span className="text-[#1570EF] font-medium text-sm tracking-wide">
                                    VIDEO PRODUCTION
                                </span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                                <span className="text-gray-900">Cinematic</span>
                                <br />
                                <span className="bg-gradient-to-r from-[#1570EF] to-blue-400 bg-clip-text text-transparent">
                                    Video Editing
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                                Professional video editing that transforms raw footage into
                                compelling stories. We make your brand look cinematic.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact-us">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="cursor-pointer group px-8 py-4 bg-[#1570EF] text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-[#1570EF]/30 transition-all flex items-center gap-3"
                                    >
                                        Start Your Project
                                        <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>
                                <Link href="#portfolio">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="cursor-pointer group px-8 py-4 bg-gray-100 text-gray-800 font-semibold rounded-xl text-lg hover:bg-gray-200 transition-all flex items-center gap-3"
                                    >
                                        <PlayCircle className="w-5 h-5" />
                                        View Our Work
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right - Showreel */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black group">
                                <video
                                    ref={videoRef}
                                    loop
                                    playsInline
                                    muted
                                    src="/projects/video-editing/corporate/SamsungElectronicsRegional.mp4"
                                    className="w-full aspect-video object-cover"
                                    onTimeUpdate={handleTimeUpdate}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={togglePlay}
                                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-10 h-10 text-white" />
                                        ) : (
                                            <Play className="w-10 h-10 text-white ml-1" />
                                        )}
                                    </motion.button>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <button onClick={togglePlay} className="text-white hover:text-[#1570EF] transition-colors">
                                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                            </button>
                                            <button onClick={toggleMute} className="text-white hover:text-[#1570EF] transition-colors">
                                                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                            </button>
                                            <span className="text-white/80 text-xs font-mono">
                                                {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
                                            </span>
                                        </div>
                                        <button onClick={handleFullscreen} className="text-white hover:text-[#1570EF] transition-colors">
                                            <Maximize className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="w-full h-0.5 bg-white/20 rounded-full mt-2 cursor-pointer" onClick={handleProgressClick}>
                                        <div className="h-full bg-[#1570EF] rounded-full transition-all" style={{ width: `${progress}%` }} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ========== STATS BAR ========== */}
            <section className="py-12 px-6 border-y border-gray-100 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#1570EF]/10 flex items-center justify-center text-[#1570EF]">
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== SERVICES - MODERN GRID ========== */}
            <section className="py-24 px-6 bg-white" id="services">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></span>
                            <span className="text-[#1570EF] font-medium text-sm tracking-wider">EXPERTISE</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            <span className="bg-gradient-to-r from-[#1570EF] to-blue-400 bg-clip-text text-transparent">
                                Video Styles
                            </span>{" "}
                            We Specialize In
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videoStyles.map((style, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                whileHover={{ y: -8 }}
                                className="group relative p-8 rounded-2xl border border-gray-100 hover:border-[#1570EF]/30 transition-all duration-500 bg-white hover:shadow-2xl"
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-xl ${style.bg} flex items-center justify-center text-[#1570EF] mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                        {style.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1570EF] transition-colors">
                                        {style.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{style.description}</p>
                                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#1570EF] opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== PORTFOLIO - VIDEO CARDS WITH LOAD MORE ========== */}
            <section id="portfolio" className="py-24 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></span>
                                <span className="text-[#1570EF] font-medium text-sm tracking-wider">PORTFOLIO</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Featured <span className="text-[#1570EF]">Projects</span>
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                            {["all", "motion-graphics", "corporate", "brands", "realestate", "wedding"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${activeFilter === filter
                                        ? "bg-[#1570EF] text-white shadow-lg shadow-[#1570EF]/25"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                        }`}
                                >
                                    {filter === "all"
                                        ? "All Work"
                                        : filter
                                            .split("-")
                                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(" ")}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Video Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.slice(0, visibleCount).map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                onClick={() => setSelectedProject(project.id)}
                                className="group relative rounded-2xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <div className="relative aspect-video overflow-hidden bg-black">
                                    <video
                                        src={project.video}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        ref={(el) => {
                                            if (el) {
                                                el.play().catch(() => { });

                                                el.addEventListener("mouseenter", () => {
                                                    el.muted = false;
                                                    el.play().catch(() => { });
                                                });

                                                el.addEventListener("mouseleave", () => {
                                                    el.muted = true;
                                                });
                                            }
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                                            <Play className="w-8 h-8 text-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />

                                    {/* Sound ON Indicator */}
                                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1.5">
                                            <Volume2 className="w-3.5 h-3.5 text-white" />
                                            <span className="text-[10px] text-white font-medium">Sound ON</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Loading Skeleton Cards */}
                        {isLoading && (
                            <>
                                {[...Array(6)].map((_, idx) => (
                                    <motion.div
                                        key={`skeleton-${idx}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative rounded-2xl overflow-hidden bg-gray-200 shadow-md aspect-video animate-pulse"
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Loader2 className="w-10 h-10 text-gray-400 animate-spin" />
                                        </div>
                                    </motion.div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* Load More Button */}
                    {hasMore && !isLoading && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <button
                                onClick={handleLoadMore}
                                className="cursor-pointer px-8 py-4 bg-white border-2 border-[#1570EF] text-[#1570EF] font-semibold rounded-xl text-lg hover:bg-[#1570EF] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#1570EF]/25 flex items-center gap-3 mx-auto"
                            >
                                Load More Videos
                                <ArrowDown className="w-5 h-5" />
                            </button>
                            <p className="text-sm text-gray-400 mt-3">
                                Showing {visibleCount} of {filteredProjects.length} videos
                            </p>
                        </motion.div>
                    )}

                    {/* Loading State Button */}
                    {isLoading && (
                        <div className="text-center mt-12">
                            <button
                                disabled
                                className="px-8 py-4 bg-gray-200 text-gray-500 font-semibold rounded-xl text-lg cursor-not-allowed flex items-center gap-3 mx-auto"
                            >
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Loading...
                            </button>
                        </div>
                    )}

                    {/* No More Videos Message */}
                    {!hasMore && filteredProjects.length > 6 && !isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center mt-12"
                        >
                            <p className="text-gray-500 text-sm">
                                You've seen all {filteredProjects.length} videos 🎉
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ========== VIDEO LIGHTBOX MODAL ========== */}
            <AnimatePresence>
                {selectedProject !== null && currentProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setSelectedProject(null);
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-white hover:text-[#1570EF] transition-colors z-20 p-2 bg-black/50 rounded-full hover:bg-black/70"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation Buttons */}
                        {currentIndex > 0 && (
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#1570EF] transition-colors z-20 p-3 bg-black/50 rounded-full hover:bg-black/70"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                        )}

                        {currentIndex < filteredProjects.length - 1 && (
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#1570EF] transition-colors z-20 p-3 bg-black/50 rounded-full hover:bg-black/70"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        )}

                        {/* Video Counter */}
                        <div className="absolute top-4 left-4 text-white/80 text-sm font-mono bg-black/50 px-4 py-2 rounded-full z-20">
                            {currentIndex + 1} / {filteredProjects.length}
                        </div>

                        {/* Video Container */}
                        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden">
                            <video
                                ref={modalVideoRef}
                                src={currentProject.video}
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                                playsInline
                            />

                            {/* Category Badge */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="flex items-center justify-end">
                                    <span className="text-xs font-medium text-[#1570EF] bg-[#1570EF]/20 px-3 py-1 rounded-full">
                                        {currentProject.category
                                            .split("-")
                                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                            .join(" ")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Category indicator dots */}
                        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                            {filteredProjects.slice(0, 20).map((p, idx) => (
                                <button
                                    key={p.id}
                                    onClick={() => setSelectedProject(p.id)}
                                    className={`w-2 h-2 rounded-full transition-all ${p.id === selectedProject
                                        ? "bg-[#1570EF] w-6"
                                        : "bg-white/30 hover:bg-white/50"
                                        }`}
                                />
                            ))}
                            {filteredProjects.length > 20 && (
                                <span className="text-white/40 text-xs self-center ml-1">
                                    +{filteredProjects.length - 20}
                                </span>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ========== PROCESS - TIMELINE STYLE ========== */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></span>
                            <span className="text-[#1570EF] font-medium text-sm tracking-wider">PROCESS</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            From Footage to{" "}
                            <span className="bg-gradient-to-r from-[#1570EF] to-blue-400 bg-clip-text text-transparent">
                                Masterpiece
                            </span>
                        </h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1570EF] to-blue-400 hidden md:block" />

                        <div className="space-y-12">
                            {processSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`flex flex-col md:flex-row gap-8 items-start ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#1570EF] text-white font-bold text-xl flex-shrink-0 relative z-10 shadow-lg shadow-[#1570EF]/30">
                                        {step.step}
                                    </div>

                                    <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                        <div className="bg-gray-50 rounded-2xl p-8 hover:bg-[#1570EF]/5 transition-colors border border-gray-100 hover:border-[#1570EF]/20">
                                            <div className="flex items-center gap-4 mb-3 md:hidden">
                                                <div className="w-10 h-10 rounded-full bg-[#1570EF] text-white flex items-center justify-center font-bold text-sm">
                                                    {step.step}
                                                </div>
                                                <span className="text-sm text-gray-400">{step.duration}</span>
                                            </div>
                                            <span className="text-sm text-gray-400 hidden md:block">{step.duration}</span>
                                            <h3 className="text-2xl font-bold text-gray-900 mt-1">{step.title}</h3>
                                            <p className="text-gray-600 mt-2">{step.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== PRICING ========== */}
            <section className="py-24 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></span>
                            <span className="text-[#1570EF] font-medium text-sm tracking-wider">PRICING</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Choose Your <span className="text-[#1570EF]">Package</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className={`relative rounded-3xl p-8 border-2 transition-all duration-500 ${tier.popular
                                    ? "border-[#1570EF] bg-white shadow-2xl shadow-[#1570EF]/10"
                                    : "border-gray-100 bg-white hover:border-[#1570EF]/30"
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1570EF] text-white text-xs font-bold rounded-full tracking-wider">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                                    <div className="mt-2">
                                        <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                                        {tier.price !== "Custom" && <span className="text-gray-400"> /project</span>}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <Check className="w-5 h-5 text-[#1570EF] flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact-us">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`cursor-pointer w-full py-4 rounded-xl font-semibold transition-all ${tier.popular
                                            ? "bg-[#1570EF] text-white hover:bg-[#0A5BD0] shadow-lg shadow-[#1570EF]/25"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            }`}
                                    >
                                        {tier.cta}
                                    </motion.button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== TESTIMONIALS ========== */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></span>
                            <span className="text-[#1570EF] font-medium text-sm tracking-wider">TESTIMONIALS</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            What Our <span className="text-[#1570EF]">Clients Say</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#1570EF]/20 hover:shadow-xl transition-all duration-500"
                            >
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed mb-6">"{testimonial.quote}"</p>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== FAQ ========== */}
            <section className="py-24 px-6 bg-gray-50/50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1570EF]/10 rounded-full mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1570EF]"></span>
                            <span className="text-[#1570EF] font-medium text-sm tracking-wider">FAQ</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Frequently Asked <span className="text-[#1570EF]">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white rounded-2xl border border-gray-100 hover:border-[#1570EF]/20 transition-all"
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedFaq === idx ? "rotate-180 text-[#1570EF]" : ""
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {expandedFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5">
                                                <p className="text-gray-600">{faq.answer}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CallToAction />
        </div>
    );
};

// Missing Icons
const Building = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const ArrowDown = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
);

const Phone = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const Mail = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export default VideoEditingPage;