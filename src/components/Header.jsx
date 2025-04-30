import React, { useState } from 'react';
import logo from './logo-white.png'; // Make sure this is correct path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-black text-white shadow-md relative z-50 h-20">
      {/* Logo on Left */}
      <div className="flex items-center">
        <img src={logo || "/placeholder.svg"} alt="TEDxIIMT Logo" className="h-16" />
      </div>

      {/* Hamburger Menu Button (visible on small screens) */}
      <button 
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Desktop Navigation Links (hidden on small screens) */}
      <nav className="hidden md:flex gap-6 text-sm md:text-base font-medium">
        <a href="#events" className="hover:text-red-500 transition ">Events</a>
        <a href="#speakers" className="hover:text-red-500 transition">Speakers</a>
 
        <a href="#contact" className="hover:text-red-500 transition">Contact</a>
      </nav>

      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 shadow-lg md:hidden">
          <div className="flex flex-col p-4">
            <a 
              href="#events" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Events
            </a>
            <a 
              href="#speakers" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              Speakers
            </a>
            <a 
              href="#about" 
              className="py-3 hover:text-red-500 transition border-b border-gray-800"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="py-3 hover:text-red-500 transition"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;