'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { CONSENT_CHANGE_EVENT, getConsent } from '@/lib/consent';
import { GA_ID, setAnalyticsEnabled } from '@/lib/analytics';

// Loads GA only after the visitor has accepted cookies.
const GoogleAnalytics: React.FC = () => {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const sync = () => {
      const isGranted = getConsent() === 'granted';
      setAnalyticsEnabled(isGranted);
      setGranted(isGranted);
    };
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
  }, []);

  if (!GA_ID || !granted) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
