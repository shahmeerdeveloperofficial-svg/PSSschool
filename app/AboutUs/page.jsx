"use client";

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaCalendarCheck,
  FaBuildingColumns,
  FaHeartCircleCheck,
  FaBookQuran,
  FaFlask,
  FaArrowRight,
  FaShieldHalved,
} from "react-icons/fa6";

const campuses = [
  {
    name: "Nasir Mehmood Main Campus",
    tag: "Main Campus & Girls Wing",
    desc: "Central administration, advanced science laboratories, and high-achieving girls secondary education.",
    icon: <FaBuildingColumns className="text-amber-400 text-xl" />,
  },
  {
    name: "Umar Hesham Campus",
    tag: "Senior Boys Wing",
    desc: "Dedicated senior boys wing focusing on Matriculation, Pre-Medical, Pre-Engineering, and board exam mastery.",
    icon: <FaGraduationCap className="text-amber-400 text-xl" />,
  },
  {
    name: "Muhammad Izhan Campus",
    tag: "Junior Boys Wing",
    desc: "Foundational conceptual schooling, STEM inquiry, activity-based learning, and early discipline.",
    icon: <FaFlask className="text-amber-400 text-xl" />,
  },
  {
    name: "Rahim Ali Campus",
    tag: "Kids & Early Montessori Wing",
    desc: "Child-centered Montessori approach with hands-on exploratory kits, phonics, and joyful moral tarbiyah.",
    icon: <FaHeartCircleCheck className="text-amber-400 text-xl" />,
  },
];

const pillars = [
  {
    title: "To Develop a Civilized Society",
    desc: "Education never just means to teach and assess. It is a sanctuary where students embrace Islamic, social, and cultural values every moment.",
    icon: <FaBookQuran className="text-main text-2xl" />,
  },
  {
    title: "Character Building & Emotional Balance",
    desc: "Assuring quality schooling by developing balanced personalities, moral fortitude, empathy, and patriotic love for nation and religion.",
    icon: <FaShieldHalved className="text-main text-2xl" />,
  },
  {
    title: "Dual Success: This World & Hereafter",
    desc: "Nurturing intellect and spiritual purity so that students attain distinction at every stage of this world and the world hereafter.",
    icon: <FaGraduationCap className="text-main text-2xl" />,
  },
];

const AboutUs = () => {
  return (
    <main className="bg-amber-50/20 pb-20">
      <HeroHeader
        title={"About PSS"}
        description="The Pakistan School of Science — Knowledge is Power."
      />

      <div className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex flex-col gap-12">
        {/* Origin & Foundation Story */}
        <div className="rounded-3xl bg-white border-2 border-amber-300/40 p-6 sm:p-10 shadow-xl relative overflow-hidden flex flex-col lg:flex-row gap-8 items-center">
          <div className="space-y-4 flex-1">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-widest border border-amber-300">
              <FaCalendarCheck className="text-main" />
              <span>Established 23rd March 2011</span>
            </span>

            <h2 className="text-3xl sm:text-4xl font-berlin font-bold text-sec">
              History &amp; Heritage of <br />
              <span className="text-main">The Pakistan School of Science</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our school was established on <strong>23rd March 2011</strong> with just a few students. With Allah&apos;s abundant blessings, it has grown into a thriving institution where children excel academically while developing upright moral values, discipline, and respect.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              We are deeply grateful for the continuous prayers and support of our parents, which guide us in nurturing young minds and shaping a bright and promising future for every child entrusted to our care.
            </p>
          </div>

          <div className="relative w-full lg:w-96 aspect-[4/3] rounded-3xl overflow-hidden border-2 border-amber-400 shadow-xl bg-slate-900 shrink-0">
            <Image
              src="/pss-gallery/pss-1.jpeg"
              alt="The Pakistan School of Science Building"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Philosophy & Vision Cards */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-sec font-bold text-xs uppercase tracking-wider border border-purple-200">
              Core Mission &amp; Philosophy
            </span>
            <h3 className="text-3xl font-berlin font-bold text-sec">
              Our Vision: To Develop a Civilized Society
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pil, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/80 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-center">
                    {pil.icon}
                  </div>
                  <h4 className="text-xl font-bold text-sec group-hover:text-main transition-colors">
                    {pil.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {pil.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Franchise Campuses Network */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1b0533] via-[#2B0955] to-[#120224] p-6 sm:p-10 text-white shadow-2xl border border-amber-300/30 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs uppercase tracking-widest border border-amber-300/40">
              Campuses &amp; Network
            </span>
            <h3 className="text-3xl sm:text-4xl font-berlin font-bold text-white">
              The PSS Franchise Network
            </h3>
            <p className="text-slate-300 text-sm">
              Custom-tailored campuses catering to different educational tiers and student age groups across Gujranwala.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campuses.map((camp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-amber-300/20 hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center text-xl">
                    {camp.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider block">
                    {camp.tag}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {camp.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {camp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Leadership Spotlight in About Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/80 shadow-lg flex flex-col sm:flex-row gap-6 items-center">
            <div className="relative w-32 h-40 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0">
              <Image
                src="/leadership/chairman.jpeg"
                alt="Muhammad Iqbal Bhatti"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold text-main uppercase tracking-wider">
                Founder &amp; Chairman
              </span>
              <h4 className="text-xl font-bold text-sec">Muhammad Iqbal Bhatti</h4>
              <p className="text-xs text-slate-500">
                Guiding institutional vision, philanthropic support, and excellence since 2011.
              </p>
              <Link
                href="/ChairmanMessage"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-main hover:underline pt-2"
              >
                <span>Read Chairman&apos;s Message</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/80 shadow-lg flex flex-col sm:flex-row gap-6 items-center">
            <div className="relative w-32 h-40 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0">
              <Image
                src="/leadership/principal.jpeg"
                alt="Hafiz Nasir Mahmood"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold text-main uppercase tracking-wider">
                Principal · M.Sc. Chemistry
              </span>
              <h4 className="text-xl font-bold text-sec">Hafiz Nasir Mahmood</h4>
              <p className="text-xs text-slate-500">
                Leading pedagogy, faculty standards, science practicals, and moral tarbiyah.
              </p>
              <Link
                href="/DirectorMessage"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-main hover:underline pt-2"
              >
                <span>Read Principal&apos;s Message</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
