import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import videoSrc from '../assets/newhome.mp4';

const Hero5 = () => {
    const videoRef = useRef(null);

    // Video speed slow karne ke liye
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.7;
        }
    }, []);

    return (
        <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden font-sans py-12 px-4">

            {/* Background Blurry Blobs - More Blur added */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-zinc-900/10 rounded-full blur-[150px]" />
            </div>

            {/* Title Section */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-10 relative z-10 w-full"
            >
                <span className="text-[#B49A5A] text-[10px] md:text-[11px] tracking-[0.5em] uppercase font-bold mb-3 block">
                    Premium Experience
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight leading-tight max-w-3xl mx-auto uppercase">
                    MODERN SUSTAINABLE LIVING
                </h2>
                <div className="w-16 h-[1.5px] bg-[#B49A5A] mx-auto mt-4" />
            </motion.div>

            {/* Video Container - Compact and Professional */}
            <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full max-w-4xl z-10 px-2"
            >
                <div className="w-full h-[300px] md:h-[480px] rounded-[2rem] overflow-hidden shadow-2xl border border-black/5 bg-zinc-950">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>

                {/* Floating Box with Blur effect */}
                <div className="hidden md:flex absolute -bottom-6 -right-6 w-32 h-32 bg-white/80 backdrop-blur-md border border-zinc-100 shadow-xl rounded-2xl p-4 flex-col justify-center">
                    <div className="text-[#B49A5A] text-xl font-bold mb-1">05</div>
                    <div className="text-zinc-500 text-[9px] uppercase tracking-widest leading-tight font-bold">Living<br />Standard</div>
                </div>
            </motion.div>

            {/* Bottom Content */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 text-center z-10 px-4 max-w-xl"
            >
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8">
                    Redefining luxury through architectural innovation and eco-conscious design.
                    Crafted to harmonize with the environment.
                </p>

                <div className="flex justify-center">
                    <button className="px-10 py-3.5 bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-[#C9B171] w-full sm:w-auto">
                        Discover Details
                    </button>
                </div>
            </motion.div>

        </div>
    );
};

export default Hero5;