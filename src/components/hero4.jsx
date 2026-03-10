import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import r21 from '../assets/r21.png';

const PROJECT_IMG = r21;

function ArrowDiag({ moving }) {
    return (
        <motion.svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            animate={{ x: moving ? 4 : 0, y: moving ? -4 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="inline-block"
        >
            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
        </motion.svg>
    );
}

// Animation variants for the text content
const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    })
};

export default function ProjectsSection() {
    const [btnHover, setBtnHover] = useState(false);
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black py-20 px-4 sm:px-8">
            {/* Dark Premium Background with Soft Radial Glow */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/95 z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[#B49A5A]/10 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[100px] pointer-events-none" />
            </div>

            <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">

                {/* ── LEFT: PREMIUM GLASSMORPHIC CARD ── */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="w-full md:w-1/2 flex justify-center md:justify-start"
                >
                    <div className="relative w-full max-w-[420px] group">
                        {/* Decorative Gold Elements */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-[#B49A5A]/40 transition-all duration-500 group-hover:-top-6 group-hover:-left-6" />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-[#B49A5A]/40 transition-all duration-500 group-hover:-bottom-6 group-hover:-right-6" />

                        <div className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-sm p-4 sm:p-5">
                            <div className="relative overflow-hidden rounded-xl bg-black h-[280px] sm:h-[340px] w-full">
                                <motion.img
                                    style={{ y: yImg, scale: scaleImg }}
                                    src={PROJECT_IMG}
                                    alt="Defence Garden Township"
                                    className="w-full h-[140%] object-cover origin-center opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] md:text-[11px] tracking-[0.2em] text-[#B49A5A] uppercase mb-1 font-semibold">Featured</p>
                                        <h3 className="text-white tracking-widest uppercase font-bold text-[14px] sm:text-[16px]">
                                            DEFENCE GARDEN
                                        </h3>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                                        <span className="text-xs">&rarr;</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 pb-2 px-2">
                                <p className="text-gray-400 text-[12px] sm:text-[13px] leading-relaxed">
                                    Premium residential plots crafted for modern living, nestled in the heart of nature.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT: LUXURY TYPOGRAPHY & CONTENT ── */}
                <div className="w-full md:w-1/2 flex flex-col justify-center max-w-[500px] text-center md:text-left">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        exit="hidden"
                        viewport={{ once: false, amount: 0.3 }}
                        className="mb-8"
                    >
                        <motion.h2
                            custom={1}
                            variants={fadeUpVariants}
                            className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-[#B49A5A] font-medium mb-4"
                        >
                            Our Portfolio
                        </motion.h2>

                        <motion.h1
                            custom={2}
                            variants={fadeUpVariants}
                            className="text-white leading-[1.1] mb-6 font-serif font-black"
                            style={{ fontSize: 'clamp(40px, 6vw, 85px)' }}
                        >
                            OUR
                            <br className="hidden md:block" />
                            <span className="block mt-[-5px]">PROJECTS</span>
                        </motion.h1>

                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            className="w-12 h-[2px] bg-[#B49A5A]/50 mb-6 mx-auto md:mx-0"
                        />

                        <motion.p
                            custom={4}
                            variants={fadeUpVariants}
                            className="text-gray-400 text-[14px] sm:text-[16px] leading-[1.8] md:leading-[2] font-light mb-10"
                        >
                            Explore our ongoing and completed township developments where thoughtful planning, modern infrastructure, and natural surroundings come together to create exceptional living spaces.
                        </motion.p>

                        <motion.div custom={5} variants={fadeUpVariants}>
                            <Link
                                to="/ourproject"
                                onMouseEnter={() => setBtnHover(true)}
                                onMouseLeave={() => setBtnHover(false)}
                                className="group relative inline-flex items-center gap-3 py-4 px-8 border border-white/20 bg-transparent text-white font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-[#B49A5A]"
                            >
                                <div className="absolute inset-0 bg-[#B49A5A] translate-y-[100%] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">View All Projects</span>
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                                    <ArrowDiag moving={btnHover} />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}