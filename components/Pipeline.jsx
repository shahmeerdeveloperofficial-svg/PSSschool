"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaFlask,
  FaAward,
  FaBookOpen,
  FaArrowRight,
  FaCheck,
  FaStar,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Steps = [
  {
    stepNum: "01",
    tag: "Core Foundation & Character",
    icon: FaBookOpen,
    iconColor: "text-amber-500 bg-amber-50 border-amber-200",
    image: "/pss-gallery/pss-18.jpeg",
    imageCaption: "Morning Assembly & Moral Tarbiyah Courtyard",
    title: "Our Scientific & Moral Philosophy",
    badge: "Ethical Tarbiyah & Analytical Mindset",
    detail: [
      "At The Pakistan School of Science, we believe that 'Knowledge is Power'. Knowledge illuminates truth, eradicates ignorance, and elevates both individual character and national prosperity.",
      "We combine disciplined ethical tarbiyah with inquisitive, analytical thinking so that students develop into compassionate, high-achieving scientists, thinkers, and nation builders.",
    ],
    highlights: [
      "Islamic Tarbiyah & Prophetic Morals",
      "Inquisitive & Logical Reasoning",
      "Character, Honesty & Discipline",
    ],
    linkText: "Explore Tarbiyah & Values",
    linkUrl: "/OurPhilosophy",
  },
  {
    stepNum: "02",
    tag: "Practical Concept Delivery",
    icon: FaFlask,
    iconColor: "text-cyan-500 bg-cyan-50 border-cyan-200",
    image: "/pss-gallery/pss-14.jpeg",
    imageCaption: "Hands-on Classroom Inquiry & Collaborative STEM",
    title: "Our Integrated STEM Academic Framework",
    badge: "Research Labs & Concept Clarity",
    detail: [
      "From early years inquiry through middle wing labs and senior board prep, our curriculum delivers concept clarity in Physics, Chemistry, Biology, Mathematics, and Computer Science.",
      "Students participate in regular hands-on laboratory sessions, robotics workshops, coding bootcamps, and scientific research projects that bring textbook theory alive.",
    ],
    highlights: [
      "Fully Equipped Physics, Chem & Bio Labs",
      "AI Computing, Microcontrollers & Robotics",
      "Activity-Based Conceptual Syllabus",
    ],
    linkText: "View STEM Curriculum",
    linkUrl: "/Curriculum/EarlyYears",
  },
  {
    stepNum: "03",
    tag: "Academic Board Triumph",
    icon: FaAward,
    iconColor: "text-purple-500 bg-purple-50 border-purple-200",
    image: "/pss-gallery/pss-10.jpeg",
    imageCaption: "Academic Merit Awards & Board Position Holders",
    title: "Board Topper Coaching & Career Pathways",
    badge: "100% Board Distinction & Entry Tests",
    detail: [
      "Our specialized senior faculty provides rigorous pre-board revisions, past-paper diagnostics, and MDCAT/ECAT foundational orientation to maximize academic merit and board standings.",
      "Individual counselling and mentoring ensure that every student is guided toward top medical colleges, engineering universities, and global science institutions.",
    ],
    highlights: [
      "100% Board Pass & Distinction Rate",
      "MDCAT & ECAT Entry Test Foundation",
      "Merit Scholarships for High Achievers",
    ],
    linkText: "Discover Student Life",
    linkUrl: "/StudentLife/Matric",
  },
];

