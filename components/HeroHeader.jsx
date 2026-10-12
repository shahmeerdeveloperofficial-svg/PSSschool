"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Real High-Definition PSS School Photos (Students, Campus, Assemblies & Awards)
const heroPhotos = [
  {
    src: "/pss-gallery/pss-17.jpeg",
    alt: "PSS Students in National Youm-e-Difa Ceremony",
    objectPosition: "object-[center_35%]",
  },
  {
    src: "/pss-gallery/pss-22.jpeg",
    alt: "PSS Scholars & Faculty on Educational Tour",
    objectPosition: "object-[center_30%]",
  },
  {
    src: "/pss-gallery/pss-18.jpeg",
    alt: "PSS Morning Assembly in Full School Uniform",
    objectPosition: "object-[center_25%]",
  },
  {
    src: "/pss-gallery/pss-14.jpeg",
    alt: "PSS Junior Scholars Concept Learning in Classroom",
    objectPosition: "object-center",
  },
  {
    src: "/pss-gallery/pss-11.jpeg",
    alt: "PSS Annual Award Ceremony & Leadership Stage",
    objectPosition: "object-[center_20%]",
  },
];

const HeroHeader = ({ title, description }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!isHomePage) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroPhotos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHomePage]);

  return (
    <header className="w-full flex min-h-[640px] sm:min-h-[720px] h-[calc(100vh-0rem)] max-h-[880px] sm:max-h-[940px] p-0 m-0">
      <div className="bg-slate-950 flex relative flex-1 w-full rounded-b-3xl overflow-hidden shadow-2xl border-b-2 border-amber-300/40">
        {/* Real School Photos - Enhanced Vibrancy & Cinematic Contrast */}
        {isHomePage &&
          heroPhotos.map((photo, index) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              priority={index === 0}
              className={`object-cover ${photo.objectPosition} cinematic-photo transition-all duration-1000 ease-in-out ${
                currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            />
          ))}

        {/* Minimal Clean Vignette - Photos Stay Bright, Crisp and Vivid */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/20 to-slate-950/30 z-[2] pointer-events-none" />

        {/* LA International Signature: Ambient Floating Vector Clouds */}
        <div className="top-cloud -top-4 -left-12 w-80 sm:w-96 h-28 opacity-20 z-[3] pointer-events-none">
          <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-amber-200">
            <path d="M40 80 Q60 30 110 50 Q160 10 230 40 Q290 20 330 60 Q370 70 380 90 Q340 110 200 110 Q70 110 40 80 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="bottom-cloud bottom-14 -right-12 w-96 sm:w-[480px] h-32 opacity-15 z-[3] pointer-events-none">
          <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-purple-300">
            <path d="M30 90 Q70 30 140 40 Q200 10 270 35 Q330 15 370 55 Q390 85 360 105 Q220 115 50 110 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Subtle Ambient Sparkles */}
        <div className="absolute top-12 left-10 w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping opacity-80 z-[4] pointer-events-none"></div>
        <div className="absolute top-20 right-14 w-2 h-2 rounded-full bg-white animate-ping opacity-70 z-[4] pointer-events-none"></div>

        {/* Header Content - Sufficient top padding to clear floating navbar completely */}
        <div className="relative text-light z-10 flex-1 flex flex-col items-center justify-start pt-28 sm:pt-36 lg:pt-40 px-3 sm:px-6 text-center pb-20 sm:pb-24">
          {/* Section Tag Badge (LA International Style) */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.1, duration: 0.6 },
            }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-300/80 text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-amber-200 shadow-2xl mb-2 sm:mb-3"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-ping"></span>
            ( PREMIER STEM &amp; CHARACTER EDUCATION • PSS )
          </motion.div>

          {/* Main Heading with LA International Blinking Cursor Line */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.25,
                duration: 0.8,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,0.95)",
            }}
            className="font-berlin text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-white drop-shadow-2xl leading-[1.12] sm:leading-[1.08] inline-flex items-center justify-center flex-wrap"
          >
            <span>{title}</span>
            <span className="heading-cursor-line">|</span>
          </motion.h1>

          {/* Subtitle */}
          {description && (
            <motion.h4
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.8,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
              style={{
                textShadow:
                  "0 3px 14px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.95)",
              }}
              className="mt-2.5 sm:mt-3 text-center max-w-[min(62ch,92%)] leading-relaxed text-xs sm:text-base md:text-lg font-medium text-amber-100 drop-shadow-xl"
            >
              {description}
            </motion.h4>
          )}

          {/* LA International Interactive Magnetic Bubble Buttons */}
          {isHomePage && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.55, duration: 0.7 },
              }}
              className="flex flex-wrap items-center justify-center gap-3 mt-4 sm:mt-5 mb-2 z-20"
            >
              <Link
                href="/OnlineAdmission"
                className="lai-btn px-5 py-2.5 sm:px-7 sm:py-3 bg-gradient-to-r from-amber-400 via-[#C59A47] to-amber-500 text-slate-950 text-xs sm:text-sm shadow-xl hover:shadow-amber-500/30 group"
              >
                <span className="relative z-10 font-bold tracking-wide">Explore Admissions</span>
                <span className="lai-btn-scale bg-white/40" />
                <span className="lai-btn-dot bg-slate-950 group-hover:scale-125" />
              </Link>

              <Link
                href="/OurPhilosophy"
                className="lai-btn px-5 py-2.5 sm:px-7 sm:py-3 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm shadow-lg group"
              >
                <span className="relative z-10 font-medium tracking-wide">Why Choose PSS</span>
                <span className="lai-btn-scale bg-amber-400/30" />
                <span className="lai-btn-dot bg-amber-300 group-hover:scale-125" />
              </Link>
            </motion.div>
          )}

          {isHomePage && <Sections />}
        </div>
      </div>
    </header>
  );
};

const Sections = () => {
  const sections = [
    {
      title: "About",
      icon: "/icons/About.svg",
      link: "#About",
      bgClass: "bg-[#00a2e8] hover:bg-[#0086c4]",
      shadowClass: "shadow-sky-500/40 shadow-lg",
    },
    {
      title: "Science Path",
      icon: "/icons/Timeline.svg",
      link: "#Timeline",
      bgClass: "bg-[#f59e0b] hover:bg-[#d97706]",
      shadowClass: "shadow-amber-500/40 shadow-lg",
    },
    {
      title: "Student Life",
      icon: "/icons/Curriculum.svg",
      link: "#Curriculum",
      bgClass: "bg-[#10b981] hover:bg-[#059669]",
      shadowClass: "shadow-emerald-500/40 shadow-lg",
    },
    {
      title: "Admissions",
      icon: "/icons/LMS.svg",
      link: "#LMS",
      bgClass: "bg-[#8b5cf6] hover:bg-[#7c3aed]",
      shadowClass: "shadow-purple-500/40 shadow-lg",
    },
    {
      title: "Contact",
      icon: "/icons/Contact.svg",
      link: "#Contact",
      bgClass: "bg-[#f43f5e] hover:bg-[#e11d48]",
      shadowClass: "shadow-rose-500/40 shadow-lg",
    },
  ];

  const handleSectionClick = (link) => {
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.9,
          duration: 0.8,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="absolute h-10 sm:h-16 px-1.5 sm:px-5 rounded-t-2xl flex items-center bottom-0 left-1/2 -translate-x-1/2 bg-white text-dark shadow-2xl border-t border-x border-slate-200 z-20"
    >
      <div className="z-[-1] rotate-90 absolute bottom-0 left-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>
      <div className="z-[-1] absolute bottom-0 right-full h-6 sm:h-12 aspect-square rounded-br-2xl sm:shadow-[1.5rem_1.5rem_0_0_#fff] shadow-[0.5rem_0.5rem_0_0_#fff] bg-transparent"></div>

      {sections.map((item, index) => {
        return (
          <div
            key={index}
            className="group relative w-11 sm:w-24 h-full cursor-pointer flex justify-center"
            onClick={() => handleSectionClick(item.link)}
          >
            {/* Colorful Button Circle matching Tabassum Educational Alliance */}
            <div
              className={`w-9 sm:w-16 -top-5 sm:-top-8 aspect-square ${item.bgClass} ${item.shadowClass} transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 left-1/2 -translate-x-1/2 absolute flex items-center justify-center rounded-full border-2 border-white`}
            >
              <Image
                src={item.icon}
                width={300}
                height={300}
                alt={item.title}
                priority
                className="w-[55%] sm:w-[60%] drop-shadow filter brightness-0 invert"
              />
            </div>
            <div className="max-sm:hidden whitespace-nowrap absolute top-10 w-full text-center text-sm leading-tight text-slate-800 font-medium group-hover:text-black transition-colors">
              {item.title}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default HeroHeader;
