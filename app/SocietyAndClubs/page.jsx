"use client";

import React, { useRef, useState } from "react";
import HeroHeader from "@/components/HeroHeader";
import {
  FaPlay,
  FaPause,
  FaVolumeHigh,
  FaVolumeXmark,
  FaExpand,
  FaDownload,
  FaMoon,
  FaFlask,
  FaRobot,
  FaBookQuran,
  FaComments,
  FaTrophy,
} from "react-icons/fa6";

const SocietyAndClubs = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const societies = [
    {
      icon: <FaMoon className="text-amber-400 text-xl" />,
      title: "Islamic Society & Mehfil-e-Naat Gathering",
      desc: "Nurturing spiritual enlightenment, Seerat-un-Nabi guidance, Husn-e-Qira'at competitions, Hamd-o-Naat recitations, and moral tarbiyah.",
      tag: "Spiritual & Ethical",
    },
    {
      icon: <FaFlask className="text-amber-400 text-xl" />,
      title: "STEM & Science Olympiad Society",
      desc: "Engaging students in real-world experimentation, Physics/Chemistry/Biology olympiad prep, and regional science fairs with hands-on lab projects.",
      tag: "STEM Discovery",
    },
    {
      icon: <FaRobot className="text-amber-400 text-xl" />,
      title: "Robotics & Artificial Intelligence Academy",
      desc: "Equipping young minds with algorithmic thinking, micro-controller programming (Arduino/Raspberry Pi), and modern software development.",
      tag: "Technology",
    },
    {
      icon: <FaComments className="text-amber-400 text-xl" />,
      title: "PSS Parliamentary Declamation & Model UN",
      desc: "Sharpening critical discourse, bilingual oratory, global policy analysis, and persuasive argumentation to build confident future leaders.",
      tag: "Oratory & Leadership",
    },
    {
      icon: <FaTrophy className="text-amber-400 text-xl" />,
      title: "Champions Athletics & Physical League",
      desc: "Promoting physical vigor, sportsmanship, and mental resilience through cricket, football, table tennis, badminton, and martial arts.",
      tag: "Sports League",
    },
    {
      icon: <FaBookQuran className="text-amber-400 text-xl" />,
      title: "Character Education & Community Guild",
      desc: "Dedicated to community welfare, tree plantations, charitable drives, and developing honest, empathetic, and patriotic citizens.",
      tag: "Civic Service",
    },
  ];

  return (
    <main className="bg-amber-50/20 pb-16">
      <HeroHeader
        title={"Societies & Clubs"}
        description="The Pakistan School of Science — Cultivating Leadership, Science & Moral Character"
      />

      <div className="maxWSec px-6 sm:px-12 py-12 flex flex-col gap-12">
        {/* Mehfil-e-Naat Video Showcase Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1b0533] via-[#2D0A54] to-[#120224] p-6 sm:p-10 text-white shadow-2xl border border-amber-300/30 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-widest uppercase border border-amber-300/40">
                <FaMoon />
                <span>Special Spiritual Gathering Footage</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-berlin font-bold">
                Mehfil-e-Naat & Islamic Tarbiyah{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                  (MAHFIL 2)
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Watch the soulful recitations, Husn-e-Qira&apos;at, spiritual Hamd-o-Naat chants, and moral tarbiyah assembly by the students and scholars of The Pakistan School of Science.
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto">
              <a
                href="/media/mahfil.mpg"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                <FaDownload />
                <span>Download Mehfil Video (62.5 MB)</span>
              </a>
            </div>
          </div>

          {/* Video Player Cinema Frame */}
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-black aspect-video max-w-4xl mx-auto shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/hero1.jpg"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/media/mahfil.mpg" type="video/mpeg" />
              <source src="/media/mahfil.mpg" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none transition-opacity ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            />

            {/* Big center play button */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center text-2xl sm:text-3xl shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-110 transition-all cursor-pointer z-20"
                aria-label="Play Mehfil Video"
              >
                <FaPlay className="ml-1" />
              </button>
            )}

            {/* Bottom controls bar */}
            <div
              className={`absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 to-transparent flex items-center justify-between z-20 transition-all ${
                isPlaying
                  ? "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                  : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-white/20 hover:bg-amber-400 hover:text-black transition-all text-white text-sm"
                >
                  {isPlaying ? <FaPause /> : <FaPlay className="ml-0.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-white/20 hover:bg-amber-400 hover:text-black transition-all text-white text-sm"
                >
                  {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
                </button>
                <span className="text-xs text-amber-200 hidden sm:inline">
                  Mehfil-e-Naat & Islamic Tarbiyah · PSS
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleFullScreen}
                  className="p-2 rounded-full bg-white/20 hover:bg-amber-400 hover:text-black transition-all text-white text-sm"
                >
                  <FaExpand />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Societies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {societies.map((soc, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-amber-200/70 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all flex flex-col gap-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-300 flex items-center justify-center">
                  {soc.icon}
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 text-sec text-xs font-bold border border-purple-200">
                  {soc.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-sec group-hover:text-main transition-colors mt-2">
                {soc.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {soc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SocietyAndClubs;
