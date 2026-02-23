import React from 'react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const UpdatedHeroSection = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-white py-8 sm:py-12 px-4 sm:px-6 md:px-16 overflow-hidden">
            <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">

                {/* Left Side: Content (Animated) */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }} // Start position (left side se bahar)
                    whileInView={{ opacity: 1, x: 0 }} // End position (apni jagah par)
                    viewport={{ once: true }} // Sirf ek baar animate hoga
                    transition={{ duration: 0.8, ease: "easeOut" }} // Smoothness
                    className="flex flex-col"
                >
                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-5 sm:mb-8">
                        Effortless Capital, <br /> Limitless Opportunities.
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-xl mb-8 sm:mb-12">
                        At Foundation, we're focused on fusing expert knowledge and insight with cutting-edge
                        technology, elevating investment property financing to the next level.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
                        <div className="py-5 border-b border-gray-200 flex items-center gap-4">
                            <span className="text-gray-400 font-bold text-sm">01</span>
                            <span className="text-gray-950 font-extrabold text-[13px] sm:text-[15px] uppercase tracking-wide">On-Demand Capital, Anytime</span>
                        </div>
                        <div className="py-5 border-b border-gray-200 flex items-center gap-4 md:pl-6">
                            <span className="text-gray-400 font-bold text-sm">03</span>
                            <span className="text-gray-950 font-extrabold text-[13px] sm:text-[15px] uppercase tracking-wide">Funding Solutions, Coast to Coast</span>
                        </div>
                        <div className="py-5 border-b border-gray-200 flex items-center gap-4">
                            <span className="text-gray-400 font-bold text-sm">02</span>
                            <span className="text-gray-950 font-extrabold text-[13px] sm:text-[15px] uppercase tracking-wide">Tailored Financing for Every Deal</span>
                        </div>
                        <div className="py-5 border-b border-gray-200 flex items-center gap-4 md:pl-6">
                            <span className="text-gray-400 font-bold text-sm">04</span>
                            <span className="text-gray-950 font-extrabold text-[13px] sm:text-[15px] uppercase tracking-wide">Designed for Long-Term Growth</span>
                        </div>
                    </div>

                    <div className="mt-10">
                        {/* Button placeholder */}
                    </div>
                </motion.div>

                {/* Right Side: Image (Animated from Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }} // Start from right
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Chhota sa delay professional lagta hai
                    className="relative w-full h-full flex items-center justify-center lg:justify-end"
                >
                    <div className="w-full max-w-[650px]">
                        <img
                            src="/src/assets/hut.png"
                            alt="Foundation Property"
                            className="w-full h-auto object-contain scale-105"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default UpdatedHeroSection;