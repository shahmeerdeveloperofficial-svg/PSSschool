"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import LinkEffect from "./ui/LinkEffect";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaPhone, FaLocationDot, FaEnvelope, FaGraduationCap } from "react-icons/fa6";

const Footer = () => {
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Links = [
    {
      title: "Contact & Campus",
      content: [
        { title: "Main Campus Administration", src: "/ContactUs" },
        { title: "Admissions & Merit Desk", src: "/OnlineAdmission" },
        { title: "Pre-Medical & Engineering Cell", src: "/StudentCounselling" },
      ],
    },
    {
      title: "About PSS",
      content: [
        { title: "About School of Science", src: "/AboutUs" },
        { title: "Chairman's Message", src: "/ChairmanMessage" },
        { title: "Director's Message", src: "/DirectorMessage" },
        { title: "Science Philosophy", src: "/OurPhilosophy" },
        { title: "Rules & Policies", src: "/AboutUs/Policies" },
      ],
    },
    {
      title: "Academics & Wings",
      content: [
        { title: "Online Admission Form", src: "/OnlineAdmission" },
        { title: "Curriculum & STEM Labs", src: "/Curriculum/EarlyYears" },
        { title: "Societies & Olympiads", src: "/SocietyAndClubs" },
        { title: "Career Opportunities", src: "/Careers" },
      ],
    },
  ];

  return (
    <footer
      id="Contact"
      className="w-full relative overflow-hidden bg-white"
      style={{ clipPath: "inset(2px 0% 0% 0%)" }}
    >
      <div
        style={{ height: contentHeight }}
        className="pointer-events-none w-full relative z-20 min-h-16"
      >
        <div className="h-16 bg-white rounded-[0_0_2rem_2rem] sm:rounded-[0_0_5rem_5rem] absolute inset-x-0 top-0"></div>
      </div>

      <div
        ref={contentRef}
        className="pt-16 bg-gradient-to-b from-[#1E053D] to-dark text-light w-full fixed -bottom-0.5 z-10 border-t-2 border-amber-400/40"
      >
        <div className="maxWSec px-6 sm:px-12 py-8 sm:py-12 gap-8 sm:gap-12 flex max-lg:flex-col justify-between w-full">
          <div className="flex flex-col gap-5 max-sm:items-center max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-white p-1.5 shadow-xl flex items-center justify-center border-2 border-amber-300">
                <Image
                  src="/psslogo.png"
                  width={200}
                  height={200}
                  alt="The Pakistan School of Science logo"
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-berlin font-bold text-xl sm:text-2xl text-white leading-none">
                  PAKISTAN SCHOOL
                </span>
                <span className="font-berlin font-bold text-lg text-amber-300 leading-none">
                  OF SCIENCE
                </span>
                <span className="text-[10px] font-bold tracking-widest text-amber-200/90 uppercase mt-0.5">
                  Knowledge is Power
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-sm:text-center">
              Dedicated to empowering Pakistan&apos;s youth with top-tier science education, moral character, and Islamic tarbiyah since 23rd March 2011.
            </p>

            {/* Quick Contacts */}
            <div className="space-y-1.5 text-xs text-amber-200/90 font-mono">
              <p className="flex items-center gap-2">
                <FaPhone className="text-amber-400" />
                <span>+92 300 8310674 / +92 315 7310674</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-amber-400" />
                <span>Thepsschool@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-amber-400" />
                <span>Gujranwala, Pakistan</span>
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/OnlineAdmission"
                className="inline-flex justify-center rounded-xl bg-gradient-to-r from-main to-mainD px-5 py-2.5 text-sm font-bold text-white hover:opacity-90 transition shadow-lg shadow-main/20"
              >
                Apply Online
              </Link>
              <Link
                href="/ContactUs"
                className="inline-flex justify-center rounded-xl bg-sec border border-amber-300/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-secL transition"
              >
                Contact Campus
              </Link>
            </div>
          </div>

          <div className="flex max-sm:flex-col items-start flex-grow lg:max-w-[65%] gap-6 sm:gap-8 justify-between">
            {Links.map((item, index) => (
              <div key={index} className="flex-1 text-slate-400">
                <h5 className="font-berlin font-bold text-lg sm:text-xl text-amber-300 mb-3 border-b border-amber-500/30 pb-2">
                  {item.title}
                </h5>
                <div className="flex flex-col gap-2">
                  {item.content.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.src}
                      target={subItem.blank ? "_blank" : "_self"}
                      rel={subItem.blank ? "noopener noreferrer" : ""}
                      className="hover:text-amber-300 transition-colors text-sm"
                    >
                      <LinkEffect noicon text={subItem.title} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t py-4 border-amber-500/20 bg-black/50">
          <div
            id="social"
            className="maxWSec text-xs sm:text-sm flex flex-wrap justify-between items-center px-6 sm:px-12 gap-4 text-slate-400"
          >
            <div>© 2026 The Pakistan School of Science (PSS). All Rights Reserved.</div>

            <div className="flex gap-4 items-center text-lg text-slate-300">
              <Link href="/ContactUs" className="hover:text-amber-300 transition-colors"><FaFacebook /></Link>
              <Link href="/ContactUs" className="hover:text-amber-300 transition-colors"><FaInstagram /></Link>
              <Link href="/ContactUs" className="hover:text-amber-300 transition-colors"><FaYoutube /></Link>
              <Link href="/ContactUs" className="hover:text-amber-300 transition-colors"><FaLinkedin /></Link>
              <Link href="/ContactUs" className="hover:text-amber-300 transition-colors"><FaXTwitter /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
