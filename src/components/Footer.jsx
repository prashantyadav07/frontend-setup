import React from 'react';

const Footer = () => {
    return (
        <div className="relative w-full px-4 md:px-8 pb-10 overflow-hidden bg-white">
            {/* Background Watermark Content - Fixed for mobile overflow */}
            {/* <div className="absolute inset-x-0 bottom-[-5%] sm:bottom-[-10%] flex justify-center pointer-events-none select-none z-0">
                <h2 className="text-[20vw] md:text-[18vw] font-black text-[#2D5A27]/10 tracking-tighter uppercase whitespace-nowrap">
                    river green
                </h2>
            </div> */}

            {/* Footer Card Container */}
            <footer className="relative z-10 max-w-7xl mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-[#F7F9F6] shadow-2xl overflow-hidden border border-black/5">
                <div className="pt-8 md:pt-12 pb-6 md:pb-8 px-6 md:px-12 lg:px-16 text-[#0a0a0a] font-sans">

                    {/* Grid: 1 col on mobile, 4 on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

                        {/* Column 1: Logo & Vision */}
                        <div className="flex flex-col gap-4 md:gap-5">
                            <div className="flex items-center gap-2">
                                <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-[#2D5A27]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
                                </svg>
                                <div className="flex flex-col leading-none">
                                    <span className="text-lg md:text-xl font-black tracking-tight text-[#1e3d1a]">RIVER GREEN</span>
                                    <span className="text-[9px] md:text-[10px] font-medium tracking-[0.3em] opacity-70">ESTATES</span>
                                </div>
                            </div>
                            <p className="text-[11px] md:text-xs leading-relaxed opacity-80 max-w-xs">
                                Premier living spaces surrounded by nature. We specialize in luxury residential plots, sustainable housing, and premium real estate investments.
                            </p>
                        </div>

                        {/* Column 2 & 3: Wrapped in a div to take less height on mobile */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 col-span-1 md:col-span-2 gap-4 md:gap-10">
                            <div>
                                <h3 className="text-xs md:text-sm font-bold mb-4 md:mb-5 border-b border-[#2D5A27]/10 pb-2">Properties</h3>
                                <ul className="space-y-2 md:space-y-2.5 text-[10px] md:text-xs font-semibold opacity-90">
                                    <li><a href="#" className="hover:text-[#2D5A27] transition-colors">Residential Plots</a></li>
                                    <li><a href="#" className="hover:text-[#2D5A27] transition-colors">Luxury Villas</a></li>
                                    <li><a href="#" className="hover:text-[#2D5A27] transition-colors">Commercial</a></li>
                                    <li className="hidden md:block"><a href="#" className="hover:text-[#2D5A27] transition-colors">Current Projects</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs md:text-sm font-bold mb-4 md:mb-5 border-b border-[#2D5A27]/10 pb-2">Resources</h3>
                                <ul className="space-y-2 md:space-y-2.5 text-[10px] md:text-xs font-semibold opacity-90">
                                    <li><a href="#" className="hover:text-[#2D5A27] transition-colors">Buyer's Guide</a></li>
                                    <li><a href="#" className="hover:text-[#2D5A27] transition-colors">Home Loans</a></li>
                                    <li className="hidden md:block"><a href="#" className="hover:text-[#2D5A27] transition-colors">Legal Docs</a></li>
                                    <li><a href="#" className="hover:text-[#2D5A27] transition-colors">Virtual Tours</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 4: Booking/CTA */}
                        <div className="flex flex-col items-start lg:items-end mt-2 md:mt-0">
                            <h2 className="text-xl md:text-2xl font-black mb-4 lg:text-right leading-tight text-[#1e3d1a]">Book Your<br className="hidden md:block" /> Site Visit</h2>
                            <button className="w-full md:w-auto bg-[#1e3d1a] hover:bg-[#122610] text-white text-[10px] md:text-xs font-bold py-2.5 px-8 rounded-full transition-transform active:scale-95 shadow-lg mb-5">
                                SCHEDULE NOW
                            </button>

                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex -space-x-1.5">
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-200 border border-white overflow-hidden">
                                        <img src="https://i.pravatar.cc/100?u=property1" alt="Buyer" />
                                    </div>
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-300 border border-white overflow-hidden">
                                        <img src="https://i.pravatar.cc/100?u=property3" alt="Buyer" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold text-[10px] md:text-xs">4.9</span>
                                        <div className="flex text-yellow-600 text-[8px] md:text-[10px]">★★★★★</div>
                                    </div>
                                    <span className="text-[7px] md:text-[8px] font-bold opacity-60">500+ Happy Families</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div className="mt-8 md:mt-12 pt-6 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] font-medium opacity-50 uppercase tracking-widest text-center">
                        <p>© 2026 River Green Estates. All Rights Reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:opacity-100">Privacy Policy</a>
                            <a href="#" className="hover:opacity-100">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;