// Elegant Ambient Background Music Generator using Web Audio API
// Provides a serene, royal, light ceremonial harp & ambient pad loop with zero external dependencies.

class AmbientMusicEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private stepIndex: number = 0;

  // Gentle, prestigious melody notes in C major / Lydian (frequencies in Hz)
  // C4, E4, G4, B4, C5, D5, E5, G5
  private melodyNotes: { freq: number; dur: number; delay: number }[] = [
    { freq: 261.63, dur: 2.2, delay: 0 },    // C4
    { freq: 329.63, dur: 2.0, delay: 0.6 },  // E4
    { freq: 392.00, dur: 2.2, delay: 1.2 },  // G4
    { freq: 523.25, dur: 3.0, delay: 1.8 },  // C5
    { freq: 587.33, dur: 2.0, delay: 2.6 },  // D5
    { freq: 523.25, dur: 2.5, delay: 3.2 },  // C5
    { freq: 392.00, dur: 2.2, delay: 4.0 },  // G4
    { freq: 440.00, dur: 2.4, delay: 4.8 },  // A4
    { freq: 329.63, dur: 3.0, delay: 5.6 },  // E4
    { freq: 392.00, dur: 2.0, delay: 6.4 },  // G4
    { freq: 493.88, dur: 2.2, delay: 7.2 },  // B4
    { freq: 523.25, dur: 4.0, delay: 8.0 },  // C5
    // Response phrase
    { freq: 392.00, dur: 2.0, delay: 9.6 },  // G4
    { freq: 440.00, dur: 2.2, delay: 10.4 }, // A4
    { freq: 587.33, dur: 2.5, delay: 11.2 }, // D5
    { freq: 659.25, dur: 3.2, delay: 12.0 }, // E5
    { freq: 523.25, dur: 3.5, delay: 13.0 }, // C5
    { freq: 392.00, dur: 2.8, delay: 14.2 }, // G4
    { freq: 329.63, dur: 4.0, delay: 15.2 }, // E4
    { freq: 261.63, dur: 4.5, delay: 16.5 }, // C4
  ];

  // Base chord pad frequencies
  private padChords = [
    [130.81, 196.00, 261.63, 329.63], // C major (C3, G3, C4, E4)
    [174.61, 220.00, 261.63, 349.23], // F major (F3, A3, C4, F4)
    [146.83, 220.00, 293.66, 369.99], // D minor/sus (D3, A3, D4, F#4)
    [196.00, 246.94, 293.66, 392.00], // G major (G3, B3, D4, G4)
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.12, this.ctx.currentTime); // Soft, light ambient level
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a single bell/harp note with soft organic envelope
  private playHarpNote(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Gentle low-pass to eliminate harshness
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(400, now + duration);

    // Warm sine + soft triangle
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(freq * 2, now); // soft octave sparkle

    // Envelope: quick smooth attack, warm resonant decay
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(0.08, now + 0.06);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    oscHarmonic.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(now);
    oscHarmonic.start(now);
    osc.stop(now + duration + 0.1);
    oscHarmonic.stop(now + duration + 0.1);
  }

  // Play a soft sustained background pad chord
  private playPadChord(chord: number[]) {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const now = this.ctx.currentTime;
    const chordDuration = 5.0;

    chord.forEach((freq) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const filter = this.ctx!.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(0.015, now + 1.2);
      gain.gain.linearRampToValueAtTime(0.0001, now + chordDuration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + chordDuration + 0.1);
    });
  }

  public start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;

    const loopDuration = 18.5; // loop length in seconds

    const scheduleSequence = () => {
      if (!this.isPlaying) return;

      // Play pad chord for this section
      const chord = this.padChords[this.stepIndex % this.padChords.length];
      this.playPadChord(chord);
      this.stepIndex++;

      // Schedule individual harp notes
      this.melodyNotes.forEach((note) => {
        setTimeout(() => {
          if (this.isPlaying && !this.isMuted) {
            this.playHarpNote(note.freq, note.dur);
          }
        }, note.delay * 1000);
      });

      // Repeat loop
      this.timerId = window.setTimeout(scheduleSequence, loopDuration * 1000);
    };

    scheduleSequence();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (!this.isPlaying && !this.isMuted) {
      this.start();
    }
    if (this.masterGain && this.ctx) {
      if (this.isMuted) {
        this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.1);
      } else {
        this.masterGain.gain.setTargetAtTime(0.12, this.ctx.currentTime, 0.2);
      }
    }
    return this.isMuted;
  }

  public getStatus() {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
    };
  }
}

export const ambientMusic = new AmbientMusicEngine();
