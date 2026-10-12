"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFlask,
  FaRobot,
  FaMicrophoneLines,
  FaTrophy,
  FaPalette,
  FaBookQuran,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
} from "react-icons/fa6";

const clubsList = [
  {
    id: "stem",
    slug: "/SocietyAndClubs",
    title: "Young Scientists & STEM Olympiad Club",
    desc: "Hands-on physics models, chemistry experiments, science symposiums, and national STEM Olympiad coaching.",
    tag: "Science & Innovation",
    icon: FaFlask,
    highlight: "Annual Science Expo & Olympiads",
    schedule: "Weekly Lab Explorations",
    image: "/pss-gallery/pss-2.jpeg",
    accent: "from-blue-500/20 to-purple-600/30",
    badgeBg: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  },
  {
    id: "robotics",
    slug: "/SocietyAndClubs",
    title: "AI, Robotics & Coding Academy",
    desc: "Hands-on microcontrollers, Python coding, algorithmic problem-solving, and cutting-edge digital creations.",
    tag: "AI & Technology",
    icon: FaRobot,
    highlight: "Robotics & Logic Workshops",
    schedule: "Interactive Tech Labs",
    image: "/pss-gallery/pss-5.jpeg",
    accent: "from-cyan-500/20 to-blue-600/30",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
  },
  {
    id: "debate",
    slug: "/SocietyAndClubs",
    title: "National Declamations & Debate Guild",
    desc: "English & Urdu parliamentary debates, oratory rhetoric, and podium confidence for tomorrow's leaders.",
    tag: "Leadership & Debates",
    icon: FaMicrophoneLines,
    highlight: "Bilingual Parliamentary Rhetoric",
    schedule: "Podium Masterclasses",
    image: "/pss-gallery/pss-24.jpeg",
    accent: "from-amber-500/20 to-purple-700/30",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  },
  {
    id: "sports",
    slug: "/SocietyAndClubs",
    title: "Champions Athletic League",
    desc: "Cricket tournaments, football league, badminton, sprint athletics, and inter-school championship cups.",
    tag: "Sports & Athletics",
    icon: FaTrophy,
    highlight: "Annual Sports Gala & Cups",
    schedule: "Outdoor Training & Fixtures",
    image: "/pss-gallery/pss-10.jpeg",
    accent: "from-emerald-500/20 to-teal-700/30",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  },
  {
    id: "arts",
    slug: "/SocietyAndClubs",
    title: "Creative Arts & Calligraphy Guild",
    desc: "Scientific illustration, oil painting, traditional Arabic calligraphy, and annual student art exhibitions.",
    tag: "Arts & Calligraphy",
    icon: FaPalette,
    highlight: "Master Calligraphy Exhibitions",
    schedule: "Studio Canvas Sessions",
    image: "/pss-gallery/pss-15.jpeg",
    accent: "from-rose-500/20 to-purple-600/30",
    badgeBg: "bg-rose-500/20 text-rose-300 border-rose-400/30",
  },
  {
    id: "tarbiyah",
    slug: "/SocietyAndClubs",
    title: "Islamic Tarbiyah & Naat Guild",
    desc: "Tajweed recitation, Hamd-o-Naat sessions, noble prophetic ethics, and Quranic moral enrichment.",
    tag: "Moral Tarbiyah",
    icon: FaBookQuran,
    highlight: "Husn-e-Qira'at & Seerat",
    schedule: "Daily Moral Mentoring",
    image: "/pss-gallery/pss-12.jpeg",
    accent: "from-amber-600/20 to-yellow-500/30",
    badgeBg: "bg-amber-400/20 text-amber-200 border-amber-300/40",
  },
];

export default function Clubs() {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTag, setSelectedTag] = useState("all");

  const filterTags = [
    { id: "all", label: "All Societies" },
    { id: "Science & Innovation", label: "Science & STEM" },
    { id: "AI & Technology", label: "AI & Robotics" },
    { id: "Leadership & Debates", label: "Debate & Oratory" },
    { id: "Sports & Athletics", label: "Athletics & Sports" },
    { id: "Arts & Calligraphy", label: "Fine Arts" },
    { id: "Moral Tarbiyah", label: "Islamic Tarbiyah" },
  ];

  const filteredClubs =
    selectedTag === "all"
      ? clubsList
      : clubsList.filter((c) => c.tag === selectedTag);

  // Auto-scroll loop when in "all" view and not hovered
  useEffect(() => {
    if (selectedTag !== "all" || isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
        }
      }
    }, 3800);

    return () => clearInterval(interval);
  }, [selectedTag, isPaused]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section
      id="Curriculum"
      className="maxW px-4 sm:px-8 lg:px-12 py-20 flex flex-col gap-10 overflow-hidden relative"
    >
      {/* PSS Ambient Floating Clouds */}
      <div className="top-cloud -top-8 -right-20 w-80 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-amber-300">
          <path d="M40 80 Q60 30 110 50 Q160 10 230 40 Q290 20 330 60 Q370 70 380 90 Q340 110 200 110 Q70 110 40 80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center space-y-3 relative z-10">
        <div className="section-tag-pss justify-center">
          <span>(</span>
          <span>life at pss</span>
          <span>)</span>
        </div>
        <h2 className="font-berlin text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          <span>Life Beyond the Classroom</span>
          <span className="heading-cursor-line">|</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 leading-relaxed">
          A dynamic spectrum of clubs, STEM academies, and co-curricular pursuits designed to ignite curiosity, leadership, teamwork, and scientific innovation at The Pakistan School of Science.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4 max-w-4xl mx-auto">
          {filterTags.map((t) => {
            const active = selectedTag === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTag(t.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 shadow-sm ${
                  active
                    ? "bg-[#2D0A54] text-amber-300 ring-2 ring-[#C59A47] shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-amber-50 hover:text-[#2D0A54] border border-slate-200"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="flex items-center justify-between px-2 sm:px-4 relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Active Societies ({filteredClubs.length})</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            aria-label="Previous club"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#2D0A54] hover:bg-[#2D0A54] hover:text-amber-300 hover:border-[#C59A47] shadow-md transition-all flex items-center justify-center active:scale-95"
          >
            <FaArrowLeft className="text-xs" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next club"
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#2D0A54] hover:bg-[#2D0A54] hover:text-amber-300 hover:border-[#C59A47] shadow-md transition-all flex items-center justify-center active:scale-95"
          >
            <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>

      {/* Cards Reel */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar relative z-10 px-2 sm:px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredClubs.map((club, idx) => {
          const Icon = club.icon;
          return (
            <Link
              key={club.id}
              href={club.slug}
              className="shrink-0 w-[280px] sm:w-[360px] lg:w-[400px] h-[480px] sm:h-[500px] rounded-3xl relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-[#C59A47] flex flex-col justify-between"
            >
              {/* Background Real Photo with Smooth Zoom */}
              <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                <Image
                  src={club.image}
                  alt={club.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Multi-stage High-Contrast Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120224] via-[#1a0533]/85 to-black/30 group-hover:via-[#1a0533]/75 transition-colors duration-500" />
              </div>

              {/* Top Accent Gold Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C59A47] to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Card Header Content */}
              <div className="relative z-10 p-6 flex items-start justify-between gap-3">
                {/* Category Pill with Icon */}
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md bg-white/15 border border-white/30 text-white font-bold text-xs uppercase tracking-wider shadow-lg`}
                >
                  <Icon className="text-amber-300 text-sm" />
                  <span>{club.tag}</span>
                </div>

                {/* Serial Badge */}
                <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-3">
                {/* Feature highlight kicker */}
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-300 tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{club.highlight}</span>
                </div>

                {/* Title */}
                <h3 className="font-berlin text-2xl sm:text-3xl text-white font-bold leading-tight group-hover:text-amber-300 transition-colors drop-shadow-md">
                  {club.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-light line-clamp-3">
                  {club.desc}
                </p>

                {/* Card Footer Action */}
                <div className="pt-4 mt-2 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-300">
                    {club.schedule}
                  </span>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 group-hover:text-white transition-colors">
                    <span>Explore Society</span>
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C59A47] to-[#A37B2C] text-slate-950 flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-md">
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="relative z-10 mt-4 rounded-2xl bg-gradient-to-r from-[#2D0A54] via-[#3E0E73] to-[#2D0A54] border border-[#C59A47]/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="text-xl sm:text-2xl font-berlin font-bold text-white">
            Discover All Student Societies &amp; Co-Curricular Clubs
          </h4>
          <p className="text-xs sm:text-sm text-amber-100/90 max-w-xl">
            From science olympiads and bilingual debates to calligraphy guilds and sports cups, explore how PSS cultivates all-round excellence.
          </p>
        </div>

        <Link
          href="/SocietyAndClubs"
          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F5D77F] via-[#C59A47] to-[#A37B2C] hover:brightness-110 text-slate-950 text-xs sm:text-sm font-bold shadow-lg transition-all shrink-0 group/cta"
        >
          <span>View Societies Guide</span>
          <FaArrowRight className="text-xs group-hover/cta:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
