import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-ocean relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Who We Are</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-surface rounded-2xl border border-white/5 hover:-translate-y-1 transition duration-300">
            <i className="fa-solid fa-rocket text-4xl text-teal mb-6"></i>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate">
              To democratize business intelligence for Mauritian SMEs. We believe every business owner deserves the same data tools as big corporations, without the complexity or cost.
            </p>
          </div>
          <div className="p-8 bg-surface rounded-2xl border border-white/5 hover:-translate-y-1 transition duration-300">
            <i className="fa-solid fa-eye text-4xl text-teal mb-6"></i>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate">
              A Mauritius where decisions are driven by real-time facts, not guesswork. We envision a future where administrative data entry is a thing of the past.
            </p>
          </div>
        </div>

        <div className="mt-16 text-left bg-gradient-to-r from-surface to-ocean p-8 rounded-xl border border-teal/20">
          <h3 className="text-xl font-bold text-white mb-2">About the Founders</h3>
          <p className="text-slate leading-relaxed">
            Founded by <strong>Keven Vithilinga</strong> and <strong>Vishroy Seenarain</strong>, MorisMetrics was born from a shared frustration. Having worked in corporate environments, we saw how powerful data could be—and how difficult it was for local SMEs to access it. We combined our expertise in Data Strategy and Software Development to build a tool that finally solves the "Excel Trap."
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;