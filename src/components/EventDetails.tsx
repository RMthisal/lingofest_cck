import React from 'react';
import { EVENT_DATA } from '../data/eventData';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { GoldDivider } from './Ornaments';

export const EventDetails: React.FC = () => {
  return (
    <section
      id="details"
      aria-label="Event Details"
      className="py-12 px-4 sm:px-6 md:px-12 bg-white/40"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#304F7D] font-bold mb-1">
            KEY INFORMATION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#17243A]">
            Event Itinerary & Location
          </h2>
          <GoldDivider className="mt-3" />
        </div>

        {/* 3 Detail Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Date Card */}
          <div className="p-6 rounded-xl bg-[#FAF7F0] border border-[#C7A76C]/40 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white border border-[#C7A76C]/60 flex items-center justify-center text-[#304F7D] mb-4 shadow-2xs">
              <Calendar className="w-6 h-6 text-[#304F7D]" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C7785C] font-semibold mb-1">
              DATE
            </span>
            <h3 className="text-lg font-serif font-bold text-[#17243A]">
              {EVENT_DATA.details.weekday}
            </h3>
            <p className="text-sm font-sans text-[#17243A]/80 mt-1">
              20 October 2026
            </p>
          </div>

          {/* Time Card */}
          <div className="p-6 rounded-xl bg-[#FAF7F0] border border-[#C7A76C]/40 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white border border-[#C7A76C]/60 flex items-center justify-center text-[#304F7D] mb-4 shadow-2xs">
              <Clock className="w-6 h-6 text-[#304F7D]" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C7785C] font-semibold mb-1">
              TIME
            </span>
            <h3 className="text-lg font-serif font-bold text-[#17243A]">
              {EVENT_DATA.details.time}
            </h3>
            <p className="text-sm font-sans text-[#17243A]/80 mt-1">
              Sri Lanka Standard Time (UTC+05:30)
            </p>
          </div>

          {/* Venue Card */}
          <div className="p-6 rounded-xl bg-[#FAF7F0] border border-[#C7A76C]/40 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-white border border-[#C7A76C]/60 flex items-center justify-center text-[#304F7D] mb-4 shadow-2xs">
              <MapPin className="w-6 h-6 text-[#304F7D]" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C7785C] font-semibold mb-1">
              VENUE
            </span>
            <h3 className="text-lg font-serif font-bold text-[#17243A]">
              {EVENT_DATA.details.venueHall}
            </h3>
            <p className="text-sm font-sans text-[#17243A]/80 mt-1">
              {EVENT_DATA.details.venueSchool}
            </p>
            <p className="text-xs font-sans text-[#17243A]/60 mt-0.5">
              {EVENT_DATA.details.locationCity}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
