import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { IntroScreen } from './components/IntroScreen';
import { InternationalFlagFrame } from './components/InternationalFlagFrame';
import { InvitationCard } from './components/InvitationCard';
import { ProgrammeHighlights } from './components/ProgrammeHighlights';
import { EventDetails } from './components/EventDetails';
import { ClosingSection } from './components/ClosingSection';
import { MusicPlayer } from './components/MusicPlayer';

export const App: React.FC = () => {
  const invitationSectionRef = useRef<HTMLDivElement>(null);

  const scrollToInvitation = () => {
    if (invitationSectionRef.current) {
      invitationSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const el = document.getElementById('invitation-card');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#17243A] selection:bg-[#C7A76C]/30 selection:text-[#17243A] font-sans antialiased">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* A. Opening Screen */}
        <IntroScreen onOpenInvitation={scrollToInvitation} />

        {/* B & C. Main Invitation Card inside International Flag Frame */}
        <section
          ref={invitationSectionRef}
          id="invitation-section"
          aria-label="Main Invitation Card and International Flags"
          className="relative py-12 sm:py-16 px-2 sm:px-4"
        >
          {/* Subtle Section Header */}
          <div className="text-center mb-6">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#304F7D] font-bold">
              OFFICIAL INVITATION
            </span>
          </div>

          {/* International Flags Perimeter framing the Card */}
          <InternationalFlagFrame>
            <InvitationCard />
          </InternationalFlagFrame>
        </section>

        {/* D. Programme Highlights */}
        <ProgrammeHighlights />

        {/* E. Key Event Details */}
        <EventDetails />

        {/* F. Closing Section & Actions */}
        <ClosingSection />
      </main>

      {/* Light Background Music Controller */}
      <MusicPlayer />
    </div>
  );
};

export default App;
