// Simple Web Audio API Synthesizer for UI Sounds

let audioCtx: AudioContext | null = null;

const getContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx;
};

const resumeContext = () => {
  const ctx = getContext();
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
};

// --- SFX ---

export const playClick = () => {
  try {
    resumeContext();
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.05, ctx.currentTime); // Quiet volume
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    // Ignore audio errors
  }
};

export const playSwipe = () => {
  try {
    resumeContext();
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth'; // White noise-ish when filtered heavily
    
    // Low pass filter sweep to simulate "whoosh"
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(100, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
    filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    gain.gain.setValueAtTime(0.02, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.15);
    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.3);

    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {
    // Ignore
  }
};

export const playCorrect = () => {
  try {
    resumeContext();
    const ctx = getContext();
    
    // Play a major triad (C - E - G)
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + (i * 0.05));
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      const startTime = ctx.currentTime + (i * 0.05);
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.1, startTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.5);
      
      osc.start(startTime);
      osc.stop(startTime + 0.5);
    });
  } catch (e) {
    // Ignore
  }
};

export const playIncorrect = () => {
  try {
    resumeContext();
    const ctx = getContext();
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);

    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {
    // Ignore
  }
};

export const playReveal = () => {
    try {
        resumeContext();
        const ctx = getContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

        osc.start();
        osc.stop(ctx.currentTime + 0.2);
    } catch(e) {
        // Ignore
    }
}

// --- Generative Background Music ---

let musicEnabled = false;
let nextNoteTime = 0;
let schedulerTimer: number | null = null;
let musicGain: GainNode | null = null;

// C Major Pentatonic Scale (Harmonious and uplifting)
const SCALE = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; 

const scheduleNote = (time: number) => {
    try {
        const ctx = getContext();
        
        // Master gain for music channel
        if (!musicGain) {
            musicGain = ctx.createGain();
            musicGain.gain.value = 0.03; // Keep it very subtle/background
            musicGain.connect(ctx.destination);
        }

        const osc = ctx.createOscillator();
        const env = ctx.createGain();
        const panner = ctx.createStereoPanner();

        // Random note from scale
        osc.type = 'sine';
        osc.frequency.value = SCALE[Math.floor(Math.random() * SCALE.length)];
        
        // Soft Envelope (Pad-like)
        env.gain.setValueAtTime(0, time);
        env.gain.linearRampToValueAtTime(0.5, time + 2.0); // Slow attack (2s)
        env.gain.exponentialRampToValueAtTime(0.001, time + 6.0); // Long release (4s)

        // Random Pan for spatial width
        panner.pan.value = (Math.random() * 2) - 1; 

        // Connect graph
        osc.connect(env);
        env.connect(panner);
        panner.connect(musicGain);

        // Start/Stop
        osc.start(time);
        osc.stop(time + 6.0);
    } catch(e) {
        // Ignore
    }
};

const scheduler = () => {
    if (!musicEnabled) return;
    const ctx = getContext();
    
    // Lookahead: Schedule notes for the next 2 seconds
    while (nextNoteTime < ctx.currentTime + 2.0) {
        scheduleNote(nextNoteTime);
        // Next note plays in 2s - 5s
        nextNoteTime += 2.0 + Math.random() * 3.0; 
    }
    
    // Check again soon
    schedulerTimer = window.setTimeout(scheduler, 500);
};

export const toggleBackgroundMusic = (enable: boolean) => {
    const ctx = getContext();
    musicEnabled = enable;

    if (enable) {
        resumeContext();
        if (ctx.state === 'suspended') ctx.resume();
        
        // Reset timing
        nextNoteTime = ctx.currentTime + 0.1;
        scheduler();
    } else {
        if (schedulerTimer) clearTimeout(schedulerTimer);
        // We let ringing notes fade out naturally rather than cutting them off
    }
};
