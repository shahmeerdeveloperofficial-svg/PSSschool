"use client";

import React from "react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
  FaGraduationCap,
  FaAward,
  FaFire,
  FaTrophy,
  FaArrowRight,
  FaMicroscope,
  FaCircleCheck,
  FaSparkles,
  FaStar,
} from "react-icons/fa6";

const Bento = () => {
  const News = [
    {
      title: "Admissions Open for Session 2026-2027 ★ Science Wing",
      url: "/OnlineAdmission",
      tag: "Admissions",
    },
    {
      title: "Merit Scholarships for High Achievers & Position Holders",
      url: "/StudentLife/OLevel",
      tag: "Scholarships",
    },
    {
      title: "State-of-the-Art Physics, Chemistry, Biology & AI Labs",
      url: "/Curriculum/EarlyYears",
      tag: "STEM Innovation",
    },
    {
      title: "National Science Olympiads & Championship Sports",
      url: "/SocietyAndClubs",
      tag: "Achievements",
    },
  ];

  return (
    <section
      id="About"
      className="maxWSec px-4 sm:px-8 lg:px-12 py-16 flex gap-12 flex-col"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-block px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 text-sec font-bold text-xs sm:text-sm tracking-widest uppercase border border-amber-300 shadow-sm">
          ★ The Four Pillars of PSS Heraldic Excellence ★
        </div>
        <h2 className="h2">
          Welcome to <span className="text-sec">The Pakistan School</span>{" "}
          <span className="text-main">Of Science</span>
        </h2>
        <p className="text-gray text-base sm:text-lg max-w-3xl mx-auto">
          Under the timeless motto{" "}
          <span className="font-bold text-sec">&quot;Knowledge is Power&quot;</span>,
          we mold brilliant young minds into scientific innovators, ethical leaders, and nation builders.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-stretch">
        {/* ROW 1 - LEFT: Academic Excellence (Spans 2 columns on xl) */}
        <div className="sm:col-span-2 xl:col-span-2 group/card p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-sec via-[#2B0955] to-[#14022A] text-light relative overflow-hidden shadow-2xl border border-amber-300/30 flex flex-col justify-between">
          {/* Background Book Silhouette */}
          <Image
            src="/book.svg"
            width="400"
            height="400"
            alt="book"
            className="transition-all duration-700 group-hover/card:scale-105 origin-bottom-right absolute right-0 bottom-0 w-96 translate-x-[5%] translate-y-[15%] opacity-10 filter invert pointer-events-none"
          />

          {/* Ambient Gold Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-5 relative z-10">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xl shadow-inner">
                <FaGraduationCap />
              </span>
              <span className="px-3.5 py-1 rounded-full bg-main text-white font-bold text-xs uppercase tracking-wider shadow">
                Academic Excellence &amp; Mission
              </span>
            </div>

            <p className="text-base sm:text-lg text-amber-50/95 font-normal leading-relaxed">
              Our mission is to foster a rigorous, research-oriented learning ecosystem where conceptual mastery, critical reasoning, and practical experimentation produce outstanding pre-medical, pre-engineering, and computer science scholars:
            </p>

            <ul className="leading-relaxed list-disc list-inside space-y-2 text-slate-200 text-sm sm:text-base">
              <li>Comprehensive conceptual science teaching in Physics, Chemistry, Biology &amp; Math</li>
              <li>Hands-on laboratory sessions and digital STEM robotics integration</li>
              <li>Pre-Board preparation, past-paper analysis, and individual mentorship</li>
              <li>Inculcating moral integrity, discipline, and high patriotic dedication</li>
              <li>Merit scholarships to ensure outstanding talent is fully nurtured</li>
            </ul>

            <div className="flex justify-end pt-3">
              <Link href={"/OnlineAdmission"}>
                <Button btnType="main">
                  <span>Apply for Admission</span>
                  <FaArrowRight className="text-xs" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* ROW 1 - RIGHT: Box 1 - PSS Heraldic Shield & Monogram (Equal height with Academic Excellence) */}
        <div className="sm:col-span-2 xl:col-span-1 rounded-3xl bg-gradient-to-br from-[#1f0538] via-[#2D0A54] to-[#120224] text-light overflow-hidden relative flex flex-col items-center justify-center p-7 sm:p-8 shadow-2xl border-2 border-amber-300/40 group hover:border-amber-400 transition-all duration-500">
          {/* Animated Background Conic / Pulse Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-56 h-56 rounded-full bg-gradient-to-tr from-[#C59A47]/25 via-purple-600/20 to-transparent blur-2xl ConicRotate" />
          </div>

          <div className="text-center relative z-10 flex flex-col items-center w-full">
            {/* Top Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/50 text-amber-300 font-bold text-[11px] uppercase tracking-widest mb-4 shadow-sm">
              <FaStar className="text-[10px]" />
              <span>Est. 23rd March 2011</span>
              <FaStar className="text-[10px]" />
            </span>

            {/* Floating Logo Monogram with Gold Glow */}
            <div className="relative mb-4 group-hover:scale-105 transition-transform duration-500">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-[#C59A47] rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500 pulse-glow" />
              <div className="float-gentle relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white p-2.5 shadow-2xl border-4 border-main flex items-center justify-center">
                <Image
                  src="/psslogo.png"
                  width={200}
                  height={200}
                  alt="The Pakistan School of Science Emblem"
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            <p className="text-white font-berlin text-2xl sm:text-3xl font-bold mb-1 tracking-wide">
              PSS SCHOOL
            </p>
            <p className="text-amber-300 font-bold tracking-widest uppercase text-xs mb-3">
              Pakistan School of Science
            </p>

            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C59A47] to-transparent my-2" />

            <p className="text-amber-100/90 text-xs sm:text-sm max-w-xs leading-relaxed italic">
              &quot;Knowledge is Power — Igniting Scientific Minds for a Greater Tomorrow.&quot;
            </p>
          </div>
        </div>

        {/* ROW 2 - LEFT 1: Highlights & Torch of Knowledge */}
        <div className="sm:col-span-1 xl:col-span-1 group/card p-7 sm:p-8 rounded-3xl bg-white border-2 border-amber-200/80 text-dark relative overflow-hidden shadow-xl hover:shadow-2xl hover:border-amber-400 transition-all flex flex-col justify-between">
          <div className="flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-amber-50 text-amber-600 text-lg border border-amber-200">
                <FaFire />
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-wider">
                Torch of Knowledge
              </span>
            </div>

            <div className="flex flex-col gap-2.5">
              {News.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className="group/item p-2.5 rounded-xl hover:bg-amber-50/80 text-slate-800 text-xs sm:text-sm flex items-center justify-between gap-3 border border-transparent hover:border-amber-200 transition-all duration-200"
                >
                  <span className="font-medium group-hover/item:text-sec transition-colors leading-snug">
                    {item.title}
                  </span>
                  <span className="text-main font-bold group-hover/item:translate-x-1 transition-transform shrink-0">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2 - LEFT 2: Championship Vision */}
        <div className="sm:col-span-1 xl:col-span-1 group/card p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-main via-[#D4A94A] to-mainD text-white relative overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between">
          {/* Subtle Trophy Watermark */}
          <div className="absolute right-0 bottom-0 text-white/10 text-9xl pointer-events-none translate-x-6 translate-y-6">
            <FaTrophy />
          </div>

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-white/20 text-white text-lg">
                <FaTrophy />
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white font-bold text-xs uppercase tracking-wider border border-white/30">
                Championship Vision
              </span>
            </div>

            <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed">
              The Pakistan School of Science envisions becoming the nation&apos;s benchmark for secondary and higher secondary science education, producing future doctors, engineers, IT visionaries, and researchers crowned with distinction in board examinations and international competitions.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-100">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>Dedicated Pre-Medical &amp; Pre-Engineering Wings</span>
            </div>
          </div>
        </div>

        {/* ROW 2 - RIGHT: Box 2 - Live Impact & Fast-Track Admissions (Equal height with Row 2 cards) */}
        <div className="sm:col-span-2 xl:col-span-1 rounded-3xl bg-gradient-to-br from-[#1b0533] via-[#2A0952] to-[#120224] text-white p-7 sm:p-8 shadow-2xl border-2 border-amber-300/40 relative overflow-hidden group hover:border-amber-400 transition-all duration-500 flex flex-col justify-between">
          {/* Background Ambient Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

          {/* Header Status Bar */}
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-amber-200/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-emerald-300 uppercase">
                Admissions 2026-27 Active
              </span>
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-300">
              Session Live
            </span>
          </div>

          {/* 3 Animated Metric Highlights */}
          <div className="relative z-10 py-4 space-y-3.5">
            {/* Metric 1 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                  <FaAward className="text-amber-400" />
                  <span>Board Distinction Rate</span>
                </span>
                <span className="font-berlin text-lg text-amber-300 font-bold">100%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 to-[#F5D77F] w-full rounded-full" />
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                  <FaMicroscope className="text-cyan-400" />
                  <span>STEM Science Labs</span>
                </span>
                <span className="font-berlin text-lg text-cyan-300 font-bold">4 Labs</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 w-[95%] rounded-full" />
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-300/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                  <FaCircleCheck className="text-emerald-400" />
                  <span>Merit Scholarships</span>
                </span>
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="relative z-10 pt-2">
            <Link
              href="/OnlineAdmission"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-[#C59A47] to-amber-500 hover:brightness-110 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all group/btn"
            >
              <span>Online Admission Portal</span>
              <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
