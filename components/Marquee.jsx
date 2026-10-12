"use client";

import React, { useEffect, useRef } from "react";

export default function Marquee() {
  const containerRef = useRef(null);
  const textPathRef = useRef(null);

  useEffect(() => {
    let animId;
    let current = 0;
    let isVisible = false;

    const animate = () => {
      if (isVisible && textPathRef.current) {
        current -= 0.8;
        if (current <= -2500) current = 0;
        textPathRef.current.setAttribute("startOffset", `${current}px`);
      }
      animId = requestAnimationFrame(animate);
    };

    // Pause RAF when not visible to save 100% CPU on scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  const marqueeText =
    "★ CURIOSITY • INNOVATION • STEM ROBOTICS • PRE-MEDICAL • PRE-ENGINEERING • 100% BOARD DISTINCTION • ISLAMIC TARBIYAH • KNOWLEDGE IS POWER • THE PAKISTAN SCHOOL OF SCIENCE • ADMISSIONS 2026-27 • ";
  const repeatedText = Array(12).fill(marqueeText).join(" ");

  return (
    <section
      ref={containerRef}
      className="w-full relative overflow-hidden py-6 sm:py-10 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent"
    >
      {/* PSS Ambient drifting cloud behind ribbon */}
      <div className="top-cloud -top-8 left-10 w-72 sm:w-96 h-24 opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 120" fill="none" className="w-full h-full text-amber-300">
          <path
            d="M40 80 Q60 30 110 50 Q160 10 230 40 Q290 20 330 60 Q370 70 380 90 Q340 110 200 110 Q70 110 40 80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-2 sm:px-4">
        {/* PSS Curved Ribbon Marquee */}
        <div className="w-full relative">
          <svg
            viewBox="0 0 1920 280"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto overflow-visible block drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2D0A54" />
                <stop offset="35%" stopColor="#43147C" />
                <stop offset="70%" stopColor="#2D0A54" />
                <stop offset="100%" stopColor="#1A0536" />
              </linearGradient>
              <linearGradient id="ribbonBorderGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#C59A47" />
                <stop offset="50%" stopColor="#F5D77F" />
                <stop offset="100%" stopColor="#C59A47" />
              </linearGradient>
              <path
                id="rbnPath"
                d="M -60,230 C 340,30 760,230 1160,110 C 1560,-10 1760,210 2020,110"
              />
            </defs>

            {/* Glowing Golden Outer Border Track */}
            <use
              href="#rbnPath"
              fill="none"
              stroke="url(#ribbonBorderGrad)"
              strokeWidth="74"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Deep Royal Purple Ribbon Core */}
            <use
              href="#rbnPath"
              fill="none"
              stroke="url(#ribbonGrad)"
              strokeWidth="68"
              strokeLinecap="round"
            />

            {/* Circuit Dash Pulse */}
            <use
              href="#rbnPath"
              fill="none"
              stroke="#F5D77F"
              strokeWidth="2.5"
              className="webflow-animated-line"
              opacity="0.8"
            />

            {/* Fluid Text Following the Wave Path */}
            <text
              dominantBaseline="middle"
              style={{
                fontFamily: "Berlin, sans-serif",
                fontSize: "20px",
                fill: "#FFFFFF",
                fontWeight: "bold",
                letterSpacing: "0.08em",
              }}
            >
              <textPath ref={textPathRef} href="#rbnPath" startOffset="0px">
                {repeatedText}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
