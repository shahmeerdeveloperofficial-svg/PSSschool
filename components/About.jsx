"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaAtom,
  FaRobot,
  FaGraduationCap,
  FaBookQuran,
  FaTrophy,
  FaMicrophoneLines,
  FaChartLine,
  FaMedal,
  FaCheck,
  FaStar,
} from "react-icons/fa6";

const features = [
  {
    serial: "01",
    title: "Concept-Driven Science Mastery",
    icon: FaAtom,
    tag: "Concept-First",
    keyHighlight: "Zero Rote Learning Guarantee",
    gradient: "from-blue-600 to-indigo-700",
    badgeStyle: "bg-blue-50 text-blue-700 border-blue-200",
    iconBg: "bg-blue-50 text-blue-600 border-blue-200",
    shadowHover: "hover:shadow-[0_15px_35px_rgba(37,99,235,0.18)] hover:border-blue-300",
    desc: "Rigorous analytical instruction in Physics, Chemistry, Biology, and Mathematics designed to eliminate rote learning and build crystal-clear conceptual comprehension.",
  },
  {
    serial: "02",
    title: "Modern STEM & Robotics Labs",
    icon: FaRobot,
    tag: "Hands-on Labs",
    keyHighlight: "Physics, Chem, Bio & IT Labs",
    gradient: "from-amber-500 to-[#C59A47]",
    badgeStyle: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-50 text-amber-600 border-amber-200",
    shadowHover: "hover:shadow-[0_15px_35px_rgba(217,119,6,0.18)] hover:border-amber-300",
    desc: "Fully equipped experimental laboratories where students conduct hands-on chemical tests, electronic circuit experiments, and computational programming.",
  },
  {
    serial: "03",
    title: "Pre-Medical & Pre-Engineering",
    icon: FaGraduationCap,
    tag: "Board Wings",
    keyHighlight: "MDCAT & ECAT Pathways",
    gradient: "from-[#2D0A54] to-[#6012B0]",
    badgeStyle: "bg-purple-50 text-purple-700 border-purple-200",
    iconBg: "bg-purple-50 text-purple-600 border-purple-200",
    shadowHover: "hover:shadow-[0_15px_35px_rgba(45,10,84,0.18)] hover:border-purple-300",
    desc: "Dedicated senior wings tailored for top marks in Matriculation and high scoring preparation for competitive medical and engineering entry tests.",
  },
  {
    serial: "04",
    title: "Torch of Character & Ethics",
    icon: FaBookQuran,
    tag: "Moral Tarbiyah",
    keyHighlight: "Prophetic Ethics & Values",
    gradient: "from-emerald-600 to-teal-700",
    badgeStyle: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-50 text-emerald-600 border-emerald-200",
    shadowHover: "hover:shadow-[0_15px_35px_rgba(16,185,129,0.18)] hover:border-emerald-300",
    desc: "Instilling deep patriotic duty, moral honesty, Islamic etiquettes, empathy, and social responsibility to produce upright, conscientious citizens.",
  },
  {
    serial: "05",
    title: "Science Olympiads & Competitions",
    icon: FaTrophy,
    tag: "Championships",
    keyHighlight: "National & Global Science Fairs",
    gradient: "from-orange-500 to-amber-600",
    badgeStyle: "bg-orange-50 text-orange-700 border-orange-200",
    iconBg: "bg-orange-50 text-orange-600 border-orange-200",
    shadowHover: "hover:shadow-[0_15px_35px_rgba(249,115,22,0.18)] hover:border-orange-300",
    desc: "Structured mentoring and coaching for regional, national, and international science fairs, mathematics Olympiads, and creative innovation expos.",
  },
  {
    serial: "06",
    title: "Bilingual Declamations & Debates",
    icon: FaMicrophoneLines,
    tag: "Oratory Guild",
    keyHighlight: "English & Urdu Parliamentary Rhetoric",
    gradient: "from-sky-500 to-blue-600",
    badgeStyle: "bg-sky-50 text-sky-700 border-sky-200",
    iconBg: "bg-sky-50 text-sky-600 border-sky-200",
    shadowHover: "hover:shadow-[0_15px_35px_rgba(14,165,233,0.18)] hover:border-sky-300",
    desc: "English and Urdu parliamentary debate formats, speech rhetoric, and stage presentations that develop articulate, self-assured orators and leaders.",
  },
  {
    serial: "07",
    title: "Diagnostic Quizzes & Zero Neglect",
    icon: FaChartLine,
    tag: "Zero Neglect",
    keyHighlight: "Weekly Concept Tracking",
    gradient: "from-teal-500 to-cyan-600",
    badgeStyle: "bg-teal-50 text-teal-700 border-teal-200",
    iconBg: "bg-teal-50 text-teal-600 border-teal-200",
    shadowHover: "hover:shadow-[0_15px_35px_rgba(20,184,166,0.18)] hover:border-teal-300",
    desc: "Weekly chapter assessments, computerized performance diagnostics, and individual remedial guidance sessions to ensure steady academic triumph.",
  },
  {
    serial: "08",
    title: "Merit Scholarships & Support",
    icon: FaMedal,
    tag: "Merit Grants",
    keyHighlight: "Generous Fee Concessions",
    gradient: "from-rose-500 to-pink-600",
    badgeStyle: "bg-rose-50 text-rose-700 border-rose-200",
    iconBg: "bg-rose-50 text-rose-600 border-rose-200",
    shadowHover: "hover:shadow-[0_15px_35px_rgba(244,63,94,0.18)] hover:border-rose-300",
    desc: "Generous merit-based scholarships and fee concessions rewarding hard work, academic board distinction, position holders, and deserving families.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function About() {
  return (
    <section className="maxWSec px-4 sm:px-8 lg:px-12 py-20 flex gap-12 flex-col relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-3 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 text-[#C59A47] font-bold text-xs sm:text-sm tracking-widest uppercase border border-amber-300 shadow-sm">
          <FaStar className="text-amber-500 text-xs" />
          <span>8 Pillars of Heraldic Excellence</span>
          <FaStar className="text-amber-500 text-xs" />
        </div>
        <h2 className="h2 text-dark">
          Why Students Excel at{" "}
          <span className="text-[#2D0A54]">The Pakistan School</span>{" "}
          <span className="text-[#C59A47]">Of Science</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
          An elite learning environment combining concept-first pedagogy, modern laboratories, competitive entry coaching, and ethical character tarbiyah.
        </p>
      </div>

      {/* 8 Features Grid (4x2 on large screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              className="flex"
            >
              <div
                className={`w-full rounded-3xl bg-white border border-slate-200/90 shadow-md ${feature.shadowHover} transition-all duration-400 p-6 flex flex-col justify-between group relative overflow-hidden hover:-translate-y-2`}
              >
                {/* Top Subtle Gradient Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.gradient} transition-all duration-300 group-hover:h-2`}
                />

                {/* Card Header: Icon + Serial Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* Glowing Icon Container */}
                    <div
                      className={`w-12 h-12 rounded-2xl border ${feature.iconBg} flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon />
                    </div>

                    {/* Serial Tag */}
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
                      {feature.serial}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border mb-3 ${feature.badgeStyle}`}
                  >
                    {feature.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-berlin font-bold text-[#2D0A54] group-hover:text-[#C59A47] transition-colors leading-snug mb-2.5">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {feature.desc}
                  </p>
                </div>

                {/* Card Footer: Highlight Bullet */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] shrink-0">
                    <FaCheck />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-700 truncate">
                    {feature.keyHighlight}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
