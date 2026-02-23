import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import hero1 from "../assets/hero2.jpg";

const stackedSectionsData = [
  {
    id: 1,
    title: "Break House",
    tags: ["Big Bar", "2 Bed", "3 Bath", "1,000-1,500 Sqft", "Hybrid Home"],
    bgImage: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
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

const StackedSection = ({ data, index }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const smallImgY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div
      ref={ref}
      className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center"
      style={{ zIndex: index + 10 }}
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <img
          src={hero1}
          alt={data.title}
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 w-full text-left">
          <h2
            className="text-[clamp(2rem,6vw,6rem)] font-serif font-normal text-white leading-tight mb-4 sm:mb-8"
          >
            {data.title}
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {data.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 bg-[#2A2A2A]/60 backdrop-blur-md text-white/90 text-[11px] sm:text-[13px] md:text-[14px] font-medium tracking-wide whitespace-nowrap shadow-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          style={{ y: smallImgY }}
          className="w-full md:w-[45%] h-[30vh] sm:h-[40vh] md:h-[60vh] flex-shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/10"
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

const StackedImagesSection = () => {
  return (
    <div className="relative w-full">
      {stackedSectionsData.map((section, index) => (
        <StackedSection key={section.id} data={section} index={index} />
      ))}
    </div>
  );
};

export default StackedImagesSection;
