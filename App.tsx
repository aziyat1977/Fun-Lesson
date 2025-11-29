import React, { useState, useEffect } from 'react';
import { TitleSlide, WarmUpSlide } from './components/slides/IntroSlides';
import { DecoderRound, AnswerRound } from './components/slides/DecoderSlides';
import { 
    MandelaSlide, 
    RobotLyricsSlide, 
    ZoomInSlide, 
    ForbiddenWordSlide, 
    DiscussionSlide,
    EmojiIdiomsSlide,
    OddOneOutSlide,
    SlangScrambleSlide,
    PriceIsRightSlide,
    MemoryMasterSlide
} from './components/slides/GameSlides';
import { AIRemixSlide } from './components/slides/AIRemixSlide';
import { FinalSlide } from './components/slides/FinalSlide';
import { MOVIE_ITEMS, MUSIC_ITEMS, GAME_ITEMS, LEGEND_ITEMS } from './constants';
import { Moon, Sun, ChevronRight, ChevronLeft } from 'lucide-react';

// SVGs for answer reveals
const WednesdaySVG = (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <path d="M120 100 Q200 50 280 100 L280 300 Q280 350 250 350 L240 350 Q240 250 240 200 L260 150 Q200 160 140 150 L160 200 Q160 250 160 350 L150 350 Q120 350 120 300 Z" fill="#1f2937"/>
    <ellipse cx="200" cy="180" rx="60" ry="70" fill="#f3f4f6"/>
    <circle cx="180" cy="180" r="8" fill="#000"/>
    <circle cx="220" cy="180" r="8" fill="#000"/>
    <path d="M170 240 L200 270 L230 240 L260 280 L140 280 Z" fill="#fff"/>
    <path d="M140 250 Q100 280 100 400 L300 400 Q300 280 260 250" fill="#000"/>
  </svg>
);

const PubgSVG = (
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <text x="50%" y="15%" textAnchor="middle" fill="#78716c" fontFamily="Arial" fontWeight="bold" fontSize="40">LEVEL 3</text>
    <path d="M150 200 Q250 100 350 200 L350 350 Q350 400 250 400 Q150 400 150 350 Z" fill="#44403c" stroke="#1f2937" strokeWidth="2"/>
    <path d="M180 220 L320 220 L320 280 L180 280 Z" fill="#0ea5e9" opacity="0.8"/>
    <path d="M150 280 L350 280 L330 380 L170 380 Z" fill="#57534e" stroke="#1f2937" strokeWidth="2"/>
    <circle cx="160" cy="300" r="3" fill="#a8a29e"/>
    <circle cx="340" cy="300" r="3" fill="#a8a29e"/>
  </svg>
);

const MessiRonaldoSVG = (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <path d="M50 100 L150 100 L180 150 L180 300 L20 300 L20 150 Z" fill="#60a5fa"/>
    <rect x="80" y="100" width="40" height="200" fill="#fff" opacity="0.3"/>
    <text x="100" y="220" fontFamily="Impact" fontSize="80" fill="#fff" textAnchor="middle">10</text>
    <text x="200" y="220" className="font-bungee" fontSize="60" textAnchor="middle" stroke="#1f2937" strokeWidth="1">VS</text>
    <path d="M250 100 L350 100 L380 150 L380 300 L220 300 L220 150 Z" fill="#dc2626"/>
    <text x="300" y="220" fontFamily="Impact" fontSize="80" fill="#fff" textAnchor="middle">7</text>
  </svg>
);


const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDark, setIsDark] = useState(true);

  // Array of slides components in order
  const slides = [
    <TitleSlide />,
    <WarmUpSlide />,
    <DecoderRound title="Round 1: Movies & TV" items={MOVIE_ITEMS} />,
    <AnswerRound title="Answers: Movies" items={MOVIE_ITEMS} SvgGraphic={WednesdaySVG} />,
    <DecoderRound title="Round 2: Global Music Hits" items={MUSIC_ITEMS} />,
    <AnswerRound title="Answers: Music" items={MUSIC_ITEMS} />,
    <DecoderRound title="Round 3: Games & Apps" items={GAME_ITEMS} />,
    <AnswerRound title="Answers: Games" items={GAME_ITEMS} SvgGraphic={PubgSVG} />,
    <DecoderRound title="Round 4: Legends & Trends" items={LEGEND_ITEMS} />,
    <AnswerRound title="Answers: Legends" items={LEGEND_ITEMS} SvgGraphic={MessiRonaldoSVG} />,
    <MandelaSlide />,
    <RobotLyricsSlide />,
    <AIRemixSlide />,
    <ZoomInSlide />,
    <ForbiddenWordSlide />,
    // New Games Added Here
    <EmojiIdiomsSlide />,
    <OddOneOutSlide />,
    <SlangScrambleSlide />,
    <PriceIsRightSlide />,
    <MemoryMasterSlide />,
    <DiscussionSlide />,
    <FinalSlide />
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`fixed inset-0 w-full h-full flex items-center justify-center p-4 md:p-8 transition-colors duration-500 ${isDark ? 'bg-slate-950 dark' : 'bg-slate-100'}`}>
      
      {/* Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 rounded-full bg-white dark:bg-slate-800 text-sky-500 shadow-xl border-2 border-sky-500 hover:scale-110 transition-transform"
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Main Slide Deck */}
      <div className="w-full max-w-[1400px] aspect-[16/9] max-h-[90vh] relative">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 md:bottom-6 left-0 right-0 flex justify-center gap-4 z-50">
        <button 
          onClick={prevSlide}
          className="p-3 md:p-4 rounded-full bg-slate-800/80 dark:bg-slate-700/80 text-white hover:bg-sky-500 backdrop-blur-sm transition-colors shadow-lg disabled:opacity-50"
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="bg-slate-800/80 dark:bg-slate-700/80 backdrop-blur-sm text-white px-4 md:px-6 py-2 rounded-full flex items-center font-outfit font-bold text-sm md:text-base">
            {currentSlide + 1} / {slides.length}
        </div>
        <button 
          onClick={nextSlide}
          className="p-3 md:p-4 rounded-full bg-slate-800/80 dark:bg-slate-700/80 text-white hover:bg-sky-500 backdrop-blur-sm transition-colors shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;