export type ConsentStatus = 'granted' | 'denied';

export const CONSENT_KEY = 'morismetrics_cookie_consent';
export const CONSENT_CHANGE_EVENT = 'cookie-consent-change';
export const OPEN_CONSENT_EVENT = 'open-cookie-consent';

export function getConsent(): ConsentStatus | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(status: ConsentStatus): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, status);
  } catch {
    // Storage unavailable; consent applies for this page view only.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: status }));
}
