"use client";

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import {
  FaPuzzlePiece,
  FaLaptopCode,
  FaUserGraduate,
  FaBookQuran,
  FaBus,
  FaVolleyball,
  FaBullseye,
  FaHandsHoldingChild,
} from "react-icons/fa6";

const curriculumPillars = [
  {
    icon: <FaPuzzlePiece className="text-amber-400 text-2xl" />,
    tag: "Early Years",
    title: "Montessori Wing",
    desc: "Child-centered approach recognizing that every child learns at their own pace. Hands-on sensory activities, observation, and exploration foster natural curiosity and creativity.",
  },
  {
    icon: <FaLaptopCode className="text-amber-400 text-2xl" />,
    tag: "Modern STEM",
    title: "Digital Education",
    desc: "Digital literacy is as essential as reading, writing, and mathematics. Students learn to use technology responsibly and effectively for higher studies and real-world problem solving.",
  },
  {
    icon: <FaUserGraduate className="text-amber-400 text-2xl" />,
    tag: "Character Building",
    title: "Personality Development",
    desc: "Education is not just about textbooks—it is about shaping confident, disciplined, articulate, and morally upright individuals ready to lead.",
  },
  {
    icon: <FaBookQuran className="text-amber-400 text-2xl" />,
    tag: "Moral Foundation",
    title: "Qur’an O Seerat As Syllabus",
    desc: "Qur'an and Seerat form an essential part of our curriculum. Students understand, memorize, and implement the teachings of the Holy Qur'an and the blessed life of Prophet Muhammad ﷺ.",
  },
  {
    icon: <FaBus className="text-amber-400 text-2xl" />,
    tag: "Experiential Learning",
    title: "Outdoor Educational Trips",
    desc: "Enhancing knowledge through practical exposure, industrial visits, and botanical excursions under the strict supervision of qualified faculty.",
  },
  {
    icon: <FaVolleyball className="text-amber-400 text-2xl" />,
    tag: "Physical Fitness",
    title: "Sports & Physical Development",
    desc: "School sports cultivate physical fitness, mental agility, teamwork, perseverance, and healthy sportsmanship in every learner.",
  },
];

const methodology = [
  {
    icon: <FaBullseye className="text-main text-2xl" />,
    title: "SLO Focused Teaching Methodology",
    desc: "Student Learning Outcomes (SLO) approach ensuring clarity, conceptual depth, and measurable academic benchmarks in every lecture.",
  },
  {
    icon: <FaHandsHoldingChild className="text-main text-2xl" />,
    title: "Activity-Based Learning Environment",
    desc: "Interactive experiments, group dialogues, multimedia visualizations, and project tasks that turn theory into active experience.",
  },
];

const SyllabusAndAffiliations = () => {
  return (
    <main className="bg-amber-50/20 pb-20">
      <HeroHeader
        title={"Our Curriculum"}
        description={"The Pakistan School of Science — Integrating Modern STEM & Islamic Moral Foundation"}
      />

      <div className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex flex-col gap-12">
        {/* Intro */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-widest border border-amber-300">
            Holistic Education Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-berlin font-bold text-sec">
            Curriculum Engineered for Mind, Faith &amp; Character
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our curriculum is thoughtfully designed to ensure the intellectual, moral, physical, and spiritual development of every student. It combines academic excellence with Islamic values, preparing students to meet modern educational challenges while remaining firmly grounded in faith and character.
          </p>
        </div>

        {/* 6 Core Curriculum Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curriculumPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border-2 border-amber-200/80 hover:border-amber-400 shadow-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sec to-[#1b0533] flex items-center justify-center shadow-lg border border-amber-300/40">
                    {pillar.icon}
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-amber-50 text-sec font-bold text-xs uppercase tracking-wider border border-amber-300">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-berlin font-bold text-sec group-hover:text-main transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Approach */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1b0533] via-[#2B0955] to-[#120224] p-8 sm:p-12 text-white shadow-2xl border border-amber-300/30 space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs uppercase tracking-widest border border-amber-300/40">
              Pedagogical Framework
            </span>
            <h3 className="text-3xl font-berlin font-bold text-white">
              Our Teaching Approach
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodology.map((m, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-amber-300/20 flex gap-5 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center shrink-0">
                  {m.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-amber-200">
                    {m.title}
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SyllabusAndAffiliations;
