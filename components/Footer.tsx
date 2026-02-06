import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ocean border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <Logo className="h-8 w-8" withText={true} />

        {/* Copyright */}
        <div className="text-slate text-sm text-center md:text-left">
          &copy; 2026 MorisMetrics. All rights reserved. | <a href="#" className="hover:text-teal transition">Privacy Policy</a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="#" className="text-slate hover:text-teal transition">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="#" className="text-slate hover:text-teal transition">
            <i className="fa-brands fa-facebook text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;