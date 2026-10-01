export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// No-op until GA has loaded, which only happens after the visitor accepts cookies.
export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === 'undefined' || !GA_ID) return;
  if ((window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`]) return;
  window.gtag?.('event', name, params);
}

export function setAnalyticsEnabled(enabled: boolean): void {
  if (!GA_ID) return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] = !enabled;
}
