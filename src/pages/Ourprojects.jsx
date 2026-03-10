import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import r4 from "../assets/r4.png"
import r2 from "../assets/r2.png"
import r5 from "../assets/r5.png"
import r25 from "../assets/r25.png"
import projectVideo from '../../src/assets/main.mp4';
import HLSVideoPlayer from '../components/HLSVideoPlayer';

// Export projects so ProjectDetails can access them natively
export const projects = [
    { id: 1, title: 'Villa Serenità', location: 'Lake Como, Italy', price: '€8.9M', image: r2, status: 'Ongoing', desc: 'A masterpiece of modern architecture.' },
    { id: 2, title: 'Skyline Residence', location: 'New York, NY', price: '$18.2M', image: r5, status: 'Completed', desc: 'Luxury living in the heart of the city.' },
    { id: 3, title: 'Azure Heights', location: 'Miami, FL', price: '$9.8M', image: r25, status: 'Ongoing', desc: 'Breathtaking ocean views and premium amenities.' },
    { id: 4, title: 'Defence Garden', location: 'Shamli, UP', price: 'Premium', image: r4, status: 'Ongoing', desc: 'Thoughtfully planned township.' }
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] } })
};

const Ourprojects = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={containerRef} className="bg-black text-white font-sans overflow-x-hidden selection:bg-[#B49A5A] selection:text-black">
            {/* Background Glows */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(180,154,90,0.1)_0%,transparent_70%)]" />
                <div className="absolute top-1/2 right-1/4 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
            </div>

            {/* ── DARK SECTION: Full Screen Cinematic Hero ── */}
            <div className="relative z-10 w-full bg-black min-h-[90vh] flex items-center sm:min-h-screen">

                {/* Background Video vanishing to the left */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 lg:left-1/4 lg:w-3/4 h-full">
                        <HLSVideoPlayer
                            mp4Src={projectVideo}
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-80"
                        />
                        {/* Gradient overlays to fade the video into the black background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent lg:via-max-w-md pointer-events-none" />
                        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent hidden lg:block pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />
                    </div>
                </div>

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-32 pb-20">
                    <div className="w-full lg:w-3/5">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "80px", opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                            className="h-[2px] bg-[#B49A5A] mb-8 shadow-[0_0_15px_rgba(180,154,90,0.5)]"
                        />

                        <motion.p
                            custom={1} initial="hidden" animate="visible" variants={fadeUp}
                            className="text-[#B49A5A] text-[10px] md:text-[13px] tracking-[0.4em] uppercase font-bold mb-6"
                        >
                            Curated Portfolio
                        </motion.p>

                        <motion.h1
                            custom={2} initial="hidden" animate="visible" variants={fadeUp}
                            className="text-[clamp(45px,6vw,95px)] font-serif font-black leading-[1.0] mb-8 tracking-tighter"
                        >
                            <span className="drop-shadow-lg text-white">MASTERPIECES</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 font-light italic">OF ARCHITECTURE</span>
                        </motion.h1>

                        <motion.p
                            custom={3} initial="hidden" animate="visible" variants={fadeUp}
                            className="text-gray-300 text-[16px] sm:text-[18px] lg:text-[20px] font-light max-w-xl leading-[1.8] drop-shadow-md"
                        >
                            Explore our collection of meticulously designed ongoing and completed township developments where thoughtful planning meets modern infrastructure.
                        </motion.p>

                        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="mt-12 flex items-center gap-6">
                            <button onClick={() => {
                                const portfolioSection = document.getElementById('portfolio-grid');
                                portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                            }} className="group relative inline-flex items-center gap-3 py-4 sm:py-5 px-8 sm:px-10 bg-white/10 backdrop-blur-md text-white font-bold text-[10px] sm:text-[12px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-[#B49A5A] rounded-full border border-white/20">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#B49A5A] to-[#E5D3B3] translate-y-[100%] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">View Projects</span>
                                <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform transition-transform duration-300 group-hover:translate-y-1">
                                        <path d="M12 5v14M5 12l7 7 7-7" />
                                    </svg>
                                </span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── LIGHT SECTION: Portfolio Grid with Animated Gradient Background ── */}
            <div id="portfolio-grid" className="relative z-10 w-full pb-32 overflow-hidden bg-[#F9F8F6] text-[#111]">

                {/* Rich Light Animated Background Gradient */}
                <motion.div
                    animate={{
                        background: [
                            "radial-gradient(circle at 10% 20%, rgba(180,154,90,0.15) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(225,200,165,0.4) 0%, transparent 60%)",
                            "radial-gradient(circle at 90% 20%, rgba(180,154,90,0.15) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(225,200,165,0.4) 0%, transparent 60%)",
                            "radial-gradient(circle at 90% 80%, rgba(180,154,90,0.15) 0%, transparent 60%), radial-gradient(circle at 10% 20%, rgba(225,200,165,0.4) 0%, transparent 60%)",
                            "radial-gradient(circle at 10% 80%, rgba(180,154,90,0.15) 0%, transparent 60%), radial-gradient(circle at 90% 20%, rgba(225,200,165,0.4) 0%, transparent 60%)",
                            "radial-gradient(circle at 10% 20%, rgba(180,154,90,0.15) 0%, transparent 60%), radial-gradient(circle at 90% 80%, rgba(225,200,165,0.4) 0%, transparent 60%)"
                        ]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 pointer-events-none z-0"
                />

                <section className="pt-32 px-6 max-w-[1400px] mx-auto z-10 relative">
                    <div className="text-center mb-20">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-serif font-bold mb-4 tracking-tight"
                        >
                            Our Portfolio
                        </motion.h3>
                        <motion.div
                            initial={{ width: 0 }} whileInView={{ width: "48px" }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                            className="h-[2px] bg-[#B49A5A] mx-auto mb-6"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((proj, idx) => (
                            <Link to={`/project/${proj.id}`} key={proj.id} className="block">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: idx * 0.1, duration: 0.8 }}
                                    className="group bg-white/70 backdrop-blur-md rounded-[2rem] overflow-hidden border border-black/5 hover:border-[#B49A5A]/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(180,154,90,0.1)] relative"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 opacity-90 group-hover:opacity-100 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-[#111] text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">{proj.status}</div>
                                    </div>
                                    <div className="p-8 pb-10">
                                        <h4 className="text-2xl font-serif font-bold mb-2 text-[#111]">{proj.title}</h4>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm font-light mb-6"><MapPin size={14} className="text-[#B49A5A]" />{proj.location}</div>
                                        <div className="flex justify-between items-center border-t border-black/5 pt-6">
                                            <span className="text-[#B49A5A] font-bold text-lg">{proj.price}</span>
                                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-[#B49A5A] transition-colors">
                                                <span>Details</span>
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>

            {/* ── DARK SECTION: CTA ── */}
            <section className="py-32 bg-black border-t border-white/5 text-center relative z-20 px-6">
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Start Your Journey</h3>
                <motion.button onClick={() => navigate('/contact')} whileHover={{ scale: 1.05 }} className="bg-transparent border-2 border-[#B49A5A] text-white hover:bg-[#B49A5A] hover:text-black px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] transition-all">Contact Us</motion.button>
            </section>
        </div>
    );
};

export default Ourprojects;