const Pipeline = () => {
  const container = useRef();
  const progressLine = useRef();
  const progressRedLine = useRef();
  const iconsArray = useRef([]);
  const [isActive, setIsActive] = useState(-1);

  useGSAP(
    () => {
      const timeline = gsap.timeline();

      function setProgressHeight(prog) {
        if (progressRedLine.current && prog) {
          gsap.to(progressRedLine.current, {
            height: `${100 * prog}%`,
            duration: 0.1,
          });
        }
      }

      ScrollTrigger.create({
        trigger: container.current,
        start: `top 50%`,
        end: `bottom 60%`,
        animation: timeline,
        scrub: 1,
        onUpdate: (self) => {
          let progress = self.progress;
          let bottomPos = 0;
          setProgressHeight(progress);

          if (progressLine.current) {
            const progressLineT =
              progressLine.current.getBoundingClientRect().top;

            const progressLineH =
              progressLine.current.getBoundingClientRect().height * progress;

            bottomPos = progressLineH + progressLineT;
            if (iconsArray.current) {
              iconsArray.current.forEach((iconRef, index) => {
                if (iconRef) {
                  const topPos = iconRef.getBoundingClientRect().top;
                  if (bottomPos > topPos && index > isActive) {
                    setIsActive(index);
                  }
                }
              });
            }
          }
        },
      });
    },
    { scope: container, dependencies: [isActive] }
  );

  return (
    <section
      id="Timeline"
      ref={container}
      className="maxWSec flex flex-col lg:flex-row py-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Background ambient gold/purple glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left Sticky Pillar */}
      <div className="w-full lg:w-1/3 flex-shrink-0 sm:py-8 lg:py-12 relative">
        <div className="sticky top-28 flex flex-col max-lg:items-center max-lg:text-center space-y-4">
          <div className="section-tag-pss max-lg:justify-center">
            <span>(</span>
            <span>academic roadmap</span>
            <span>)</span>
          </div>

          <h2 className="font-berlin text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight w-fit">
            <span>The PSS Science Pathway</span>
            <span className="heading-cursor-line">|</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-sm leading-relaxed">
            Discover our structured roadmap from early scientific curiosity to national board examination triumph and ethical leadership.
          </p>

          {/* Quick Highlight Stats Box */}
          <div className="hidden lg:flex flex-col gap-3 p-5 rounded-2xl bg-white border border-amber-200/90 shadow-md max-w-sm mt-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Roadmap Milestones:
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
              <div className="p-2 rounded-xl bg-amber-50 border border-amber-100">
                <span className="font-berlin text-base font-bold text-[#2D0A54]">01</span>
                <p className="text-[10px] text-slate-500 font-medium">Tarbiyah</p>
              </div>
              <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-100">
                <span className="font-berlin text-base font-bold text-[#0070F3]">02</span>
                <p className="text-[10px] text-slate-500 font-medium">STEM Labs</p>
              </div>
              <div className="p-2 rounded-xl bg-purple-50 border border-purple-100">
                <span className="font-berlin text-base font-bold text-[#C59A47]">03</span>
                <p className="text-[10px] text-slate-500 font-medium">Board Merit</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Timeline Cards Column */}
      <div className="flex-grow flex px-2 sm:px-4 lg:px-0 mt-8 lg:mt-0">
        {/* Animated Progress Timeline Bar */}
        <div className="w-8 sm:w-12 flex-shrink-0 py-6 sm:py-12 flex justify-center">
          <div
            ref={progressLine}
            className="relative w-1.5 sm:w-2 rounded-full bg-amber-100 my-1 overflow-hidden"
          >
            <div
              ref={progressRedLine}
              className="absolute w-full left-0 top-0 bg-gradient-to-b from-[#2D0A54] via-[#C59A47] to-[#F5D77F]"
            ></div>
          </div>
        </div>

        {/* Pathway Cards List */}
        <div className="flex-grow py-4 sm:py-8 lg:py-12 flex flex-col gap-10 sm:gap-14">
          {Steps.map((item, i) => {
            const Icon = item.icon;
            const isStepActive = isActive >= i && isActive !== -1;

            return (
              <div key={i} className="relative group">
                {/* Node Indicator on the Line */}
                <div
                  ref={(el) => (iconsArray.current[i] = el)}
                  className={`w-6 h-6 sm:w-8 sm:h-8 z-20 absolute -left-7 sm:-left-10 lg:-left-14 -translate-x-1/2 top-6 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isStepActive
                      ? "bg-[#2D0A54] border-4 border-amber-300 scale-125 ring-4 ring-[#C59A47]/30"
                      : "bg-white border-2 border-slate-300 text-slate-400"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] sm:text-xs font-bold ${
                      isStepActive ? "text-amber-300" : "text-slate-600"
                    }`}
                  >
                    {item.stepNum}
                  </span>
                </div>

                {/* Multimedia Pathway Card */}
                <div className="rounded-3xl bg-white border border-amber-200/90 shadow-lg hover:shadow-2xl hover:border-[#C59A47] transition-all duration-500 overflow-hidden relative flex flex-col justify-between">
                  {/* Top Gradient Accent Line */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#2D0A54] via-[#C59A47] to-[#F5D77F]" />

                  {/* Watermark Step Number */}
                  <div className="absolute right-6 top-4 font-berlin text-7xl sm:text-8xl font-black text-slate-900/[0.03] select-none pointer-events-none">
                    {item.stepNum}
                  </div>

                  <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                    {/* Left: Content & Bullet Highlights */}
                    <div className="md:col-span-7 flex flex-col gap-3.5">
                      {/* Step Tag */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`p-2 rounded-xl border ${item.iconColor} shadow-sm text-sm sm:text-base`}
                        >
                          <Icon />
                        </span>
                        <span className="px-3 py-1 rounded-full bg-amber-50 text-[#C59A47] font-bold text-xs uppercase tracking-wider border border-amber-200">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="h3 text-[#2D0A54] leading-snug">
                        {item.title}
                      </h3>

                      {/* Detail paragraphs */}
                      <div className="text-slate-600 space-y-2 text-xs sm:text-sm leading-relaxed font-light">
                        {item.detail.map((detailText, detailIndex) => (
                          <p key={detailIndex}>{detailText}</p>
                        ))}
                      </div>

                      {/* Key Highlights Checkmarks */}
                      <div className="pt-2 space-y-1.5">
                        {item.highlights.map((hl, hlIdx) => (
                          <div
                            key={hlIdx}
                            className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                          >
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] shrink-0">
                              <FaCheck />
                            </span>
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Link */}
                      <div className="pt-3">
                        <Link
                          href={item.linkUrl}
                          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C59A47] hover:text-[#2D0A54] transition-colors group/link"
                        >
                          <span>{item.linkText}</span>
                          <FaArrowRight className="text-xs group-link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Right: Real School Photo Showcase */}
                    <div className="md:col-span-5 flex flex-col gap-2">
                      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-200 shadow-md group/img bg-slate-900">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover cinematic-photo group-hover/img:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                        {/* Floating Badge on Image */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-amber-200 text-[11px] font-medium leading-snug">
                          {item.imageCaption}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pipeline;
