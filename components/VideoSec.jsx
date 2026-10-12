"use client";

import React, { useState, useRef } from "react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
  FaPlay,
  FaPause,
  FaVolumeHigh,
  FaVolumeXmark,
  FaExpand,
  FaFlask,
  FaRobot,
  FaBookOpen,
  FaShieldHalved,
  FaVideo,
  FaImages,
  FaDownload,
  FaTrophy,
  FaMasksTheater,
  FaAward,
  FaGraduationCap,
  FaMoon,
  FaBookQuran,
  FaHandsPraying,
  FaStarAndCrescent,
  FaBus,
  FaCompass,
  FaMountainSun,
  FaMapLocationDot,
} from "react-icons/fa6";

const videoPlaylists = [
  {
    id: "inside",
    tabLabel: "🏫 Campus Tour (Inside PSS)",
    badge: "★ INSIDE THE PAKISTAN SCHOOL OF SCIENCE ★",
    headline: "Take a Virtual Walk Through Our State-of-the-Art Campus",
    desc: "Witness the real classrooms, experimental science laboratories, vibrant corridors, and inspiring educational environment where excellence comes to life.",
    src: "/media/inside.mp4",
    backupSrc: "/media/INSIDE.mpg",
    poster: "/mainbanner.jpeg",
    fileSize: "30.2 MB MP4",
    highlights: [
      {
        icon: <FaFlask className="text-amber-400" />,
        title: "Advanced Science Labs",
        desc: "Physics, Chemistry & Biology research spaces equipped for board experiments.",
      },
      {
        icon: <FaRobot className="text-amber-400" />,
        title: "AI & Robotics Tech Wing",
        desc: "High-speed computers and robotics controllers to nurture young tech minds.",
      },
      {
        icon: <FaBookOpen className="text-amber-400" />,
        title: "Central Digital Library",
        desc: "Curated science books, journals, exam archives, and digital study stations.",
      },
      {
        icon: <FaShieldHalved className="text-amber-400" />,
        title: "Safe & Purpose-Built",
        desc: "24/7 security, climate-controlled rooms, and segregated age wings.",
      },
    ],
  },
  {
    id: "annual-day",
    tabLabel: "🎭 Grand Annual Day Gala",
    badge: "★ GRAND ANNUAL DAY & PRIZE DISTRIBUTION ★",
    headline: "Celebrating Student Talent, Theatrical Arts & Board Honors",
    desc: "Relive the dazzling moments of our Annual Day celebrations — featuring student theatrical performances, motivational speeches, cultural tableaus, and prestigious trophy distributions.",
    src: "/media/annual-day.mp4",
    backupSrc: "/media/annual-day.mpg",
    poster: "/hero.jpg",
    fileSize: "17.8 MB MP4",
    highlights: [
      {
        icon: <FaTrophy className="text-amber-400" />,
        title: "Academic Honor Medals",
        desc: "Gold medals, merit certificates, and trophies awarded to top achievers.",
      },
      {
        icon: <FaMasksTheater className="text-amber-400" />,
        title: "Stage Dramas & Skits",
        desc: "Artistic plays, patriotic songs, and English & Urdu bilingual recitations.",
      },
      {
        icon: <FaGraduationCap className="text-amber-400" />,
        title: "Leadership & Mentorship",
        desc: "Inspiring addresses from the Chairman, Principal, and visiting chief guests.",
      },
      {
        icon: <FaAward className="text-amber-400" />,
        title: "House Championship Cups",
        desc: "Annual shield awarded to the top performing academic and sports house.",
      },
    ],
  },
  {
    id: "mahfil",
    tabLabel: "🌙 Mehfil-e-Naat & Tarbiyah",
    badge: "★ SPIRITUAL GATHERING & MORAL TARBIYAH ★",
    headline: "Inspiring Spiritual Enlightenment, Hamd-o-Naat & Character Excellence",
    desc: "A soulful spiritual assembly fostering Islamic character, melodious Hamd-o-Naat recitations, Husn-e-Qira'at, and moral tarbiyah in the luminous tradition of The Pakistan School of Science.",
    src: "/media/mahfil.mp4",
    backupSrc: "/media/mahfil.mpg",
    poster: "/hero1.jpg",
    fileSize: "18.8 MB MP4",
    highlights: [
      {
        icon: <FaBookQuran className="text-amber-400" />,
        title: "Husn-e-Qira'at Sessions",
        desc: "Soul-stirring Quranic recitations by young qaris with authentic tajweed rules.",
      },
      {
        icon: <FaHandsPraying className="text-amber-400" />,
        title: "Hamd-o-Naat Recitals",
        desc: "Melodious praises of Allah SWT and Durood-o-Salam upon the Holy Prophet (PBUH).",
      },
      {
        icon: <FaStarAndCrescent className="text-amber-400" />,
        title: "Moral Tarbiyah & Ethics",
        desc: "Nurturing character, truthfulness, respectful conduct, and empathy for humanity.",
      },
      {
        icon: <FaMoon className="text-amber-400" />,
        title: "Spiritual Harmony",
        desc: "Uniting students, respected scholars, and faculty in divine reverence and peace.",
      },
    ],
  },
  {
    id: "tours",
    tabLabel: "🚌 Tours & Field Trips",
    badge: "★ OUTDOOR EXPEDITIONS & FIELD LEARNING ★",
    headline: "Educational Tours, Science Field Trips & Outdoor Expeditions",
    desc: "Taking experiential science beyond classroom boundaries through industrial visits, botanical expeditions, historical landmark tours, and outdoor student camps.",
    src: "/media/tours.mp4",
    backupSrc: "/media/tours.mpg",
    poster: "/slider4.JPG",
    fileSize: "32.5 MB MP4",
    highlights: [
      {
        icon: <FaBus className="text-amber-400" />,
        title: "Educational & Science Trips",
        desc: "Visits to power plants, botanical centers, science museums, and research institutes.",
      },
      {
        icon: <FaMapLocationDot className="text-amber-400" />,
        title: "Historical & Heritage Visits",
        desc: "Excursions connecting students to national monuments, architecture, and cultural history.",
      },
      {
        icon: <FaMountainSun className="text-amber-400" />,
        title: "Nature & Adventure Camps",
        desc: "Outdoor physical leadership activities, hill excursions, and environmental nature walks.",
      },
      {
        icon: <FaCompass className="text-amber-400" />,
        title: "Social Bonding & Team Spirit",
        desc: "Creating lifelong memories, independent life skills, and lasting student camaraderie.",
      },
    ],
  },
];

