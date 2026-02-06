import React from 'react';

interface LogoProps {
  className?: string;
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-10", withText = true }) => {
  return (
    <div className="flex-shrink-0 flex items-center gap-3">
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 85V25L50 50" className="stroke-white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 50L80 20" className="stroke-teal" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M60 20H80V40" className="stroke-teal" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {withText && (
        <span className="font-serif font-bold text-2xl tracking-tight text-white">
          MorisMetrics
        </span>
      )}
    </div>
  );
};

export default Logo;