import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="/src/assets/newimage.jpeg"
          alt="Mansion Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
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
              animate={{ scale: [1, 1, 120], opacity: [1, 1, 0] }}
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
                Unlock the true potential of your<br/>multi-family real estate investment
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

      {/* 3. MAIN HERO CONTENT — exact layout from screenshot */}
      <div className="relative z-10 flex h-full flex-col justify-between px-8 md:px-14 py-10 text-white">
        
        {/* Top spacer */}
        <div />

        {/* Middle Row: Heading LEFT | Subtext + Button RIGHT */}
        <div className="flex items-center justify-between w-full gap-8">

          {/* LEFT: Big Serif Heading */}
          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
            className="text-[clamp(2rem,7vw,6rem)] font-serif font-normal leading-[1.05] text-white max-w-[55%]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            The Real Estate Fund<br />Expert Approach
          </motion.h1>

          {/* RIGHT: Subtext + Button */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 3.1, ease: "easeOut" }}
            className="flex items-center gap-8 max-w-[45%]"
          >
            {/* Subtext */}
            <p className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-white/80 leading-[2] font-light max-w-[200px]">
              Unlock the true potential of your multi-family real estate investment
            </p>

            {/* Investment Inquiry Button */}
            <button className="flex-shrink-0 border border-white/70 bg-transparent px-5 py-3 text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white font-light transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] whitespace-nowrap">
              Investment Inquiry
            </button>
          </motion.div>
        </div>

        {/* Bottom: Arrows centered */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="flex items-center justify-center gap-6 pb-4"
        >
          <button className="text-white/70 hover:text-white text-xl transition-colors duration-200 px-2">
            &#8249;
          </button>
          <button className="text-white/70 hover:text-white text-xl transition-colors duration-200 px-2">
            &#8250;
          </button>
        </motion.div>

      </div>

      <div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;