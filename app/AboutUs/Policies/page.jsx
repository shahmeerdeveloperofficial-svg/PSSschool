"use client";

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import {
  FaShieldHalved,
  FaUserCheck,
  FaShirt,
  FaClock,
  FaBan,
  FaHandshakeAngle,
} from "react-icons/fa6";

const policyCards = [
  {
    icon: <FaShieldHalved className="text-amber-400 text-2xl" />,
    badge: "Foundation Pillar",
    title: "Discipline",
    desc: "Discipline is the foundation of a successful educational environment. Students are expected to follow all school rules, maintain punctuality, attend classes regularly, and show sincere obedience to teachers and administrative staff.",
  },
  {
    icon: <FaHandshakeAngle className="text-amber-400 text-2xl" />,
    badge: "Moral Character",
    title: "Conduct & Islamic Values",
    desc: "Good conduct reflects a student’s character and upbringing. Students must behave respectfully with teachers, classmates, and all personnel. Polite language, honesty, cooperation, and kindness are strictly expected. Any misbehavior or bullying is prohibited.",
  },
  {
    icon: <FaShirt className="text-amber-400 text-2xl" />,
    badge: "Modesty & Neatness",
    title: "Code of Dress & Uniform",
    desc: "All students are required to wear the prescribed school uniform neatly and regularly. The uniform must be clean, modest, and complete as per school guidelines. Hairstyles should be simple and tidy. Fancy jewelry, makeup, or accessories are not permitted.",
  },
  {
    icon: <FaClock className="text-amber-400 text-2xl" />,
    badge: "Attendance Standards",
    title: "Punctuality & Regularity",
    desc: "Students must arrive before assembly begins and maintain regular attendance. Absences require prior written application signed by parents to ensure uninterrupted academic progress.",
  },
];

const Policies = () => {
  return (
    <main className="bg-amber-50/20 pb-20">
      <HeroHeader
        title={"Discipline, Conduct & Code of Dress"}
        description={"The Pakistan School of Science — Upholding Moral Integrity, Decorum & Respect"}
      />

      <div className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex flex-col gap-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-4 py-1.5 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-widest border border-amber-300">
            Institutional Code of Honor
          </span>
          <h2 className="text-3xl sm:text-4xl font-berlin font-bold text-sec">
            Standards of Excellence &amp; Decorum
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At The Pakistan School of Science, character development, Islamic etiquettes, and personal grooming are as vital as academic distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policyCards.map((p, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border-2 border-amber-200/80 hover:border-amber-400 shadow-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sec to-[#1b0533] flex items-center justify-center shadow-lg border border-amber-300/40">
                    {p.icon}
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-amber-50 text-sec font-bold text-xs uppercase tracking-wider border border-amber-300">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-berlin font-bold text-sec group-hover:text-main transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Policies;
