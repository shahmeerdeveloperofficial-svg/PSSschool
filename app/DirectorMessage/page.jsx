"use client";

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaGraduationCap, FaFlask, FaHandsPraying } from "react-icons/fa6";

const DirectorMessage = () => {
  return (
    <main className="bg-amber-50/20 pb-20">
      <HeroHeader
        title={"Principal's Message"}
        description="A message from the Principal & Academic Head of The Pakistan School of Science."
      />

      <div className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex flex-col gap-12">
        <div className="rounded-3xl bg-white border-2 border-amber-300/40 shadow-2xl p-6 sm:p-10 lg:p-14 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            {/* Principal Portrait & Qualifications Card */}
            <div className="flex flex-col items-center gap-4 shrink-0 w-full sm:w-80">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-slate-900 group">
                <Image
                  src="/leadership/principal.jpeg"
                  alt="Hafiz Nasir Mahmood - Principal"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-2xl font-berlin font-bold text-sec">
                  Hafiz Nasir Mahmood
                </h3>
                <p className="text-xs font-mono font-bold text-main uppercase tracking-wider">
                  M.Sc. Chemistry
                </p>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-600">
                  Principal &amp; Head of Academics
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  The Pakistan School of Science
                </p>
              </div>

              <div className="w-full p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 text-center space-y-1.5">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-sec uppercase tracking-wider">
                  <FaFlask className="text-main" />
                  <span>Academic Creed</span>
                </div>
                <p className="text-sm font-bold text-sec">
                  Concept Clarity &amp; Moral Tarbiyah
                </p>
                <p className="text-[11px] text-slate-600">
                  To Develop a Civilized &amp; High-Achieving Society
                </p>
              </div>
            </div>

            {/* Principal's Message Content */}
            <div className="space-y-6 text-slate-700 flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-widest border border-amber-300">
                <FaGraduationCap className="text-main" />
                <span>Principal&apos;s Welcome</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-berlin font-bold text-sec">
                Welcome to The Pakistan School of Science
              </h2>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  At our school, <strong>education is a sacred responsibility</strong>. Guided by Islamic values, we strive to nurture young minds with knowledge, discipline, honesty, respect, and deep spirit of the country.
                </p>

                <p>
                  Every child is taught not only to excel academically in the sciences and mathematics, but also to grow with strong character, compassion, and steadfast faith. With the sincere efforts of our teachers and the continuous support of parents, we pray to shape our students into responsible and successful individuals.
                </p>

                <p className="italic text-slate-800 bg-amber-50/60 p-5 rounded-2xl border-l-4 border-main">
                  &ldquo;Education never just means to teach and assess. It is a place where in every single moment, a student adopts Islamic, social, and cultural values. We want our students to attain supreme success at every stage of this world and the world hereafter.&rdquo;
                </p>

                <p className="font-semibold text-sec pt-2">
                  May Allah Almighty bless our efforts and guide our students toward a bright and luminous future.
                </p>
              </div>

              {/* Sign-off */}
              <div className="pt-6 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-berlin font-bold text-sec">
                    Hafiz Nasir Mahmood
                  </h4>
                  <p className="text-xs text-amber-700 font-mono font-semibold">
                    M.Sc. Chemistry
                  </p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-0.5">
                    Principal · The Pakistan School of Science
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/OnlineAdmission"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-main to-mainD text-white font-bold text-sm shadow hover:opacity-95 transition-all"
                  >
                    Admission Desk
                  </Link>
                  <Link
                    href="/ChairmanMessage"
                    className="px-5 py-2.5 rounded-xl bg-sec text-white font-bold text-sm shadow hover:bg-secL transition-all"
                  >
                    ← Chairman&apos;s Address
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DirectorMessage;
