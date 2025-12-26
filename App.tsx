
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
import {
    CategoriesSlide,
    TwoTruthsSlide,
    QuotesSlide,
    FactFictionSlide,
    RiddlesSlide,
    WYRSlide,
    ConnectionsSlide,
    ScrambleSlide,
    SynonymSlide,
    FlagSlide
} from './components/slides/NewGameSlides';
import { AIRemixSlide } from './components/slides/AIRemixSlide';
import { FinalSlide } from './components/slides/FinalSlide';
import { 
    MOVIE_ITEMS, 
    MUSIC_ITEMS, 
    GAME_ITEMS, 
    LEGEND_ITEMS,
    MANDELA_QUESTIONS,
    ROBOT_LYRICS,
    FORBIDDEN_WORD_ITEMS,
    DISCUSSION_ITEMS,
    EMOJI_IDIOMS,
    ODD_ONE_OUT,
    SLANG_SCRAMBLE,
    PRICE_IS_RIGHT,
    CATEGORIES_ITEMS,
    TRUTH_LIE_ITEMS,
    QUOTES_ITEMS,
    FACT_FICTION_ITEMS,
    RIDDLE_ITEMS,
    WYR_ITEMS,
    CONNECTION_ITEMS,
    SCRAMBLE_ITEMS,
    SYNONYM_ITEMS,
    FLAG_ITEMS
} from './constants';
import { Moon, Sun, ChevronRight, ChevronLeft, Music, VolumeX } from 'lucide-react';
import { playClick, playSwipe, toggleBackgroundMusic } from './utils/sound';
import { Difficulty } from './types';

