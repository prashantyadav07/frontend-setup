import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TestimonialSection = () => {
  const containerRef = useRef(null);

  // Smooth Parallax Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax so it looks premium, not overwhelming
  const imageY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section
      ref={containerRef}
      className="w-full py-12 sm:py-24 bg-[#F8F7F2] flex justify-center items-center px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-[1150px] w-full">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-[#1B3019] text-2xl sm:text-3xl md:text-[42px] font-serif mb-8 sm:mb-12 tracking-tight"
        >
          But, don't take it from us...
        </motion.h2>

        <div className="relative w-full flex flex-col md:block">

          {/* Main White Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white border border-[#EBEAD8] rounded-[16px] sm:rounded-[24px] p-5 sm:p-8 md:p-14 w-full md:w-[82%] z-10 shadow-sm relative md:pr-[35%]"
          >
            {/* Quote Icon */}
            <div
              className="text-[#597836] text-[50px] sm:text-[80px] md:text-[100px] leading-[0.6] mb-3 sm:mb-4 md:mb-6"
            >
              “
            </div>

            {/* Review Content */}
            <p
              className="text-[#1B3019] text-[16px] sm:text-[20px] md:text-[22px] leading-[1.5] sm:leading-[1.6] mb-8 sm:mb-12 max-w-[600px]"
            >
              Our philosophy is to provide people with beautiful homes in wonderful places.
              We focus on both quality and tranquility so your dream can become a reality.
            </p>

            {/* Author Details */}
            <div className="flex flex-col gap-0.5">
              <h4 className="text-[#333333] font-semibold text-[15px] font-sans">
                Steven D.
              </h4>
              <p className="text-[#7A7A7A] text-[14px] font-sans">
                Athens, NY
              </p>
            </div>
          </motion.div>

          {/* Overlapping Image Container */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[90%] md:w-[42%] h-[200px] sm:h-[260px] md:h-[380px] self-end md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20 -mt-10 sm:-mt-16 md:mt-0 mr-4 md:mr-0"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-[#5C4A3D]/90 backdrop-blur-sm text-[#F9F8F3] px-3.5 py-1.5 rounded-md text-[11px] font-medium tracking-wide z-30 font-sans shadow-sm">
              Secondary Home
            </div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1000&auto=format&fit=crop"
              alt="HUTS Property in Autumn"
              className="w-full h-full object-cover rounded-[16px] shadow-lg"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;