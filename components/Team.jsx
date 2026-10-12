"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaArrowRight, FaCheck } from "react-icons/fa6";

const leaders = [
  {
    id: "chairman",
    tabTitle: "Chairman's Message",
    name: "Muhammad Iqbal Bhatti",
    role: "Chairman",
    tag: "Founder & Chairman",
    qualification: "Founder & Visionary Leader",
    designation: "The Pakistan School of Science",
    image: "/leadership/chairman.jpeg",
    slug: "/ChairmanMessage",
    headline: "Empowering Minds, Inspiring Character & Building Pakistan's Future",
    quote:
      "Since our establishment on 23rd March 2011, The Pakistan School of Science has stood firm on the cornerstone of academic rigor combined with steadfast Islamic moral values. Our mission is not merely academic instruction; it is nurturing righteous, compassionate, and forward-thinking individuals capable of leading our nation with wisdom and integrity.",
    subtext:
      "Every student who walks through our doors is entrusted to our care as a sacred responsibility. Through continuous mentorship, state-of-the-art science laboratories, and Qur'anic tarbiyah, we strive to ignite a lifelong passion for discovery and upright character.",
  },
  {
    id: "principal",
    tabTitle: "Principal's Message",
    name: "Hafiz Nasir Mahmood",
    role: "Principal",
    tag: "Principal & Head of Academics",
    qualification: "M.Sc. Chemistry · Academic Director",
    designation: "The Pakistan School of Science",
    image: "/leadership/principal.jpeg",
    slug: "/DirectorMessage",
    headline: "Pursuit of Academic Excellence & Holistic Character Tarbiyah",
    quote:
      "Education is the most transformative trust placed upon educators. Guided by prophetic principles and contemporary educational pedagogy, our dedicated faculty strives to unlock every child's innate curiosity, analytical discipline, and moral courage.",
    subtext:
      "We prepare our matriculation and high school scholars with meticulous concept-building and board examination mastery while embedding timeless virtues of honesty, empathy, and patriotism into daily school life.",
  },
];

const facultyHighlights = [
  {
    title: "Senior Science & Pre-Medical Faculty",
    qualification: "Specialized Master Trainers in Physics, Chemistry & Biology",
    desc: "Rigorous concept delivery and pre-board revision modules tailored for top merit positions and medical entry tests.",
    tag: "Pre-Medical Wing",
  },
  {
    title: "STEM Robotics & AI Computing Mentors",
    qualification: "Software Engineers & Tech Educators",
    desc: "Hands-on instruction in microcontrollers, Python coding, and algorithmic problem-solving for junior and senior scholars.",
    tag: "Technology Mentors",
  },
  {
    title: "Qur'an & Seerat-un-Nabi Faculty",
    qualification: "Certified Qaris & Islamic Scholars",
    desc: "Dedicated to tajweed, memorization, and instilling noble prophetic character and moral tarbiyah in daily student life.",
    tag: "Islamic Tarbiyah",
  },
  {
    title: "Pre-Engineering & Mathematics Faculty",
    qualification: "Advanced Mathematics Specialists",
    desc: "Fostering analytical acumen, problem-solving mastery, and ECAT engineering university entry exam preparation.",
    tag: "Pre-Engineering Wing",
  },
];

