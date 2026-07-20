"use client";

import { useEffect, useRef, useState } from 'react'
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const display = Bricolage_Grotesque({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-display",
});

const body = Inter({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-body",
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-mono",
});

interface CountNumberProps {
    value: number;
    className?: string;
}

const CountNumber: React.FC<CountNumberProps> = ({ value, className = "" }) => {
    const prevValue = useRef(value);
    const [direction, setDirection] = useState<'up' | 'down'>('up');

    useEffect(() => {
        if (value > prevValue.current) {
            setDirection('up');
        } else if (value < prevValue.current) {
            setDirection('down');
        }
        prevValue.current = value;
    }, [value]);

    // Convert to string for display
    const displayValue = value.toString();

    return (
        <span className={`inline-flex ${className}`}>
            {displayValue.split('').map((digit, index) => (
                <span key={index} className="relative inline-block w-[0.6em] h-[1.2em] overflow-hidden">
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={`${digit}-${index}-${value}`}
                            initial={{ 
                                y: direction === 'up' ? '100%' : '-100%',
                                opacity: 0.5
                            }}
                            animate={{ 
                                y: 0,
                                opacity: 1
                            }}
                            exit={{ 
                                y: direction === 'up' ? '-100%' : '100%',
                                opacity: 0.5
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                delay: index * 0.05
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                                fontFeatureSettings: '"tnum" 1',
                            }}
                        >
                            {digit}
                        </motion.span>
                    </AnimatePresence>
                </span>
            ))}
        </span>
    );
};

const HomeAbout = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [visibleWords, setVisibleWords] = useState<number[]>([]);
    const [counts, setCounts] = useState({ projects: 0, clients: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);

    const text = "We don't just offer services we architect growth. In a world where attention is currency and speed is survival, we help brands cut through the noise with precision-engineered strategies. We don't believe in templates or shortcuts. We believe in understanding your unique DNA and building systems that scale, strategies that stick, and results that speak for themselves. This isn't just digital marketing. This is digital mastery.";
    const words = text.split(' ');

    // Word reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let index = 0;
                        const interval = setInterval(() => {
                            if (index < words.length) {
                                setVisibleWords(prev => [...prev, index]);
                                index++;
                            } else {
                                clearInterval(interval);
                            }
                        }, 100);

                        return () => clearInterval(interval);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [words.length]);

    // Counting animation with timepicker effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        
                        // Animate projects from 0 to 140 with timepicker effect
                        const projectsDuration = 2500;
                        const projectsStartTime = Date.now();
                        const projectsInterval = setInterval(() => {
                            const elapsed = Date.now() - projectsStartTime;
                            const progress = Math.min(elapsed / projectsDuration, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const currentCount = Math.floor(eased * 140);
                            setCounts(prev => ({ ...prev, projects: currentCount }));
                            
                            if (progress >= 1) {
                                setCounts(prev => ({ ...prev, projects: 140 }));
                                clearInterval(projectsInterval);
                            }
                        }, 50);

                        // Animate clients from 0 to 50 with timepicker effect
                        const clientsDuration = 2500;
                        const clientsStartTime = Date.now();
                        const clientsInterval = setInterval(() => {
                            const elapsed = Date.now() - clientsStartTime;
                            const progress = Math.min(elapsed / clientsDuration, 1);
                            const eased = 1 - Math.pow(1 - progress, 3);
                            const currentCount = Math.floor(eased * 50);
                            setCounts(prev => ({ ...prev, clients: currentCount }));
                            
                            if (progress >= 1) {
                                setCounts(prev => ({ ...prev, clients: 50 }));
                                clearInterval(clientsInterval);
                            }
                        }, 50);

                        return () => {
                            clearInterval(projectsInterval);
                            clearInterval(clientsInterval);
                        };
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <section
            ref={sectionRef}
            className={`max-w-[1200px] mx-auto relative ${display.variable} ${body.variable} ${mono.variable} w-full overflow-visible`}
        >
            <div className="max-w-[1200px] px-6 sm:px-10 lg:px-[40px] py-24">
                <div className="flex flex-col justify-between lg:flex-row items-start gap-16">
                    {/* Left side - Sticky */}
                    <div className="lg:flex-shrink-0 lg:sticky lg:top-24">
                        <h2 className="font-semibold text-5xl sm:text-6xl leading-[1.05] text-[#060814]">
                            About
                        </h2>
                    </div>
                    {/* Right side - Scrollable content */}
                    <div className="flex-1 mt-14">
                        <div className='max-w-[600px] ml-auto'>
                            <p className='font-[family-name:var(--font-display)] text-[34px] pb-[100px] leading-[1.3]'>
                                {words.map((word, index) => (
                                    <span
                                        key={index}
                                        className={`transition-colors duration-300 ${visibleWords.includes(index) ? 'text-[#4C8DFF]' : 'text-[#060814]'
                                            }`}
                                        style={{
                                            transitionDelay: visibleWords.includes(index) ? `${index * 20}ms` : '0ms',
                                        }}
                                    >
                                        {word}{' '}
                                    </span>
                                ))}
                            </p>
                            <div className='flex gap-18 mb-[70px]'>
                                <div>
                                    <div className='relative inline-flex items-start text-[152px] leading-[170px] font-[family-name:var(--font-display)]'>
                                        <CountNumber value={counts.projects} />
                                        <span className='text-[65px] text-[#4C8DFF] leading-none ml-1'>+</span>
                                    </div>
                                    <p className='text-[18px]'>Projects Completed</p>
                                </div>
                                <div>
                                    <div className='relative inline-flex items-start text-[152px] leading-[170px] font-[family-name:var(--font-display)]'>
                                        <CountNumber value={counts.clients} />
                                        <span className='text-[65px] text-[#4C8DFF] leading-none ml-1'>+</span>
                                    </div>
                                    <p className='text-[18px]'>Clients Served Worldwide</p>
                                </div>
                            </div>
                            <div className='flex gap-8 flex-wrap'>
                                <Image src={'/awards-design-nominees.svg'} alt={'Upscale-alliance-awards-design-nominees'} width={130} height={130} />
                                <Image src={'/awards-awwwards-logo.svg'} alt={'Upscale-alliance-awards-awwwards-logo'} width={130} height={130} />
                                <Image src={'/awards-css-design-awards-logo.svg'} alt={'Upscale-alliance-awards-css-design-awards-logo'} width={130} height={130} />
                                <Image src={'/clutch-web-design.svg'} alt={'Upscale-alliance-clutch-web-design'} width={80} height={80} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout