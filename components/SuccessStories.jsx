"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBuildingColumns } from "react-icons/fa6";

const successStories = [
  {
    name: "Muhammad Hamza",
    program: "PSS Matric Science Wing",
    status: "Secured Admission at",
    institution: "King Edward Medical University",
    marks: "1084 / 1100 Marks (100% Board Distinction)",
    badge: "Pre-Medical MDCAT",
    image: "/pss-gallery/pss-11.jpeg",
    logoText: "KEMU",
    accentColor: "border-emerald-300 text-emerald-800 bg-emerald-50",
  },
  {
    name: "Ayesha Fatima",
    program: "PSS Pre-Engineering Wing",
    status: "Secured Admission at",
    institution: "UET Lahore — Electrical & AI",
    marks: "1076 / 1100 Marks (Top Board Position)",
    badge: "Pre-Engineering ECAT",
    image: "/pss-gallery/pss-17.jpeg",
    logoText: "UET",
    accentColor: "border-blue-300 text-blue-800 bg-blue-50",
  },
  {
    name: "Abdullah Tariq",
    program: "PSS Computer Science & AI",
    status: "Secured Admission at",
    institution: "NUST Islamabad — Software & AI",
    marks: "National Science Olympiad Gold Medalist",
    badge: "AI & Computing",
    image: "/pss-gallery/pss-22.jpeg",
    logoText: "NUST",
    accentColor: "border-purple-300 text-purple-800 bg-purple-50",
  },
  {
    name: "Zainab Noor",
    program: "PSS Matric Science Wing",
    status: "Secured Admission at",
    institution: "Allama Iqbal Medical College",
    marks: "1080 / 1100 Marks (Merit Scholarship Holder)",
    badge: "Pre-Medical Merit",
    image: "/pss-gallery/pss-10.jpeg",
    logoText: "AIMC",
    accentColor: "border-amber-300 text-amber-900 bg-amber-50",
  },
];

export default function SuccessStories() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="maxWSec px-4 sm:px-8 lg:px-12 py-20 flex gap-12 flex-col relative overflow-hidden">
      {/* PSS Ambient Clouds */}
      <div className="top-cloud -top-10 left-10 w-96 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-amber-300">
          <path d="M40 80 Q60 30 110 50 Q160 10 230 40 Q290 20 330 60 Q370 70 380 90 Q340 110 200 110 Q70 110 40 80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center space-y-3 relative z-10">
        <div className="section-tag-pss justify-center">
          <span>(</span>
          <span>success stories</span>
          <span>)</span>
        </div>

        <h2 className="font-berlin text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          <span>From PSS to the World</span>
          <span className="heading-cursor-line">|</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Our scholars continuously crown our heraldic motto with Board distinctions, entry test supremacy, and placements into Pakistan&apos;s apex universities.
        </p>
      </div>

      {/* Success Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {successStories.map((story, i) => {
          const isHovered = hoveredIdx === i;
          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#C59A47] transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              {/* Card Top Information */}
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${story.accentColor}`}>
                    {story.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 font-berlin font-bold text-xs text-[#2D0A54] flex items-center justify-center border border-slate-200">
                    {story.logoText}
                  </div>
                </div>

                <h3 className="font-berlin text-xl font-bold text-slate-900 group-hover:text-[#2D0A54] transition-colors leading-tight mb-1">
                  {story.name}
                </h3>
                <p className="text-xs text-[#C59A47] font-semibold mb-3">
                  {story.program}
                </p>

                <div className="text-[11px] text-slate-500 uppercase tracking-wider font-medium mb-1">
                  {story.status}
                </div>
                <div className="font-berlin text-base font-bold text-slate-800 leading-snug">
                  {story.institution}
                </div>
              </div>

              {/* Slide-Down / Expandable Real Photo Showcase (LA International Pattern) */}
              <div
                className={`relative w-full transition-all duration-500 ease-out overflow-hidden ${
                  isHovered ? "h-52 opacity-100" : "h-28 opacity-90"
                }`}
              >
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 cinematic-photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-medium leading-tight">
                  <div className="flex items-center gap-1.5 text-amber-300 font-bold mb-0.5">
                    <FaAward className="text-xs" />
                    <span>{story.marks}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
