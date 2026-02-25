// ProjectsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    MapPin,
    Home,
    Shield,
    Leaf,
    Wind,
    ArrowUpRight,
} from 'lucide-react';
import projectVideo from '../assets/showcase.webm';

gsap.registerPlugin(ScrollTrigger);

// ---------- Data ----------
const featuredProject = {
    title: 'The Pinnacle',
    location: 'Beverly Hills, CA',
    price: '$12.5M',
    image:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description:
        'A sculptural masterpiece with panoramic ocean views, infinity edge pool, and a private glass elevator.',
};

const projects = [
    {
        id: 1,
        title: 'Villa Serenità',
        location: 'Lake Como, Italy',
        price: '€8.9M',
        image:
            'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        status: 'Ongoing',
    },
    {
        id: 2,
        title: 'Skyline Residence',
        location: 'New York, NY',
        price: '$18.2M',
        image:
            'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        status: 'Completed',
    },
    {
        id: 3,
        title: 'Azure Heights',
        location: 'Miami, FL',
        price: '$9.8M',
        image:
            'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        status: 'Ongoing',
    },
];

const amenities = [
    { icon: Wind, label: 'Infinity Pool' },
    { icon: Leaf, label: 'Private Gardens' },
    { icon: Shield, label: '24/7 Security' },
    { icon: Home, label: 'Spa & Wellness' },
];

const ongoingProjects = projects.filter((p) => p.status === 'Ongoing');
const completedProjects = projects.filter((p) => p.status === 'Completed');

const stats = [
    { label: 'Avg. Annual Appreciation', value: 12.5, suffix: '%', isFloat: true },
    { label: 'Luxury Units Sold', value: 347, suffix: '+', isFloat: false },
    { label: 'ROI Since Inception', value: 184, suffix: '%', isFloat: false },
];

const lifestyleImages = [
    'https://images.pexels.com/photos/261394/pexels-photo-261394.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600',
];

// Custom Easing for Framer Motion
const premiumEase = [0.25, 1, 0.5, 1];

// ---------- Premium Animated SVG Background ----------
const PremiumSVGBackground = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const paths = svgRef.current.querySelectorAll('.flow-path');
            gsap.fromTo(
                paths,
                { strokeDashoffset: 1 },
                {
                    strokeDashoffset: 0,
                    duration: 3,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: svgRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1.5,
                    },
                }
            );
        }, svgRef);

        return () => ctx.revert(); // Cleanup GSAP
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
            <svg
                ref={svgRef}
                className="w-full h-full"
                viewBox="0 0 1200 800"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#B4A388" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#B4A388" stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#B4A388" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#B4A388" stopOpacity="0.05" />
                    </linearGradient>
                </defs>

                <motion.g
                    animate={{ rotate: 360 }}
                    transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
                    origin="600 400"
                >
                    <ellipse cx="600" cy="400" rx="400" ry="200" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" transform="rotate(30 600 400)" />
                    <ellipse cx="600" cy="400" rx="300" ry="150" fill="none" stroke="url(#goldGrad)" strokeWidth="1" transform="rotate(-20 600 400)" />
                </motion.g>

                <path className="flow-path" d="M100,300 Q400,200 700,400 T1200,300" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" strokeDasharray="8 16" style={{ strokeDashoffset: 1, strokeDasharray: 1 }} />
                <path className="flow-path" d="M0,600 Q300,500 600,650 T1200,500" stroke="url(#lineGrad)" strokeWidth="1.5" fill="none" strokeDasharray="6 12" style={{ strokeDashoffset: 1, strokeDasharray: 1 }} />
            </svg>
        </div>
    );
};

// ---------- Subcomponents ----------

// Intro Header
const IntroHeader = () => {
    const headerRef = useRef(null);
    const isInView = useInView(headerRef, { once: true, amount: 0.5 });
    const words = ['Curated', 'Residences'];

    return (
        <header ref={headerRef} className="mb-24 pt-10 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
            {/* Video Side */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: premiumEase }}
                className="relative w-full h-[400px] md:h-[500px] flex justify-center items-center"
            >
                <video
                    src={projectVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain pointer-events-none"
                    style={{
                        maxHeight: '100%',
                        background: 'transparent'
                    }}
                />
            </motion.div>

            {/* Text Side */}
            <div className="text-center lg:text-left">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '120px' } : {}}
                    transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
                    className="h-[2px] bg-[#B4A388] mb-8 mx-auto lg:mx-0"
                />
                <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold text-[#111] tracking-tight flex flex-wrap justify-center lg:justify-start gap-4">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: premiumEase }}
                            className="inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6, ease: premiumEase }}
                    className="text-xl md:text-2xl text-gray-500 mt-6 max-w-2xl mx-auto lg:mx-0 font-light"
                >
                    Redefining the standard of modern luxury, one architectural masterpiece at a time.
                </motion.p>
            </div>
        </header>
    );
};

