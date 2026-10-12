"use client";

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import AdmissionForm from "@/components/AdmissionForm";
import {
  FaCircleInfo,
  FaFileLines,
  FaClipboardQuestion,
  FaFolderOpen,
  FaMoneyCheckDollar,
  FaCheck,
  FaPhone,
  FaClock,
} from "react-icons/fa6";

const steps = [
  {
    step: "01",
    title: "Enquiry & Information",
    desc: "Parents may visit the school campus or contact the admission office to get complete information about classes, fee structure, and facilities.",
    icon: <FaCircleInfo className="text-amber-400 text-xl" />,
  },
  {
    step: "02",
    title: "Admission Form",
    desc: "The admission form can be collected from the school office or submitted directly via the online portal below.",
    icon: <FaFileLines className="text-amber-400 text-xl" />,
  },
  {
    step: "03",
    title: "Assessment / Interview",
    desc: "An entrance test or diagnostic interview is conducted (where applicable) to assess the student's conceptual academic level.",
    icon: <FaClipboardQuestion className="text-amber-400 text-xl" />,
  },
  {
    step: "04",
    title: "Required Documents",
    desc: "Submission of mandatory verification documents to finalize the registration file.",
    icon: <FaFolderOpen className="text-amber-400 text-xl" />,
  },
  {
    step: "05",
    title: "Fee Submission & Enrollment",
    desc: "After approval, parents submit the admission and monthly fee within the given time to confirm the student's seat.",
    icon: <FaMoneyCheckDollar className="text-amber-400 text-xl" />,
  },
];

const requiredDocs = [
  "Copy of Birth Certificate / B-Form (NADRA)",
  "Previous School Result Card",
  "School Leaving Certificate (if applicable)",
  "Two passport-size photographs of the student",
];

const OnlineAdmission = () => {
  return (
    <main className="bg-amber-50/20 pb-20">
      <HeroHeader
        title={"Admission Process 2026-27"}
        description="Begin Your Journey at The Pakistan School of Science — Knowledge is Power"
      />

      <div className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex flex-col gap-12">
        {/* 5 Step Admission Process Timeline */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="px-4 py-1.5 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-widest border border-amber-300">
              Step-by-Step Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl font-berlin font-bold text-sec">
              Official 5-Step Admission Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A transparent, supportive, and merit-driven procedure designed for prospective parents and students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-200/80 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-berlin font-bold text-main/30 group-hover:text-main transition-colors">
                      {st.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sec to-[#1b0533] flex items-center justify-center shadow">
                      {st.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-sec group-hover:text-main transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Required Documents Checklist Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-sec via-[#2B0955] to-dark text-white shadow-xl border-2 border-amber-300/40 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
                  Checklist
                </span>
                <h3 className="text-xl font-bold text-white">
                  Mandatory Documents
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 font-light">
                  {requiredDocs.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheck className="text-amber-400 shrink-0 mt-1" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4 text-xs text-amber-200/80">
                Helpline: +92 300 8310674 / +92 315 7310674
              </div>
            </div>
          </div>
        </div>

        {/* Office Timings & Admission Desk Banner */}
        <div className="rounded-3xl bg-white border border-amber-200 p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6 shadow">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-sec text-xl">
              <FaClock />
            </div>
            <div>
              <h4 className="font-bold text-sec text-lg">Admissions Desk Visiting Hours</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Monday – Thursday: 8:00 AM – 01:30 PM | Friday &amp; Saturday: 8:00 AM – 12:00 PM
              </p>
            </div>
          </div>

          <a
            href="tel:+923008310674"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-main to-mainD text-white font-bold text-sm shadow hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <FaPhone />
            <span>Call Admissions Desk</span>
          </a>
        </div>
      </div>

      {/* Online Submission Form */}
      <div className="maxWSec px-4 sm:px-8 lg:px-12">
        <AdmissionForm />
      </div>
    </main>
  );
};

export default OnlineAdmission;
