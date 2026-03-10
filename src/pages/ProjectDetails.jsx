import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowLeft } from 'lucide-react';
import { projects } from './Ourprojects';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] } })
};

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the specific project based on the URL id parameter
    const project = projects.find(p => p.id === parseInt(id));

    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
                    <button onClick={() => navigate('/ourproject')} className="text-[#B49A5A] hover:text-white transition-colors underline">Return to Portfolio</button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-[#B49A5A] selection:text-black pb-32">
            {/* Massive Hero Image */}
            <div className="relative h-[70vh] md:h-[85vh] w-full">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Back Button */}
                <button
                    onClick={() => navigate('/ourproject')}
                    className="absolute top-32 left-6 md:left-20 z-20 flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Back to Portfolio</span>
                </button>
            </div>

            {/* Content Section */}
            <div className="max-w-[1000px] mx-auto px-6 -mt-32 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}
                    className="bg-[#0a0a0a] rounded-[2rem] p-8 md:p-16 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 pb-12 border-b border-white/10">
                        <div>
                            <motion.p custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-[#B49A5A] uppercase tracking-[0.3em] text-[10px] font-bold mb-4">
                                {project.status} Project
                            </motion.p>
                            <motion.h1 custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
                                {project.title}
                            </motion.h1>
                            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-3 text-gray-400 text-lg">
                                <MapPin size={20} className="text-[#B49A5A]" />
                                {project.location}
                            </motion.div>
                        </div>
                        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="text-3xl md:text-4xl font-light text-[#B49A5A]">
                            {project.price}
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp}>
                            <h3 className="text-xl font-serif font-bold mb-4 text-white">Overview</h3>
                            <p className="text-gray-400 font-light leading-relaxed text-lg">
                                {project.desc}
                            </p>
                            <p className="text-gray-400 font-light leading-relaxed text-lg mt-4">
                                Discover a lifestyle of unparalleled luxury. This unique property is developed with absolute attention to detail, maximizing both natural light and environmental harmony to bring the outside in.
                            </p>
                        </motion.div>

                        <motion.div custom={6} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col justify-center">
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                <h4 className="text-lg font-serif font-bold mb-6">Interested in this property?</h4>
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="w-full bg-[#B49A5A] text-black py-4 rounded-xl font-bold uppercase tracking-widest text-[12px] hover:bg-white transition-colors"
                                >
                                    Inquire Now
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