const galleryImages = [
  {
    src: "/pss-gallery/pss-1.jpeg",
    title: "Main Science Wing & Campus Front",
    tag: "Campus Infrastructure",
  },
  {
    src: "/pss-gallery/pss-2.jpeg",
    title: "Experimental Science Practical Laboratory",
    tag: "STEM Facilities",
  },
  {
    src: "/pss-gallery/pss-3.jpeg",
    title: "Classroom Learning & Conceptual Instruction",
    tag: "Academic Excellence",
  },
  {
    src: "/pss-gallery/pss-4.jpeg",
    title: "Junior Wing Morning Assembly Ground",
    tag: "Campus Life",
  },
  {
    src: "/pss-gallery/pss-7.jpeg",
    title: "Annual Day Prize Distribution & Medals",
    tag: "Student Achievements",
  },
  {
    src: "/pss-gallery/pss-10.jpeg",
    title: "Athletics, Sports Arena & Championships",
    tag: "Physical Fitness",
  },
  {
    src: "/pss-gallery/pss-11.jpeg",
    title: "Central Digital & Science Reference Library",
    tag: "Research & Study",
  },
  {
    src: "/pss-gallery/pss-12.jpeg",
    title: "Mehfil-e-Naat Recital & Spiritual Assembly",
    tag: "Moral Tarbiyah",
  },
];

