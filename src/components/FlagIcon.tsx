import React from 'react';

interface FlagIconProps {
  countryCode: string;
  className?: string;
  title?: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({ countryCode, className = "w-8 h-5", title }) => {
  const code = countryCode.toUpperCase();

  switch (code) {
    case 'LK': // Sri Lanka
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Sri Lanka Flag"}>
          <rect width="60" height="40" fill="#ECA100" />
          <rect x="2" y="2" width="56" height="36" fill="#17243A" />
          {/* Green & Orange stripes */}
          <rect x="4" y="4" width="7" height="32" fill="#005A36" />
          <rect x="11" y="4" width="7" height="32" fill="#DF6B00" />
          {/* Maroon field */}
          <rect x="20" y="4" width="36" height="32" fill="#8D153A" />
          {/* 4 Bo leaves corners */}
          <circle cx="23" cy="7" r="1.5" fill="#ECA100" />
          <circle cx="53" cy="7" r="1.5" fill="#ECA100" />
          <circle cx="23" cy="33" r="1.5" fill="#ECA100" />
          <circle cx="53" cy="33" r="1.5" fill="#ECA100" />
          {/* Golden Lion with Sword motif */}
          <path d="M44 14 L49 14 M48 11 L48 17 M32 24 C32 18 36 17 40 17 C44 17 46 20 46 23 C46 26 43 28 39 28 L35 28 L33 32 L31 32 L33 26 Z" fill="#ECA100" />
          <circle cx="43" cy="18" r="1" fill="#8D153A" />
        </svg>
      );

    case 'GB': // United Kingdom
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "United Kingdom Flag"}>
          <rect width="60" height="40" fill="#012169" />
          {/* St Andrew & St Patrick saltires */}
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFF" strokeWidth="8" />
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="3" />
          {/* St George's cross */}
          <path d="M30 0 L30 40 M0 20 L60 20" stroke="#FFF" strokeWidth="12" />
          <path d="M30 0 L30 40 M0 20 L60 20" stroke="#C8102E" strokeWidth="7" />
        </svg>
      );

    case 'FR': // France
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "France Flag"}>
          <rect x="0" y="0" width="20" height="40" fill="#002654" />
          <rect x="20" y="0" width="20" height="40" fill="#FFFFFF" />
          <rect x="40" y="0" width="20" height="40" fill="#ED2939" />
        </svg>
      );

    case 'DE': // Germany
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Germany Flag"}>
          <rect x="0" y="0" width="60" height="13.33" fill="#000000" />
          <rect x="0" y="13.33" width="60" height="13.33" fill="#DD0000" />
          <rect x="0" y="26.66" width="60" height="13.34" fill="#FFCC00" />
        </svg>
      );

    case 'JP': // Japan
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Japan Flag"}>
          <rect width="60" height="40" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.5" />
          <circle cx="30" cy="20" r="12" fill="#BC002D" />
        </svg>
      );

    case 'US': // United States
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "United States Flag"}>
          {/* 13 Stripes */}
          {[...Array(13)].map((_, i) => (
            <rect key={i} x="0" y={(i * 40) / 13} width="60" height={40 / 13 + 0.2} fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
          ))}
          {/* Blue Canton */}
          <rect x="0" y="0" width="25" height="21.5" fill="#3C3B6E" />
          {/* Simplified stars cluster */}
          <circle cx="6" cy="5" r="1" fill="#FFF" />
          <circle cx="12" cy="5" r="1" fill="#FFF" />
          <circle cx="18" cy="5" r="1" fill="#FFF" />
          <circle cx="9" cy="11" r="1" fill="#FFF" />
          <circle cx="15" cy="11" r="1" fill="#FFF" />
          <circle cx="6" cy="16" r="1" fill="#FFF" />
          <circle cx="12" cy="16" r="1" fill="#FFF" />
          <circle cx="18" cy="16" r="1" fill="#FFF" />
        </svg>
      );

    case 'CA': // Canada
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Canada Flag"}>
          <rect x="0" y="0" width="15" height="40" fill="#FF0000" />
          <rect x="15" y="0" width="30" height="40" fill="#FFFFFF" />
          <rect x="45" y="0" width="15" height="40" fill="#FF0000" />
          {/* Maple Leaf */}
          <path d="M30 10 L32 17 L36 15 L35 20 L40 22 L37 25 L38 27 L32 26 L31 31 L29 31 L28 26 L22 27 L23 25 L20 22 L25 20 L24 15 L28 17 Z" fill="#FF0000" />
        </svg>
      );

    case 'IN': // India
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "India Flag"}>
          <rect x="0" y="0" width="60" height="13.33" fill="#FF9933" />
          <rect x="0" y="13.33" width="60" height="13.33" fill="#FFFFFF" />
          <rect x="0" y="26.66" width="60" height="13.34" fill="#138808" />
          {/* Ashoka Chakra */}
          <circle cx="30" cy="20" r="5" fill="none" stroke="#000080" strokeWidth="1" />
          <circle cx="30" cy="20" r="1" fill="#000080" />
        </svg>
      );

    case 'AU': // Australia
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Australia Flag"}>
          <rect width="60" height="40" fill="#00008B" />
          {/* Mini Union Jack */}
          <rect width="28" height="20" fill="#012169" />
          <path d="M0 0 L28 20 M28 0 L0 20" stroke="#FFF" strokeWidth="4" />
          <path d="M0 0 L28 20 M28 0 L0 20" stroke="#C8102E" strokeWidth="1.5" />
          <path d="M14 0 L14 20 M0 10 L28 10" stroke="#FFF" strokeWidth="6" />
          <path d="M14 0 L14 20 M0 10 L28 10" stroke="#C8102E" strokeWidth="3" />
          {/* Commonwealth Star */}
          <circle cx="14" cy="30" r="3.5" fill="#FFF" />
          {/* Southern Cross stars */}
          <circle cx="45" cy="8" r="1.5" fill="#FFF" />
          <circle cx="48" cy="18" r="1.5" fill="#FFF" />
          <circle cx="40" cy="22" r="1.5" fill="#FFF" />
          <circle cx="45" cy="32" r="2" fill="#FFF" />
          <circle cx="43" cy="24" r="1" fill="#FFF" />
        </svg>
      );

    case 'IT': // Italy
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Italy Flag"}>
          <rect x="0" y="0" width="20" height="40" fill="#009246" />
          <rect x="20" y="0" width="20" height="40" fill="#FFFFFF" />
          <rect x="40" y="0" width="20" height="40" fill="#CE2B37" />
        </svg>
      );

    case 'ES': // Spain
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Spain Flag"}>
          <rect x="0" y="0" width="60" height="10" fill="#AA151B" />
          <rect x="0" y="10" width="60" height="20" fill="#F1BF00" />
          <rect x="0" y="30" width="60" height="10" fill="#AA151B" />
          {/* Coat of arms emblem */}
          <circle cx="18" cy="20" r="4.5" fill="#AA151B" />
          <circle cx="18" cy="20" r="3" fill="#F1BF00" />
        </svg>
      );

    case 'BR': // Brazil
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Brazil Flag"}>
          <rect width="60" height="40" fill="#009739" />
          <polygon points="30,4 56,20 30,36 4,20" fill="#FEDD00" />
          <circle cx="30" cy="20" r="7.5" fill="#012169" />
          <path d="M24 21 C27 18 33 18 36 21" stroke="#FFF" strokeWidth="1" fill="none" />
        </svg>
      );

    case 'ZA': // South Africa
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "South Africa Flag"}>
          <rect width="60" height="20" fill="#E03C31" />
          <rect y="20" width="60" height="20" fill="#001489" />
          {/* White & Green Y pall */}
          <polygon points="0,0 24,20 0,40" fill="#000000" />
          <polygon points="0,0 6,0 26,17 60,17 60,23 26,23 6,40 0,40" fill="#FFFFFF" />
          <polygon points="0,3 4,3 24,20 4,37 0,37" fill="#FFB81C" />
          <polygon points="0,5 21,20 0,35" fill="#000000" />
          <path d="M0 0 L25 18 L60 18 L60 22 L25 22 L0 40" stroke="#007749" strokeWidth="5" fill="none" />
        </svg>
      );

    case 'KR': // South Korea
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "South Korea Flag"}>
          <rect width="60" height="40" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.5" />
          {/* Taegeuk */}
          <path d="M30 13 A7 7 0 0 1 30 27 A3.5 3.5 0 0 1 30 20 A3.5 3.5 0 0 0 30 13" fill="#CD2E3A" />
          <path d="M30 27 A7 7 0 0 1 30 13 A3.5 3.5 0 0 1 30 20 A3.5 3.5 0 0 0 30 27" fill="#0047A0" />
          {/* Trigrams bars */}
          <rect x="14" y="9" width="5" height="1.2" fill="#000" transform="rotate(35 14 9)" />
          <rect x="14" y="11" width="5" height="1.2" fill="#000" transform="rotate(35 14 11)" />
          <rect x="42" y="27" width="5" height="1.2" fill="#000" transform="rotate(35 42 27)" />
          <rect x="42" y="29" width="5" height="1.2" fill="#000" transform="rotate(35 42 29)" />
        </svg>
      );

    case 'CN': // China
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "China Flag"}>
          <rect width="60" height="40" fill="#DE2910" />
          {/* Big Star */}
          <polygon points="10,4 11.5,8.8 16.5,8.8 12.5,11.8 14,16.5 10,13.5 6,16.5 7.5,11.8 3.5,8.8 8.5,8.8" fill="#FFDE00" />
          {/* 4 Smaller Stars pointing to center */}
          <polygon points="20,3 20.6,4.8 22.5,4.8 21,6 21.6,7.8 20,6.6 18.4,7.8 19,6 17.5,4.8 19.4,4.8" fill="#FFDE00" transform="rotate(23 20 5)" />
          <polygon points="24,7 24.6,8.8 26.5,8.8 25,10 25.6,11.8 24,10.6 22.4,11.8 23,10 21.5,8.8 23.4,8.8" fill="#FFDE00" transform="rotate(45 24 9)" />
          <polygon points="24,14 24.6,15.8 26.5,15.8 25,17 25.6,18.8 24,17.6 22.4,18.8 23,17 21.5,15.8 23.4,15.8" fill="#FFDE00" />
          <polygon points="20,19 20.6,20.8 22.5,20.8 21,22 21.6,23.8 20,22.6 18.4,23.8 19,22 17.5,20.8 19.4,20.8" fill="#FFDE00" transform="rotate(20 20 21)" />
        </svg>
      );

    case 'SE': // Sweden
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Sweden Flag"}>
          <rect width="60" height="40" fill="#006AA7" />
          <rect x="18" y="0" width="8" height="40" fill="#FECC00" />
          <rect x="0" y="16" width="60" height="8" fill="#FECC00" />
        </svg>
      );

    case 'CH': // Switzerland
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Switzerland Flag"}>
          <rect width="60" height="40" fill="#D52B1E" />
          <rect x="26" y="10" width="8" height="20" fill="#FFFFFF" />
          <rect x="20" y="16" width="20" height="8" fill="#FFFFFF" />
        </svg>
      );

    case 'AR': // Argentina
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Argentina Flag"}>
          <rect x="0" y="0" width="60" height="13.33" fill="#75AADB" />
          <rect x="0" y="13.33" width="60" height="13.33" fill="#FFFFFF" />
          <rect x="0" y="26.66" width="60" height="13.34" fill="#75AADB" />
          {/* Sun of May */}
          <circle cx="30" cy="20" r="3.5" fill="#F6B40E" />
          <circle cx="30" cy="20" r="4.5" fill="none" stroke="#85340A" strokeWidth="0.5" />
        </svg>
      );

    case 'EG': // Egypt
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Egypt Flag"}>
          <rect x="0" y="0" width="60" height="13.33" fill="#CE1126" />
          <rect x="0" y="13.33" width="60" height="13.33" fill="#FFFFFF" />
          <rect x="0" y="26.66" width="60" height="13.34" fill="#000000" />
          <circle cx="30" cy="20" r="3" fill="#C09300" />
        </svg>
      );

    case 'MX': // Mexico
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Mexico Flag"}>
          <rect x="0" y="0" width="20" height="40" fill="#006847" />
          <rect x="20" y="0" width="20" height="40" fill="#FFFFFF" />
          <rect x="40" y="0" width="20" height="40" fill="#CE1126" />
          <circle cx="30" cy="20" r="3.5" fill="#996633" />
        </svg>
      );

    case 'GR': // Greece
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Greece Flag"}>
          {[...Array(9)].map((_, i) => (
            <rect key={i} x="0" y={(i * 40) / 9} width="60" height={40 / 9 + 0.3} fill={i % 2 === 0 ? "#0D5EAF" : "#FFFFFF"} />
          ))}
          <rect x="0" y="0" width="22" height="22" fill="#0D5EAF" />
          <rect x="9" y="0" width="4" height="22" fill="#FFFFFF" />
          <rect x="0" y="9" width="22" height="4" fill="#FFFFFF" />
        </svg>
      );

    case 'NL': // Netherlands
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Netherlands Flag"}>
          <rect x="0" y="0" width="60" height="13.33" fill="#AE1C28" />
          <rect x="0" y="13.33" width="60" height="13.33" fill="#FFFFFF" />
          <rect x="0" y="26.66" width="60" height="13.34" fill="#21468B" />
        </svg>
      );

    case 'NO': // Norway
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Norway Flag"}>
          <rect width="60" height="40" fill="#BA0C2F" />
          <rect x="18" y="0" width="10" height="40" fill="#FFFFFF" />
          <rect x="0" y="15" width="60" height="10" fill="#FFFFFF" />
          <rect x="20.5" y="0" width="5" height="40" fill="#00205B" />
          <rect x="0" y="17.5" width="60" height="5" fill="#00205B" />
        </svg>
      );

    case 'JM': // Jamaica
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Jamaica Flag"}>
          <rect width="60" height="40" fill="#000000" />
          <polygon points="0,0 30,20 60,0" fill="#007749" />
          <polygon points="0,40 30,20 60,40" fill="#007749" />
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FED100" strokeWidth="6" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 60 40" className={className} role="img" aria-label={title || "Flag"}>
          <rect width="60" height="40" fill="#304F7D" />
          <circle cx="30" cy="20" r="8" fill="#C7A76C" />
          <text x="30" y="24" fontSize="10" fill="#FAF7F0" textAnchor="middle" fontWeight="bold">{code}</text>
        </svg>
      );
  }
};
