import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-ocean to-ocean"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-teal/10 text-teal text-sm font-semibold mb-6 border border-teal/20">
          🚀 Now Accepting Beta Partners
        </span>

        <h1 className="text-5xl md:text-7xl font-sans font-bold mb-6 leading-tight">
          Your Business Health, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-cyan-400 to-blue-500">Delivered Daily.</span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate">
          The first <strong>"Zero-Touch"</strong> Business Intelligence Platform for Mauritian SMEs.
          We connect to your systems automatically—no manual data entry required.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-teal text-ocean px-8 py-4 rounded-lg font-bold text-lg hover:bg-tealLight transition duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)] text-center"
          >
            Get Your Dashboard
          </a>
          <a
            href="#how-it-works"
            className="bg-surface text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition border border-white/10 text-center"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;