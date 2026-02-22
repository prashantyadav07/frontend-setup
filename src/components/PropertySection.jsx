import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Bath, Bed, Square, ArrowRight, Compass } from 'lucide-react';

const properties = [
    {
        id: 1,
        title: "The Glass Pavilion",
        location: "Beverly Hills, CA",
        price: "$12,500,000",
        beds: 5,
        baths: 6,
        sqft: "8,500",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 2,
        title: "Modern Oasis",
        location: "Malibu, CA",
        price: "$8,900,000",
        beds: 4,
        baths: 4,
        sqft: "6,200",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 3,
        title: "Urban Sanctuary",
        location: "San Francisco, CA",
        price: "$5,750,000",
        beds: 3,
        baths: 3,
        sqft: "4,100",
        image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
];

const PropertyCard = ({ prop, idx }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="group cursor-pointer flex flex-col"
        >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
                <motion.img
                    style={{ y: imageY, scale: 1.15 }}
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125 origin-center"
                />
                
                {/* Subtle dark gradient just at the top for price tag contrast, and at bottom for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Clean Inner Border */}
                <div className="absolute inset-4 border border-white/0 group-hover:border-white/50 transition-colors duration-500 rounded-sm z-10 pointer-events-none" />
                
                {/* Premium White Price Tag Overlay */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-md border border-gray-100 text-[#1A1A1A] text-[13px] font-bold tracking-wider overflow-hidden group/price z-20 shadow-lg">
                    <motion.div
                        className="absolute inset-0 bg-[#F4F4F5] transform -translate-x-full group-hover/price:translate-x-0 transition-transform duration-500"
                    />
                    <span className="relative z-10">{prop.price}</span>
                </div>
            </div>

            <div className="space-y-4 px-2">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-[#1A1A1A] text-3xl font-serif mb-2 group-hover:text-[#A88941] transition-colors duration-300">
                            {prop.title}
                        </h3>
                        <p className="text-gray-500 text-[13px] flex items-center gap-2 tracking-wide font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#A88941]" />
                            {prop.location}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-6 py-5 border-y border-gray-200">
                    <span className="flex items-center gap-2 text-gray-600 text-[12px] uppercase tracking-widest font-semibold">
                        <Bed className="w-4 h-4 text-[#A88941]" /> {prop.beds}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-[12px] uppercase tracking-widest font-semibold">
                        <Bath className="w-4 h-4 text-[#A88941]" /> {prop.baths}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-[12px] uppercase tracking-widest font-semibold">
                        <Square className="w-4 h-4 text-[#A88941]" /> {prop.sqft} SQFT
                    </span>
                </div>

                <div className="flex items-center gap-2 text-[#A88941] text-[11px] font-bold uppercase tracking-[0.25em] group/btn pt-2">
                    View Complete Details
                    <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 text-[#1A1A1A]" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const PropertySection = () => {
    return (
        <div className="relative bg-[#FAFAFA] py-32 overflow-hidden selection:bg-[#A88941] selection:text-white">
            
            {/* Extremely Subtle Blueprint Grid Background (Light Mode) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern-light" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#000000" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern-light)" />
                </svg>
            </div>

            <div className="relative max-w-[1400px] mx-auto px-8 md:px-14 z-10">
                
                {/* 1. PROFESSIONAL TRANSITION & HEADER (Light Mode) */}
                <div className="flex flex-col items-center justify-center mb-28">
                    
                    {/* Dotted Line */}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        whileInView={{ height: 160, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="w-[1px] border-l border-dashed border-gray-300 relative flex justify-center"
                    >
                        {/* Looping Light Tail */}
                        <motion.div 
                            animate={{ 
                                top: ["-10%", "100%"], 
                                opacity: [0, 1, 1, 0] 
                            }}
                            transition={{ 
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatDelay: 1 
                            }}
                            className="absolute -left-[1.5px] w-[2px] h-14 bg-gradient-to-b from-transparent via-[#A88941] to-[#A88941] shadow-[0_0_8px_rgba(168,137,65,0.6)] rounded-full"
                        />
                    </motion.div>
                    
                    {/* Minimal Compass Icon */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8, type: "spring" }}
                        viewport={{ once: true }}
                        className="mt-1 flex items-center justify-center w-14 h-14 border border-gray-200 rounded-full bg-white shadow-sm relative z-10"
                    >
                        {/* Inner Circle */}
                        <div className="flex items-center justify-center w-9 h-9 border border-gray-100 rounded-full bg-[#FAFAFA]">
                            <Compass className="w-4 h-4 text-[#A88941]" strokeWidth={1.5} />
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        viewport={{ once: true }}
                        className="text-[#A88941] text-[12px] tracking-[0.5em] uppercase font-bold mt-8 text-center"
                    >
                        Curated Portfolio
                    </motion.h2>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        viewport={{ once: true }}
                        className="text-[#1A1A1A] text-4xl md:text-5xl lg:text-6xl font-serif mt-6 text-center max-w-2xl leading-tight"
                    >
                        Discover Architectural Masterpieces
                    </motion.h1>
                </div>

                {/* 2. PROPERTY CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    {properties.map((prop, idx) => (
                        <PropertyCard key={prop.id} prop={prop} idx={idx} />
                    ))}
                </div>

                {/* 3. PREMIUM DARK BUTTON ON WHITE THEME */}
                <div className="mt-32 flex justify-center">
                    <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover="hover"
                        className="relative px-12 py-6 border border-[#1A1A1A] text-[#1A1A1A] text-[12px] font-bold tracking-[0.3em] uppercase overflow-hidden group bg-transparent"
                    >
                        <motion.span 
                            className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white"
                        >
                            Explore All Properties
                            <ArrowRight className="w-4 h-4" />
                        </motion.span>
                        <motion.div 
                            variants={{ hover: { top: "0%" } }}
                            initial={{ top: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute left-0 right-0 bottom-0 bg-[#1A1A1A] h-full z-0"
                        />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default PropertySection;