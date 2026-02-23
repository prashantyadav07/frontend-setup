import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, ScrollText, TrendingUp, Users, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // On home page, wait for the intro to start revealing content (Home text starts at 2s)
  // We'll use a smooth framer-motion entrance instead of a hard toggle
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Scroll effect for dynamic width
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split links for balanced desktop layout (Left & Right)
  const leftLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: ScrollText },
    { label: 'Investments', path: '/investments', icon: TrendingUp },
  ];

  const rightLinks = [
    { label: 'Team', path: '/team', icon: Users },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  // Combine for mobile drawer
  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay: isHomePage ? 2.8 : 0,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="fixed top-6 sm:top-8 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none"
    >
      <div className={`
        bg-white/95 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] rounded-2xl px-5 sm:px-8 py-3 sm:py-4 transition-all duration-500 pointer-events-auto w-[96%] sm:w-[95%]
        ${scrolled ? 'max-w-7xl' : 'max-w-[1400px]'}
      `}>

        {/* ======================================= */}
        {/* DESKTOP LAYOUT (Perfect 3-Column Grid)  */}
        {/* ======================================= */}
        <div className="hidden lg:grid grid-cols-3 items-center w-full">

          {/* Left: Navigation Links */}
          <div className="flex items-center gap-6 xl:gap-8 justify-start">
            {leftLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="flex items-center gap-1.5 text-[10px] xl:text-[11px] font-bold tracking-widest uppercase transition-colors group text-gray-500 relative py-1"
              >
                {({ isActive }) => (
                  <>
                    <link.icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-black' : 'group-hover:text-black'}`} />
                    <span className={isActive ? 'text-black' : 'group-hover:text-black'}>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Center: Brand Logo */}
          <div className="flex justify-center">
            <NavLink
              to="/"
              className="flex flex-col items-center justify-center text-center leading-none gap-[4px] group"
            >
              <span
                className="text-[9px] xl:text-[10px] tracking-[0.35em] uppercase text-gray-400 font-light"
              >
                The
              </span>
              <span
                className="text-[17px] xl:text-[20px] font-semibold tracking-[0.25em] xl:tracking-[0.3em] uppercase text-black whitespace-nowrap group-hover:text-gray-700 transition-colors"
              >
                River Green
              </span>
              <span
                className="text-[8px] xl:text-[9px] tracking-[0.35em] uppercase text-gray-400 font-light"
              >
                Est. 2023
              </span>
            </NavLink>
          </div>

          {/* Right: Navigation Links & CTA */}
          <div className="flex items-center gap-6 xl:gap-8 justify-end">
            {rightLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="flex items-center gap-1.5 text-[10px] xl:text-[11px] font-bold tracking-widest uppercase transition-colors group text-gray-500 relative py-1"
              >
                {({ isActive }) => (
                  <>
                    <link.icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-black' : 'group-hover:text-black'}`} />
                    <span className={isActive ? 'text-black' : 'group-hover:text-black'}>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-black rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Phone Button */}
            <a
              href="tel:9494168733"
              className="px-6 py-2.5 bg-white border border-gray-200 rounded-full font-bold text-[10px] xl:text-[11px] tracking-widest text-black hover:bg-black hover:text-white transition-all uppercase flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              949-416-8733
            </a>
          </div>

        </div>

        {/* ======================================= */}
        {/* MOBILE & TABLET LAYOUT (< lg screens) */}
        {/* ======================================= */}
        <div className="flex lg:hidden items-center justify-between w-full">
          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors pointer-events-auto text-black"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Brand */}
          <NavLink to="/" className="flex flex-col items-center text-center leading-none gap-[4px]">
            <span className="text-[7px] tracking-[0.35em] uppercase text-gray-400">
              The
            </span>
            <span className="text-[14px] sm:text-[16px] font-semibold tracking-[0.2em] uppercase text-black whitespace-nowrap">
              River Green
            </span>
          </NavLink>

          {/* Mobile Phone Icon */}
          <a href="tel:9494168733" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all text-black">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

      </div>

      {/* ======================================= */}
      {/* MOBILE MENU DRAWER PORTAL               */}
      {/* ======================================= */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9990] lg:hidden"
              />

              {/* Side Sheet */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[9999] shadow-2xl lg:hidden overflow-y-auto"
              >
                <div className="p-6 flex flex-col h-full">

                  {/* Drawer Header */}
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex flex-col items-start leading-none gap-[4px]">
                      <span className="text-[8px] tracking-[0.35em] uppercase text-gray-400">The</span>
                      <span className="text-[15px] font-semibold tracking-[0.2em] uppercase text-black">River Green Colony</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <X className="w-6 h-6 text-black" />
                    </button>
                  </div>

                  {/* Drawer Links */}
                  <div className="flex flex-col gap-3">
                    {allLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-4 px-4 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${isActive
                            ? 'bg-black text-white shadow-md'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <link.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                            {link.label}
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>

                  {/* Drawer Footer CTA */}
                  <div className="mt-auto pt-8 border-t border-gray-100 space-y-6">
                    <a
                      href="tel:9494168733"
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center justify-center gap-3 py-4 bg-black text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors shadow-lg"
                    >
                      <Phone className="w-4 h-4" /> 949-416-8733
                    </a>
                    <div className="text-center">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">Est. 2023 • Investment Group</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.nav>
  );
}