// Featured Project
const FeaturedProject = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                y: '20%',
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <article
            ref={containerRef}
            className="relative h-[85vh] w-full rounded-[2rem] overflow-hidden mb-32 group shadow-2xl shadow-black/10"
        >
            <div className="absolute inset-0 w-full h-[120%] -top-[10%] bg-black">
                <div ref={imageRef} className="w-full h-full">
                    <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                    />
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111]/95 via-[#111]/40 to-transparent transition-all duration-700" />

            <div className="absolute bottom-0 left-0 p-8 md:p-16 lg:p-20 text-[#F9F8F6] max-w-4xl w-full z-10">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[#B4A388] uppercase tracking-[0.25em] text-xs md:text-sm font-semibold mb-6"
                >
                    Featured Project
                </motion.p>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                >
                    {featuredProject.title}
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap items-center gap-4 text-base md:text-lg mb-8 font-light"
                >
                    <span className="flex items-center gap-2"><MapPin size={18} className="text-[#B4A388]" />{featuredProject.location}</span>
                    <span className="w-px h-5 bg-white/30 hidden md:block" />
                    <span className="text-[#B4A388] font-medium">{featuredProject.price}</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl"
                >
                    {featuredProject.description}
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="group/btn inline-flex items-center gap-4 text-[#F9F8F6] font-medium tracking-wide overflow-hidden"
                >
                    <span className="relative pb-1">
                        Explore Masterpiece
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#B4A388] origin-left scale-x-100 group-hover/btn:scale-x-0 transition-transform duration-500" />
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white origin-right scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                    </span>
                    <div className="bg-[#B4A388]/20 p-3 rounded-full group-hover/btn:bg-[#B4A388] transition-colors duration-500">
                        <ArrowUpRight size={20} className="group-hover/btn:rotate-45 transition-transform duration-500" />
                    </div>
                </motion.button>
            </div>
        </article>
    );
};

// Project Card
const ProjectCard = ({ project, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: premiumEase }}
            viewport={{ once: true, margin: '-50px' }}
            className="group bg-white rounded-[1.5rem] overflow-hidden shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 border border-[#111]/5 flex flex-col"
        >
            <div className="relative h-72 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md text-[#111] text-xs font-bold tracking-widest px-4 py-2 rounded-full uppercase shadow-sm">
                    {project.status}
                </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-[#111] mb-3 tracking-tight">{project.title}</h4>
                <div className="flex items-center gap-2 text-gray-500 mb-4 font-light">
                    <MapPin size={16} className="text-[#B4A388]" />
                    <span className="text-sm">{project.location}</span>
                </div>
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-xl font-medium text-[#B4A388]">{project.price}</div>
                    <button className="flex items-center gap-2 text-[#111] text-sm font-semibold uppercase tracking-wider group/link hover:text-[#B4A388] transition-colors">
                        <span>Details</span>
                        <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </motion.article>
    );
};

// Developer Vision
const DeveloperVision = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        <div ref={containerRef} className="mb-40 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: premiumEase }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-px bg-[#B4A388]" />
                    <p className="text-[#B4A388] uppercase tracking-[0.2em] text-sm font-semibold">Our Philosophy</p>
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#111] leading-[1.1] mb-8 tracking-tight">
                    Crafting <span className="italic font-serif text-[#B4A388] font-light">timeless</span> spaces for the discerning few.
                </h3>
                <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-8">
                    Every project begins with a dialogue between architecture and its natural surroundings. We believe true luxury lies not just in opulence, but in creating serene environments that resonate deeply with your lifestyle.
                </p>
                <button className="text-[#111] font-semibold border-b-2 border-[#B4A388] pb-1 hover:text-[#B4A388] transition-colors">Read Our Story</button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.2, ease: premiumEase }}
                className="relative aspect-square rounded-[2rem] overflow-hidden bg-[#EBE9E1] p-8 flex items-center justify-center border border-[#B4A388]/20"
            >
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-80">
                    <defs>
                        <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#B4A388" stopOpacity="1" />
                            <stop offset="100%" stopColor="#B4A388" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    <motion.circle cx="200" cy="200" r="160" fill="none" stroke="url(#visionGrad)" strokeWidth="1" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
                    <circle cx="200" cy="200" r="100" fill="none" stroke="url(#visionGrad)" strokeWidth="1.5" />
                    <path d="M200,40 L340,320 L60,320 Z" fill="none" stroke="url(#visionGrad)" strokeWidth="1" />
                    <motion.circle
                        cx="200"
                        cy="200"
                        r="6"
                        fill="#B4A388"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </svg>
            </motion.div>
        </div>
    );
};

