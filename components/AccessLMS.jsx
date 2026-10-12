"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaMicroscope,
  FaWaveSquare,
  FaGraduationCap,
  FaCode,
  FaCircleCheck,
  FaArrowRight,
  FaWifi,
  FaClock,
} from "react-icons/fa6";

const tabs = [
  {
    id: "ai",
    title: "AI & Robotics Lab",
    icon: FaRobot,
    badge: "Digital Innovation",
  },
  {
    id: "medical",
    title: "Pre-Medical Lab",
    icon: FaMicroscope,
    badge: "MDCAT Biology",
  },
  {
    id: "engineering",
    title: "Physics Mechanics",
    icon: FaWaveSquare,
    badge: "ECAT Analysis",
  },
  {
    id: "admission",
    title: "Admissions 2026-27",
    icon: FaGraduationCap,
    badge: "4-Step Process",
  },
];

export default function AccessLMS() {
  const [activeTab, setActiveTab] = useState("ai");
  const [currentTime, setCurrentTime] = useState("09:41 AM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="LMS" className="maxWSec w-full px-4 sm:px-8 lg:px-12 py-20 flex flex-col gap-10 relative overflow-hidden">
      {/* Background ambient drifting clouds */}
      <div className="top-cloud -top-8 -right-20 w-96 h-32 opacity-15 pointer-events-none">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-amber-300">
          <path d="M40 80 Q60 30 110 50 Q160 10 230 40 Q290 20 330 60 Q370 70 380 90 Q340 110 200 110 Q70 110 40 80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Header with LA International Tag & Cursor */}
      <div className="text-center space-y-3 relative z-10">
        <div className="section-tag-lai justify-center">
          <span>(</span>
          <span>interactive science &amp; admissions portal</span>
          <span>)</span>
        </div>

        <h2 className="font-berlin text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          <span>AI STEM Lab &amp; Admissions Station</span>
          <span className="heading-cursor-line">|</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Experience our interactive digital ecosystem — blending modern AI robotics, advanced laboratory simulations, and streamlined online admissions.
        </p>
      </div>

      {/* Mac OS Styled Digital Board Showcase (LA International Signature Device) */}
      <div className="max-w-5xl mx-auto w-full rounded-3xl bg-slate-950 border-2 border-amber-300/40 shadow-2xl overflow-hidden relative z-10">
        {/* Mac OS Window Top Bar */}
        <div className="bg-slate-900/90 border-b border-white/10 px-4 py-3 flex items-center justify-between backdrop-blur-md">
          {/* Traffic Light Window Buttons */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 shadow-sm inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 shadow-sm inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm inline-block"></span>
            <span className="ml-3 font-mono text-[11px] text-slate-400 font-semibold hidden sm:inline">
              PSS_STEM_OS://lab-portal-v2.6
            </span>
          </div>

          {/* Center Title */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM ACTIVE • SESSION 2026-27</span>
          </div>

          {/* Time & Wi-Fi Indicators */}
          <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
            <span className="flex items-center gap-1">
              <FaWifi className="text-emerald-400 text-[11px]" />
              <span className="hidden sm:inline">1 Gbps</span>
            </span>
            <span className="flex items-center gap-1 text-slate-300">
              <FaClock className="text-amber-400 text-[10px]" />
              <span>{currentTime}</span>
            </span>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="bg-slate-900/60 p-2 sm:p-3 border-b border-white/5 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-400 to-[#C59A47] text-slate-950 font-bold shadow-lg shadow-amber-400/20 scale-[1.02]"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                <Icon className={isActive ? "text-slate-950" : "text-amber-400"} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Stage Body */}
        <div className="p-6 sm:p-10 min-h-[420px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {/* TAB 1: AI & ROBOTICS LAB */}
            {activeTab === "ai" && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold uppercase tracking-wider">
                    <FaCode />
                    <span>Algorithmic AI &amp; Microcontroller Robotics</span>
                  </div>
                  <h3 className="font-berlin text-2xl sm:text-4xl font-bold leading-tight">
                    Hands-On Robotics &amp; Python STEM Lab
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Students at The Pakistan School of Science write real Python and C++ code, configure microcontrollers, and assemble automated robotic arms and sensor telemetry systems from early school years.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[11px] text-slate-400 block">Robotics Lab Kit</span>
                      <span className="font-berlin text-lg text-amber-300 font-bold">Arduino &amp; AI</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[11px] text-slate-400 block">Languages Taught</span>
                      <span className="font-berlin text-lg text-cyan-300 font-bold">Python &amp; C++</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-2xl bg-black/60 border border-cyan-400/30 p-4 font-mono text-xs text-cyan-300 shadow-xl overflow-hidden relative">
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-cyan-500/20 text-slate-400 text-[11px]">
                    <span>// PSS_Robotics_Controller.py</span>
                    <span className="text-emerald-400 animate-pulse">● EXECUTING</span>
                  </div>
                  <div className="space-y-1 text-[11px] leading-relaxed text-slate-300">
                    <p><span className="text-purple-400">import</span> pss_robotics <span className="text-purple-400">as</span> bot</p>
                    <p><span className="text-purple-400">from</span> sensors <span className="text-purple-400">import</span> LiDAR, Ultrasonic</p>
                    <p className="text-slate-500"># Initializing PSS STEM Student Microcontroller</p>
                    <p><span className="text-blue-400">arm</span> = bot.Arm6DOF(port=<span className="text-amber-300">&quot;COM3&quot;</span>)</p>
                    <p><span className="text-blue-400">arm</span>.calibrate_accuracy(tolerance=<span className="text-amber-300">0.001</span>)</p>
                    <p><span className="text-blue-400">arm</span>.execute_trajectory([<span className="text-amber-300">120, 45, 90</span>])</p>
                    <p className="text-emerald-400 mt-2">&gt;&gt; [STATUS] 100% Precision Acquired. Board distinctions validated.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: PRE-MEDICAL LAB */}
            {activeTab === "medical" && (
              <motion.div
                key="medical"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
                    <FaMicroscope />
                    <span>Pre-Medical &amp; MDCAT Foundation</span>
                  </div>
                  <h3 className="font-berlin text-2xl sm:text-4xl font-bold leading-tight">
                    Advanced Biology &amp; Molecular Science Lab
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    High-magnification microscopes, cellular cytology models, and organic biochemistry experiments ensure students understand medical sciences conceptually before board exams and MDCAT.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold border border-emerald-400/40">
                      King Edward &amp; AIMC Placements
                    </span>
                    <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                      100% Board First Division
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 relative h-64 rounded-2xl overflow-hidden border-2 border-emerald-400/30 shadow-2xl bg-slate-900">
                  <Image
                    src="/pss-gallery/pss-14.jpeg"
                    alt="PSS Medical Lab Inquiry"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-emerald-300">Bio-Molecular Microscopic Inquiry</span>
                      <span className="text-[10px] text-amber-300">1000x Optical Zoom</span>
                    </div>
                    <p className="text-[11px] text-slate-300">Concept verification through direct specimen observation.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: PHYSICS & MECHANICS */}
            {activeTab === "engineering" && (
              <motion.div
                key="engineering"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
                    <FaWaveSquare />
                    <span>Pre-Engineering &amp; ECAT Physics</span>
                  </div>
                  <h3 className="font-berlin text-2xl sm:text-4xl font-bold leading-tight">
                    Modern Wave Mechanics &amp; Physics Labs
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Oscilloscopes, magnetic flux apparatus, and optical spectrometry equip students with deep intuitive clarity in electromagnetic theory, mechanics, and advanced calculus.
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <span className="px-3 py-1 rounded-full bg-blue-400/20 text-blue-300 text-xs font-bold border border-blue-400/40">
                      UET &amp; NUST Engineering Pathways
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 rounded-2xl bg-black/70 border border-blue-400/30 p-5 shadow-2xl text-white space-y-4">
                  <div className="flex items-center justify-between border-b border-blue-500/20 pb-2 text-xs font-mono text-blue-300">
                    <span>DIGITAL OSCILLOSCOPE SIMULATOR</span>
                    <span className="text-amber-400 font-bold">50.00 Hz • 220V RMS</span>
                  </div>
                  <div className="h-28 w-full flex items-center justify-center relative overflow-hidden bg-slate-900 rounded-xl border border-blue-500/30">
                    {/* Animated Traveling Wave SVG */}
                    <svg className="w-full h-full" viewBox="0 0 400 100" fill="none">
                      <path
                        d="M 0,50 Q 50,0 100,50 T 200,50 T 300,50 T 400,50"
                        stroke="#60a5fa"
                        strokeWidth="3"
                        className="webflow-animated-line"
                      />
                    </svg>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-slate-400 block">Frequency</span>
                      <span className="text-cyan-300 font-bold">50.0 Hz</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-slate-400 block">Amplitude</span>
                      <span className="text-amber-300 font-bold">311.1 Vpk</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <span className="text-slate-400 block">Phase Angle</span>
                      <span className="text-emerald-300 font-bold">0.00 rad</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: ADMISSIONS 2026-27 (LA International 4-Step Board) */}
            {activeTab === "admission" && (
              <motion.div
                key="admission"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="w-full space-y-6 text-white"
              >
                <div className="text-center space-y-2">
                  <h3 className="font-berlin text-2xl sm:text-3xl font-bold text-white">
                    Structured 4-Step Admissions Process
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                    Designed to support every student with diagnostic evaluation and merit scholarship allocations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {[
                    {
                      step: "1. Inquiry",
                      desc: "Connect with our Science Wing desk to explore curriculum, lab tours, and fee plans.",
                      tag: "Initial Contact",
                    },
                    {
                      step: "2. Registration",
                      desc: "Complete the swift online pre-registration form and book your assessment schedule.",
                      tag: "Portal Open",
                    },
                    {
                      step: "3. Assessment",
                      desc: "Attend concept diagnostic evaluation in Science, Mathematics, and English.",
                      tag: "Merit Evaluation",
                    },
                    {
                      step: "4. Enrolment",
                      desc: "Receive your admission offer, fee voucher, and merit scholarship allocation.",
                      tag: "Welcome to PSS",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-colors flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold text-amber-300 uppercase tracking-widest block">
                          {item.tag}
                        </span>
                        <h4 className="font-berlin text-lg font-bold text-white">
                          {item.step}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-emerald-400 text-[11px] font-semibold">
                        <FaCircleCheck />
                        <span>Step Verified</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Link
                    href="/OnlineAdmission"
                    className="lai-btn px-8 py-3.5 bg-gradient-to-r from-amber-400 via-[#C59A47] to-amber-500 text-slate-950 font-bold text-sm shadow-xl hover:shadow-amber-500/40 group inline-flex"
                  >
                    <span className="relative z-10">Start Online Admission 2026-27</span>
                    <span className="lai-btn-scale bg-white/40" />
                    <span className="lai-btn-dot bg-slate-950 group-hover:scale-125" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
