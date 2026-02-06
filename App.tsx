import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-ocean min-h-screen text-white font-sans antialiased selection:bg-teal selection:text-ocean">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;