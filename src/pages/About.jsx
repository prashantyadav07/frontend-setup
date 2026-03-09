import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import newHomeVideo from '../assets/newhome.mp4';
import r0Image from '../assets/r0.png';
import LazyVideo from '../components/LazyVideo';
import r1 from '../assets/r1.png';

const colors = {
  bg: "#FAF9F6",
  text: "#1A1A1A",
  accent: "#C5A059",
  card: "#FFFFFF"
};

const HighEndAboutUs = () => {
  // No scroll-driven logic

  return (
    <div className="bg-[#FAF9F6] text-[#1A1A1A] overflow-x-hidden">

      {/* SECTION 1: THE CINEMATIC HERO */}
      <section className="relative min-h-[85vh] lg:h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden bg-[#FAF9F6] pt-24 lg:pt-32">
        {/* Content Left */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start px-6 lg:pl-32 py-20 lg:py-0 z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs uppercase tracking-[0.6em] mb-6 block text-[#C5A059]">THE RIVER GREEN</span>
            <h1 className="text-[12vw] md:text-[8vw] font-serif leading-[0.9] tracking-tighter">
              Luxury Plot Living.<br />
              <span className="font-light opacity-80"></span>
            </h1>
          </motion.div>
        </div>

        {/* Video Right (Refined & Balanced) */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full lg:h-full flex items-center justify-center p-6 lg:p-12 xl:p-20"
        >
          <div className="relative w-full h-[50vh] lg:h-[70vh] max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src={r0Image}
              alt="Architecture Concept"
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: THE SPLIT REVEAL */}
      <section className="py-12 md:py-20 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 overflow-hidden rounded-3xl h-[50vh] lg:h-[70vh] relative group">
          <motion.div whileInView={{ scale: [1.2, 1] }} transition={{ duration: 1.5 }} className="w-full h-full">
            <img src={r1} className="w-full h-full object-cover transition-all duration-1000" alt="Story" />
          </motion.div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
        </div>
        <div className="lg:col-span-5 space-y-8">
          <motion.h2 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="text-4xl md:text-5xl font-serif leading-tight">A Journey From <br /> Vision to Community.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-500 text-lg leading-relaxed">
            Our journey began in the heart of Meerut, driven by a vision to create thoughtfully planned townships. Today, The River Green stands as a symbol of trust, modern development, and spaces where families can build their dreams.
          </motion.p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-sm uppercase tracking-widest font-medium">Read Our Story</motion.button>
        </div>
      </section>

      {/* SECTION 3: THE NUMBERS */}
      <section className="py-12 md:py-16 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:flex md:flex-wrap justify-between gap-8 md:gap-12">
          {[
            { label: "Residential Plots ", val: "500+" },
            { label: "Township Developments", val: "10+" },
            { label: "Happy Families", val: "700+" },
            { label: "Years of Trust", val: "3+" }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
              <h3 className="text-4xl md:text-6xl font-serif mb-2 text-[#C5A059]">{item.val}</h3>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CINEMATIC PORTFOLIO VIDEO */}
      <section className="py-12 md:py-20 px-6 bg-[#FAF9F6] relative z-0 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          {/* Content Left */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-7xl font-serif uppercase tracking-tighter mb-6 leading-tight">
              OUR<br />
              <span className="italic text-[#C5A059]">DEVELOPMENTS </span>
            </h2>
            <div className="w-20 h-1 bg-[#C5A059] mb-8 mx-auto lg:mx-0"></div>
            <p className="text-gray-500 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
              Each project reflects our commitment to quality, smart planning, and creating communities designed for modern living.
            </p>
            <p className="text-[#C5A059] text-sm uppercase tracking-[0.3em] font-medium">Explore Projects</p>
          </div>

          {/* Video Right */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-[5px] md:border-[10px] border-white ring-1 ring-black/5">
              <LazyVideo
                src={newHomeVideo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PHILOSOPHY */}
      <section className="py-12 md:py-16 px-6 max-w-4xl mx-auto space-y-12 md:space-y-20">
        {[
          { title: "Sustainable Living", desc: "We believe modern living should respect nature. Our townships are designed with green spaces, eco-friendly planning, and infrastructure that supports a healthier environment." },
          { title: "Timeless Planning", desc: "Great communities never go out of style. Our developments are thoughtfully planned to offer lasting value, functional design, and a lifestyle that stands the test of time." },
          { title: "Trust & Transparency", desc: "At The River Green, every project is built on honesty, legal clarity, and complete transparency — ensuring confidence and peace of mind for every buyer." }
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} className="border-l-2 border-[#C5A059] pl-6 md:pl-10">
            <span className="text-[#C5A059] font-mono text-sm mb-4 block">0{i + 1} / 03</span>
            <h3 className="text-3xl md:text-5xl font-serif mb-6">{item.title}</h3>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* SECTION 6: THE EDITORIAL TEAM COLLAGE */}
      <section className="py-12 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4">The Vision Behind The River Green</h2>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest">Meet the team dedicated to building thoughtfully planned communities and delivering exceptional living experiences.</p>
          </div>

          {/* Desktop/Tablet Collage Layout */}
          <div className="hidden md:flex relative w-full h-[600px] items-center justify-center mt-12">
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M400 300 L150 150" stroke="#C5A059" strokeWidth="1" strokeDasharray="5,5" opacity="0.2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path
                d="M400 300 L650 180" stroke="#C5A059" strokeWidth="1" strokeDasharray="5,5" opacity="0.2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }}
              />
              <motion.path
                d="M400 300 L250 450" stroke="#C5A059" strokeWidth="1" strokeDasharray="5,5" opacity="0.2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }}
              />
              <motion.path
                d="M400 300 L650 480" stroke="#C5A059" strokeWidth="1" strokeDasharray="5,5" opacity="0.2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }}
              />
            </svg>

            <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} className="absolute z-30 w-28 h-28 rounded-full border border-[#C5A059]/30 bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl">
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block">OUR </span>
                <span className="text-lg font-serif italic">EXPERTS</span>
              </div>
            </motion.div>

            <div className="absolute top-0 left-10 z-20"><TeamCollageItem img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" name="Prashant Yadav" role="Founder" width="w-52" height="h-64" /></div>
            <div className="absolute top-10 right-10 z-10"><TeamCollageItem img="https://images.unsplash.com/photo-1494790108377-be9c29b29330" name="Sarah Jenkins" role="Lead Designer" width="w-44" height="h-56" /></div>
            <div className="absolute bottom-0 left-24 z-10"><TeamCollageItem img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" name="David Chen" role="Engineering" width="w-40" height="h-48" /></div>
            <div className="absolute bottom-12 right-20 z-0"><TeamCollageItem img="https://images.unsplash.com/photo-1517841905240-472988babdf9" name="Jimmy" role="Happiness Officer" width="w-32" height="h-40" /></div>
          </div>

          {/* Mobile Collage Layout (Vertical Grid/Stack) */}
          <div className="md:hidden grid grid-cols-2 gap-4 w-full px-4">
            <TeamCollageItem img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" name="Prashant Yadav" role="Founder" width="w-full" height="h-48" />
            <TeamCollageItem img="https://images.unsplash.com/photo-1494790108377-be9c29b29330" name="Sarah Jenkins" role="Lead Designer" width="w-full" height="h-40" />
            <TeamCollageItem img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" name="David Chen" role="Engineering" width="w-full" height="h-32" />
            <TeamCollageItem img="https://images.unsplash.com/photo-1517841905240-472988babdf9" name="Jimmy" role="Happiness Officer" width="w-full" height="h-32" />
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION (FOOTER) */}
      <footer className="min-h-[50vh] md:h-screen bg-[#F5F5F7] flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">
        <motion.div whileInView={{ scale: [0.8, 1], opacity: [0, 1] }} transition={{ duration: 1 }}>
          <h2 className="text-[12vw] font-serif leading-none tracking-tighter mb-10">Find Your Perfect Plot</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <MagneticButton text="Book a Site Visit" />
            <MagneticButton text="Contact Our Team" light />
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

// --- Sub-Components ---
const TeamCollageItem = ({ img, name, role, width, height }) => (
  <motion.div
    whileHover={{ y: -15, scale: 1.05 }}
    className={`${width} ${height} relative overflow-hidden rounded-xl shadow-xl group bg-gray-100 flex-shrink-0`}
  >
    <img src={img} className="w-full h-full object-cover transition-all duration-700" alt={name} />
    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <p className="text-sm font-serif">{name}</p>
      <p className="text-[10px] uppercase tracking-tighter text-[#C5A059]">{role}</p>
    </div>
  </motion.div>
);

const MagneticButton = ({ text, light = false }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };
  const reset = () => setPosition({ x: 0, y: 0 });
  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`px-12 py-5 rounded-full text-xs uppercase tracking-[0.3em] font-bold transition-colors ${light ? "border border-black text-black hover:bg-black hover:text-white" : "bg-black text-white hover:bg-[#C5A059]"}`}
    >
      {text}
    </motion.button>
  );
};

export default HighEndAboutUs;