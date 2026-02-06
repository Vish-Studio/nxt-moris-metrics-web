import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep pt-16 pb-8 relative overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <Logo className="h-10 w-10" withText={true} />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate/40 font-medium hidden sm:inline-block">Connect with us</span>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-slate hover:border-teal/50 hover:text-teal hover:bg-teal/5 transition-all duration-300">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-surface border border-white/5 flex items-center justify-center text-slate hover:border-teal/50 hover:text-teal hover:bg-teal/5 transition-all duration-300">
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-slate/50 order-2 md:order-1">
            &copy; 2026 MorisMetrics. All rights reserved.
          </div>

          <div className="order-1 md:order-2 group flex items-center gap-1 text-xs tracking-wide text-slate/30 hover:text-slate/50 transition-colors duration-300 cursor-default">
            <span>Built by</span>
            <span className="font-semibold text-slate/50 group-hover:text-teal transition-colors">VISH Studio</span>
          </div>

          <a href="#" className="text-slate/50 hover:text-white transition-colors order-3">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;