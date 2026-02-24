import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import newhomeVideo from '../assets/newhome.mp4';
import leftTree from '../assets/lefttree.png';
import rightTree from '../assets/righttree.png';

const properties = [
    {
        id: 1,
        title: "The Glass Pavilion",
        location: "Beverly Hills, CA",
        category: "Private Estate",
        description: "A seamless fusion of indoor and outdoor living, wrapped in floor-to-ceiling glass.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 2,
        title: "Modern Oasis",
        location: "Malibu, CA",
        category: "Coastal Retreat",
        description: "Where Pacific breezes meet architectural excellence — a sanctuary sculpted by the ocean.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 3,
        title: "The Stone Manor",
        location: "Bel Air, CA",
        category: "Heritage Residence",
        description: "Timeless European stone craftsmanship set within manicured grounds.",
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 4,
        title: "Skyline Penthouse",
        location: "West Hollywood, CA",
        category: "Urban Pinnacle",
        description: "A sky-high canvas of concrete and light, designed for those who prefer their horizon unobstructed.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 5,
        title: "The Redwood Villa",
        location: "Santa Barbara, CA",
        category: "Nature Sanctuary",
        description: "Nestled among ancient redwoods, this villa offers a meditative retreat.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
];

const PropertyCard = ({ prop, idx }) => {
    return (
        <div
            className="group relative bg-white flex-shrink-0 w-[80vw] sm:w-[85vw] md:w-[600px] h-[55vh] sm:h-[65vh] md:h-[70vh] shadow-xl overflow-hidden"
        >
            <div className="absolute inset-0">
                <video
                    src={newhomeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-end text-white">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-[#8F7538]" />
                        <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">{prop.location}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-2 sm:mb-4">{prop.title}</h3>
                    <p className="text-sm md:text-base opacity-0 group-hover:opacity-90 transition-opacity duration-500 max-w-md font-light leading-relaxed">
                        {prop.description}
                    </p>
                </div>

                <div className="absolute top-5 right-5 sm:top-8 sm:right-8 text-4xl sm:text-6xl font-serif opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-white">
                    0{idx + 1}
                </div>
            </div>
        </div>
    );
};

const HorizontalScrollSection = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-white">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-10 pl-[10vw]"
                >
                    {properties.map((prop, idx) => (
                        <PropertyCard key={prop.id} prop={prop} idx={idx} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const PropertySection = () => {
    return (
        <div className="bg-white text-[#0A0A0A]">
            {/* HERO SECTION - Height adjusted for Mobile to remove whitespace */}
            <div className="relative h-[70vh] sm:h-screen flex flex-col items-center justify-center z-10 bg-white overflow-hidden">
                {/* Left Tree */}
                <img
                    src={leftTree}
                    alt=""
                    className="absolute -left-12 sm:left-0 top-[60%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 h-[35%] sm:h-[70%] object-contain pointer-events-none z-0"
                />

                {/* Right Tree */}
                <img
                    src={rightTree}
                    alt=""
                    className="absolute -right-12 sm:right-0 top-[60%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 h-[35%] sm:h-[70%] object-contain pointer-events-none z-0"
                />

                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-[1px] bg-gradient-to-b from-transparent to-[#bfa065] absolute top-0"
                />

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-8 p-4 border border-gray-200 rounded-full bg-white shadow-sm relative z-20"
                >
                    <Compass className="w-6 h-6 text-[#bfa065]" strokeWidth={1} />
                </motion.div>

                <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-[#AB8D54] text-xs font-bold tracking-[0.4em] uppercase mb-6 relative z-10"
                >
                    Curated Portfolio
                </motion.h3>

                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-3xl sm:text-5xl md:text-7xl font-serif text-center max-w-4xl leading-tight px-4 relative z-10"
                >
                    Discover Architectural <br /> Masterpieces
                </motion.h1>
            </div>

            {/* HORIZONTAL SCROLL SECTION */}
            <HorizontalScrollSection />
        </div>
    );
};

export default PropertySection;