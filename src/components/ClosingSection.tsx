import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { AddToCalendarButton } from './AddToCalendarButton';
import { ShareInvitationButton } from './ShareInvitationButton';
import { SchoolEmblemBadge, GoldDivider } from './Ornaments';

export const ClosingSection: React.FC = () => {
  return (
    <footer
      aria-label="Invitation Closing"
      className="relative py-16 px-4 sm:px-6 md:px-12 bg-[#17243A] text-[#FAF7F0] overflow-hidden"
    >
      {/* Subtle gold radial background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C7A76C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Emblem */}
        <div className="mb-4">
          <SchoolEmblemBadge className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>

        {/* Prominent Closing Message */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FAF7F0] tracking-tight mb-3">
          “{EVENT_DATA.closingLead}”
        </h2>

        <p className="text-sm sm:text-base font-serif italic text-[#C7A76C] max-w-lg mb-6">
          On behalf of the students, faculty, and administrators of {EVENT_DATA.organizer.school}.
        </p>

        <GoldDivider className="my-4" />

        {/* Action Buttons: Add to Calendar & Share Invitation */}
        <div className="flex flex-wrap items-center justify-center gap-4 my-6">
          <AddToCalendarButton />
          <ShareInvitationButton />
        </div>

        {/* Organiser Attribution */}
        <div className="mt-8 pt-6 border-t border-[#C7A76C]/30 w-full flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-[#FAF7F0]/60 mb-1">
            Organised by
          </p>
          <p className="text-lg font-serif font-bold text-[#C7A76C]">
            {EVENT_DATA.organizer.name}
          </p>
          <p className="text-xs font-sans text-[#FAF7F0]/80 tracking-wider uppercase">
            {EVENT_DATA.organizer.school}
          </p>
          <p className="text-[11px] font-sans text-[#FAF7F0]/50 mt-1">
            Kuliyapitiya, Sri Lanka
          </p>

          <div className="flex items-center gap-1.5 text-[11px] text-[#FAF7F0]/40 mt-8">
            <span>Annual Language Day Celebrations</span>
            <span>•</span>
            <span>Lingofest ’26</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
