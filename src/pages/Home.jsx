import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import PropertySection from '../components/PropertySection';
import hero1 from "../assets/hero2.jpg";
import TestimonialSection from '@/components/Testimonials';
import StackedImagesSection from '../components/StackedImagesSection';
import Videodesign from '../components/hero4';
import Hero5 from '../components/hero5';
import Footer from '../components/Footer';

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
            >
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: [1, 1, 25], opacity: [1, 1, 0] }}
                transition={{
                  duration: 5,
                  times: [0, 0.1, 1],
                  ease: [0.65, 0, 0.35, 1]
                }}
                onAnimationComplete={() => setShowIntro(false)}
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
        <div className="relative z-10 flex h-full flex-col justify-between px-4 sm:px-8 md:px-14 py-6 sm:py-10 text-white">
          <div className="h-16 sm:h-24 md:h-32" />
          <div className="flex flex-col items-center justify-center w-full text-center gap-6 sm:gap-10">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 2, ease: "easeOut" }}
              className="text-[clamp(2rem,7vw,5.5rem)] font-serif font-black leading-[1.1] text-white w-full max-w-[90%] mx-auto"
            >
              The River Green<br />Expert Approach
            </motion.h1>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 3.1, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 w-full max-w-2xl px-4"
            >
              <p className="text-[10px] sm:text-[12px] md:text-[14px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/90 leading-[1.8] sm:leading-[2] font-medium text-center">
                Unlock the true potential of your multi-family real estate investment
              </p>
              <button className="flex-shrink-0 border-2 border-white/80 bg-white/5 backdrop-blur-sm px-6 sm:px-10 py-3 sm:py-4 text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white font-bold transition-all duration-300 hover:bg-white hover:text-black hover:border-white whitespace-nowrap">
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
      <TestimonialSection />

      <StackedImagesSection />
      <Videodesign />
      <Hero5 />
      <Footer />

    </main>
  );
};

export default HeroSection;