// Investment Value (Optimized with GSAP innerHTML animation to avoid React re-renders)
const InvestmentValue = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });
    const numberRefs = useRef([]);

    useEffect(() => {
        if (!isInView) return;

        let ctx = gsap.context(() => {
            stats.forEach((stat, idx) => {
                const el = numberRefs.current[idx];
                if (!el) return;

                gsap.to(el, {
                    innerHTML: stat.value,
                    duration: 2.5,
                    delay: idx * 0.2,
                    ease: 'power3.out',
                    snap: { innerHTML: stat.isFloat ? 0.1 : 1 },
                    onUpdate: function () {
                        if (stat.isFloat) {
                            el.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                        }
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [isInView]);

    return (
        <div ref={containerRef} className="mb-40">
            <div className="text-center mb-16">
                <h3 className="text-4xl md:text-5xl font-medium text-[#111] mb-4">
                    Investment <span className="italic font-serif text-[#B4A388] font-light">Excellence</span>
                </h3>
                <p className="text-gray-500 max-w-2xl mx-auto font-light">Consistent growth and unparalleled value creation across our portfolio.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: idx * 0.15, ease: premiumEase }}
                        className="bg-white rounded-3xl p-10 text-center shadow-lg shadow-black/[0.03] border border-gray-100 hover:-translate-y-2 transition-transform duration-500"
                    >
                        <div className="text-5xl md:text-6xl font-light text-[#B4A388] mb-4 flex justify-center items-end">
                            <span ref={(el) => (numberRefs.current[idx] = el)}>0</span>
                            <span className="text-4xl ml-1">{stat.suffix}</span>
                        </div>
                        <p className="text-[#111] uppercase tracking-[0.15em] text-xs font-semibold">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Toggle Section (Upgraded with Framer Motion LayoutId)
const ToggleSection = () => {
    const [active, setActive] = useState('Ongoing');
    const displayProjects = active === 'Ongoing' ? ongoingProjects : completedProjects;

    return (
        <div className="mb-40">
            <div className="flex justify-center mb-16">
                <div className="relative bg-white shadow-md shadow-black/5 p-1.5 rounded-full flex border border-gray-100">
                    {['Ongoing', 'Completed'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`relative z-10 px-10 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-colors duration-300 ${active === tab ? 'text-white' : 'text-gray-500 hover:text-[#111]'
                                }`}
                        >
                            {active === tab && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#111] rounded-full -z-10"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto min-h-[300px]">
                <AnimatePresence mode="popLayout">
                    {displayProjects.map((proj) => (
                        <motion.div
                            key={proj.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                            transition={{ duration: 0.4, ease: premiumEase }}
                            className="group flex items-center gap-6 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-black/5 transition-shadow cursor-pointer"
                        >
                            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="flex-grow">
                                <h4 className="text-xl font-bold text-[#111] mb-1">{proj.title}</h4>
                                <p className="text-sm text-gray-500 mb-2 font-light">{proj.location}</p>
                                <p className="text-[#B4A388] font-medium">{proj.price}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#B4A388] group-hover:text-white transition-colors duration-300 mr-2">
                                <ArrowUpRight size={18} />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

// Amenities Showcase
const AmenitiesShowcase = () => {
    return (
        <div className="mb-40 bg-[#111] text-white rounded-[3rem] p-12 md:p-24 shadow-2xl overflow-hidden relative">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#B4A388]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative z-10">
                <div className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-medium mb-4">
                        Curated <span className="italic font-serif text-[#B4A388]">Amenities</span>
                    </h3>
                    <p className="text-gray-400 font-light max-w-xl mx-auto">Experiencing life at its peak with facilities designed for complete holistic well-being.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {amenities.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#B4A388] group-hover:border-[#B4A388] transition-all duration-500">
                                    <Icon size={32} className="text-[#B4A388] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <span className="text-lg font-light tracking-wide">{item.label}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Luxury Lifestyle Preview
const LifestylePreview = () => {
    return (
        <div className="mb-40">
            <h3 className="text-4xl md:text-5xl font-medium text-[#111] mb-16 text-center">
                The <span className="italic font-serif text-[#B4A388] font-light">Lifestyle</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {lifestyleImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.15, ease: premiumEase }}
                        className={`relative rounded-2xl overflow-hidden group ${idx === 1 || idx === 2 ? 'md:translate-y-12' : ''}`}
                    >
                        <div className="aspect-[4/5] w-full">
                            <img src={img} alt="Luxury Lifestyle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                            <span className="text-white text-sm uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">View Gallery</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// CTA Footer
const CtaFooter = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEase }}
            className="text-center py-20 border-t border-[#B4A388]/20 mt-20"
        >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#111] mb-8 tracking-tight">Begin Your Journey</h3>
            <p className="text-gray-500 text-lg mb-10 font-light max-w-lg mx-auto">Connect with our private advisory team to explore our portfolio of exclusive residences.</p>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-12 py-5 bg-[#111] text-[#F9F8F6] rounded-full text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden group inline-flex items-center gap-4"
            >
                <span className="relative z-10">Schedule Private Tour</span>
                <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <motion.div
                    className="absolute inset-0 bg-[#B4A388]"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </motion.button>
        </motion.div>
    );
};

// ---------- Main Component ----------
const ProjectsSection = () => {
    return (
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-[#F9F8F6] selection:bg-[#B4A388] selection:text-white">
            <PremiumSVGBackground />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <IntroHeader />
                <FeaturedProject />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-40">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.id} project={project} index={idx} />
                    ))}
                </div>

                <DeveloperVision />
                <InvestmentValue />
                <AmenitiesShowcase />
                <ToggleSection />
                <LifestylePreview />
                <CtaFooter />
            </div>
        </section>
    );
};

export default ProjectsSection;