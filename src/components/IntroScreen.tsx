import React from 'react';
import { EVENT_DATA, MULTILINGUAL_GLYPHS } from '../data/eventData';
import { CornerFlourish, SchoolEmblemBadge } from './Ornaments';
import { ChevronDown, MailOpen, Calendar, MapPin, Globe2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface IntroScreenProps {
  onOpenInvitation: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onOpenInvitation }) => {
  const handleOpenClick = () => {
    // Fire refined golden confetti celebration
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#C7A76C', '#FAF7F0', '#304F7D', '#C7785C'],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }
    onOpenInvitation();
  };

  return (
    <section
      aria-label="Welcome Introduction"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden bg-[#FAF7F0] parchment-texture"
    >
      {/* Floating Multilingual Glyphs Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none ambient-glyphs-container flex flex-wrap justify-around items-center gap-12 p-8">
        {MULTILINGUAL_GLYPHS.map((glyph, index) => (
          <span
            key={index}
            className="text-5xl sm:text-7xl font-serif text-[#17243A] animate-float"
            style={{
              animationDelay: `${index * 0.7}s`,
              animationDuration: `${12 + (index % 5) * 2}s`,
            }}
          >
            {glyph.char}
          </span>
        ))}
      </div>

      {/* Decorative Outer Antique Gold Frame */}
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl border-[2px] border-[#C7A76C]/70 p-6 sm:p-10 md:p-16 shadow-[0_15px_50px_rgba(23,36,58,0.12)] bg-[#FAF7F0]/90 backdrop-blur-xs">
        
        {/* Double-line Antique-Gold Inner Border */}
        <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-[#C7A76C]/60 pointer-events-none rounded-xl" />
        <div className="absolute inset-3 sm:inset-5 md:inset-6 border border-[#C7A76C]/30 border-dashed pointer-events-none rounded-lg" />

        {/* 4 Corner Ornaments */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4">
          <CornerFlourish position="top-left" />
        </div>
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4">
          <CornerFlourish position="top-right" />
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4">
          <CornerFlourish position="bottom-left" />
        </div>
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4">
          <CornerFlourish position="bottom-right" />
        </div>

        {/* Intro Screen Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto animate-fade-in-up">
          
          {/* Emblem & Small Decorative Symbols */}
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 sm:w-12 h-[1px] bg-[#C7A76C]/60" />
            <SchoolEmblemBadge className="w-14 h-14 sm:w-18 sm:h-18" />
            <span className="w-8 sm:w-12 h-[1px] bg-[#C7A76C]/60" />
          </div>

          {/* Eyebrow Heading */}
          <p className="text-[11px] sm:text-xs md:text-sm font-sans tracking-[0.25em] uppercase text-[#304F7D] font-bold mb-3">
            {EVENT_DATA.presenter}
          </p>

          {/* Event Title in Large Sophisticated Serif */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#17243A] tracking-tight leading-tight mb-2 text-shimmer">
            {EVENT_DATA.eventName}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl font-serif italic text-[#C7785C] font-semibold tracking-wider mb-6">
            {EVENT_DATA.subTitle}
          </p>

          {/* Multilingual Greetings Ribbon */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2 px-4 rounded-full bg-white/60 border border-[#C7A76C]/40 text-xs sm:text-sm text-[#17243A] font-serif mb-6 shadow-2xs">
            <Globe2 className="w-3.5 h-3.5 text-[#C7A76C]" />
            <span className="text-[#17243A] font-medium">ආයුබෝවන්</span>
            <span className="text-[#C7A76C]">•</span>
            <span className="text-[#17243A] font-medium">Welcome</span>
            <span className="text-[#C7A76C]">•</span>
            <span className="text-[#17243A] font-medium">你好</span>
            <span className="text-[#C7A76C]">•</span>
            <span className="text-[#17243A] font-medium">Guten Tag</span>
            <span className="text-[#C7A76C]">•</span>
            <span className="text-[#17243A] font-medium">こんにちは</span>
          </div>

          {/* Date & Venue Preview */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#17243A]/80 font-sans mb-8">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-[#C7785C]" />
              20 OCTOBER 2026
            </span>
            <span className="text-[#C7A76C] hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-[#304F7D]" />
              School Main Hall, Kuliyapitiya
            </span>
          </div>

          {/* Tasteful Animated Button "OPEN INVITATION" */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              id="open-invitation-btn"
              onClick={handleOpenClick}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#17243A] hover:bg-[#304F7D] text-[#FAF7F0] font-sans font-medium text-sm sm:text-base tracking-wider uppercase shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#C7A76C]/60 active:scale-95 cursor-pointer"
            >
              <MailOpen className="w-4 h-4 text-[#C7A76C] group-hover:rotate-12 transition-transform duration-300" />
              <span>OPEN INVITATION</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#C7A76C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </button>
          </div>

          {/* Hint to scroll below if preferred */}
          <a
            href="#invitation-card"
            className="mt-6 inline-flex items-center gap-1 text-[11px] font-sans uppercase tracking-widest text-[#17243A]/60 hover:text-[#17243A] transition-colors"
          >
            <span>Scroll directly to card</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>

        </div>
      </div>
    </section>
  );
};
