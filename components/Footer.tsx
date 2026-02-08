import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1222] border-t border-[rgba(255,255,255,0.05)] py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row: Logo + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Logo className="h-8 w-8" withText={true} />

          {/* Connect with us + Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-slate text-sm">Connect with us</span>
            <a href="#" className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-slate hover:text-teal hover:border-teal hover:bg-[rgba(20,184,166,0.1)] hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-linkedin text-lg"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-slate hover:text-teal hover:border-teal hover:bg-[rgba(20,184,166,0.1)] hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-facebook text-lg"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.1)] my-8"></div>

        {/* Bottom Row: Copyright + Built by + Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate text-sm">
          <p>&copy; 2026 MorisMetrics. All rights reserved.</p>
          <p>Built by <strong className="text-white">VISH Studio</strong></p>
          <a href="#" className="hover:text-teal transition">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;