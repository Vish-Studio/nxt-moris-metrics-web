'use client';

import React, { useEffect, useState } from 'react';
import {
  OPEN_CONSENT_EVENT,
  getConsent,
  setConsent,
  type ConsentStatus,
} from '@/lib/consent';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  const choose = (status: ConsentStatus) => {
    setConsent(status);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 bg-surface border border-[rgba(255,255,255,0.1)] rounded-xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-9 h-9 rounded-full bg-teal/10 border border-teal/20 flex items-center justify-center text-teal">
          <i className="fa-solid fa-cookie-bite"></i>
        </span>
        <h2 className="text-lg font-bold text-white">We value your privacy</h2>
      </div>
      <p className="text-sm text-slate leading-relaxed">
        We use analytics cookies to understand how visitors use our site and to improve it.
        You can accept or decline; the site works the same either way.
      </p>
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => choose('granted')}
          className="flex-1 bg-teal text-ocean px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-tealLight hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.3)]"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose('denied')}
          className="flex-1 bg-ocean text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.25)] transition-all duration-300 border border-[rgba(255,255,255,0.1)]"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
