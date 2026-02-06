import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import MissionVision from '../components/MissionVision';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <MissionVision />
      <Contact />
    </>
  );
}