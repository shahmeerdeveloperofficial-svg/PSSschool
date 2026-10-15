"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaImages,
  FaExpand,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
  FaFlask,
  FaGraduationCap,
  FaTrophy,
  FaSchool,
  FaCamera,
} from "react-icons/fa6";

const photos = [
  {
    id: 1,
    src: "/pss-gallery/pss-1.jpeg",
    title: "Main Campus & Science Wing Front",
    category: "Campus & Life",
    desc: "The imposing entrance and academic building of The Pakistan School of Science.",
  },
  {
    id: 2,
    src: "/pss-gallery/pss-2.jpeg",
    title: "Faculty & Student Educational Field Tour",
    category: "Campus & Life",
    desc: "Mentors and scholars on an outdoor field study excursion enjoying nature, fellowship, and outdoor learning.",
  },
  {
    id: 3,
    src: "/pss-gallery/pss-3.jpeg",
    title: "Senior Science Classroom & Conceptual Lecture",
    category: "Classrooms & Academics",
    desc: "Interactive teaching emphasizing deep conceptual logic rather than rote memorization.",
  },
  {
    id: 4,
    src: "/pss-gallery/pss-4.jpeg",
    title: "Junior Wing Morning Assembly & Ground",
    category: "Campus & Life",
    desc: "Daily character assembly cultivating patriotism, discipline, and unity.",
  },
  {
    id: 5,
    src: "/pss-gallery/pss-5.jpeg",
    title: "Annual Prize Distribution Stage Hosting",
    category: "Annual Celebrations",
    desc: "Confident stage moderation, speeches, and declamation hosting at the PSS Annual Prize Distribution Gala.",
  },
  {
    id: 6,
    src: "/pss-gallery/pss-6.jpeg",
    title: "Annual Day Gala Stage Performance",
    category: "Annual Celebrations",
    desc: "Colorful cultural and dramatic tableaus presented by confident students on stage.",
  },
  {
    id: 7,
    src: "/pss-gallery/pss-7.jpeg",
    title: "Academic Prize Distribution & Medals",
    category: "Annual Celebrations",
    desc: "Rewarding board toppers and position holders with gold medals and shields.",
  },
  {
    id: 8,
    src: "/pss-gallery/pss-8.jpeg",
    title: "Biology & Microscopic Specimen Study",
    category: "Science & Labs",
    desc: "Advanced biological analysis under the guidance of specialized science teachers.",
  },
  {
    id: 9,
    src: "/pss-gallery/pss-9.jpeg",
    title: "Interactive Smart Classroom Discussion",
    category: "Classrooms & Academics",
    desc: "Engaging inquiry-based group sessions where students ask questions freely.",
  },
  {
    id: 10,
    src: "/pss-gallery/pss-10.jpeg",
    title: "Academic Distinction Shield Presentation",
    category: "Annual Celebrations",
    desc: "Chairman and Principal presenting an engraved distinction shield to a top-achieving student.",
  },
  {
    id: 11,
    src: "/pss-gallery/pss-11.jpeg",
    title: "Student Library Reading & Study Circle",
    category: "Classrooms & Academics",
    desc: "Rich repository of scientific reference texts, journals, and literature books.",
  },
  {
    id: 12,
    src: "/pss-gallery/pss-12.jpeg",
    title: "Junior School Medal Achievers",
    category: "Annual Celebrations",
    desc: "Junior wing prize winners proudly displaying their shining silver merit medals on stage.",
  },
  {
    id: 13,
    src: "/pss-gallery/pss-13.jpeg",
    title: "Physics Mechanics & Circuit Experimentation",
    category: "Science & Labs",
    desc: "Hands-on electrical resistance, optics, and mechanics equipment verification.",
  },
  {
    id: 14,
    src: "/pss-gallery/pss-14.jpeg",
    title: "Cricket & Badminton House Championship",
    category: "Sports & Activities",
    desc: "Inter-house athletic cups building resilience, stamina, and team spirit.",
  },
  {
    id: 15,
    src: "/pss-gallery/pss-15.jpeg",
    title: "Official Certificate of Recognition Award",
    category: "Annual Celebrations",
    desc: "School administration presenting official Certificates of Recognition honoring exceptional service.",
  },
  {
    id: 16,
    src: "/pss-gallery/pss-16.jpeg",
    title: "Educational Field Tour & Outdoor Study",
    category: "Campus & Life",
    desc: "Taking students on industrial and historical excursions across Pakistan.",
  },
  {
    id: 17,
    src: "/pss-gallery/pss-17.jpeg",
    title: "Chemistry Titration & Solution Chemistry",
    category: "Science & Labs",
    desc: "Standardized apparatus for safe, precise chemical reactions and testing.",
  },
  {
    id: 18,
    src: "/pss-gallery/pss-18.jpeg",
    title: "Pre-Medical & Pre-Engineering Prep Circle",
    category: "Classrooms & Academics",
    desc: "Focused coaching for board exams, MDCAT, and ECAT competitive entrance tests.",
  },
  {
    id: 19,
    src: "/pss-gallery/pss-19.jpeg",
    title: "National Flag Hoisting & Independence Day",
    category: "Annual Celebrations",
    desc: "Patriotic parades, national anthems, and tributes to Pakistan's founding leaders.",
  },
  {
    id: 20,
    src: "/pss-gallery/pss-20.jpeg",
    title: "Spacious Campus Corridors & Secure Facilities",
    category: "Campus & Life",
    desc: "Purpose-built architectural design ensuring safety, comfort, and discipline.",
  },
  {
    id: 21,
    src: "/pss-gallery/pss-21.jpeg",
    title: "Table Tennis & Indoor Games Arena",
    category: "Sports & Activities",
    desc: "Indoor recreation and mental agility sports between academic sessions.",
  },
  {
    id: 22,
    src: "/pss-gallery/pss-22.jpeg",
    title: "Faculty Mentorship & Guidance Desk",
    category: "Classrooms & Academics",
    desc: "Dedicated teachers providing individual counselling and personal care.",
  },
  {
    id: 23,
    src: "/pss-gallery/pss-23.jpeg",
    title: "Science Exhibition Working Models",
    category: "Science & Labs",
    desc: "Renewable energy, hydraulics, and automated projects built by students.",
  },
  {
    id: 24,
    src: "/pss-gallery/pss-24.jpeg",
    title: "Northern Mountain Excursion & Retreat",
    category: "Campus & Life",
    desc: "Scenic recreational retreat to northern hill stations building outdoor leadership, fellowship, and character.",
  },
  {
    id: 25,
    src: "/pss-gallery/pss-25.jpeg",
    title: "Junior Wing Play Activity & Early Learning",
    category: "Campus & Life",
    desc: "Nurturing curiosity, phonics, and joyful foundational education in juniors.",
  },
  {
    id: 26,
    src: "/pss-gallery/pss-26.jpeg",
    title: "Trophy Showcase & Board Merit Awards",
    category: "Annual Celebrations",
    desc: "Honoring students who earned regional distinctions and board top ranks.",
  },
];

