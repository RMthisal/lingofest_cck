import React, { useState, useEffect, useRef } from 'react';
import { VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4; // Comfortable, light background volume

    // Attempt autoplay immediately
    const attemptAutoplay = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch(() => {
          // Autoplay blocked by browser policy without user gesture:
          // Listen for the first touch/click anywhere to start smoothly
          const handleFirstGesture = () => {
            if (audioRef.current && !isMuted) {
              audioRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => { });
            }
          };
          window.addEventListener('click', handleFirstGesture, { once: true });
          window.addEventListener('touchstart', handleFirstGesture, { once: true });
          window.addEventListener('keydown', handleFirstGesture, { once: true });
        });
    };

    attemptAutoplay();
  }, [isMuted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted || audio.paused) {
      audio.muted = false;
      audio.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(() => { });
    } else {
      audio.muted = true;
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  const isAudible = isPlaying && !isMuted;

  return (
    <>
      {/* Hidden audio element loading music.mp3 from public folder */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        playsInline
      />

      {/* Bottom-left floating music control button */}
      <div
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center gap-2"
        role="region"
        aria-label="Background Music Controls"
      >
        <button
          id="toggle-music-btn"
          onClick={toggleMute}
          aria-label={isAudible ? "Mute background music" : "Play background music"}
          className={`group relative flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full border shadow-xl transition-all duration-300 active:scale-95 cursor-pointer backdrop-blur-md ${isAudible
            ? 'bg-[#17243A]/95 text-[#FAF7F0] border-[#C7A76C] hover:bg-[#304F7D]'
            : 'bg-white/95 text-[#17243A] border-[#C7A76C]/60 hover:bg-[#FAF7F0]'
            }`}
        >
          {/* Animated Equalizer Wave Bars when playing */}
          {isAudible ? (
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
            {isAudible ? 'Music Playing' : 'Music Muted'}
          </span>

          {/* Action hint */}
          <span className="text-[10px] font-mono uppercase tracking-wider opacity-60 hidden sm:inline">
            {isAudible ? '(Click to Mute)' : '(Click to Play)'}
          </span>
        </button>
      </div>
    </>
  );
};
