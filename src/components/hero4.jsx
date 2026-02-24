import { useState } from 'react'
import { motion } from 'framer-motion'

const BG_URL = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85'
const PROJECT_IMG = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'

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
    )
}

// Animation variants for the right-side text
const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Ek ke baad ek aayenge (Heading -> P -> Button)
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, x: 50 }, // Start from 50px right
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Smooth "out-expo" curve
    }
}

export default function ProjectsSection() {
    const [btnHover, setBtnHover] = useState(false)

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-12">
            {/* Background */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BG_URL})`, filter: 'brightness(0.35)' }} />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 gap-8 md:gap-16">

                {/* ── LEFT: COMPACT CARD (STAYS ON LEFT) ── */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex-shrink-0"
                >
                    <div
                        className="rounded-sm overflow-hidden w-full max-w-[320px]"
                        style={{
                            background: '#262626',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                            padding: '16px',
                        }}
                    >
                        <motion.div
                            className="relative overflow-hidden bg-black h-[220px] cursor-pointer"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <motion.div
                                className="w-full h-full overflow-hidden"
                                variants={{
                                    rest: { padding: '0px' },
                                    hover: { padding: '10px' }
                                }}
                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            >
                                <motion.img
                                    src={PROJECT_IMG}
                                    alt="Project"
                                    className="w-full h-full object-cover"
                                    variants={{
                                        rest: { scale: 1 },
                                        hover: { scale: 1.1 }
                                    }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        </motion.div>

                        <div className="pt-5 pb-1">
                            <h3 className="text-white mb-2 tracking-wide uppercase font-bold text-[14px] sm:text-[18px]">
                                THE MOMENTUM DISTRICT
                            </h3>
                            <div className="space-y-0.5 mb-5 text-gray-400 text-[12px] sm:text-[14px]">
                                <p>422 units</p>
                                <p>3 min to Layan Beach</p>
                            </div>
                            <span className="text-[#C4A66B] text-3xl font-light cursor-pointer hover:text-white transition-colors">+</span>
                        </div>
                    </div>
                </motion.div>

                {/* ── RIGHT: TEXT (SMOOTH RIGHT-TO-LEFT ENTRANCE) ── */}
                <motion.div
                    className="max-w-[450px]"
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible" // Jab screen pe dikhega tab start hoga
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-white leading-[0.9] mb-6 font-bold"
                        style={{ fontSize: 'clamp(50px, 7vw, 100px)' }}>
                        OUR<br />PROJECTS
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mb-8 text-gray-300 text-[16px] leading-relaxed"
                    >
                        Explore our ongoing and completed projects to see how we bring
                        ideas to life — shaping the future of real estate in Phuket.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <button
                            onMouseEnter={() => setBtnHover(true)}
                            onMouseLeave={() => setBtnHover(false)}
                            className="flex items-center gap-3 py-3 px-6 sm:px-8 rounded-full bg-[#C4A66B] text-black font-bold text-[10px] sm:text-[11px] tracking-widest uppercase hover:bg-white transition-all"
                        >
                            GO TO ALL PROJECTS
                            <ArrowDiag moving={btnHover} />
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    )
}