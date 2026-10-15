import React from 'react';

export const CornerFlourish: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = "w-10 h-10 md:w-14 md:h-14 text-antique-gold" }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`pointer-events-none select-none ${rotationClass} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-antique-gold"
      >
        {/* Outer corner angle */}
        <path
          d="M2 32 L2 2 L32 2"
          stroke="#C7A76C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Inner parallel line */}
        <path
          d="M6 24 L6 6 L24 6"
          stroke="#C7A76C"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        {/* Corner leaf & scroll scrollwork */}
        <path
          d="M2 2 C12 2 18 8 20 20 C22 10 28 4 40 2 C28 6 22 14 20 20 C18 28 14 36 2 40 C6 28 14 22 20 20"
          fill="#C7A76C"
          fillOpacity="0.85"
        />
        <circle cx="2" cy="2" r="2.5" fill="#C7A76C" />
        <circle cx="22" cy="22" r="2" fill="#C7A76C" />
        <path
          d="M12 12 Q18 4 28 6 Q16 16 12 12 Z"
          fill="#C7A76C"
          fillOpacity="0.6"
        />
      </svg>
    </div>
  );
};

export const GoldDivider: React.FC<{ className?: string; subtitle?: string }> = ({
  className = "my-4",
  subtitle,
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C7A76C] to-[#C7A76C]/60" />
      <div className="flex items-center gap-1.5 text-[#C7A76C]">
        <span className="inline-block w-1 h-1 rounded-full bg-[#C7A76C]" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#C7A76C]">
          <path
            d="M12 2 L15 9 L22 12 L15 15 L12 22 L9 15 L2 12 L9 9 Z"
            fill="#C7A76C"
          />
        </svg>
        <span className="inline-block w-1 h-1 rounded-full bg-[#C7A76C]" />
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C7A76C] to-[#C7A76C]/60" />
      {subtitle && (
        <span className="sr-only">{subtitle}</span>
      )}
    </div>
  );
};

export const SchoolEmblemBadge: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center p-0.5 rounded-full bg-white shadow-md border-2 border-[#C7A76C] ${className}`}>
      <img
        src="/school-logo.png"
        alt="Official Crest of Kuliyapitiya Central College"
        className="w-full h-full object-contain rounded-full select-none"
        loading="eager"
      />
    </div>
  );
};
