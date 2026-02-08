import React from 'react';

const HowItWorks: React.FC = () => {
  const problems = [
    "No more late nights typing receipts.",
    "No more guessing your inventory levels.",
    "No more waiting for end-of-month reports."
  ];

  const solutions = [
    {
      icon: "fa-plug",
      title: "1. We Connect",
      description: "We link securely to your POS, Xero, QuickBooks, or email reports. We handle the technical setup."
    },
    {
      icon: "fa-robot",
      title: "2. We Automate",
      description: "Our engine fetches your data every night while you sleep. No manual input required."
    },
    {
      icon: "fa-chart-line",
      title: "3. You Visualise",
      description: "Wake up to a clean dashboard on your phone. Plus, an AI summary explaining your profit trends."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: The Problem */}
          <div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6">Stop Drowning in Excel Sheets</h2>
            <p className="text-lg text-slate mb-6">
              Most business owners in Mauritius wait until the end of the month to know their profit.
              Manual data entry leads to errors, wasted time, and a dangerous "Data Lag."
            </p>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-xmark text-red-500 mt-1 mr-3"></i>
                  <span className="text-slate">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: The Solution (Cards) */}
          <div className="grid grid-cols-1 gap-6">
            {solutions.map((sol, index) => (
              <div
                key={index}
                className="bg-ocean p-6 rounded-xl border border-[rgba(20,184,166,0.2)] hover:border-[rgba(20,184,166,0.5)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(20,184,166,0.1)] transition-all duration-300 group"
              >
                <div className="h-12 w-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4 text-teal group-hover:scale-110 transition-transform duration-300">
                  <i className={`fa-solid ${sol.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                <p className="text-slate text-sm">{sol.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;