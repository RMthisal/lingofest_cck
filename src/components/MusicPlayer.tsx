import React, { useState, useEffect } from 'react';
import { VolumeX } from 'lucide-react';
import { ambientMusic } from '../utils/ambientMusic';

interface MusicPlayerProps {
  autoStartOnFirstInteraction?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStartOnFirstInteraction = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check initial status
    const status = ambientMusic.getStatus();
    setIsPlaying(status.isPlaying);
    setIsMuted(status.isMuted);

    // Browser autoplay policy: start on the first user interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted && autoStartOnFirstInteraction) {
        setHasInteracted(true);
        ambientMusic.start();
        setIsPlaying(true);
        setIsMuted(false);
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted, autoStartOnFirstInteraction]);

  const togglePlayback = () => {
    if (!isPlaying) {
      ambientMusic.start();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      const muted = ambientMusic.toggleMute();
      setIsMuted(muted);
    }
  };

  const isCurrentlyAudible = isPlaying && !isMuted;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      role="region"
      aria-label="Background Music Controls"
    >
      <button
        id="toggle-music-btn"
        onClick={togglePlayback}
        aria-label={isCurrentlyAudible ? "Mute ceremonial background music" : "Play ceremonial background music"}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-full border shadow-xl transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-md ${
          isCurrentlyAudible
            ? 'bg-[#17243A]/95 text-[#FAF7F0] border-[#C7A76C] hover:bg-[#304F7D]'
            : 'bg-white/90 text-[#17243A] border-[#C7A76C]/60 hover:bg-[#FAF7F0]'
        }`}
      >
        {/* Animated Equalizer Wave Bars when playing */}
        {isCurrentlyAudible ? (
          <div className="flex items-end gap-[3px] h-3.5 w-4.5 px-0.5">
            <span className="w-1 bg-[#C7A76C] rounded-full animate-music-bar-1" />
            <span className="w-1 bg-[#C7A76C] rounded-full animate-music-bar-2" />
            <span className="w-1 bg-[#C7A76C] rounded-full animate-music-bar-3" />
          </div>
        ) : (
          <VolumeX className="w-4 h-4 text-[#C7785C]" />
        )}

        {/* Text label */}
        <span className="text-xs font-serif font-medium tracking-wide">
          {isCurrentlyAudible ? 'Music Playing' : 'Music Muted'}
        </span>

        {/* Quick action tooltip hint on hover */}
        <span className="text-[10px] font-mono uppercase tracking-wider opacity-60 hidden sm:inline">
          {isCurrentlyAudible ? '(Click to Mute)' : '(Click to Play)'}
        </span>
      </button>
    </div>
  );
};