const VideoSec = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [viewMode, setViewMode] = useState("video"); // 'video' | 'gallery'
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const currentVideo = videoPlaylists[selectedVideoIndex];

  const handleSelectVideo = (index) => {
    setSelectedVideoIndex(index);
    setViewMode("video");
    setIsPlaying(false);
    setVideoError(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setVideoError(false);
        })
        .catch(() => {
          setIsPlaying(false);
          setVideoError(true);
        });
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
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <section id="CampusTour" className="p-4 sm:p-6 w-full maxWSec mx-auto my-12">
      <div className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b0533] via-[#2D0A54] to-[#120224] shadow-2xl border border-amber-300/30 p-6 sm:p-10 md:p-14 text-white">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-[35rem] h-[35rem] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-8 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 backdrop-blur-md border border-amber-300/50 text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-300 shadow-xl">
            <FaVideo className="text-amber-400 animate-pulse" />
            <span>{currentVideo.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-berlin font-bold tracking-wide text-white">
            {currentVideo.headline.split("Our")[0]}
            {currentVideo.headline.includes("Our") && (
              <>
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                  {currentVideo.headline.split("Our")[1]}
                </span>
              </>
            )}
            {!currentVideo.headline.includes("Our") && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                {currentVideo.headline}
              </span>
            )}
          </h2>

          <p className="text-amber-100/80 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
            {currentVideo.desc}
          </p>

          {/* Playlist & View Mode Tabs Switcher */}
          <div className="flex flex-wrap justify-center items-center gap-2 p-1.5 rounded-2xl bg-black/40 border border-amber-400/30 backdrop-blur-md mt-2 shadow-inner">
            {videoPlaylists.map((vid, idx) => (
              <button
                key={vid.id}
                onClick={() => handleSelectVideo(idx)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  viewMode === "video" && selectedVideoIndex === idx
                    ? "bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md scale-105"
                    : "text-amber-200 hover:text-white"
                }`}
              >
                <span>{vid.tabLabel}</span>
              </button>
            ))}

            <button
              onClick={() => setViewMode("gallery")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                viewMode === "gallery"
                  ? "bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md scale-105"
                  : "text-amber-200 hover:text-white"
              }`}
            >
              <FaImages />
              <span>📸 HD Photo Gallery ({galleryImages.length})</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        {viewMode === "video" ? (
          /* Video Cinema Frame */
          <div className="relative z-10 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-2 border-amber-400/40 bg-black/80 group">
            <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
              <video
                key={currentVideo.id}
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={currentVideo.poster}
                preload="metadata"
                playsInline
                onError={() => setVideoError(true)}
                onPlay={() => {
                  setIsPlaying(true);
                  setVideoError(false);
                }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={currentVideo.src} type="video/mp4" />
                {currentVideo.backupSrc && (
                  <source src={currentVideo.backupSrc} type="video/mpeg" />
                )}
                Your browser does not support the video tag.
              </video>

              {/* Dark gradient overlay for cinema effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 transition-opacity duration-300 pointer-events-none ${
                  isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                }`}
              />

              {/* Big Center Play Button Overlay */}
              {!isPlaying && !videoError && (
                <button
                  onClick={togglePlay}
                  aria-label="Play Video"
                  className="absolute z-20 flex flex-col items-center gap-3 p-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(245,158,11,0.6)] cursor-pointer"
                >
                  <FaPlay className="text-2xl sm:text-3xl ml-1" />
                </button>
              )}

              {/* Codec Fallback message if browser does not decode MPG */}
              {videoError && (
                <div className="absolute z-20 inset-0 flex flex-col items-center justify-center p-6 bg-black/85 text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 text-3xl">
                    <FaVideo />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {currentVideo.title} Video Ready
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md">
                    Footage ({currentVideo.fileSize}) is available. You can view the live photo gallery below or download/open the high-quality footage directly.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href={currentVideo.src}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-sm shadow hover:scale-105 transition-all"
                    >
                      <FaDownload />
                      <span>Download Video ({currentVideo.fileSize})</span>
                    </a>
                    <button
                      onClick={() => setViewMode("gallery")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold text-sm transition-all"
                    >
                      <FaImages />
                      <span>Switch to Photo Tour</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Video Controls Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between gap-4 z-20 transition-all duration-300 ${
                  isPlaying
                    ? "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-amber-400 hover:text-slate-950 backdrop-blur-md text-white transition-all"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <FaPause /> : <FaPlay className="ml-0.5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-amber-400 hover:text-slate-950 backdrop-blur-md text-white transition-all"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
                  </button>

                  <span className="text-xs sm:text-sm font-semibold text-amber-200 tracking-wide hidden sm:inline-block">
                    {currentVideo.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={currentVideo.src}
                    download
                    className="p-2 rounded-full bg-white/20 hover:bg-amber-400 hover:text-slate-950 backdrop-blur-md text-white transition-all text-xs"
                    title="Download HD Video"
                  >
                    <FaDownload />
                  </a>
                  <span className="text-xs px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-300/30 hidden md:inline-block font-mono">
                    Full HD Quality
                  </span>
                  <button
                    onClick={handleFullScreen}
                    className="p-2.5 rounded-full bg-white/20 hover:bg-amber-400 hover:text-slate-950 backdrop-blur-md text-white transition-all"
                    aria-label="Full Screen"
                  >
                    <FaExpand />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* HD Photo Showcase Gallery */
          <div className="relative z-10 max-w-5xl mx-auto space-y-4">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/40 bg-black">
              <Image
                src={galleryImages[activePhoto].src}
                alt={galleryImages[activePhoto].title}
                fill
                className="object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400 text-slate-950">
                    {galleryImages[activePhoto].tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                    {galleryImages[activePhoto].title}
                  </h3>
                </div>
                <span className="text-sm font-mono text-amber-200/80">
                  {activePhoto + 1} / {galleryImages.length}
                </span>
              </div>
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-5 gap-2 sm:gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(idx)}
                  className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                    activePhoto === idx
                      ? "border-amber-400 scale-105 shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Facility / Event Highlights Grid below video/gallery */}
        <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentVideo.highlights.map((fac, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-amber-300/20 hover:border-amber-400/50 transition-all duration-300 flex flex-col gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                {fac.icon}
              </div>
              <h3 className="text-lg font-bold text-amber-200 tracking-wide">
                {fac.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {fac.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="relative z-10 mt-10 pt-8 border-t border-amber-300/20 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">
              Want to experience the campus and events in person?
            </h4>
            <p className="text-sm text-amber-100/70">
              Campus tours, admissions desk, and counseling sessions are open Monday through Saturday.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/OnlineAdmission">
              <Button btnType="main">
                Apply for Admission 2026-27
              </Button>
            </Link>
            <Link href="/ContactUs">
              <Button btnType="sec">
                Contact Admissions Desk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSec;
