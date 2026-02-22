import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import PropertySection from '../components/PropertySection';
import hero1 from "../assets/hero2.jpg";
// ====== 1. NEW DATA FOR DUAL-IMAGE LAYOUT ======
// Aap yahan apni images aur details change kar sakte hain
const stackedSectionsData = [
  {
    id: 1,
    title: "Break House",
    tags: ["Big Bar", "2 Bed", "3 Bath", "1,000-1,500 Sqft", "Hybrid Home"],
    // Badi background image (Exterior)
    bgImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    // Chhoti overlap image (Interior)
    smallImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Lumina Villa",
    tags: ["Pool", "4 Bed", "5 Bath", "3,000-3,500 Sqft", "Smart Home"],
    bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    smallImage: "https://images.unsplash.com/photo-1600607687931-cebf58cb8cb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Oak Retreat",
    tags: ["Forest View", "3 Bed", "2 Bath", "2,000-2,500 Sqft", "Eco Friendly"],
    bgImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    smallImage: "https://images.unsplash.com/photo-1510627498534-cf7e9002fcca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// ====== 2. INDIVIDUAL STACKING COMPONENT (SCREENSHOT WALA DESIGN) ======
const StackedSection = ({ data, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Background image thoda dheere move karegi (-10% to 10%)
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Chhoti image thoda fast move karegi taaki overlap aur 3D feel aaye
  const smallImgY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    // 'sticky top-0' isko screen par chipka dega aur naya section iske upar se aayega
    // zIndex dynamically set kiya hai taaki hamesha agla card upar aaye
    <div
      ref={ref}
      className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center"
      style={{ zIndex: index + 10 }}
    >

      {/* 1. BIG BACKGROUND IMAGE */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <img
          src={hero1}
          alt={data.title}
          className="w-full h-full object-cover opacity-90"
        />
        {/* Dark gradient overlay taaki text clearly dikhe */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </motion.div>

      {/* 2. FOREGROUND CONTENT (LEFT TEXT + RIGHT SMALL IMAGE) */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE: Title & Tags */}
        <div className="flex-1 w-full text-left">
          <h2
            className="text-[clamp(3rem,6vw,6rem)] font-serif font-normal text-white leading-tight mb-8"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {data.title}
          </h2>

          {/* Tags / Buttons Wrapper */}
          <div className="flex flex-wrap gap-4">
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-white/20 bg-[#2A2A2A]/60 backdrop-blur-md text-white/90 text-[13px] md:text-[14px] font-medium tracking-wide whitespace-nowrap shadow-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Small Overlapping Image */}
        <motion.div
          style={{ y: smallImgY }}
          className="w-full md:w-[45%] h-[40vh] md:h-[60vh] flex-shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden border border-white/10"
        >
          <img
            src={data.smallImage}
            alt="Interior view"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </div>
  );
};

// ====== 3. MAIN PAGE COMPONENT ======
const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Scroll to top on every reload/mount
    window.scrollTo(0, 0);

    // Prevent browser from restoring scroll position
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    // Reset scroll restoration on unmount (optional but cleaner)
    return () => {
      if (window.history.scrollRestoration) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    // Main wrapper. Note: Main wrapper par kabhi 'overflow-hidden' mat lagana warna 'sticky' kaam nahi karega.
    <main className="relative w-full bg-black">

      {/* ======= EXACT SAME ORIGINAL HERO SECTION ======= */}
      <section className="relative h-screen w-full overflow-hidden bg-black z-10">

        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={hero1}
            alt="Mansion Background"
            className="h-full w-full object-cover"
          />
          {/* Professional Gradient Overlay: Darker middle and bottom to reduce faded effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/95 pointer-events-none" />
        </div>

        {/* 2. PRO CINEMATIC KEYHOLE INTRO */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
              onAnimationComplete={() => setShowIntro(false)}
            >
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: [1, 1, 25], opacity: [1, 1, 0] }}
                transition={{
                  duration: 5,
                  times: [0, 0.1, 1],
                  ease: [0.65, 0, 0.35, 1]
                }}
                className="absolute top-1/2 left-1/2 flex items-center justify-center w-0 h-0"
              >
                <svg width="10000" height="10000" viewBox="0 0 10000 10000" className="absolute">
                  <path
                    fill="#0C120F"
                    fillRule="evenodd"
                    d="M0,0 L10000,0 L10000,10000 L0,10000 Z M5000,4830 A 85 85 0 0 0 4915 4915 C 4915 4970 4945 4995 4950 5030 L 4930 5170 L 5070 5170 L 5050 5030 C 5055 4995 5085 4970 5085 4915 A 85 85 0 0 0 5000 4830 Z"
                  />
                </svg>
              </motion.div>

              {/* Intro Text & Key Icon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, times: [0, 0.1, 0.65, 0.8] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[220px] flex flex-col items-center text-center z-50 w-full px-4"
              >
                <h2 className="text-[#F0F0F0] text-xs sm:text-[13px] tracking-[0.25em] uppercase font-medium leading-[2]">
                  Unlock the true potential of your<br />multi-family real estate investment
                </h2>
                <div className="mt-6 text-[#C9B171]">
                  <svg width="45" height="18" viewBox="0 0 60 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M 10 2 L 18 10 L 10 18 L 2 10 Z" />
                    <path d="M 10 6 L 14 10 L 10 14 L 6 10 Z" />
                    <path d="M 18 10 L 54 10" />
                    <path d="M 40 10 L 40 15 L 45 15 L 45 10" />
                    <path d="M 49 10 L 49 15 L 54 15 L 54 10" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. MAIN HERO CONTENT */}
        <div className="relative z-10 flex h-full flex-col justify-between px-8 md:px-14 py-10 text-white">
          <div className="h-24 md:h-32" />
          <div className="flex flex-col items-center justify-center w-full text-center gap-10">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
              className="text-[clamp(2rem,7vw,5.5rem)] font-serif font-black leading-[1.1] text-white w-full max-w-[90%] mx-auto"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              The River Green Colony<br />Expert Approach
            </motion.h1>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 3.1, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 w-full max-w-2xl px-4"
            >
              <p className="text-[12px] md:text-[14px] tracking-[0.25em] uppercase text-white/90 leading-[2] font-medium text-center">
                Unlock the true potential of your multi-family real estate investment
              </p>
              <button className="flex-shrink-0 border-2 border-white/80 bg-white/5 backdrop-blur-sm px-10 py-4 text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-white font-bold transition-all duration-300 hover:bg-white hover:text-black hover:border-white whitespace-nowrap">
                Investment Inquiry
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="flex items-center justify-center gap-6 pb-4"
          >
            <button className="text-white/70 hover:text-white text-xl transition-colors duration-200 px-2">&#8249;</button>
            <button className="text-white/70 hover:text-white text-xl transition-colors duration-200 px-2">&#8250;</button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>
      <PropertySection />

      {/* ======= NEW STACKING PARALLAX SECTIONS ======= */}
      <div className="relative w-full">
        {stackedSectionsData.map((section, index) => (
          <StackedSection key={section.id} data={section} index={index} />
        ))}
      </div>

    </main>
  );
};

export default HeroSection;