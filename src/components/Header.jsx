import React from 'react';
import logo from './logo-white.png'; // Make sure this is correct path

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-black text-white shadow-md">
      {/* Logo on Left */}
      <div className="flex items-center">
        <img src={logo} alt="TEDxIIMT Logo" className="h-10" />
      </div>

      {/* Navigation Links on Right */}
      <nav className="flex gap-6 text-sm md:text-base font-medium">
        <a href="#events" className="hover:text-red-500 transition">Events</a>
        <a href="#speakers" className="hover:text-red-500 transition">Speakers</a>
        <a href="#about" className="hover:text-red-500 transition">About</a>
        <a href="#contact" className="hover:text-red-500 transition">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
