import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import investImg from '../assets/investimg.png';
import investImg2 from '../assets/investimg2.png';
import r4 from '../assets/r4.png';
import r21 from '../assets/r21.png';
import r22 from '../assets/r22.png';
import r25 from '../assets/r25.png';

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }),
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const RealEstateInvestmentPage = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const ctaImageRef = useRef(null);
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // GSAP for performance-heavy parallax
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Image Parallax
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // CTA Image Parallax
      if (ctaImageRef.current) {
        gsap.to(ctaImageRef.current, {
          y: "15%",
          ease: "none",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Card scale-up on scroll
      const cards = gsap.utils.toArray(".invest-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.95, opacity: 0, y: 50 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white font-sans antialiased overflow-x-hidden relative selection:bg-[#B49A5A] selection:text-black">

      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(180,154,90,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-3/4 -right-64 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      </div>

      {/* ── HERO SECTION ── */}
      <section ref={heroRef} className="relative h-[100svh] flex items-center justify-center overflow-hidden z-10">
        <div
          ref={heroImageRef}
          className="absolute inset-x-0 -top-[20%] h-[140%] w-full bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${investImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black pointer-events-none" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-4 max-w-5xl mt-20"
        >
          <motion.p custom={0} variants={fadeUp} className="text-[#B49A5A] text-[10px] sm:text-[12px] tracking-[0.4em] uppercase font-bold mb-6">
            Premium Portfolio
          </motion.p>
          <motion.h1 custom={1} variants={fadeUp} className="text-[clamp(40px,6vw,90px)] font-serif font-black leading-[1.05] mb-6">
            INVEST IN THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">FUTURE OF LIVING</span>
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="text-gray-400 text-[14px] sm:text-[18px] font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            At Defence Garden, we offer thoughtfully planned township developments that combine peaceful living with exceptional investment potential.
          </motion.p>
          <motion.div custom={3} variants={fadeUp}>
            <button
              onClick={() => navigate('/ourproject')}
              className="group relative inline-flex items-center gap-3 py-4 sm:py-5 px-8 sm:px-10 border border-white/20 bg-black/40 backdrop-blur-md text-white font-bold text-[10px] sm:text-[12px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:border-[#B49A5A]"
            >
              <div className="absolute inset-0 bg-[#B49A5A] translate-y-[100%] transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Explore Sites</span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* ── OPPORTUNITIES SECTION ── */}
      <section className="relative py-32 px-6 max-w-[1400px] mx-auto z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <motion.h2 custom={1} variants={fadeUp} className="text-[clamp(30px,4vw,50px)] font-serif font-bold mb-4">
            Smart Opportunities
          </motion.h2>
          <motion.div custom={2} variants={fadeUp} className="w-12 h-[2px] bg-[#B49A5A]/60 mx-auto mb-6" />
          <motion.p custom={3} variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-[14px] sm:text-[16px] leading-[1.8]">
            Choose from carefully planned residential plots located in prime areas with excellent growth potential.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { id: 1, title: "Residential", desc: "Luxury apartments and villas in urban hubs.", extended: "Our residential developments focus on high-yield areas with excellent amenities. We ensure top-tier construction quality.", img: r4 },
            { id: 2, title: "Commercial", desc: "Office spaces and retail centers in districts.", extended: "From Grade-A office spaces to prime retail hubs, our commercial projects are located at the heart of economic activity.", img: r22 },
            { id: 3, title: "Plots", desc: "Undervalued land parcels with high potential.", extended: "We identify land with hidden value before the market catches up. Our plot developments come with clear titles.", img: r25 },
            { id: 4, title: "Luxury Villas", desc: "Exclusive waterfront and hillside estates.", extended: "Experience the pinnacle of luxury with our signature villa collections offering unmatched privacy and bespoke architecture.", img: r21 },
          ].map((item) => (
            <div key={item.id} className="invest-card group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl">
              <div className="h-56 sm:h-64 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />
              </div>
              <div className="p-6 sm:p-8 relative z-10 -mt-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 font-serif tracking-wide">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                <motion.div
                  initial={false}
                  animate={{ height: expandedId === item.id ? "auto" : 0, opacity: expandedId === item.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 text-[13px] leading-relaxed border-t border-white/10 pt-4 pb-4">
                    {item.extended}
                  </p>
                </motion.div>

                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="text-[#B49A5A] text-[11px] font-bold tracking-[0.2em] uppercase hover:text-white transition-colors flex items-center gap-2"
                >
                  {expandedId === item.id ? "Close" : "Learn More"}
                  <span className={`transform transition-transform duration-300 ${expandedId === item.id ? "-rotate-90" : "rotate-0"}`}>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY INVEST SECTION ── */}
      <section className="relative py-32 px-6 bg-[#050505] border-y border-white/5 z-10 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-20"
          >
            <motion.h2 custom={1} variants={fadeUp} className="text-[clamp(30px,4vw,50px)] font-serif font-bold mb-4">
              Why Invest With Us
            </motion.h2>
            <motion.div custom={2} variants={fadeUp} className="w-12 h-[2px] bg-[#B49A5A]/60 mx-auto mb-6" />
            <motion.p custom={3} variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto text-[14px] sm:text-[16px] leading-[1.8]">
              Discover a trusted township development designed for modern living, long-term value, and a peaceful environment.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { title: "High Growth", desc: "Plots located in rapidly developing areas with strong appreciation.", num: "01" },
              { title: "Trusted Dev", desc: "Years of experience in creating well-planned communities.", num: "02" },
              { title: "Prime Locations", desc: "Strategically located townships with excellent connectivity.", num: "03" },
              { title: "Secure Invest", desc: "100% transparent documentation and legally verified plots.", num: "04" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="group relative p-8 glass-panel bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] transition-colors"
              >
                <div className="text-[#B49A5A]/20 text-6xl font-serif font-black absolute top-4 right-6 group-hover:text-[#B49A5A]/40 transition-colors duration-500">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold mb-4 mt-8 font-serif">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLANS SECTION ── */}
      <section className="relative py-32 px-6 max-w-[1400px] mx-auto z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <motion.h2 custom={1} variants={fadeUp} className="text-[clamp(30px,4vw,50px)] font-serif font-bold mb-4">
            Opportunities
          </motion.h2>
          <motion.div custom={2} variants={fadeUp} className="w-12 h-[2px] bg-[#B49A5A]/60 mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Residential",
              tagline: "Dream Home Canvas",
              features: ["Vastu Compliant Layouts", "Internal Grid Roads", "Secured Gated Entry", "Lush Green Parks"],
            },
            {
              name: "Investment",
              tagline: "High Appreciation",
              features: ["Strategic Location", "Upcoming Infrastructure", "Clear Legal Titles", "Boundary Wall Included"],
              popular: true,
            },
            {
              name: "Premium Corner",
              tagline: "Prime Visibility",
              features: ["Wider Main Road Access", "Park Facing Options", "Better Ventilation", "Exclusive Entry Points"],
            },
          ].map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className={`relative bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-10 border ${plan.popular ? "border-[#B49A5A]/50 shadow-[0_0_40px_rgba(180,154,90,0.15)] transform md:-translate-y-4" : "border-white/5"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B49A5A] to-[#8B733D] text-black px-6 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase shadow-lg">
                  Highest Demand
                </div>
              )}
              <h3 className="text-[#B49A5A] text-[10px] sm:text-[12px] uppercase tracking-[0.3em] font-semibold mb-3">{plan.name}</h3>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6 leading-tight">{plan.tagline}</p>

              <div className="w-full h-[1px] bg-white/10 mb-6" />

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm sm:text-[15px]">
                    <span className="text-[#B49A5A] font-bold mt-0.5">&rarr;</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/contact')}
                className={`w-full py-4 rounded-xl font-bold tracking-widest uppercase text-[10px] sm:text-[11px] transition-all duration-300 ${plan.popular ? "bg-[#B49A5A] text-black hover:bg-white" : "bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black"}`}
              >
                Request Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA / BOTTOM PARALLAX ── */}
      <section className="cta-section relative h-[70vh] flex items-center justify-center overflow-hidden z-20">
        <div
          ref={ctaImageRef}
          className="absolute inset-x-0 -top-[20%] h-[140%] w-full bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${investImg2})` }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <motion.h2 custom={1} variants={fadeUp} className="text-[clamp(30px,5vw,50px)] font-serif font-bold mb-8 leading-tight">
            Long-Term Value. <br className="md:hidden" />
            <span className="text-[#B49A5A]">Smart Investment.</span>
          </motion.h2>

          <motion.button
            custom={2} variants={fadeUp}
            onClick={() => navigate('/contact')}
            className="group relative inline-flex items-center gap-3 py-4 sm:py-5 px-8 sm:px-12 border-2 border-[#B49A5A] bg-[#B49A5A] text-black font-bold text-[10px] sm:text-[12px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:bg-transparent hover:text-white"
          >
            <span className="relative z-10">Schedule a Site Visit</span>
            <span className="relative z-10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default RealEstateInvestmentPage;