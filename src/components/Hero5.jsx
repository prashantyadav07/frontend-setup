import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import videoSrc from '../assets/newhome.mp4';
import LazyVideo from './LazyVideo';

const Hero5 = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);

    // Smoke effect reveal for text - Removed heavy filter: blur() for performance
    const smokeVariants = {
        hidden: { opacity: 0, scale: 1.05, y: 20 },
        visible: (i = 1) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 1.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <div ref={containerRef} className="relative min-h-[120vh] w-full bg-black flex items-center justify-center overflow-hidden font-sans">

            {/* FULL SCREEN VIDEO BACKGROUND */}
            <div className="absolute inset-0 w-full h-full z-0">
                <LazyVideo
                    ref={videoRef}
                    src={videoSrc}
                    className="w-full h-full object-cover opacity-60"
                    onPlay={(e) => { if (e.target) e.target.playbackRate = 0.8; }}
                />
                {/* Gradient Overlays for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent z-10" />
            </div>

            {/* Premium Background Glows - Replaced heavy CSS blur with radial gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] rounded-full bg-[radial-gradient(circle,rgba(180,154,90,0.12)_0%,transparent_70%)]" />
                <div className="absolute bottom-0 right-0 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
            </div>

            {/* TEXT CONTENT CENTERED */}
            <div className="relative z-20 w-full max-w-[1400px] px-6 text-center flex flex-col items-center justify-center h-full pointer-events-none">
                <motion.div style={{ y: yText }} className="flex flex-col items-center pointer-events-auto">

                    <motion.p
                        custom={1}
                        initial="hidden" animate="visible" variants={smokeVariants}
                        className="text-[#B49A5A] text-[10px] md:text-[14px] tracking-[0.5em] uppercase font-bold mb-6 text-shadow-sm"
                    >
                        Premium Lifestyle
                    </motion.p>

                    <motion.h2
                        custom={2}
                        initial="hidden" animate="visible" variants={smokeVariants}
                        className="text-white leading-[1.1] mb-8 font-serif font-black tracking-tight"
                        style={{ fontSize: 'clamp(40px, 7vw, 110px)' }}
                    >
                        <span>EXPERIENCE LIFE</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 font-light">
                            AT DEFENCE GARDEN
                        </span>
                    </motion.h2>

                    <motion.div
                        custom={3}
                        initial={{ width: 0, opacity: 0 }} whileInView={{ width: "120px", opacity: 1 }} transition={{ delay: 0.8, duration: 1.5 }} viewport={{ once: false }}
                        className="h-[2px] bg-[#B49A5A] mb-10"
                    />

                    <motion.p
                        custom={4}
                        initial="hidden" animate="visible" variants={smokeVariants}
                        className="text-gray-300 text-[16px] md:text-[22px] leading-[1.8] font-light max-w-3xl mx-auto mb-12"
                    >
                        A thoughtfully planned township where modern infrastructure meets natural beauty. Designed to offer peaceful living, open spaces, and a lifestyle that feels truly exceptional.
                    </motion.p>

                    <motion.div
                        custom={5}
                        initial="hidden" animate="visible" variants={smokeVariants}
                    >
                        <Link
                            to="/investment"
                            className="group relative inline-flex items-center justify-center gap-3 py-4 px-10 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[11px] md:text-[13px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-[#B49A5A] rounded-full shadow-lg hover:shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#B49A5A] to-[#E5D3B3] translate-y-[100%] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Explore the Lifestyle</span>
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform transition-transform duration-300 group-hover:translate-x-1">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero5;