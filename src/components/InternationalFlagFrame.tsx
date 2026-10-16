import React, { useState } from 'react';
import { FLAGS_DATA } from '../data/eventData';
import { FlagIcon } from './FlagIcon';
import { FlagItem } from '../types';
import { Globe2, Sparkles } from 'lucide-react';

interface InternationalFlagFrameProps {
  children: React.ReactNode;
}

export const InternationalFlagFrame: React.FC<InternationalFlagFrameProps> = ({ children }) => {
  const [activeFlag, setActiveFlag] = useState<FlagItem | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-4 sm:my-6 px-2 sm:px-4">
      {/* Active Flag Floating Tooltip / Toast */}
      {activeFlag && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#17243A]/95 backdrop-blur-md border border-[#C7A76C] text-[#FAF7F0] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-3 animate-fade-in text-xs sm:text-sm font-sans pointer-events-none"
        >
          <FlagIcon countryCode={activeFlag.code} className="w-6 h-4 rounded-xs shadow-xs" />
          <span className="font-semibold text-[#C7A76C]">{activeFlag.country}:</span>
          <span className="italic">{activeFlag.greeting}</span>
          <span className="opacity-75 text-xs">({activeFlag.language})</span>
        </div>
      )}

      {/* Decorative Outer Envelope & Language Frame */}
      <div className="relative rounded-2xl p-2.5 sm:p-4 md:p-6 bg-gradient-to-b from-[#17243A]/5 via-[#FAF7F0]/40 to-[#17243A]/5 backdrop-blur-xs border border-[#C7A76C]/40 shadow-xl">
        
        {/* Languages Header Label */}
        <div className="flex items-center justify-between gap-2 mb-2.5 px-1">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#304F7D] font-bold">
            <Globe2 className="w-3.5 h-3.5 text-[#C7A76C]" />
            <span>Featured World Languages</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1 text-[10px] font-serif italic text-[#C7785C]">
            <Sparkles className="w-3 h-3 text-[#C7A76C]" />
            <span>5 Celebrating Traditions</span>
          </div>
        </div>

        {/* 5-Language Header Grid — Fully visible on mobile AND desktop */}
        <div className="grid grid-cols-5 gap-1 sm:gap-2.5 md:gap-3 mb-4">
          {FLAGS_DATA.map((flag) => {
            const isSelected = activeFlag?.id === flag.id;
            return (
              <button
                key={flag.id}
                type="button"
                onClick={() => setActiveFlag(isSelected ? null : flag)}
                onMouseEnter={() => setActiveFlag(flag)}
                onMouseLeave={() => setActiveFlag(null)}
                className={`flex flex-col items-center justify-center p-1 sm:p-2.5 rounded-lg border transition-all duration-200 text-center cursor-pointer select-none ${
                  isSelected
                    ? 'bg-white border-[#C7A76C] shadow-md -translate-y-0.5'
                    : 'bg-white/80 hover:bg-white border-[#C7A76C]/40 hover:border-[#C7A76C] shadow-2xs hover:shadow-xs'
                }`}
                title={`${flag.country} (${flag.language}): ${flag.greeting}`}
                aria-label={`${flag.country} language greeting`}
              >
                {/* Flag Icon */}
                <div className="w-6 h-4 sm:w-9 sm:h-5 md:w-11 md:h-7 rounded-xs sm:rounded overflow-hidden shadow-2xs border border-black/10 mb-1">
                  <FlagIcon countryCode={flag.code} className="w-full h-full object-cover" title={flag.country} />
                </div>

                {/* Country Name */}
                <span className="text-[9px] sm:text-[11px] md:text-xs font-serif font-bold text-[#17243A] leading-tight truncate w-full">
                  {flag.country === "United Kingdom" ? (
                    <>
                      <span className="sm:hidden">UK</span>
                      <span className="hidden sm:inline">United Kingdom</span>
                    </>
                  ) : (
                    flag.country
                  )}
                </span>

                {/* Native Greeting */}
                <span className="text-[8px] sm:text-[10px] md:text-[11px] text-[#C7785C] font-mono leading-tight truncate w-full mt-0.5 font-medium">
                  {flag.greeting}
                </span>

                {/* Language (Visible on larger mobile / tablet / desktop) */}
                <span className="hidden md:block text-[9px] text-[#304F7D] font-sans mt-0.5 truncate w-full">
                  {flag.language}
                </span>
              </button>
            );
          })}
        </div>

        {/* Central Invitation Card */}
        <div className="w-full">
          {children}
        </div>

        {/* Bottom Language Harmony Ribbon */}
        <div className="mt-4 pt-3 border-t border-[#C7A76C]/30 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
          <span className="text-[10px] sm:text-xs font-serif italic text-[#17243A]/75">
            Linguistic Heritage:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {FLAGS_DATA.map((flag, idx) => (
              <React.Fragment key={flag.id}>
                <span
                  onClick={() => setActiveFlag(flag)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/70 hover:bg-white text-[9px] sm:text-[11px] font-sans text-[#17243A] border border-[#C7A76C]/30 cursor-pointer transition-colors"
                >
                  <span className="font-semibold text-[#304F7D]">{flag.country === "United Kingdom" ? "UK" : flag.country}:</span>
                  <span className="font-mono text-[#C7785C]">{flag.greeting}</span>
                </span>
                {idx < FLAGS_DATA.length - 1 && (
                  <span className="text-[#C7A76C]/60 text-xs hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
