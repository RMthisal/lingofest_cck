import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { CornerFlourish, GoldDivider, SchoolEmblemBadge } from './Ornaments';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export const InvitationCard: React.FC = () => {
  return (
    <article
      id="invitation-card"
      aria-label="Official Lingofest '26 Invitation Card"
      className="relative bg-[#FAF7F0] text-[#17243A] rounded-xl shadow-[0_20px_60px_-15px_rgba(23,36,58,0.25)] border-[3px] border-[#C7A76C]/60 p-6 sm:p-10 md:p-14 transition-all duration-500 parchment-texture"
    >
      {/* Inner Thin Double Gold Border */}
      <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-[#C7A76C]/80 pointer-events-none rounded-lg" />
      <div className="absolute inset-3 sm:inset-4 md:inset-5 border border-[#C7A76C]/40 border-dashed pointer-events-none rounded-md" />

      {/* 4 Corner Ornaments */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 z-10">
        <CornerFlourish position="top-left" />
      </div>
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10">
        <CornerFlourish position="top-right" />
      </div>
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 z-10">
        <CornerFlourish position="bottom-left" />
      </div>
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 z-10">
        <CornerFlourish position="bottom-right" />
      </div>

      {/* Content wrapper with generous spacing */}
      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
        
        {/* Decorative Top Emblem / Seal */}
        <div className="mb-4">
          <SchoolEmblemBadge className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>

        {/* Institution Eyebrow */}
        <p className="text-xs sm:text-sm font-sans tracking-[0.2em] uppercase text-[#304F7D] font-semibold mb-2">
          {EVENT_DATA.organizer.school}
        </p>

        {/* Event Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#17243A] tracking-tight leading-none mb-1">
          {EVENT_DATA.eventName}
        </h1>

        {/* Subtitle / Occasion */}
        <p className="text-base sm:text-xl font-serif italic text-[#C7785C] font-medium tracking-wide mt-1">
          {EVENT_DATA.occasion}
        </p>

        <GoldDivider className="my-5 sm:my-6" />

        {/* Cordial Invitation Framing */}
        <div className="w-full my-4 py-6 px-5 sm:px-8 rounded-xl bg-white/70 border border-[#C7A76C]/40 shadow-xs relative">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#17243A] text-[#FAF7F0] text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] mb-4 font-semibold shadow-xs">
            <Sparkles className="w-3 h-3 text-[#C7A76C]" />
            CORDIAL INVITATION
          </div>

          <p className="text-sm sm:text-base md:text-lg font-serif italic text-[#17243A] font-medium leading-relaxed max-w-lg mx-auto mb-4">
            &ldquo;{EVENT_DATA.invitationLead}&rdquo;
          </p>

          <div className="space-y-3 text-xs sm:text-sm md:text-[15px] font-sans text-[#17243A]/90 leading-relaxed max-w-lg mx-auto text-center">
            <p className="font-medium text-[#304F7D]">
              {EVENT_DATA.invitationMessage.p1}
            </p>
            <p>
              {EVENT_DATA.invitationMessage.p2}
            </p>
            <p className="font-medium text-[#17243A]">
              {EVENT_DATA.invitationMessage.p3}
            </p>
          </div>
        </div>

        <GoldDivider className="my-5" />

        {/* Structured Event Details Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 my-4 text-center">
          {/* Date */}
          <div className="p-3 sm:p-4 rounded-lg bg-white/70 border border-[#C7A76C]/30 flex flex-col items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#C7A76C]/60 flex items-center justify-center text-[#304F7D] mb-1.5 shadow-2xs">
              <Calendar className="w-4 h-4 text-[#304F7D]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#C7785C] font-semibold">
              DATE
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-[#17243A] mt-0.5">
              {EVENT_DATA.details.weekday}
            </span>
            <span className="text-xs text-[#17243A]/80">
              20 October 2026
            </span>
          </div>

          {/* Time */}
          <div className="p-3 sm:p-4 rounded-lg bg-white/70 border border-[#C7A76C]/30 flex flex-col items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#C7A76C]/60 flex items-center justify-center text-[#304F7D] mb-1.5 shadow-2xs">
              <Clock className="w-4 h-4 text-[#304F7D]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#C7785C] font-semibold">
              TIME
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-[#17243A] mt-0.5">
              {EVENT_DATA.details.time}
            </span>
            <span className="text-[11px] text-[#17243A]/70">
              Sri Lanka Time (UTC+05:30)
            </span>
          </div>

          {/* Venue */}
          <div className="p-3 sm:p-4 rounded-lg bg-white/70 border border-[#C7A76C]/30 flex flex-col items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#C7A76C]/60 flex items-center justify-center text-[#304F7D] mb-1.5 shadow-2xs">
              <MapPin className="w-4 h-4 text-[#304F7D]" />
            </div>
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#C7785C] font-semibold">
              VENUE
            </span>
            <span className="text-xs sm:text-sm font-serif font-bold text-[#17243A] mt-0.5">
              {EVENT_DATA.details.venueHall}
            </span>
            <span className="text-[11px] text-[#17243A]/80">
              {EVENT_DATA.details.venueSchool}
            </span>
          </div>
        </div>

        {/* Salutation and Organizer Signature */}
        <div className="mt-6 pt-4 border-t border-[#C7A76C]/30 w-full flex flex-col items-center">
          <p className="text-xs sm:text-sm font-serif italic text-[#17243A]/80 mb-1">
            With warm regards,
          </p>
          <p className="text-sm sm:text-base font-serif font-bold text-[#17243A]">
            {EVENT_DATA.organizer.name}
          </p>
          <p className="text-xs font-sans text-[#304F7D] tracking-wider uppercase font-medium">
            {EVENT_DATA.organizer.school}
          </p>
        </div>

      </div>
    </article>
  );
};
