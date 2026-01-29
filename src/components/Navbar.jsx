import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * 
 * Responsive navigation bar with:
 * - Logo/Brand name
 * - Navigation links with active state styling
 * - Mobile hamburger menu
 * - Accessibility features
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggle mobile menu
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Close mobile menu when a link is clicked
   */
  const closeMenu = () => {
    setIsOpen(false);
  };

  /**
   * Navigation links configuration
   */
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Brand
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                    isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors font-medium ${
                    isActive ? 'text-blue-600 bg-blue-50' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
