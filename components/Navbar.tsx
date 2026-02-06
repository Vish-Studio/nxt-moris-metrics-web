'use client';

import React, { useState } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Our Mission', href: '#mission' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-ocean/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate hover:text-teal transition"
              >
                {link.name}
              </a>
            ))}
            
            {/* Login Button */}
            <a 
              href="/login" 
              className="bg-surface border border-teal text-teal hover:bg-teal hover:text-ocean px-5 py-2 rounded-full font-semibold transition duration-300 flex items-center"
            >
              <i className="fa-solid fa-lock mr-2"></i> Client Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-teal hover:bg-ocean"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/login" 
              className="block mt-4 mx-3 px-5 py-3 rounded-md text-center bg-teal text-ocean font-bold"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-lock mr-2"></i> Client Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;