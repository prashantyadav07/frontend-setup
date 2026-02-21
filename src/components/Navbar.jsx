import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 items-center px-10 py-3 max-w-[1600px] mx-auto">

        {/* LEFT - Nav Links */}
        <div className="flex items-center gap-10">
          {["Home", "About", "Investments"].map((label) => (
            <NavLink
              key={label}
              to={`/${label.toLowerCase()}`}
              className={({ isActive }) =>
                `text-[11px] font-light tracking-[0.25em] uppercase transition-all duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`
              }
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CENTER - Brand */}
        <div className="flex flex-col items-center justify-center text-center leading-none gap-[6px]">
          <span
            className="text-[9px] tracking-[0.35em] uppercase text-gray-400 font-light"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            The
          </span>
          <NavLink
            to="/"
            className="text-[18px] font-light tracking-[0.3em] uppercase text-white whitespace-nowrap"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Real Estate Fund
          </NavLink>
          <span
            className="text-[9px] tracking-[0.35em] uppercase text-gray-400 font-light"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Est. 2023
          </span>
        </div>

        {/* RIGHT - Team, Contact, Phone */}
        <div className="flex items-center justify-end gap-3">
          <NavLink
            to="/team"
            className={({ isActive }) =>
              `text-[11px] font-light tracking-[0.25em] uppercase px-4 py-[6px] border transition-all duration-300 ${
                isActive
                  ? "border-white/60 text-white"
                  : "border-white/30 text-gray-300 hover:border-white/70 hover:text-white"
              }`
            }
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[11px] font-light tracking-[0.25em] uppercase px-4 py-[6px] border transition-all duration-300 ${
                isActive
                  ? "border-white/60 text-white"
                  : "border-white/30 text-gray-300 hover:border-white/70 hover:text-white"
              }`
            }
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Contact
          </NavLink>
          <a
            href="tel:9494168733"
            className="text-[11px] font-light tracking-[0.2em] px-4 py-[6px] border border-white/30 text-gray-300 hover:border-white/70 hover:text-white transition-all duration-300"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            949-416-8733
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        <div className="flex flex-col items-start leading-none gap-[4px]">
          <span
            className="text-[8px] tracking-[0.35em] uppercase text-gray-400"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            The
          </span>
          <NavLink
            to="/"
            className="text-[14px] font-light tracking-[0.25em] uppercase text-white"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Real Estate Fund
          </NavLink>
          <span
            className="text-[8px] tracking-[0.35em] uppercase text-gray-400"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Est. 2023
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {["Home", "About", "Investments", "Team", "Contact"].map((label) => (
                <NavLink
                  key={label}
                  to={`/${label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-sm tracking-[0.3em] uppercase font-light transition-all ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                  style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="tel:9494168733"
                className="text-sm tracking-[0.2em] text-gray-400 hover:text-white border border-white/20 px-6 py-2"
                style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              >
                949-416-8733
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;