"use client";

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaGraduationCap, FaAward, FaCalendarCheck } from "react-icons/fa6";

const ChairmanMessage = () => {
  return (
    <main className="bg-amber-50/20 pb-20">
      <HeroHeader
        title={"Chairman's Message"}
        description="A visionary message from the Founder & Chairman of The Pakistan School of Science."
      />

      <div className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex flex-col gap-12">
        <div className="rounded-3xl bg-white border-2 border-amber-300/40 shadow-2xl p-6 sm:p-10 lg:p-14 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            {/* Chairman Portrait & Signature Card */}
            <div className="flex flex-col items-center gap-4 shrink-0 w-full sm:w-80">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden border-4 border-amber-400 shadow-2xl bg-slate-900 group">
                <Image
                  src="/leadership/chairman.jpeg"
                  alt="Muhammad Iqbal Bhatti - Chairman"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-2xl font-berlin font-bold text-sec">
                  Muhammad Iqbal Bhatti
                </h3>
                <p className="text-xs uppercase tracking-widest font-bold text-main">
                  Founder &amp; Chairman
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  The Pakistan School of Science
                </p>
              </div>

              <div className="w-full p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-center space-y-1.5">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-sec uppercase tracking-wider">
                  <FaCalendarCheck className="text-main" />
                  <span>Established</span>
                </div>
                <p className="text-base font-bold text-dark">
                  23rd March 2011
                </p>
                <p className="text-[11px] text-slate-600">
                  Historic Pakistan Resolution Day
                </p>
              </div>
            </div>

            {/* Chairman's Message Content */}
            <div className="space-y-6 text-slate-700 flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-widest border border-amber-300">
                <FaGraduationCap className="text-main" />
                <span>Executive Address</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-berlin font-bold text-sec">
                Assalamu Alaikum wa Rahmatullah
              </h2>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  It gives me great pleasure to welcome you to <strong>The Pakistan School of Science</strong>. Since our establishment on <strong>23rd March 2011</strong>, our mission has been to provide quality education rooted in academic excellence, Islamic values, and moral character.
                </p>

                <p>
                  I am deeply grateful to our dedicated faculty, staff, parents, and students, whose support and prayers have been the cornerstone of our success. With Allah’s blessings, we remain committed to shaping a bright, prosperous, and value-driven future for every student entrusted to us.
                </p>

                <p className="italic text-slate-800 bg-amber-50/60 p-5 rounded-2xl border-l-4 border-main">
                  &ldquo;Our vision is not merely teaching textbook syllabi, but instilling fear of Allah, patriotism for Pakistan, and scientific mastery that illuminates minds and elevates society.&rdquo;
                </p>

                <p className="font-bold text-sec pt-2">
                  JazakAllahu Khair.
                </p>
              </div>

              {/* Sign-off */}
              <div className="pt-6 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="text-xl font-berlin font-bold text-sec">
                    Muhammad Iqbal Bhatti
                  </h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                    Chairman · The Pakistan School of Science
                  </p>
                </div>

                <div className="flex gap-3">
                  <Link
                    href="/OnlineAdmission"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-main to-mainD text-white font-bold text-sm shadow hover:opacity-95 transition-all"
                  >
                    Apply for Admission
                  </Link>
                  <Link
                    href="/DirectorMessage"
                    className="px-5 py-2.5 rounded-xl bg-sec text-white font-bold text-sm shadow hover:bg-secL transition-all"
                  >
                    Principal&apos;s Message →
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

export default ChairmanMessage;
