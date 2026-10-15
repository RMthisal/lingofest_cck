import React, { useState } from 'react';
import { FLAGS_DATA } from '../data/eventData';
import { FlagIcon } from './FlagIcon';
import { FlagItem } from '../types';

interface InternationalFlagFrameProps {
  children: React.ReactNode;
}

export const InternationalFlagFrame: React.FC<InternationalFlagFrameProps> = ({ children }) => {
  const [activeFlag, setActiveFlag] = useState<FlagItem | null>(null);

  // Split flags into Top (7), Right (5), Bottom (7), Left (5)
  const topFlags = FLAGS_DATA.slice(0, 7);
  const rightFlags = FLAGS_DATA.slice(7, 12);
  const bottomFlags = FLAGS_DATA.slice(12, 19);
  const leftFlags = FLAGS_DATA.slice(19, 24);

  return (
    <div className="relative w-full max-w-6xl mx-auto my-6 px-2 sm:px-4 md:px-8">
      {/* Active Flag Floating Tooltip */}
      {activeFlag && (
        <div 
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#17243A]/95 backdrop-blur-md border border-[#C7A76C] text-[#FAF7F0] px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-3 animate-fade-in text-xs sm:text-sm font-sans pointer-events-none"
        >
          <FlagIcon countryCode={activeFlag.code} className="w-6 h-4 rounded-sm shadow-sm" />
          <span className="font-semibold text-[#C7A76C]">{activeFlag.country}:</span>
          <span className="italic">{activeFlag.greeting}</span>
          <span className="opacity-70 text-xs">({activeFlag.language})</span>
        </div>
      )}

      {/* DESKTOP & TABLET: Outer Framed Envelope with Flag Perimeter */}
      <div className="relative rounded-2xl p-2 sm:p-3 md:p-5 bg-gradient-to-b from-[#17243A]/10 via-[#FAF7F0]/40 to-[#17243A]/10 backdrop-blur-sm border border-[#C7A76C]/30 shadow-2xl">
        
        {/* Top Flag Rail (Desktop) */}
        <div className="hidden lg:grid grid-cols-7 gap-3 mb-4 px-2">
          {topFlags.map((flag) => (
            <div
              key={flag.id}
              onMouseEnter={() => setActiveFlag(flag)}
              onMouseLeave={() => setActiveFlag(null)}
              className="group relative flex flex-col items-center justify-center p-1.5 rounded-lg bg-white/70 hover:bg-white border border-[#C7A76C]/40 hover:border-[#C7A76C] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="w-10 h-6 overflow-hidden rounded shadow-sm border border-black/10">
                <FlagIcon countryCode={flag.code} className="w-full h-full object-cover" title={flag.country} />
              </div>
              <span className="text-[10px] font-serif font-medium text-[#17243A] mt-1 truncate max-w-[80px] group-hover:text-[#304F7D]">
                {flag.country}
              </span>
              <span className="text-[9px] text-[#C7785C] font-mono opacity-80 group-hover:opacity-100">
                {flag.greeting}
              </span>
            </div>
          ))}
        </div>

        {/* Middle Container with Left Flags + Main Card + Right Flags */}
        <div className="flex items-stretch justify-center gap-3">
          {/* Left Flags Rail (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between py-2 w-24">
            {leftFlags.map((flag) => (
              <div
                key={flag.id}
                onMouseEnter={() => setActiveFlag(flag)}
                onMouseLeave={() => setActiveFlag(null)}
                className="group p-2 rounded-lg bg-white/70 hover:bg-white border border-[#C7A76C]/40 hover:border-[#C7A76C] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer text-center"
              >
                <div className="w-10 h-6 mx-auto overflow-hidden rounded shadow-sm border border-black/10">
                  <FlagIcon countryCode={flag.code} className="w-full h-full object-cover" title={flag.country} />
                </div>
                <div className="text-[10px] font-serif text-[#17243A] font-medium mt-1 truncate">
                  {flag.country}
                </div>
                <div className="text-[9px] text-[#C7785C] font-mono truncate">
                  {flag.greeting}
                </div>
              </div>
            ))}
          </div>

          {/* Central Card Container */}
          <div className="flex-1 w-full max-w-3xl">
            {children}
          </div>

          {/* Right Flags Rail (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between py-2 w-24">
            {rightFlags.map((flag) => (
              <div
                key={flag.id}
                onMouseEnter={() => setActiveFlag(flag)}
                onMouseLeave={() => setActiveFlag(null)}
                className="group p-2 rounded-lg bg-white/70 hover:bg-white border border-[#C7A76C]/40 hover:border-[#C7A76C] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer text-center"
              >
                <div className="w-10 h-6 mx-auto overflow-hidden rounded shadow-sm border border-black/10">
                  <FlagIcon countryCode={flag.code} className="w-full h-full object-cover" title={flag.country} />
                </div>
                <div className="text-[10px] font-serif text-[#17243A] font-medium mt-1 truncate">
                  {flag.country}
                </div>
                <div className="text-[9px] text-[#C7785C] font-mono truncate">
                  {flag.greeting}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Flag Rail (Desktop) */}
        <div className="hidden lg:grid grid-cols-7 gap-3 mt-4 px-2">
          {bottomFlags.map((flag) => (
            <div
              key={flag.id}
              onMouseEnter={() => setActiveFlag(flag)}
              onMouseLeave={() => setActiveFlag(null)}
              className="group relative flex flex-col items-center justify-center p-1.5 rounded-lg bg-white/70 hover:bg-white border border-[#C7A76C]/40 hover:border-[#C7A76C] shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-0.5 cursor-pointer"
            >
              <div className="w-10 h-6 overflow-hidden rounded shadow-sm border border-black/10">
                <FlagIcon countryCode={flag.code} className="w-full h-full object-cover" title={flag.country} />
              </div>
              <span className="text-[10px] font-serif font-medium text-[#17243A] mt-1 truncate max-w-[80px] group-hover:text-[#304F7D]">
                {flag.country}
              </span>
              <span className="text-[9px] text-[#C7785C] font-mono opacity-80 group-hover:opacity-100">
                {flag.greeting}
              </span>
            </div>
          ))}
        </div>

        {/* MOBILE & TABLET: Refined Flag Marquee / Ribbon Ribbon (does not obstruct card) */}
        <div className="lg:hidden mt-4 pt-3 border-t border-[#C7A76C]/30">
          <div className="text-center mb-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#17243A]/70">
              Languages & Cultures of the World
            </span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x px-1">
            {FLAGS_DATA.map((flag) => (
              <button
                key={flag.id}
                onClick={() => setActiveFlag(flag)}
                className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/80 border border-[#C7A76C]/40 shadow-sm text-left hover:bg-white active:scale-95 transition-transform"
              >
                <div className="w-5 h-3.5 rounded overflow-hidden shadow-xs">
                  <FlagIcon countryCode={flag.code} className="w-full h-full object-cover" />
                </div>
                <span className="text-[11px] font-medium text-[#17243A] whitespace-nowrap">
                  {flag.country}
                </span>
                <span className="text-[10px] text-[#C7785C] font-mono">
                  {flag.greeting}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
