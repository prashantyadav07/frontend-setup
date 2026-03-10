import React, { useRef, useState } from 'react';
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
import r7 from "../assets/r7.png"

export default function ContactUs() {
  const containerRef = useRef(null);
  const [focusedInput, setFocusedInput] = useState(null);

  useGSAP(() => {
    gsap.from('.reveal-up', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from('.arch-image', {
      scale: 1.05,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
      delay: 0.5
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white font-sans selection:bg-[#B49A5A] selection:text-black overflow-x-hidden">

      {/* Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[#B49A5A]/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[150px]" />
      </div>

      <div className="relative z-10">
        <section className="relative pt-32 md:pt-40 pb-20 px-6 lg:px-20 max-w-[1400px] mx-auto min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">

            {/* Left Side: Text and Form */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <p className="reveal-up text-[#B49A5A] uppercase tracking-[0.3em] text-[10px] font-bold">Get In Touch</p>
                <h1 className="reveal-up text-5xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                  Contact<br />
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Defence Garden</span>
                </h1>
                <p className="reveal-up text-gray-400 max-w-lg leading-relaxed text-lg font-light">
                  Our dedicated team is ready to guide you in finding the perfect residential plot to build your ultimate dream home.
                </p>
              </div>

              <form className="reveal-up space-y-6 max-w-xl">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                      className="peer w-full p-4 pt-6 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#B49A5A]/50 transition-all text-white placeholder-transparent"
                      placeholder="Your Full Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-2 text-[10px] uppercase tracking-widest text-[#B49A5A] transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-[#B49A5A]"
                    >
                      Your Full Name
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email Input */}
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                        className="peer w-full p-4 pt-6 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#B49A5A]/50 transition-all text-white placeholder-transparent"
                        placeholder="Email Address"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-2 text-[10px] uppercase tracking-widest text-[#B49A5A] transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-[#B49A5A]"
                      >
                        Email Address
                      </label>
                    </div>

                    {/* Phone Input */}
                    <div className="relative group">
                      <input
                        type="tel"
                        id="phone"
                        onFocus={() => setFocusedInput('phone')}
                        onBlur={() => setFocusedInput(null)}
                        className="peer w-full p-4 pt-6 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#B49A5A]/50 transition-all text-white placeholder-transparent"
                        placeholder="Phone Number"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 top-2 text-[10px] uppercase tracking-widest text-[#B49A5A] transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-[#B49A5A]"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="relative group">
                    <textarea
                      id="message"
                      rows="4"
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      className="peer w-full p-4 pt-8 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#B49A5A]/50 transition-all text-white resize-none placeholder-transparent"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-3 text-[10px] uppercase tracking-widest text-[#B49A5A] transition-all peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-xs peer-placeholder-shown:tracking-normal peer-focus:top-3 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:text-[#B49A5A]"
                    >
                      Your Requirements
                    </label>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-[#B49A5A] text-black px-12 py-5 rounded-full flex items-center justify-center gap-3 uppercase tracking-widest text-[11px] font-bold transition-all hover:bg-white group"
                >
                  Book a Site Visit<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>

            {/* Right Side: Arch Design Image */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="arch-image relative w-full max-w-[450px] aspect-[4/5] overflow-hidden rounded-t-[10rem] shadow-[0_0_80px_rgba(180,154,90,0.1)] border border-white/10 bg-[#0a0a0a]">
                <img
                  src={r7}
                  alt="Luxury Architecture"
                  className="w-full h-full object-cover opacity-80 mix-blend-lighten"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Info Grid */}
        <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: MapPin, title: "Location", lines: ["Shamli, Uttar Pradesh", "Defence Garden Township"] },
              { icon: Phone, title: "Direct Line", lines: ["Sales: +91 98765 43210", "Support: +91 98765 43211"] },
              { icon: Clock, title: "Working Hours", lines: ["Monday - Saturday", "09:00 AM - 08:00 PM"] }
            ].map((info, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#B49A5A] group-hover:bg-[#B49A5A] group-hover:text-black transition-all duration-500">
                  <info.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-white">{info.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {info.lines[0]}<br />{info.lines[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FULL WIDTH MAP */}
        <section className="w-full h-[550px] relative bg-[#0a0a0a] border-t border-white/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111537.95471415053!2d77.23438180415396!3d29.450371490214613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c29ed6d3ca009%3A0xc0fb106b3a3ab806!2sShamli%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) opacity(80%)' }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,1)]" />
        </section>

        {/* Dark Footer */}
        <footer className="py-16 bg-[#0a0a0a] text-center border-t border-white/5">
          <div className="flex justify-center gap-10 mb-8">
            <Instagram size={20} className="text-gray-500 hover:text-[#B49A5A] cursor-pointer transition-all hover:-translate-y-1" />
            <Linkedin size={20} className="text-gray-500 hover:text-[#B49A5A] cursor-pointer transition-all hover:-translate-y-1" />
            <Facebook size={20} className="text-gray-500 hover:text-[#B49A5A] cursor-pointer transition-all hover:-translate-y-1" />
          </div>
          <div className="w-12 h-[1px] bg-[#B49A5A] mx-auto mb-8 opacity-50" />
          <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
            © 2026 Defence Garden Estates • Designed for Modern Living
          </p>
        </footer>
      </div>
    </div>
  );
}