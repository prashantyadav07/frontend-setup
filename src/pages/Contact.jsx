import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Facebook
} from 'lucide-react';

export default function ContactUs() {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    gsap.from('.reveal-up', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });
    
    gsap.from('.arch-image', {
      scale: 1.05,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF9F6] text-zinc-900 font-sans">
      
      {/* 1. TOP SECTION: Added more padding-top (pt-32) to prevent Navbar overlap */}
      <section className="relative pt-32 md:pt-40 pb-20 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text and Form */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h1 className="reveal-up text-5xl lg:text-8xl font-light tracking-tight text-[#4A5D4E] leading-[1.1]">
                Contact <br />
                <span className="italic font-serif">Estate Elite</span>
              </h1>
              <p className="reveal-up text-zinc-600 max-w-lg leading-relaxed text-lg font-light">
                Conveniently located in the heart of the luxury district. Our team is ready to help you find your next legacy property.
              </p>
            </div>

            <form className="reveal-up space-y-5 max-w-xl">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Full Name" 
                  className="w-full p-4 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4A5D4E] transition-all shadow-sm"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4A5D4E] transition-all shadow-sm"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-4 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4A5D4E] transition-all shadow-sm"
                  />
                </div>
                <textarea 
                  placeholder="Tell us about your requirements..." 
                  rows="4"
                  className="w-full p-4 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4A5D4E] transition-all shadow-sm resize-none"
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-[#4A5D4E] text-white px-12 py-5 rounded-lg flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs font-bold transition-all shadow-lg"
              >
                Book a Consultation <ArrowRight size={16} />
              </motion.button>
            </form>
          </div>

          {/* Right Side: Arch Design Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="arch-image relative w-full max-w-[450px] aspect-[4/5] overflow-hidden rounded-t-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white bg-zinc-200">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Mansion" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/500x700?text=Luxury+Home"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MIDDLE SECTION: Quick Info Bar */}
      <section className="bg-white py-24 px-6 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="flex flex-col items-center text-center space-y-5 group">
            <div className="w-20 h-20 rounded-full bg-[#f4f7f4] flex items-center justify-center text-[#4A5D4E] group-hover:bg-[#4A5D4E] group-hover:text-white transition-all duration-500 shadow-sm">
              <MapPin size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-medium tracking-tight">Location</h3>
              <p className="text-zinc-500 font-light leading-relaxed">123 Luxury Boulevard, <br/> Skyline Tower, Mumbai 400001</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-5 group">
            <div className="w-20 h-20 rounded-full bg-[#f4f7f4] flex items-center justify-center text-[#4A5D4E] group-hover:bg-[#4A5D4E] group-hover:text-white transition-all duration-500 shadow-sm">
              <Phone size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-medium tracking-tight">Direct Line</h3>
              <p className="text-zinc-500 font-light leading-relaxed">Sales: +91 98765 43210 <br/> Support: +91 22 4500 9000</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-5 group">
            <div className="w-20 h-20 rounded-full bg-[#f4f7f4] flex items-center justify-center text-[#4A5D4E] group-hover:bg-[#4A5D4E] group-hover:text-white transition-all duration-500 shadow-sm">
              <Clock size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-medium tracking-tight">Working Hours</h3>
              <p className="text-zinc-500 font-light leading-relaxed">Monday - Saturday <br/> 09:00 AM - 08:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH GOOGLE MAP */}
      <section className="w-full h-[550px] relative bg-zinc-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.796941589332!2d72.833501315!3d18.9405021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e848143615%3A0x7d808e04b4916a2a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625656565656!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }} 
          allowFullScreen="" 
          loading="lazy"
          title="Estate Elite Office"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]" />
      </section>

      {/* 4. FOOTER */}
      <footer className="py-16 bg-white text-center">
        <div className="flex justify-center gap-10 mb-8">
          <Instagram size={22} className="text-zinc-400 hover:text-[#4A5D4E] cursor-pointer transition-all hover:-translate-y-1" />
          <Linkedin size={22} className="text-zinc-400 hover:text-[#4A5D4E] cursor-pointer transition-all hover:-translate-y-1" />
          <Facebook size={22} className="text-zinc-400 hover:text-[#4A5D4E] cursor-pointer transition-all hover:-translate-y-1" />
        </div>
        <div className="w-24 h-[1px] bg-zinc-200 mx-auto mb-8" />
        <p className="text-[11px] text-zinc-400 uppercase tracking-[0.5em] font-medium">
          © 2026 ESTATE ELITE PROPERTIES • PRIVATE CONCIERGE
        </p>
      </footer>

    </div>
  );
}