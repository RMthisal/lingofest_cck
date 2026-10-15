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
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        {/* Outer ornamental rings */}
        <circle cx="50" cy="50" r="46" fill="#17243A" stroke="#C7A76C" strokeWidth="2" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#C7A76C" strokeWidth="0.8" strokeDasharray="3 2" />
        <circle cx="50" cy="50" r="38" fill="#1E2F4C" stroke="#C7A76C" strokeWidth="1" />
        
        {/* Laurel Wreath */}
        <path
          d="M26 58 C22 46 25 34 35 25 M74 58 C78 46 75 34 65 25"
          fill="none"
          stroke="#C7A76C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Open Book in center */}
        <path
          d="M50 42 C44 38 36 38 30 40 L30 60 C36 58 44 58 50 62 C56 58 64 58 70 60 L70 40 C64 38 56 38 50 42 Z"
          fill="#FAF7F0"
          stroke="#C7A76C"
          strokeWidth="1"
        />
        <line x1="50" y1="42" x2="50" y2="62" stroke="#C7A76C" strokeWidth="1.2" />
        
        {/* Quills / Rays */}
        <line x1="50" y1="20" x2="50" y2="34" stroke="#C7A76C" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="50" cy="18" r="2.5" fill="#C7A76C" />
        
        {/* Banner text or symbols */}
        <text
          x="50"
          y="76"
          textAnchor="middle"
          fontSize="7"
          fontFamily="Cinzel, serif"
          fontWeight="bold"
          letterSpacing="1"
          fill="#C7A76C"
        >
          K.C.C.
        </text>
        <text
          x="50"
          y="84"
          textAnchor="middle"
          fontSize="5.5"
          fontFamily="Inter, sans-serif"
          fill="#FAF7F0"
          letterSpacing="0.5"
        >
          LANGUAGE CLUB
        </text>
      </svg>
    </div>
  );
};
