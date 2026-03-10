import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="relative w-full pt-20 pb-10 overflow-hidden bg-black text-white font-sans selection:bg-[#B49A5A] selection:text-black">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(180,154,90,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

            {/* Gradient Top Border Divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B49A5A]/50 to-transparent" />

            {/* Footer Container */}
            <footer className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand & Vision */}
                    <div className="flex flex-col gap-6 lg:pr-8">
                        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B49A5A] to-[#E5D3B3] flex items-center justify-center shadow-[0_0_20px_rgba(180,154,90,0.3)]">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
                                </svg>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-xl font-serif font-bold tracking-tight text-white mb-1">DEFENCE GARDEN</span>
                                <span className="text-[9px] font-bold tracking-[0.4em] text-[#B49A5A] uppercase">Estates</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Creating premium residential communities where modern luxury meets natural serenity. We specialize in thoughtfully planned, high-value townships designed for elevated living.
                        </p>
                    </div>

                    {/* Column 2: Properties */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6 text-white inline-block relative">
                            Properties
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-to-r from-[#B49A5A] to-transparent" />
                        </h3>
                        <ul className="space-y-4 text-sm font-light text-gray-400">
                            <li><a href="#" className="hover:text-[#B49A5A] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#B49A5A] transition-colors" /> Residential Plots</a></li>
                            <li><a href="#" className="hover:text-[#B49A5A] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#B49A5A] transition-colors" /> Premium Townships</a></li>
                            <li><a href="#" className="hover:text-[#B49A5A] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#B49A5A] transition-colors" /> Future Developments</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/investment'); }} className="hover:text-[#B49A5A] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-[#B49A5A]/50 group-hover:bg-[#B49A5A] transition-colors" /> Investment Opportunities</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6 text-white inline-block relative">
                            Resources
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-gradient-to-r from-[#B49A5A] to-transparent" />
                        </h3>
                        <ul className="space-y-4 text-sm font-light text-gray-400">
                            <li><a href="#" className="hover:text-[#B49A5A] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#B49A5A] transition-colors" /> Buyer's Guide</a></li>
                            <li><a href="#" className="hover:text-[#B49A5A] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#B49A5A] transition-colors" /> Investment Insights</a></li>
                            <li><a href="#" className="hover:text-[#B49A5A] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#B49A5A] transition-colors" /> Legal Documentation</a></li>
                            <li><a href="#" className="hover:text-[#B49A5A] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#B49A5A] transition-colors" /> Virtual Site Tour</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact/CTA */}
                    <div className="flex flex-col lg:items-end">
                        <h3 className="text-2xl font-serif font-bold mb-4 text-white lg:text-right">Ready to invest?</h3>
                        <p className="text-sm font-light text-gray-400 mb-6 lg:text-right">Speak with our premium property advisors today.</p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-gradient-to-r from-[#B49A5A] to-[#C9B37E] hover:from-white hover:to-white text-black px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all shadow-[0_0_20px_rgba(180,154,90,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] w-full lg:w-auto"
                        >
                            Schedule a Visit
                        </button>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        © 2026 Defence Garden Estates. All Rights Reserved.
                    </p>
                    <div className="flex gap-8 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;