import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  // GSAP animations (parallax and scroll-triggered effects)
  useEffect(() => {
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

    // Clean up ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
    <div className="bg-neutral-50 text-gray-800 font-sans antialiased overflow-x-hidden">
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
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
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
            Smart Real Estate Investments
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10">
            Unlock premium opportunities with high-growth potential in prime locations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition"
          >
            Explore Opportunities
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
          Investment Opportunities
        </motion.h2>
        <motion.p variants={fadeUp} className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Choose from a curated selection of high-yield real estate assets.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Residential",
              desc: "Luxury apartments and villas in urban hubs with strong rental demand.",
              image:
                "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Commercial",
              desc: "Office spaces and retail centers in thriving business districts.",
              image:
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Plots",
              desc: "Undervalued land parcels with high appreciation potential.",
              image:
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
              title: "Luxury Villas",
              desc: "Exclusive waterfront and hillside estates for elite investors.",
              image:
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <div className="mt-4 text-amber-600 font-medium">Learn more →</div>
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
            Why Invest With Us
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Unmatched expertise and a track record of delivering exceptional returns.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "High ROI", desc: "Average annual returns of 12-18% across portfolios.", icon: "📈" },
              { title: "Trusted Developer", desc: "20+ years of excellence with 50+ completed projects.", icon: "🏆" },
              { title: "Prime Locations", desc: "Properties in the most sought-after neighborhoods.", icon: "📍" },
              { title: "Secure Investment", desc: "Fully compliant, insured, and legally vetted assets.", icon: "🛡️" },
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
            Investment Plans & ROI
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Flexible entry points designed for both new and seasoned investors.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                minInvestment: "$50,000",
                roi: "10-12%",
                features: ["Residential units", "Rental income", "3-year term"],
              },
              {
                name: "Growth",
                minInvestment: "$150,000",
                roi: "13-16%",
                features: ["Mix of residential & commercial", "Quarterly payouts", "5-year term"],
                popular: true,
              },
              {
                name: "Premium",
                minInvestment: "$300,000",
                roi: "17-20%",
                features: ["Luxury villas & plots", "Capital appreciation focus", "7-year term"],
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className={`relative bg-white rounded-2xl shadow-xl p-8 border ${
                  plan.popular ? "border-amber-400 ring-2 ring-amber-200" : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-4xl font-light text-amber-700 mb-4">{plan.minInvestment}</p>
                <p className="text-lg mb-4">
                  Expected ROI: <span className="font-bold text-green-600">{plan.roi}</span>
                </p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="text-amber-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition">
                  Select Plan
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
              "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
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
            Long‑term growth. Passive income. Peace of mind.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-3xl">📈</span> Appreciation
              </h3>
              <p className="text-white/80">Properties in high-growth corridors with 2x value potential.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-3xl">💰</span> Rental Income
              </h3>
              <p className="text-white/80">Steady monthly cash flow from premium tenants.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <span className="text-3xl">🔒</span> Tax Advantages
              </h3>
              <p className="text-white/80">Depreciation and 1031 exchange benefits for investors.</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl transition"
          >
            Schedule Investment Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER (optional, minimal) */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        <p>© 2025 Prestige Real Estate Investments. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RealEstateInvestmentPage;