export default function Team() {
  const [activeLeaderId, setActiveLeaderId] = useState("chairman");
  const activeLeader = leaders.find((l) => l.id === activeLeaderId) || leaders[0];

  return (
    <section id="Team" className="maxWSec px-4 sm:px-8 lg:px-12 py-16 flex flex-col gap-10 relative overflow-hidden">
      {/* LA International Signature: Ambient Floating Clouds */}
      <div className="top-cloud -top-8 -left-20 w-80 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-amber-300">
          <path d="M40 80 Q60 30 110 50 Q160 10 230 40 Q290 20 330 60 Q370 70 380 90 Q340 110 200 110 Q70 110 40 80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center space-y-3 relative z-10">
        <div className="section-tag-lai justify-center">
          <span>(</span>
          <span>words of wisdom</span>
          <span>)</span>
        </div>

        <h2 className="font-berlin text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          <span>Words of Wisdom from Our Leadership</span>
          <span className="heading-cursor-line">|</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Guiding principles, visionary insights, and steadfast dedication from the architects of our educational mission.
        </p>

        {/* LA International Signature: Physics-based Swinging Bell Animation */}
        <div className="flex flex-col items-center justify-center pt-2">
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Bell Body */}
            <div className="bell-swing-anim w-12 h-12 text-[#C59A47] flex items-center justify-center relative">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 drop-shadow-md">
                <path d="M12 2C10.34 2 9 3.34 9 5V5.29C6.72 6.35 5 8.7 5 11.5V17L3 19V20H21V19L19 17V11.5C19 8.7 17.28 6.35 15 5.29V5C15 3.34 13.66 2 12 2Z" />
              </svg>
              {/* Counter-swinging Clapper */}
              <div className="clapper-swing-anim absolute -bottom-1 w-2.5 h-2.5 rounded-full bg-[#2D0A54] border border-amber-300 shadow-sm" />
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">
            Heraldic Tarbiyah &amp; School Discipline
          </span>
        </div>
      </div>

      {/* Leadership Navigation Toggle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
        {leaders.map((leader) => {
          const isActive = leader.id === activeLeaderId;
          return (
            <button
              key={leader.id}
              onClick={() => setActiveLeaderId(leader.id)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 relative overflow-hidden group ${
                isActive
                  ? "bg-white border-[#C59A47] ring-2 ring-[#C59A47]/30 shadow-lg scale-[1.01]"
                  : "bg-white/80 border-slate-200 hover:border-amber-300 hover:bg-white shadow-sm"
              }`}
            >
              {/* Active Golden Indicator Bar */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#F5D77F] via-[#C59A47] to-[#2D0A54]" />
              )}

              {/* Leader Avatar */}
              <div
                className={`relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 transition-transform duration-300 ${
                  isActive
                    ? "border-[#C59A47] shadow-md scale-105"
                    : "border-slate-300 group-hover:border-amber-400"
                }`}
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Role */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-berlin font-bold text-base sm:text-lg transition-colors truncate ${
                      isActive ? "text-[#2D0A54]" : "text-slate-800 group-hover:text-[#2D0A54]"
                    }`}
                  >
                    {leader.tabTitle}
                  </h3>
                  {isActive && (
                    <span className="w-5 h-5 rounded-full bg-[#C59A47] text-white flex items-center justify-center text-[10px] shrink-0">
                      <FaCheck />
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 truncate mt-0.5 font-medium">
                  {leader.name}
                </p>
                <p className="text-[11px] text-[#C59A47] font-semibold truncate">
                  {leader.tag}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Leadership Stage Card */}
      <div className="rounded-3xl bg-white border border-amber-200/90 shadow-2xl overflow-hidden relative transition-all duration-500">
        {/* Top Gradient Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#2D0A54] via-[#C59A47] to-[#F5D77F]" />

        {/* Ambient PSS Background Watermark */}
        <div className="absolute right-4 bottom-2 text-[120px] sm:text-[180px] font-berlin font-extrabold text-slate-900/[0.03] select-none pointer-events-none leading-none z-0">
          PSS
        </div>

        <div className="relative z-10 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Orbital Portrait Stage */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            {/* Orbital Stage Container */}
            <div className="relative w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] flex items-center justify-center mb-6">
              {/* Organic Blob Background Shape */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-100/70 via-amber-50/50 to-purple-100/40 blur-sm pointer-events-none" />

              {/* Dashed Orbital Ellipse / Ring */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 310 310"
              >
                <circle
                  cx="155"
                  cy="155"
                  r="130"
                  fill="none"
                  stroke="#C59A47"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  opacity="0.65"
                />
              </svg>

              {/* Orbiting Golden Sphere with Specular Glint */}
              <div
                className="leadership-orbit-sphere absolute top-1/2 left-1/2 w-11 h-11 sm:w-12 sm:h-12 -mt-[22px] sm:-mt-6 -ml-[22px] sm:-ml-6 rounded-full border-[3px] border-white shadow-lg pointer-events-none z-20 flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, #F5D77F, #C59A47 60%, #2D0A54)",
                  boxShadow:
                    "0 0 16px rgba(197, 154, 71, 0.75), 0 4px 12px rgba(45, 10, 84, 0.35)",
                }}
              >
                {/* Specular highlight glint */}
                <div className="w-2.5 h-2.5 rounded-full bg-white/80 blur-[0.5px] -translate-x-1 -translate-y-1" />
              </div>

              {/* Center Portrait Image */}
              <div className="relative w-[190px] h-[190px] sm:w-[215px] sm:h-[215px] rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 bg-slate-100">
                <Image
                  key={activeLeader.id}
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              </div>
            </div>

            {/* Leader Identity Badge */}
            <h3 className="text-2xl sm:text-3xl font-berlin font-bold text-[#2D0A54]">
              {activeLeader.name}
            </h3>

            <div className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/70 border border-amber-300 text-[#9A7328] font-bold text-xs uppercase tracking-wider shadow-sm">
              <span>★</span>
              <span>{activeLeader.tag}</span>
              <span>★</span>
            </div>

            {activeLeader.qualification && (
              <p className="text-xs font-semibold text-slate-500 tracking-wide font-mono mt-1.5">
                {activeLeader.qualification}
              </p>
            )}

            <p className="text-xs text-slate-600 font-medium mt-1">
              {activeLeader.designation}
            </p>
          </div>

          {/* Right Column: Quotes & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Quote Mark Badge */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F5D77F] via-[#C59A47] to-[#A37B2C] text-white flex items-center justify-center text-xl shadow-md">
                <FaQuoteLeft />
              </div>

              {/* Headline */}
              <h4 className="text-2xl sm:text-3xl font-berlin font-bold text-[#2D0A54] leading-snug">
                {activeLeader.headline}
              </h4>

              {/* Messages */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#C59A47] pl-4 py-1">
                &ldquo;{activeLeader.quote}&rdquo;
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeLeader.subtext}
              </p>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href={activeLeader.slug}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#2D0A54] via-[#3E0E73] to-[#2D0A54] hover:from-[#C59A47] hover:via-[#D8AC58] hover:to-[#C59A47] text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
              >
                <span>Read Full Message</span>
                <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C59A47]" />
                <span>OFFICIAL LEADERSHIP ADDRESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Wings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {facultyHighlights.map((fac, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white border border-amber-200/80 hover:border-amber-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-purple-50 text-sec font-bold text-xs uppercase tracking-wider border border-purple-200">
                {fac.tag}
              </span>
              <h4 className="text-lg font-bold text-sec group-hover:text-main transition-colors mt-2">
                {fac.title}
              </h4>
              <p className="text-xs font-mono text-amber-700">
                {fac.qualification}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                {fac.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
