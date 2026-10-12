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
  FaBus,
  FaFlask,
  FaGraduationCap,
  FaTrophy,
  FaCompass,
  FaMountainSun,
  FaSeedling,
} from "react-icons/fa6";

const OurJourney = () => {
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

  const milestones = [
    {
      year: "Genesis",
      title: "Foundations of Scientific Excellence",
      desc: "Established with a bold mission: delivering conceptual STEM education, cutting-edge science labs, and uncompromising ethical tarbiyah under the motto 'Knowledge is Power'.",
      icon: <FaSeedling className="text-amber-400 text-xl" />,
    },
    {
      year: "Expansion",
      title: "Advanced STEM Laboratories & Robotics",
      desc: "Equipping learners with state-of-the-art Physics, Chemistry, Biology, and AI Robotics infrastructure to transform theoretical curriculum into hands-on innovation.",
      icon: <FaFlask className="text-amber-400 text-xl" />,
    },
    {
      year: "Outdoor Learning",
      title: "Educational Expeditions & Field Studies",
      desc: "Pioneering structured annual field trips, industrial study tours, and historical excursions to build life skills, environmental awareness, and real-world exposure.",
      icon: <FaBus className="text-amber-400 text-xl" />,
    },
    {
      year: "Distinction",
      title: "100% Board Merit & Toppers Cell",
      desc: "Our graduates dominate board examination merit positions, earning direct admission into top medical colleges and engineering universities across Pakistan.",
      icon: <FaGraduationCap className="text-amber-400 text-xl" />,
    },
  ];

  return (
    <main className="bg-amber-50/20 pb-16">
      <HeroHeader
        title={"Our Journey"}
        description="Tracing the history, milestones, and future vision of The Pakistan School of Science."
      />

      <div className="maxWSec px-6 sm:px-12 py-12 flex flex-col gap-12">
        {/* Tours Video Feature Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1b0533] via-[#2D0A54] to-[#120224] p-6 sm:p-10 text-white shadow-2xl border border-amber-300/30 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-widest uppercase border border-amber-300/40">
                <FaBus />
                <span>Field Learning Archive Footage</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-berlin font-bold">
                Student Tours & Field Trips{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                  (TOURS HQ)
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Experience our students embarking on unforgettable educational expeditions, exploring historical heritage, conducting botanical and environmental field research, and building team spirit.
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto">
              <a
                href="/media/tours.mpg"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                <FaDownload />
                <span>Download Tours Video (101.6 MB)</span>
              </a>
            </div>
          </div>

          {/* Video Player Cinema Frame */}
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-black aspect-video max-w-4xl mx-auto shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/slider4.JPG"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/media/tours.mpg" type="video/mpeg" />
              <source src="/media/tours.mpg" type="video/mp4" />
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
                aria-label="Play Tours Video"
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
                  Educational Tours & Field Expeditions · PSS
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

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((ms, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200/70 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all flex flex-col gap-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-100/80 border border-amber-300 flex items-center justify-center">
                  {ms.icon}
                </div>
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow">
                  {ms.year}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-sec group-hover:text-main transition-colors mt-2">
                {ms.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {ms.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurJourney;