// SVGs for answer reveals (Keep these for AnswerRound summaries)
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
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');

  // Dynamically generate the slide deck for maximum visibility
  const slides = [
    <TitleSlide difficulty={difficulty} setDifficulty={setDifficulty} />,
    <WarmUpSlide />,
    
    // --- Round 1 ---
    ...MOVIE_ITEMS.map(item => <DecoderRound key={`mov-${item.id}`} title="Round 1: Movies & TV" items={[item]} difficulty={difficulty} />),
    <AnswerRound title="Answers: Movies" items={MOVIE_ITEMS} SvgGraphic={WednesdaySVG} />,
    
    // --- Round 2 ---
    ...MUSIC_ITEMS.map(item => <DecoderRound key={`mus-${item.id}`} title="Round 2: Global Music Hits" items={[item]} difficulty={difficulty} />),
    <AnswerRound title="Answers: Music" items={MUSIC_ITEMS} />,
    
    // --- Round 3 ---
    ...GAME_ITEMS.map(item => <DecoderRound key={`game-${item.id}`} title="Round 3: Games & Apps" items={[item]} difficulty={difficulty} />),
    <AnswerRound title="Answers: Games" items={GAME_ITEMS} SvgGraphic={PubgSVG} />,
    
    // --- Round 4 ---
    ...LEGEND_ITEMS.map(item => <DecoderRound key={`leg-${item.id}`} title="Round 4: Legends & Trends" items={[item]} difficulty={difficulty} />),
    <AnswerRound title="Answers: Legends" items={LEGEND_ITEMS} SvgGraphic={MessiRonaldoSVG} />,
    
    // --- Mandela ---
    ...MANDELA_QUESTIONS.map((item, idx) => <MandelaSlide key={`man-${idx}`} item={item} index={idx} difficulty={difficulty} />),
    
    // --- Robot Lyrics ---
    ...ROBOT_LYRICS.map((item, idx) => <RobotLyricsSlide key={`rob-${idx}`} item={item} index={idx} />),
    
    <AIRemixSlide />,
    
    // --- Zoom In ---
    <ZoomInSlide index={0} difficulty={difficulty} />,
    <ZoomInSlide index={1} difficulty={difficulty} />,
    <ZoomInSlide index={2} difficulty={difficulty} />,
    
    // --- Forbidden Word ---
    ...FORBIDDEN_WORD_ITEMS.map((item, idx) => <ForbiddenWordSlide key={`forb-${idx}`} item={item} />),
    
    // --- Emoji Idioms ---
    ...EMOJI_IDIOMS.map((item, idx) => <EmojiIdiomsSlide key={`eid-${idx}`} item={item} index={idx} difficulty={difficulty} />),
    
    // --- Odd One Out ---
    ...ODD_ONE_OUT.map((item, idx) => <OddOneOutSlide key={`odd-${idx}`} item={item} index={idx} />),
    
    // --- Slang Scramble ---
    ...SLANG_SCRAMBLE.map((item, idx) => <SlangScrambleSlide key={`slang-${idx}`} item={item} index={idx} />),
    
    // --- Price is Right ---
    ...PRICE_IS_RIGHT.map((item, idx) => <PriceIsRightSlide key={`price-${idx}`} item={item} index={idx} />),
    
    <MemoryMasterSlide difficulty={difficulty} />, // Keep as single unit due to game logic
    
    // --- Categories ---
    ...CATEGORIES_ITEMS.map((item, idx) => <CategoriesSlide key={`cat-${idx}`} item={item} index={idx} difficulty={difficulty} />),
    
    // --- Two Truths ---
    ...TRUTH_LIE_ITEMS.map((item, idx) => <TwoTruthsSlide key={`truth-${idx}`} item={item} index={idx} />),
    
    // --- Quotes ---
    ...QUOTES_ITEMS.map((item, idx) => <QuotesSlide key={`quote-${idx}`} item={item} index={idx} />),
    
    // --- Fact Fiction ---
    ...FACT_FICTION_ITEMS.map((item, idx) => <FactFictionSlide key={`ff-${idx}`} item={item} index={idx} />),
    
    // --- Riddles ---
    ...RIDDLE_ITEMS.map((item, idx) => <RiddlesSlide key={`rid-${idx}`} item={item} index={idx} />),
    
    // --- WYR ---
    ...WYR_ITEMS.map((item, idx) => <WYRSlide key={`wyr-${idx}`} item={item} index={idx} />),
    
    // --- Connections ---
    ...CONNECTION_ITEMS.map((item, idx) => <ConnectionsSlide key={`conn-${idx}`} item={item} index={idx} />),
    
    // --- Scramble ---
    ...SCRAMBLE_ITEMS.map((item, idx) => <ScrambleSlide key={`scram-${idx}`} item={item} index={idx} />),
    
    // --- Synonym ---
    ...SYNONYM_ITEMS.map((item, idx) => <SynonymSlide key={`syn-${idx}`} item={item} index={idx} />),
    
    // --- Flag ---
    ...FLAG_ITEMS.map((item, idx) => <FlagSlide key={`flag-${idx}`} item={item} index={idx} />),
    
    // --- Discussion ---
    ...DISCUSSION_ITEMS.map((item, idx) => <DiscussionSlide key={`disc-${idx}`} item={item} />),
    
    <FinalSlide />
  ];

  const nextSlide = () => {
    playSwipe();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    playSwipe();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMusicToggle = () => {
      const newState = !isMusicOn;
      setIsMusicOn(newState);
      playClick();
      toggleBackgroundMusic(newState);
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
    <div className={`fixed inset-0 w-full h-full flex flex-col items-center justify-center transition-colors duration-500 overflow-hidden ${isDark ? 'bg-slate-950 dark' : 'bg-slate-100'}`}>
      
      {/* Controls: Theme & Music */}
      <div className="fixed top-2 right-2 md:top-6 md:right-6 z-50 flex gap-2 md:gap-4">
          <button 
            onClick={handleMusicToggle}
            className="p-2 md:p-3 rounded-full bg-white dark:bg-slate-800 text-pink-500 shadow-xl border-2 border-pink-500 hover:scale-110 transition-transform"
            title={isMusicOn ? "Mute Music" : "Play Music"}
          >
            {isMusicOn ? <Music size={20} className="md:w-6 md:h-6" /> : <VolumeX size={20} className="md:w-6 md:h-6" />}
          </button>
          
          <button 
            onClick={() => { setIsDark(!isDark); playClick(); }}
            className="p-2 md:p-3 rounded-full bg-white dark:bg-slate-800 text-sky-500 shadow-xl border-2 border-sky-500 hover:scale-110 transition-transform"
            title={isDark ? "Light Mode" : "Dark Mode"}
          >
            {isDark ? <Sun size={20} className="md:w-6 md:h-6" /> : <Moon size={20} className="md:w-6 md:h-6" />}
          </button>
      </div>

      {/* Main Slide Deck - Full Screen Responsive */}
      <div className="w-full h-full p-2 md:p-4 lg:p-8 flex items-center justify-center">
        <div className="w-full h-full max-w-[1600px] relative transition-all duration-300">
           {slides[currentSlide]}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-4 z-50 pointer-events-none">
        <div className="pointer-events-auto flex gap-4">
            <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-slate-800/80 dark:bg-slate-700/80 text-white hover:bg-sky-500 backdrop-blur-sm transition-colors shadow-lg disabled:opacity-50"
            disabled={currentSlide === 0}
            >
            <ChevronLeft size={24} />
            </button>
            <div className="bg-slate-800/80 dark:bg-slate-700/80 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center font-outfit font-bold shadow-lg">
                {currentSlide + 1} / {slides.length}
            </div>
            <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-slate-800/80 dark:bg-slate-700/80 text-white hover:bg-sky-500 backdrop-blur-sm transition-colors shadow-lg"
            >
            <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default App;
