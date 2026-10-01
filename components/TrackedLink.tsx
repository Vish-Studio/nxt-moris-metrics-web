'use client';

import React from 'react';
import { trackEvent } from '@/lib/analytics';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, string | number | boolean>;
};

const TrackedLink: React.FC<Props> = ({ eventName, eventParams, onClick, ...rest }) => (
  <a
    {...rest}
    onClick={(e) => {
      trackEvent(eventName, eventParams);
      onClick?.(e);
    }}
  />
);

export default TrackedLink;
