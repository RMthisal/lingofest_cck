import React, { useState, useEffect } from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Volume2, VolumeX, Printer } from 'lucide-react';
import { AddToCalendarButton } from './AddToCalendarButton';
import { ambientMusic } from '../utils/ambientMusic';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncStatus = () => {
      const status = ambientMusic.getStatus();
      setIsPlaying(status.isPlaying);
      setIsMuted(status.isMuted);
    };
    syncStatus();
    const timer = setInterval(syncStatus, 400);
    return () => clearInterval(timer);
  }, []);

  const toggleMusic = () => {
    if (!isPlaying) {
      ambientMusic.start();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      const muted = ambientMusic.toggleMute();
      setIsMuted(muted);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#17243A]/90 backdrop-blur-md py-2.5 shadow-md border-b border-[#C7A76C]/30 text-[#FAF7F0]'
          : 'bg-transparent py-4 text-[#17243A]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          aria-label="Lingofest 26 Home"
        >
          <div className="w-8 h-8 rounded-full bg-[#17243A] border border-[#C7A76C] flex items-center justify-center text-[#C7A76C] font-serif font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
            ’26
          </div>
          <div className="flex flex-col text-left">
            <span className={`text-sm font-serif font-bold tracking-tight transition-colors ${scrolled ? 'text-[#FAF7F0]' : 'text-[#17243A]'}`}>
              {EVENT_DATA.eventName}
            </span>
            <span className={`text-[10px] font-sans tracking-widest uppercase transition-colors ${scrolled ? 'text-[#FAF7F0]/70' : 'text-[#304F7D]'}`}>
              Kuliyapitiya Central
            </span>
          </div>
        </a>

        {/* Quick Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-sans uppercase tracking-wider font-medium">
          <a
            href="#invitation-card"
            className={`hover:text-[#C7A76C] transition-colors ${scrolled ? 'text-[#FAF7F0]' : 'text-[#17243A]'}`}
          >
            Invitation
          </a>
          <a
            href="#programme"
            className={`hover:text-[#C7A76C] transition-colors ${scrolled ? 'text-[#FAF7F0]' : 'text-[#17243A]'}`}
          >
            Programme
          </a>
          <a
            href="#details"
            className={`hover:text-[#C7A76C] transition-colors ${scrolled ? 'text-[#FAF7F0]' : 'text-[#17243A]'}`}
          >
            Details
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Audio Music Toggle Button */}
          <button
            id="navbar-music-btn"
            onClick={toggleMusic}
            className={`p-2 rounded-full border transition-all active:scale-95 cursor-pointer flex items-center justify-center ${
              scrolled
                ? 'border-[#C7A76C]/40 text-[#C7A76C] hover:bg-[#FAF7F0]/10'
                : 'border-[#17243A]/20 text-[#17243A] hover:bg-white/60'
            }`}
            title={isPlaying && !isMuted ? "Mute Background Music" : "Play Background Music"}
            aria-label={isPlaying && !isMuted ? "Mute Background Music" : "Play Background Music"}
          >
            {isPlaying && !isMuted ? (
              <Volume2 className="w-3.5 h-3.5 text-[#C7785C]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
            )}
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className={`hidden sm:inline-flex p-2 rounded-full border transition-all active:scale-95 cursor-pointer ${
              scrolled
                ? 'border-[#C7A76C]/40 text-[#C7A76C] hover:bg-[#FAF7F0]/10'
                : 'border-[#17243A]/20 text-[#17243A] hover:bg-white/60'
            }`}
            title="Print or Save Invitation as PDF"
            aria-label="Print or Save Invitation"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>

          {/* Compact Add to Calendar for mobile/desktop navbar */}
          <div className="hidden sm:block">
            <AddToCalendarButton className="!py-1.5 !px-3 !text-xs !bg-[#C7A76C] !text-[#17243A] !font-bold hover:!bg-[#e0c388]" />
          </div>
        </div>

      </div>
    </header>
  );
};
