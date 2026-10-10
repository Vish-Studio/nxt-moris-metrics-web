'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

const SECTION_IDS = ['how-it-works', 'mission', 'contact'];

// Fires section_view once per section when at least 40% of it is visible.
const SectionTracker: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent('section_view', { section: entry.target.id });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return null;
};

export default SectionTracker;
