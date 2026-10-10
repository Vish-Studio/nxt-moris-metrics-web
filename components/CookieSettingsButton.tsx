'use client';

import React from 'react';
import { OPEN_CONSENT_EVENT } from '@/lib/consent';

const CookieSettingsButton: React.FC = () => (
  <button
    type="button"
    onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
    className="hover:text-teal transition"
  >
    Cookie Settings
  </button>
);

export default CookieSettingsButton;