const categories = [
  { id: "all", label: "All Photos", icon: <FaCamera /> },
  { id: "Science & Labs", label: "Science & Labs", icon: <FaFlask /> },
  { id: "Classrooms & Academics", label: "Classrooms & Academics", icon: <FaGraduationCap /> },
  { id: "Annual Celebrations", label: "Annual Celebrations", icon: <FaTrophy /> },
  { id: "Campus & Life", label: "Campus & Life", icon: <FaSchool /> },
  { id: "Sports & Activities", label: "Sports & Activities", icon: <FaTrophy /> },
];

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1
    );
  };

  return (
    <section id="Gallery" className="maxWSec px-4 sm:px-8 lg:px-12 py-16">
      {/* Header */}
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-300/50 text-xs sm:text-sm font-bold tracking-widest uppercase text-sec shadow-sm">
          <FaImages className="text-main" />
          <span>★ REAL CAMPUS LIFE IN ACTION ★</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-berlin font-bold tracking-wide text-dark">
          Life at <span className="text-sec">The Pakistan School</span>{" "}
          <span className="text-main">Of Science</span>
        </h2>

        <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Explore genuine moments of academic inquiry, experimental science laboratories, athletic victories, and cultural celebrations captured right here on our campus.
        </p>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-sec via-[#2B0955] to-dark text-white shadow-lg border border-amber-400/50 scale-105"
                  : "bg-white text-slate-700 hover:text-sec hover:bg-amber-50 border border-slate-200"
              }`}
            >
              <span className={selectedCategory === cat.id ? "text-amber-300" : "text-main"}>
                {cat.icon}
              </span>
              <span>{cat.label}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/10">
                {cat.id === "all"
                  ? photos.length
                  : photos.filter((p) => p.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bento / Masonry Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <AnimatePresence>
          {displayedPhotos.map((photo, idx) => {
            const isFeatured = idx % 7 === 0;
            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className={`group relative rounded-3xl overflow-hidden shadow-lg border-2 border-amber-200/60 hover:border-amber-400 hover:shadow-2xl transition-all duration-500 bg-slate-900 cursor-pointer ${
                  isFeatured ? "sm:col-span-2 sm:row-span-2 aspect-square" : "aspect-[4/3]"
                }`}
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-sec/80 backdrop-blur-md text-amber-200 text-xs font-bold border border-amber-300/30 shadow">
                    {photo.category}
                  </span>
                </div>

                {/* Hover Expand Icon */}
                <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaExpand className="text-xs" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide leading-snug drop-shadow-md">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-amber-100/80 mt-1 line-clamp-2 font-light">
                    {photo.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {visibleCount < filteredPhotos.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 8)}
            className="px-6 py-3 rounded-full bg-white border border-amber-300/80 text-sec font-bold text-xs sm:text-sm shadow-md hover:bg-amber-50 hover:border-amber-400 hover:shadow-lg transition-all"
          >
            Load More Campus Photos ({filteredPhotos.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Lightbox HD Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-10 pb-4 border-b border-white/10">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <h4 className="text-lg sm:text-xl font-bold">
                {filteredPhotos[lightboxIndex].title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-mono text-slate-400">
                {lightboxIndex + 1} / {filteredPhotos.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black flex items-center justify-center transition-all text-lg"
                aria-label="Close Preview"
              >
                <FaXmark />
              </button>
            </div>
          </div>

          {/* Center Image with Nav Buttons */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={prevPhoto}
              className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-amber-400 hover:text-black text-white flex items-center justify-center text-xl transition-all border border-white/20"
              aria-label="Previous Photo"
            >
              <FaChevronLeft />
            </button>

            <div className="relative w-full h-full max-w-5xl max-h-[75vh]">
              <Image
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={nextPhoto}
              className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-amber-400 hover:text-black text-white flex items-center justify-center text-xl transition-all border border-white/20"
              aria-label="Next Photo"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="text-center text-amber-100/90 text-sm max-w-2xl mx-auto py-2">
            {filteredPhotos[lightboxIndex].desc}
          </div>
        </div>
      )}
    </section>
  );
}
