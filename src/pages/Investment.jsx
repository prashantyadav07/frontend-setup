import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import investImg from '../assets/investimg.png';
import investImg2 from '../assets/investimg2.png';
import r4 from '../assets/r4.png';
import r21 from '../assets/r21.png';
import r22 from '../assets/r22.png';
import r25 from '../assets/r25.png';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const RealEstateInvestmentPage = () => {
  // Refs for sections and parallax elements
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const whyInvestRef = useRef(null);
  const plansRef = useRef(null);
  const ctaRef = useRef(null);
  const ctaImageRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);

  // GSAP animations (parallax and scroll-triggered effects)
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero parallax: move background image at slower speed
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          y: "-15%",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // CTA section parallax
      if (ctaImageRef.current) {
        gsap.to(ctaImageRef.current, {
          y: "-10%",
          ease: "none",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Subtle scale animation for cards on scroll using GSAP
      const cards = gsap.utils.toArray(".invest-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.95, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    // Clean up ScrollTrigger on unmount
    return () => ctx.revert();
  }, []);

  // Animation variants for Framer Motion (section entrances)
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div ref={containerRef} className="bg-neutral-50 text-gray-800 font-sans antialiased overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background image */}
        <div
          ref={heroImageRef}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center will-change-transform"
          style={{
            backgroundImage:
              `url(${investImg})`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Invest in the Future of Living
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10">
            At The River Green, we offer thoughtfully planned township developments that combine peaceful living with exceptional investment potential.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/ourproject')}
            className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition"
          >
            Explore Sites
          </motion.button>
        </motion.div>
      </section>

      {/* INVESTMENT OPPORTUNITIES SECTION */}
      <motion.section
        ref={opportunitiesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-4">
          Smart Investment Opportunities
        </motion.h2>
        <motion.p variants={fadeUp} className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Choose from carefully planned residential plots located in prime areas with excellent growth potential.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              title: "Residential",
              desc: "Luxury apartments and villas in urban hubs with strong rental demand.",
              detailedDesc: "Our residential developments focus on high-yield areas with excellent amenities. We ensure top-tier construction quality and strategic placement to maximize both lifestyle and investment ROI. Each project is designed with modern aesthetics and sustainable practices.",
              image: r4,
            },
            {
              id: 2,
              title: "Commercial",
              desc: "Office spaces and retail centers in thriving business districts.",
              detailedDesc: "From Grade-A office spaces to prime retail hubs, our commercial projects are located at the heart of economic activity. These investments offer stable rental income and significant capital appreciation potential in rapidly expanding business zones.",
              image: r22,
            },
            {
              id: 3,
              title: "Plots",
              desc: "Undervalued land parcels with high appreciation potential.",
              detailedDesc: "We identify land with hidden value before the market catches up. Our plot developments come with clear titles, planned infrastructure, and are situated in the path of city expansion, ensuring rapid value growth for early investors.",
              image: r25,
            },
            {
              id: 4,
              title: "Luxury Villas",
              desc: "Exclusive waterfront and hillside estates for elite investors.",
              detailedDesc: "Experience the pinnacle of luxury with our signature villa collections. These exclusive properties offer unmatched privacy, bespoke architecture, and are located in the most sought-after scenic locales, representing a prestigious asset class.",
              image: r21,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="invest-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>

                <motion.div
                  initial={false}
                  animate={{ height: expandedId === item.id ? "auto" : 0, opacity: expandedId === item.id ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-500 text-sm leading-relaxed border-t pt-4 border-gray-100">
                    {item.detailedDesc}
                  </p>
                </motion.div>

                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="mt-4 text-amber-600 font-medium hover:text-amber-700 transition-colors flex items-center gap-1"
                >
                  {expandedId === item.id ? "Show less" : "Learn more"}
                  <span className={`transform transition-transform duration-300 ${expandedId === item.id ? "rotate-180" : ""}`}>
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WHY INVEST WITH US SECTION */}
      <motion.section
        ref={whyInvestRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-4">
            Why Invest With The River Green
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Discover a trusted township development designed for modern living, long-term value, and a peaceful environment.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "High Growth Potential", desc: "Plots located in rapidly developing areas with strong appreciation potential for long-term investment.", icon: "📈" },
              { title: "Trusted Development", desc: "Years of experience in creating well-planned communities with quality infrastructure and reliable planning.", icon: "🏆" },
              { title: "Prime Locations", desc: "Strategically located townships with excellent connectivity to key roads, markets, and essential facilities.", icon: "📍" },
              { title: "Clear & Secure Investment", desc: "100% transparent documentation and legally verified plots to ensure complete peace of mind.", icon: "🛡️" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* INVESTMENT PLANS / ROI SECTION */}
      <motion.section
        ref={plansRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren}
        className="py-24 px-6 bg-neutral-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-4">
            Investment Opportunities
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Discover premium residential plots designed for modern living and long-term value in prime locations.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Residential Plots",
                tagline: "Ideal for your dream home",
                features: ["Vastu Compliant Layouts", "Internal Grid Roads", "Secured Gated Entry", "Lush Green Parks"],
              },
              {
                name: "Investment Plots",
                tagline: "High appreciation potential",
                features: ["Strategic Location", "Upcoming Infrastructure", "Clear Legal Titles", "Boundary Wall Included"],
                popular: true,
              },
              {
                name: "Corner & Premium Plots",
                tagline: "Prime visibility and space",
                features: ["Wider Main Road Access", "Park Facing Options", "Better Ventilation", "Exclusive Entry Points"],
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 border ${plan.popular ? "border-amber-400 ring-4 ring-amber-100" : "border-gray-100"
                  }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Highest Demand
                  </span>
                )}
                <h3 className="text-xl font-medium text-gray-500 uppercase tracking-wider mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-4">{plan.tagline}</p>
                <div className="mb-6 border-b pb-4 border-gray-100">
                  <span className="text-amber-700 font-semibold italic text-sm">Key Features & Amenities</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="text-amber-500 font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-amber-200"
                >
                  Request Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* INVESTOR BENEFITS / CTA SECTION */}
      <section
        ref={ctaRef}
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background */}
        <div
          ref={ctaImageRef}
          className="absolute inset-0 w-full h-[110%] bg-cover bg-center will-change-transform"
          style={{
            backgroundImage:
              `url(${investImg2})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative z-10 text-white text-center max-w-4xl px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Long-Term Value. Smart Investment. Peaceful Living.

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-3xl">📈</span> Future Appreciation
              </h3>
              <p className="text-white/80">Plots located in rapidly developing areas with excellent potential for long-term value growth.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-3xl">🌿</span>Planned Township Living
              </h3>
              <p className="text-white/80">Wide roads, green surroundings, and modern infrastructure designed for a peaceful lifestyle.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-3xl">🔒</span>Secure & Transparent Investment
              </h3>
              <p className="text-white/80">Clear documentation and trusted development ensuring complete peace of mind for buyers.</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl transition"
          >
            Schedule a Site Visit
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER (optional, minimal) */}
      {/* <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <p>© 2025 Prestige Real Estate Investments. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default RealEstateInvestmentPage;