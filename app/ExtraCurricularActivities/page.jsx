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
  FaTrophy,
  FaMasksTheater,
  FaMedal,
  FaUsersViewfinder,
} from "react-icons/fa6";

const ExtraCurricularActivities = () => {
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

  const activities = [
    {
      title: "Annual Day & Grand Prize Distribution",
      desc: "Our hallmark annual celebration uniting students, parents, and distinguished dignitaries with vibrant theatrical performances, national anthems, and merit trophies.",
      tag: "Signature Event",
    },
    {
      title: "Annual Science & Technology Expo",
      desc: "Scholars design working engineering models, chemical demonstrations, robotics showcases, and software solutions, presenting to industry judges and parents.",
      tag: "STEM Innovation",
    },
    {
      title: "Athletics & Sports Tournaments",
      desc: "From intra-house cricket matches and football leagues to table tennis championships and track & field meets, our athletic program instills discipline and team unity.",
      tag: "Sports & Fitness",
    },
    {
      title: "Fine Arts & Scientific Illustration",
      desc: "Blending creative visual artistry with technical draftsmanship, our art studios provide avenues for painting, digital design, and structural modeling.",
      tag: "Arts & Culture",
    },
    {
      title: "Community Service & Green Campus Initiative",
      desc: "Students lead tree-planting campaigns, recycling drives, charity relief efforts, and peer tutoring sessions that ground intellectual power in compassionate service.",
      tag: "Social Responsibility",
    },
  ];

  return (
    <main className="bg-amber-50/20 pb-16">
      <HeroHeader
        title={"Extracurricular Activities"}
        description="The Pakistan School of Science — Cultivating Well-Rounded Champions"
      />

      <div className="maxWSec px-6 sm:px-12 py-12 flex flex-col gap-12">
        {/* Annual Day Video Showcase Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#1b0533] via-[#2D0A54] to-[#120224] p-6 sm:p-10 text-white shadow-2xl border border-amber-300/30 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-widest uppercase border border-amber-300/40">
                <FaTrophy />
                <span>Featured Event Footage</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-berlin font-bold">
                Grand Annual Day Celebrations{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                  (Annual Day HQ)
                </span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Watch the vibrant stage performances, dramatic skits, patriotic anthems, and formal prize distribution honoring the top academic and co-curricular achievers of PSS.
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto">
              <a
                href="/media/annual-day.mpg"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-sm shadow-xl hover:scale-105 transition-all"
              >
                <FaDownload />
                <span>Download Event Video (71 MB)</span>
              </a>
            </div>
          </div>

          {/* Video Player Cinema Frame */}
          <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-amber-400/40 bg-black aspect-video max-w-4xl mx-auto shadow-2xl group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/hero.jpg"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/media/annual-day.mpg" type="video/mpeg" />
              <source src="/media/annual-day.mpg" type="video/mp4" />
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
                aria-label="Play Annual Day Video"
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
                  Annual Day Gala · The Pakistan School of Science
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

        {/* Co-curricular pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-amber-200/70 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all flex flex-col gap-3 group"
            >
              <span className="px-3 py-1 rounded-full bg-amber-100 text-sec text-xs font-bold w-fit border border-amber-300">
                {act.tag}
              </span>
              <h3 className="text-xl font-bold text-sec group-hover:text-main transition-colors">
                {act.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {act.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ExtraCurricularActivities;
