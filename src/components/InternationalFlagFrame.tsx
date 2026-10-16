import React, { useState } from 'react';
import { FLAGS_DATA } from '../data/eventData';
import { FlagIcon } from './FlagIcon';
import { FlagItem } from '../types';

interface InternationalFlagFrameProps {
  children: React.ReactNode;
}

export const InternationalFlagFrame: React.FC<InternationalFlagFrameProps> = ({ children }) => {
  const [activeFlag, setActiveFlag] = useState<FlagItem | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-4 sm:my-6 px-2 sm:px-4">
      {/* Active Flag Floating Tooltip */}
      {activeFlag && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#17243A]/95 backdrop-blur-md border border-[#C7A76C] text-[#FAF7F0] px-4 py-2 rounded-full shadow-2xl flex items-center gap-2.5 animate-fade-in text-xs sm:text-sm font-sans pointer-events-none"
        >
          <FlagIcon countryCode={activeFlag.code} className="w-5 h-3.5 rounded-xs shadow-xs" />
          <span className="font-semibold text-[#C7A76C]">{activeFlag.country}:</span>
          <span className="italic">{activeFlag.greeting}</span>
          <span className="opacity-75 text-xs">({activeFlag.language})</span>
        </div>
      )}

      {/* Decorative Outer Envelope Frame */}
      <div className="relative rounded-2xl p-2 sm:p-4 md:p-6 bg-gradient-to-b from-[#17243A]/5 via-[#FAF7F0]/40 to-[#17243A]/5 backdrop-blur-xs border border-[#C7A76C]/40 shadow-xl">
        
        {/* Top Small Flag Badges Ribbon — Compact pill icons like previous design */}
        <div className="mb-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {FLAGS_DATA.map((flag) => {
              const isSelected = activeFlag?.id === flag.id;
              return (
                <button
                  key={flag.id}
                  type="button"
                  onClick={() => setActiveFlag(isSelected ? null : flag)}
                  onMouseEnter={() => setActiveFlag(flag)}
                  onMouseLeave={() => setActiveFlag(null)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-200 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-white border-[#C7A76C] shadow-sm scale-105'
                      : 'bg-white/80 hover:bg-white border-[#C7A76C]/40 hover:border-[#C7A76C] shadow-2xs hover:shadow-xs'
                  }`}
                  title={`${flag.country} (${flag.language}): ${flag.greeting}`}
                  aria-label={`${flag.country} language greeting`}
                >
                  <div className="w-5 h-3.5 rounded-xs overflow-hidden shadow-2xs border border-black/10">
                    <FlagIcon countryCode={flag.code} className="w-full h-full object-cover" title={flag.country} />
                  </div>
                  <span className="text-[11px] font-medium text-[#17243A]">
                    {flag.country === "United Kingdom" ? "UK" : flag.country === "South Korea" ? "Korea" : flag.country}
                  </span>
                  <span className="text-[10px] text-[#C7785C] font-mono">
                    {flag.greeting}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Central Invitation Card */}
        <div className="w-full">
          {children}
        </div>

      </div>
    </div>
  );
};
