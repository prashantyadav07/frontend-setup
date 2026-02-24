import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import newHomeVideo from '../assets/newhome.mp4';

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
      <section className="relative min-h-[85vh] lg:h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:pl-32 px-6 overflow-hidden py-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 text-center lg:text-left mb-12 lg:mb-0"
        >
          <span className="text-xs uppercase tracking-[0.6em] mb-6 block text-[#C5A059]">Architecture & Legacy</span>
          <h1 className="text-[12vw] md:text-[8vw] font-serif leading-[0.9] tracking-tighter">
            WE CRAFT <br />
            <span className="font-light opacity-80">EMOTIONS.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative lg:absolute lg:right-[5%] lg:top-[20%] w-[250px] md:w-[300px] h-[350px] md:h-[400px] rounded-full overflow-hidden border-[10px] md:border-[15px] border-white shadow-2xl z-20"
        >
          <video
            src={newHomeVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </section>

      {/* SECTION 2: THE SPLIT REVEAL */}
      <section className="py-12 md:py-20 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 overflow-hidden rounded-3xl h-[50vh] lg:h-[70vh] relative group">
          <motion.div whileInView={{ scale: [1.2, 1] }} transition={{ duration: 1.5 }} className="w-full h-full">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Story" />
          </motion.div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
        </div>
        <div className="lg:col-span-5 space-y-8">
          <motion.h2 initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="text-4xl md:text-5xl font-serif leading-tight">A Journey From <br /> Bricks to Dreams.</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-500 text-lg leading-relaxed">
            Humara safar Meerut ki galliyon se shuru hua tha, par aaj hum global standards ko redefine kar rahe hain. Har structure ek signature hai, har space ek legacy.
          </motion.p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-sm uppercase tracking-widest font-medium">Read Our Manifesto</motion.button>
        </div>
      </section>

      {/* SECTION 3: THE NUMBERS */}
      <section className="py-12 md:py-16 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:flex md:flex-wrap justify-between gap-8 md:gap-12">
          {[
            { label: "Handcrafted Villas", val: "450+" },
            { label: "Global Awards", val: "28" },
            { label: "Satisfied Families", val: "2k" },
            { label: "Years of Trust", val: "25" }
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
              Featured <br />
              <span className="italic text-[#C5A059]">Portfolio</span>
            </h2>
            <div className="w-20 h-1 bg-[#C5A059] mb-8 mx-auto lg:mx-0"></div>
            <p className="text-gray-500 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
              Explore our most prestigious projects, where every detail is a testament to our commitment to excellence and luxury.
            </p>
            <p className="text-[#C5A059] text-sm uppercase tracking-[0.3em] font-medium">Selected Works & Projects</p>
          </div>

          {/* Video Right */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-2xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-[5px] md:border-[10px] border-white ring-1 ring-black/5">
              <video
                src={newHomeVideo}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PHILOSOPHY */}
      <section className="py-12 md:py-16 px-6 max-w-4xl mx-auto space-y-12 md:space-y-20">
        {[
          { title: "Conscious Living", desc: "Green buildings are not an option, they are a responsibility. We use solar-integrated glass and rainwater harvesting in every unit." },
          { title: "Timeless Aesthetics", desc: "Design jo purana na ho. Hum trends ko nahi, timelessness ko follow karte hain." },
          { title: "Trust & Transparency", desc: "Zero hidden costs. 100% legal clarity. That's the Prashant Yadav promise." }
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
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-4">The Minds Behind The Masterpieces.</h2>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest">Our Leadership & Visionaries</p>
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
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block">Our</span>
                <span className="text-lg font-serif italic">Team</span>
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
          <h2 className="text-[12vw] font-serif leading-none tracking-tighter mb-10">WORK WITH US</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <MagneticButton text="Start a Project" />
            <MagneticButton text="Contact Studio" light />
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
    <img src={img} className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0" alt={name} />
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