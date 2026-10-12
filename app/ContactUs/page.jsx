"use client";

import React from "react";
import HeroHeader from "@/components/HeroHeader";
import {
  FaPhone,
  FaEnvelope,
  FaMapLocationDot,
  FaClock,
  FaGlobe,
  FaBuildingColumns,
  FaLocationDot,
} from "react-icons/fa6";

const campuses = [
  {
    name: "Nasir Mehmood Main Campus / Girls Campus",
    role: "Central Administration, STEM Labs & Girls Secondary Wing",
    phone: "+92 300 8310674",
  },
  {
    name: "Umar Hesham Campus for Senior Boys",
    role: "Senior Boys Pre-Medical & Pre-Engineering Prep",
    phone: "+92 315 7310674",
  },
  {
    name: "Muhammad Izhan Campus for Junior Boys",
    role: "Junior Boys Foundational Schooling & STEM Labs",
    phone: "+92 300 8310674",
  },
  {
    name: "Rahim Ali Campus for Kids",
    role: "Montessori Early Years & Foundational Play Wing",
    phone: "+92 315 7310674",
  },
];

const ContactUs = () => {
  return (
    <main className="bg-amber-50/20 pb-20">
      <HeroHeader
        title={"Contact Us"}
        description="The Pakistan School of Science — Gujranwala, Pakistan"
      />

      <div className="maxWSec px-4 sm:px-8 lg:px-12 py-12 flex flex-col gap-12">
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Campus Details */}
          <div className="rounded-3xl border-2 border-amber-300/40 p-6 sm:p-10 bg-white shadow-xl relative overflow-hidden space-y-6">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-wider border border-amber-300">
                Official Contact Desk
              </span>
              <h2 className="text-3xl font-berlin font-bold text-sec mt-3">
                Head Office &amp; Main Campus
              </h2>
              <p className="text-slate-600 text-sm">
                The Pakistan School of Science (PSS), Gujranwala
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700">
              {/* Phone */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sec to-[#1b0533] text-amber-300 flex items-center justify-center shrink-0 shadow">
                  <FaPhone />
                </div>
                <div>
                  <p className="font-bold text-sec text-xs uppercase tracking-wider">
                    Official Phone Lines
                  </p>
                  <div className="flex flex-wrap gap-x-4 font-mono font-bold text-slate-900 mt-1">
                    <a href="tel:+923008310674" className="hover:text-main transition-colors">
                      +92 300 8310674
                    </a>
                    <span>/</span>
                    <a href="tel:+923157310674" className="hover:text-main transition-colors">
                      +92 315 7310674
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sec to-[#1b0533] text-amber-300 flex items-center justify-center shrink-0 shadow">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-bold text-sec text-xs uppercase tracking-wider">
                    Official Email
                  </p>
                  <a
                    href="mailto:Thepsschool@gmail.com"
                    className="font-semibold text-slate-900 hover:text-main transition-colors block mt-1"
                  >
                    Thepsschool@gmail.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sec to-[#1b0533] text-amber-300 flex items-center justify-center shrink-0 shadow">
                  <FaGlobe />
                </div>
                <div>
                  <p className="font-bold text-sec text-xs uppercase tracking-wider">
                    Web Portal
                  </p>
                  <a
                    href="http://www.thepss.pk"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono font-bold text-main hover:underline block mt-1"
                  >
                    www.thepss.pk
                  </a>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sec to-[#1b0533] text-amber-300 flex items-center justify-center shrink-0 shadow">
                  <FaClock />
                </div>
                <div>
                  <p className="font-bold text-sec text-xs uppercase tracking-wider">
                    Official Office Hours
                  </p>
                  <div className="text-xs sm:text-sm text-slate-600 mt-1 space-y-1">
                    <p><strong>Monday – Thursday:</strong> 8:00 AM – 01:30 PM</p>
                    <p><strong>Friday &amp; Saturday:</strong> 8:00 AM – 12:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Location Card */}
          <div className="rounded-3xl bg-gradient-to-br from-sec via-[#2B0955] to-dark text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden border-2 border-amber-300/40 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
                Interactive Map Pin
              </span>
              <h3 className="text-3xl font-berlin font-bold text-white">
                Find Us on Google Maps
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-light">
                Visit our central campus located in Gujranwala, Pakistan. Coordinates: <code className="bg-black/30 px-2 py-0.5 rounded text-amber-300 font-mono">32.1881496, 74.2081952</code>.
              </p>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 text-sm font-bold">
                  <FaLocationDot />
                  <span>The Pakistan School, Gujranwala</span>
                </div>
                <p className="text-xs text-slate-300 font-light">
                  Campus tours, parent meetings, and admission queries are conducted during official morning hours.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap gap-4">
              <a
                href="https://maps.google.com/maps?q=32.1881496%2C74.2081952&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <FaMapLocationDot />
                <span>Open Google Maps Pin</span>
              </a>

              <a
                href="/OnlineAdmission"
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                Apply Online
              </a>
            </div>
          </div>
        </div>

        {/* 4 Franchise Campuses */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-sec font-bold text-xs uppercase tracking-wider border border-amber-300">
              Campus Locations
            </span>
            <h3 className="text-3xl font-berlin font-bold text-sec">
              The PSS Franchise &amp; Branch Network
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campuses.map((camp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-amber-200/80 hover:border-amber-400 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-center text-sec text-xl">
                    <FaBuildingColumns />
                  </div>
                  <h4 className="text-lg font-bold text-sec group-hover:text-main transition-colors">
                    {camp.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {camp.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 text-xs font-mono font-bold text-main">
                  Helpline: {camp.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
