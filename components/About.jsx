"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaAtom,
  FaRobot,
  FaGraduationCap,
  FaBookQuran,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa6";

const statHighlights = [
  {
    num: "100%",
    label: "Board Distinction Rate",
    sub: "Top Merit in Lahore Board & BISE Matriculation",
    bg: "bg-amber-50 border-amber-200 text-[#C59A47]",
  },
  {
    num: "4",
    label: "State-of-the-Art Labs",
    sub: "Physics, Chemistry, Biology & AI Robotics Facilities",
    bg: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    num: "15+",
    label: "Years of Academic Trust",
    sub: "Founded 23rd March 2011 with Unwavering Values",
    bg: "bg-purple-50 border-purple-200 text-[#2D0A54]",
  },
  {
    num: "1,500+",
    label: "Future Leaders Molded",
    sub: "Scholars in Top Medical, Engineering & IT Universities",
    bg: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
];

const pillars = [
  {
    serial: "01",
    tag: "A Complete Science Continuum",
    title: "Concept-Driven STEM Pedagogy",
    desc: "From early years Montessori inquiry through junior wing science experiments and senior Matric & Pre-College coaching, we provide a unified conceptual journey with zero rote learning.",
    icon: FaAtom,
    highlight: "Zero Rote Learning Guarantee",
    trackStroke: "#C59A47",
    dashStroke: "#F5D77F",
    dotColor: "#C59A47",
    cardBg: "bg-white",
    slug: "/Curriculum/EarlyYears",
  },
  {
    serial: "02",
    tag: "World-Class Laboratories",
    title: "Hands-on Robotics & Science Labs",
    desc: "Purpose-built modern laboratory spaces where students conduct practical experiments in chemical reactions, electronics, microcontrollers, and Python algorithmic coding.",
    icon: FaRobot,
    highlight: "Equipped Physics, Chem & Bio Suites",
    trackStroke: "#00a2e8",
    dashStroke: "#7dd3fc",
    dotColor: "#00a2e8",
    cardBg: "bg-white",
    slug: "/Curriculum/EarlyYears",
  },
  {
    serial: "03",
    tag: "Medical & Engineering Pathways",
    title: "Board Toppers & Entry Coaching",
    desc: "Specialized senior faculty tailored for top marks in Matric examinations and rigorous MDCAT/ECAT foundational orientation to propel students into top universities.",
    icon: FaGraduationCap,
    highlight: "100% Board First Division Record",
    trackStroke: "#2D0A54",
    dashStroke: "#a855f7",
    dotColor: "#2D0A54",
    cardBg: "bg-white",
    slug: "/StudentLife/Matric",
  },
  {
    serial: "04",
    tag: "Islamic Tarbiyah & Ethics",
    title: "Prophetic Morals & Character",
    desc: "We embed timeless virtues of truthfulness, empathy, discipline, and patriotic devotion into everyday campus routines, shaping students into ethical, compassionate leaders.",
    icon: FaBookQuran,
    highlight: "Qur'anic Ethics & Moral Values",
    trackStroke: "#10b981",
    dashStroke: "#6ee7b7",
    dotColor: "#10b981",
    cardBg: "bg-white",
    slug: "/OurPhilosophy",
  },
];

export default function About() {
  return (
    <section id="About" className="maxWSec px-4 sm:px-8 lg:px-12 py-20 flex gap-14 flex-col relative overflow-hidden">
      {/* LA International Signature: Ambient Floating Clouds */}
      <div className="top-cloud -top-10 -left-20 w-96 h-36 opacity-15 pointer-events-none">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-amber-300">
          <path d="M40 80 Q60 30 110 50 Q160 10 230 40 Q290 20 330 60 Q370 70 380 90 Q340 110 200 110 Q70 110 40 80 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="bottom-cloud bottom-10 -right-20 w-96 h-36 opacity-15 pointer-events-none">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-purple-300">
          <path d="M30 90 Q70 30 140 40 Q200 10 270 35 Q330 15 370 55 Q390 85 360 105 Q220 115 50 110 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Header with Tag & LA International Cursor Line */}
      <div className="text-center space-y-3 relative z-10">
        <div className="section-tag-lai justify-center">
          <span>(</span>
          <span>why pss</span>
          <span>)</span>
        </div>

        <h2 className="font-berlin text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          <span>What Sets PSS Apart</span>
          <span className="heading-cursor-line">|</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Under the timeless motto <strong className="text-[#2D0A54]">&quot;Knowledge is Power&quot;</strong>, we combine concept-driven STEM rigor with Prophetic ethical tarbiyah to sculpt tomorrow&apos;s doctors, engineers, and nation builders.
        </p>
      </div>

      {/* 4 High-Impact Stat Cards Grid (LA International Style) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {statHighlights.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`p-6 rounded-3xl border-2 ${stat.bg} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
          >
            <div>
              <div className="font-berlin text-4xl sm:text-5xl font-black mb-2 tracking-tight">
                {stat.num}
              </div>
              <div className="font-berlin text-lg font-bold text-slate-900 mb-1 leading-snug">
                {stat.label}
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium pt-3 border-t border-slate-200/60 mt-3">
              {stat.sub}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 4 Core Pillars with Traveling SVG Circuit Lines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 pt-4">
        {pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.serial}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 p-7 sm:p-9 flex flex-col justify-between overflow-hidden"
            >
              {/* LA International Signature: Animated Traveling Circuit SVG Track */}
              <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 120 400"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 110,0 L 40,0 C 15,0 0,15 0,40 L 0,360 C 0,385 15,400 40,400 L 110,400"
                    stroke={pillar.trackStroke}
                    strokeWidth="1.5"
                    opacity="0.3"
                  />
                  <path
                    d="M 110,0 L 40,0 C 15,0 0,15 0,40 L 0,360 C 0,385 15,400 40,400 L 110,400"
                    stroke={pillar.dashStroke}
                    strokeWidth="2.5"
                    className="webflow-animated-line"
                  />
                  <circle cx="110" cy="0" r="4.5" fill={pillar.dotColor} />
                </svg>
              </div>

              {/* Card Header */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-2xl text-[#2D0A54] group-hover:scale-110 group-hover:bg-[#2D0A54] group-hover:text-amber-300 transition-all duration-300 shadow-sm">
                    <Icon />
                  </div>
                  <span className="font-mono text-sm font-bold text-slate-300 group-hover:text-[#C59A47] transition-colors">
                    {pillar.serial}
                  </span>
                </div>

                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                  {pillar.tag}
                </div>

                <h3 className="font-berlin text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#2D0A54] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light max-w-[48ch]">
                  {pillar.desc}
                </p>
              </div>

              {/* Card Footer with Highlight Checkmark & LA International Magnetic Button */}
              <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] shrink-0 font-bold">
                    <FaCheck />
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    {pillar.highlight}
                  </span>
                </div>

                <Link
                  href={pillar.slug}
                  className="lai-btn px-4 py-2 bg-slate-900 text-white hover:bg-[#2D0A54] text-xs transition-colors group/btn"
                >
                  <span className="relative z-10">Learn more</span>
                  <span className="lai-btn-scale bg-[#C59A47]/40" />
                  <span className="lai-btn-dot bg-amber-400 group-hover/btn:scale-125" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
