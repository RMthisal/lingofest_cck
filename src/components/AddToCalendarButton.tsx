import React, { useState } from 'react';
import { CalendarPlus, Check } from 'lucide-react';
import { EVENT_DATA } from '../data/eventData';

export const AddToCalendarButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadIcs = () => {
    // 20 October 2026 at 09:00 AM Sri Lanka Time (UTC+05:30)
    // 09:00 - 05:30 = 03:30 UTC
    // Start: 20261020T033000Z
    const title = `${EVENT_DATA.eventName} — ${EVENT_DATA.occasion}`;
    const location = `${EVENT_DATA.details.venueHall}, ${EVENT_DATA.details.venueSchool}, Kuliyapitiya, Sri Lanka`;
    const description = `Annual Language Day Celebrations organized by the ${EVENT_DATA.organizer.name}, ${EVENT_DATA.organizer.school}. Chief Guest: ${EVENT_DATA.chiefGuest.name}, ${EVENT_DATA.chiefGuest.designation}, ${EVENT_DATA.chiefGuest.institution}.`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Kuliyapitiya Central College//Lingofest 26//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:lingofest-2026-cck@kuliyapitiyacentral.edu.lk`,
      `DTSTAMP:20261015T000000Z`,
      `DTSTART:20261020T033000Z`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Lingofest26_Invitation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <button
      id="add-to-calendar-btn"
      onClick={handleDownloadIcs}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#17243A] hover:bg-[#304F7D] text-[#FAF7F0] border border-[#C7A76C]/60 text-xs sm:text-sm font-sans font-medium tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer ${className}`}
    >
      {downloaded ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Calendar File Saved (.ics)</span>
        </>
      ) : (
        <>
          <CalendarPlus className="w-4 h-4 text-[#C7A76C]" />
          <span>Add to Calendar</span>
        </>
      )}
    </button>
  );
};
