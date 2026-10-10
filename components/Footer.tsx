import React from 'react';
import Logo from './Logo';
import TrackedLink from './TrackedLink';
import CookieSettingsButton from './CookieSettingsButton';

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
            <TrackedLink eventName="social_click" eventParams={{ network: 'linkedin' }} href="#" className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-slate hover:text-teal hover:border-teal hover:bg-[rgba(20,184,166,0.1)] hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-linkedin text-lg"></i>
            </TrackedLink>
            <TrackedLink eventName="social_click" eventParams={{ network: 'facebook' }} href="#" className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-slate hover:text-teal hover:border-teal hover:bg-[rgba(20,184,166,0.1)] hover:scale-110 transition-all duration-300">
              <i className="fa-brands fa-facebook text-lg"></i>
            </TrackedLink>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.1)] my-8"></div>

        {/* Bottom Row: Copyright + Built by + Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate text-sm">
          <p>Website by <TrackedLink eventName="outbound_click" eventParams={{ label: 'vish_studio' }} href="https://vish-studio.github.io/home/" target="_blank" rel="noopener noreferrer" className="text-teal font-bold hover:text-teal transition-colors duration-300">VISH Studio</TrackedLink></p>
          <p>&copy; 2026 MorisMetrics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-teal transition">Privacy Policy</a>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;