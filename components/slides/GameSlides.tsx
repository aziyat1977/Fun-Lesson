import React, { useState, useEffect } from 'react';
import { SlideContainer } from '../SlideContainer';
import { MANDELA_QUESTIONS, ROBOT_LYRICS, EMOJI_IDIOMS, ODD_ONE_OUT, SLANG_SCRAMBLE, PRICE_IS_RIGHT } from '../../constants';
import { Gamepad2, FireExtinguisher, Smartphone, Apple, Eye, DollarSign, Clock, HelpCircle, Check, X, Car } from 'lucide-react';

export const MandelaSlide: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <SlideContainer>
      <div className="flex flex-col h-full justify-center">
        <h2 className="font-righteous text-3xl md:text-5xl text-pink-500 uppercase tracking-wider mb-2 text-center">
          Game 5: The Mandela Effect
        </h2>
        <p className="text-center font-outfit text-lg md:text-xl mb-6 opacity-80">Which one is REAL? Your memory might be lying.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
            {MANDELA_QUESTIONS.map((q, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-xl border-2 border-pink-500/30 flex flex-col items-center text-center hover:border-pink-500 transition-colors">
                    <h3 className="font-righteous text-xl md:text-2xl mb-4 md:mb-6">{q.title}</h3>
                    <button className={`w-full mb-3 md:mb-4 py-2 md:py-3 px-4 rounded-lg border-2 font-bold transition-all text-base md:text-lg ${revealed && q.correct === 'A' ? 'bg-green-500 text-white border-green-500' : revealed ? 'border-slate-300 dark:border-slate-600 opacity-50' : 'border-slate-300 dark:border-slate-600 hover:bg-pink-500 hover:text-white hover:border-pink-500'}`}>
                        A. {q.optionA}
                    </button>
                    <button className={`w-full py-2 md:py-3 px-4 rounded-lg border-2 font-bold transition-all text-base md:text-lg ${revealed && q.correct === 'B' ? 'bg-green-500 text-white border-green-500' : revealed ? 'border-slate-300 dark:border-slate-600 opacity-50' : 'border-slate-300 dark:border-slate-600 hover:bg-pink-500 hover:text-white hover:border-pink-500'}`}>
                        B. {q.optionB}
                    </button>
                    <p className="mt-4 md:mt-6 text-sm italic opacity-60">{q.hint}</p>
                </div>
            ))}
        </div>
        
        <div className="flex justify-center">
            <button 
                onClick={() => setRevealed(!revealed)}
                className="bg-slate-800 dark:bg-slate-700 text-white font-righteous py-3 px-8 rounded-full hover:bg-sky-500 transition-colors shadow-lg flex items-center gap-2"
            >
                {revealed ? 'Hide Answers' : 'Reveal Answers'} <Eye size={20} />
            </button>
        </div>
      </div>
    </SlideContainer>
  );
};

export const RobotLyricsSlide: React.FC = () => {
    return (
      <SlideContainer>
        <div className="flex flex-col h-full justify-center max-w-4xl mx-auto w-full">
            <h2 className="font-righteous text-3xl md:text-5xl text-green-500 uppercase tracking-wider mb-2 text-center">
            Game 6: Robot Lyrics
            </h2>
            <p className="text-center font-outfit text-lg md:text-xl mb-8 md:mb-12 opacity-80">
                I translated famous songs into "Robot English". <strong>Guess the Song!</strong>
            </p>
            <div className="space-y-4 md:space-y-6">
                {ROBOT_LYRICS.map((item, idx) => (
                    <div key={idx} className="bg-slate-200 dark:bg-slate-800 p-6 md:p-8 rounded-2xl border-l-8 border-green-500 shadow-lg relative overflow-hidden group cursor-pointer">
                         <div className="font-mono text-green-600 dark:text-green-400 text-xl md:text-3xl font-bold mb-4 relative z-10">
                            "{item.text}"
                         </div>
                         <div className="text-right font-outfit text-base md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 text-slate-800 dark:text-slate-100">
                            Answer: <strong>{item.answer}</strong>
                         </div>
                         <div className="absolute top-4 right-4 text-xs uppercase tracking-widest opacity-30 group-hover:opacity-0 transition-opacity">Hover to reveal</div>
                    </div>
                ))}
            </div>
        </div>
      </SlideContainer>
    );
};

export const ZoomInSlide: React.FC = () => {
    return (
        <SlideContainer>
             <div className="flex flex-col h-full justify-center">
                <h2 className="font-righteous text-3xl md:text-5xl text-purple-500 uppercase tracking-wider mb-2 text-center">
                Game 8: Zoom In
                </h2>
                <p className="text-center font-outfit text-lg md:text-xl mb-8 md:mb-12 opacity-80">What is this object?</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Item 1 */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center shadow-lg group cursor-pointer hover:border-purple-500 transition-colors">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-zinc-800 rounded-full border-4 border-white overflow-hidden flex items-center justify-center mb-4 md:mb-6">
                             <span className="text-zinc-400 text-3xl md:text-5xl font-bold tracking-widest">△○✕□</span>
                        </div>
                        <p className="font-bold text-lg md:text-xl mb-2">Object 1</p>
                        <p className="text-sm opacity-50 italic group-hover:opacity-0 transition-opacity">Hover/Tap to reveal</p>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500 font-bold text-xl">PlayStation Controller</div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center shadow-lg group cursor-pointer hover:border-purple-500 transition-colors">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-yellow-500 rounded-full overflow-hidden flex items-center justify-center mb-4 md:mb-6 relative">
                            <div className="absolute w-16 md:w-24 h-4 md:h-5 bg-black rotate-45"></div>
                            <div className="absolute w-4 md:w-5 h-16 md:h-24 bg-black rotate-45"></div>
                        </div>
                        <p className="font-bold text-lg md:text-xl mb-2">Object 2</p>
                        <p className="text-sm opacity-50 italic group-hover:opacity-0 transition-opacity">Hover/Tap to reveal</p>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500 font-bold text-xl">Minecraft Bee</div>
                    </div>

                     {/* Item 3 */}
                     <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center shadow-lg group cursor-pointer hover:border-purple-500 transition-colors">
                        <div className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full overflow-hidden flex items-center justify-center mb-4 md:mb-6 border border-slate-200">
                             <span className="text-5xl md:text-7xl">🍎</span>
                        </div>
                        <p className="font-bold text-lg md:text-xl mb-2">Object 3</p>
                        <p className="text-sm opacity-50 italic group-hover:opacity-0 transition-opacity">Hover/Tap to reveal</p>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500 font-bold text-xl">iPhone Logo</div>
                    </div>
                </div>
             </div>
        </SlideContainer>
    )
}

export const ForbiddenWordSlide: React.FC = () => {
    return (
        <SlideContainer>
             <h2 className="font-righteous text-3xl md:text-5xl text-pink-500 uppercase tracking-wider mb-8 md:mb-12 text-center">
                Game 9: Forbidden Word
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-0 md:px-8">
                {/* Card A */}
                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-sky-500"></div>
                    <h3 className="text-sky-500 font-righteous text-2xl md:text-3xl mb-4">Team A Challenge</h3>
                    <p className="font-outfit text-xl md:text-2xl mb-4 md:mb-6">Describe: <strong className="text-3xl md:text-4xl block mt-2">TIKTOK</strong></p>
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-700 my-4 md:my-6"></div>
                    <p className="text-pink-500 font-bold text-lg md:text-xl mb-4 uppercase tracking-widest">🚫 You CANNOT say:</p>
                    <ul className="space-y-2 font-outfit text-lg md:text-xl font-medium opacity-80">
                        <li>• Video</li>
                        <li>• Dance</li>
                        <li>• Phone</li>
                        <li>• App</li>
                    </ul>
                </div>

                 {/* Card B */}
                 <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-purple-500"></div>
                    <h3 className="text-purple-500 font-righteous text-2xl md:text-3xl mb-4">Team B Challenge</h3>
                    <p className="font-outfit text-xl md:text-2xl mb-4 md:mb-6">Describe: <strong className="text-3xl md:text-4xl block mt-2">SCHOOL</strong></p>
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-700 my-4 md:my-6"></div>
                    <p className="text-pink-500 font-bold text-lg md:text-xl mb-4 uppercase tracking-widest">🚫 You CANNOT say:</p>
                    <ul className="space-y-2 font-outfit text-lg md:text-xl font-medium opacity-80">
                        <li>• Teacher</li>
                        <li>• Lesson</li>
                        <li>• Book</li>
                        <li>• Study</li>
                    </ul>
                </div>
            </div>
        </SlideContainer>
    )
}

export const DiscussionSlide: React.FC = () => {
    return (
        <SlideContainer>
             <h2 className="font-righteous text-3xl md:text-5xl text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-8 md:mb-12 text-center">
                Discussion: This or That?
            </h2>
            <div className="flex flex-col items-center space-y-8 md:space-y-12">
                {/* Matchup 1 */}
                <div className="flex items-center justify-center w-full max-w-4xl">
                    <div className="flex flex-col items-center text-sky-500">
                        <Gamepad2 className="w-12 h-12 md:w-16 md:h-16" />
                        <span className="font-righteous text-xl md:text-2xl mt-4 text-center">PUBG Mobile</span>
                    </div>
                    <div className="mx-6 md:mx-12 font-bungee text-3xl md:text-5xl text-pink-500">VS</div>
                    <div className="flex flex-col items-center text-sky-500">
                        <FireExtinguisher className="w-12 h-12 md:w-16 md:h-16" />
                        <span className="font-righteous text-xl md:text-2xl mt-4 text-center">Free Fire</span>
                    </div>
                </div>

                <div className="w-1/2 h-px bg-slate-200 dark:bg-slate-700"></div>

                 {/* Matchup 2 */}
                 <div className="flex items-center justify-center w-full max-w-4xl">
                    <div className="flex flex-col items-center text-sky-500">
                        <Apple className="w-12 h-12 md:w-16 md:h-16" />
                        <span className="font-righteous text-xl md:text-2xl mt-4 text-center">iPhone</span>
                    </div>
                    <div className="mx-6 md:mx-12 font-bungee text-3xl md:text-5xl text-pink-500">VS</div>
                    <div className="flex flex-col items-center text-sky-500">
                        <Smartphone className="w-12 h-12 md:w-16 md:h-16" />
                        <span className="font-righteous text-xl md:text-2xl mt-4 text-center">Samsung</span>
                    </div>
                </div>
            </div>
        </SlideContainer>
    )
}

// --- NEW GAMES ---

export const EmojiIdiomsSlide: React.FC = () => {
  return (
    <SlideContainer>
        <div className="flex flex-col h-full justify-center">
            <h2 className="font-righteous text-3xl md:text-5xl text-yellow-500 uppercase tracking-wider mb-2 text-center">
                Game 10: Emoji Idioms
            </h2>
            <p className="text-center font-outfit text-lg md:text-xl mb-8 opacity-80">Guess the English phrase!</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {EMOJI_IDIOMS.map((item, idx) => (
                    <div key={idx} className="group relative h-64 perspective">
                        <div className="w-full h-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl border-2 border-yellow-500/30 flex flex-col items-center justify-center p-4 transition-all duration-500 transform group-hover:rotate-y-180 preserve-3d cursor-pointer">
                            {/* Front */}
                            <div className="absolute backface-hidden flex flex-col items-center">
                                <span className="text-5xl md:text-6xl mb-4 animate-bounce">{item.emojis}</span>
                                <span className="text-sm uppercase tracking-widest opacity-50">Hover to reveal</span>
                            </div>
                            {/* Back */}
                            <div className="absolute inset-0 bg-yellow-500 rounded-2xl rotate-y-180 backface-hidden flex items-center justify-center p-4 text-center">
                                <span className="font-righteous text-white text-2xl md:text-3xl shadow-sm">{item.answer}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SlideContainer>
  )
}

export const OddOneOutSlide: React.FC = () => {
    // Track which answer is revealed for each set
    const [revealedSet, setRevealedSet] = useState<number | null>(null);
    // Track if the user made a wrong guess (for shake animation)
    const [wrongGuess, setWrongGuess] = useState<{setIdx: number, item: string} | null>(null);

    const handleGuess = (setIdx: number, item: string, correct: string) => {
        if (revealedSet === setIdx) return; // Already answered

        if (item === correct) {
            setRevealedSet(setIdx);
            setWrongGuess(null);
        } else {
            setWrongGuess({ setIdx, item });
            // Clear shake effect after animation
            setTimeout(() => setWrongGuess(null), 500);
        }
    };

    return (
        <SlideContainer>
             <div className="flex flex-col h-full justify-center">
                <h2 className="font-righteous text-3xl md:text-5xl text-orange-500 uppercase tracking-wider mb-2 text-center">
                    Game 11: Odd One Out
                </h2>
                <p className="text-center font-outfit text-lg md:text-xl mb-6 opacity-80">Click the item that doesn't belong!</p>
                
                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto w-full">
                    {ODD_ONE_OUT.map((set, idx) => (
                        <div key={idx} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between border-l-8 border-orange-500 shadow-md">
                            <div className="flex gap-3 mb-4 md:mb-0 flex-wrap justify-center md:justify-start flex-grow">
                                {set.items.map((item, i) => {
                                    const isWrong = wrongGuess?.setIdx === idx && wrongGuess?.item === item;
                                    const isCorrect = revealedSet === idx && item === set.answer;
                                    const isRevealed = revealedSet === idx;

                                    return (
                                        <button 
                                            key={i} 
                                            onClick={() => handleGuess(idx, item, set.answer)}
                                            className={`
                                                px-4 py-3 rounded-xl font-bold border-2 transition-all duration-300
                                                ${isWrong ? 'animate-shake bg-red-100 border-red-500 text-red-600' : ''}
                                                ${isCorrect ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-600 dark:text-green-400 scale-105' : ''}
                                                ${!isWrong && !isCorrect && !isRevealed ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-orange-400 hover:shadow-md' : ''}
                                                ${isRevealed && !isCorrect ? 'opacity-50 grayscale' : ''}
                                            `}
                                        >
                                            {item}
                                        </button>
                                    );
                                })}
                            </div>
                            
                            <div className={`flex flex-col items-end md:w-1/3 transition-all duration-500 ${revealedSet === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                                <div className="text-right">
                                    <span className="block font-righteous text-xl text-green-500 mb-1">Correct!</span>
                                    <span className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-outfit leading-tight block">
                                        "{set.reason}"
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
                }
            `}</style>
        </SlideContainer>
    );
}

export const SlangScrambleSlide: React.FC = () => {
    return (
        <SlideContainer>
            <div className="flex flex-col h-full justify-center">
                <h2 className="font-righteous text-3xl md:text-5xl text-indigo-500 uppercase tracking-wider mb-2 text-center">
                    Game 12: Slang Scramble
                </h2>
                <p className="text-center font-outfit text-lg md:text-xl mb-8 opacity-80">Unscramble the Gen Z words!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-4">
                    {SLANG_SCRAMBLE.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl text-center group cursor-pointer hover:bg-indigo-500 transition-colors duration-300">
                             <div className="font-bungee text-4xl md:text-5xl text-slate-300 group-hover:text-white/50 mb-4 tracking-[0.5em] transition-colors">
                                {item.scrambled}
                             </div>
                             <div className="font-righteous text-3xl md:text-4xl text-indigo-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                {item.answer}
                             </div>
                             <p className="mt-4 text-xs uppercase tracking-widest opacity-40 group-hover:text-white group-hover:opacity-80">Hover to solve</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideContainer>
    )
}

export const PriceIsRightSlide: React.FC = () => {
    const [revealed, setRevealed] = useState<number | null>(null);

    const getIcon = (index: number) => {
        if (index === 0) return <Gamepad2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />;
        if (index === 1) return <Smartphone className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />;
        if (index === 2) return <Car className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />;
        return <DollarSign className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />;
    };

    return (
        <SlideContainer>
            <div className="flex flex-col h-full justify-center">
                <h2 className="font-righteous text-3xl md:text-5xl text-emerald-500 uppercase tracking-wider mb-2 text-center">
                    Game 13: Price is Right 💰
                </h2>
                <p className="text-center font-outfit text-lg md:text-xl mb-12 opacity-80">Guess the price (in USD). Closest wins!</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRICE_IS_RIGHT.map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl flex flex-col items-center justify-between h-72 border-t-8 border-emerald-500 hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-full mb-6">
                                {getIcon(idx)}
                            </div>
                            <h3 className="font-righteous text-xl md:text-2xl text-center mb-4 h-16 flex items-center justify-center">{item.item}</h3>
                            <div className="flex-grow flex items-center justify-center w-full">
                                {revealed === idx ? (
                                    <div className="animate-bounce font-bungee text-3xl md:text-4xl text-emerald-500">{item.price}</div>
                                ) : (
                                    <button 
                                        onClick={() => setRevealed(idx)}
                                        className="bg-slate-100 dark:bg-slate-700 hover:bg-emerald-500 hover:text-white text-slate-600 dark:text-slate-300 px-8 py-3 rounded-full font-bold transition-all shadow-sm border border-slate-200 dark:border-slate-600"
                                    >
                                        Show Price
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SlideContainer>
    )
}

export const MemoryMasterSlide: React.FC = () => {
    const [gameState, setGameState] = useState<'start' | 'memorize' | 'quiz' | 'reveal'>('start');
    const [timeLeft, setTimeLeft] = useState(10);
    
    // Grid Items
    const items = [
        { icon: <Apple size={40} className="text-red-500" />, name: 'Apple', color: 'Red', pos: 'Top Left' },
        { icon: <Gamepad2 size={40} className="text-blue-500" />, name: 'Controller', color: 'Blue', pos: 'Top Middle' },
        { icon: <Smartphone size={40} className="text-black dark:text-white" />, name: 'Phone', color: 'Black/White', pos: 'Top Right' },
        { icon: <FireExtinguisher size={40} className="text-orange-500" />, name: 'Extinguisher', color: 'Orange', pos: 'Bottom Left' },
        { icon: <Eye size={40} className="text-green-500" />, name: 'Eye', color: 'Green', pos: 'Bottom Middle' },
        { icon: <Clock size={40} className="text-purple-500" />, name: 'Clock', color: 'Purple', pos: 'Bottom Right' },
    ];

    useEffect(() => {
        let timer: any;
        if (gameState === 'memorize' && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (gameState === 'memorize' && timeLeft === 0) {
            setGameState('quiz');
        }
        return () => clearTimeout(timer);
    }, [gameState, timeLeft]);

    const startGame = () => {
        setTimeLeft(10);
        setGameState('memorize');
    }

    return (
        <SlideContainer>
            <div className="flex flex-col h-full justify-center items-center">
                <h2 className="font-righteous text-3xl md:text-5xl text-rose-500 uppercase tracking-wider mb-2 text-center">
                    Game 14: Memory Master
                </h2>
                
                {/* STATE: START */}
                {gameState === 'start' && (
                    <div className="text-center">
                        <p className="font-outfit text-xl mb-8">You have <strong>10 seconds</strong> to memorize the grid.</p>
                        <button onClick={startGame} className="bg-rose-500 text-white font-righteous text-2xl px-12 py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
                            START TIMER
                        </button>
                    </div>
                )}

                {/* STATE: MEMORIZE */}
                {gameState === 'memorize' && (
                    <div className="w-full max-w-3xl">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-4 rounded-full mb-8 overflow-hidden">
                            <div 
                                className="bg-rose-500 h-full transition-all duration-1000 ease-linear" 
                                style={{ width: `${(timeLeft / 10) * 100}%` }}
                            ></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 md:gap-8">
                            {items.map((item, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 aspect-square rounded-xl shadow-lg flex items-center justify-center border-2 border-slate-100 dark:border-slate-700">
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* STATE: QUIZ & REVEAL */}
                {(gameState === 'quiz' || gameState === 'reveal') && (
                    <div className="w-full max-w-3xl text-center">
                         <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border-2 border-rose-500 mb-8">
                             <HelpCircle size={60} className="mx-auto text-rose-500 mb-4" />
                             <h3 className="font-righteous text-2xl md:text-4xl mb-4">Where was the <span className="text-blue-500">Blue Controller</span>?</h3>
                             <p className="text-lg opacity-60">Top Left? Middle? Bottom Right?</p>
                         </div>
                         
                         {gameState === 'quiz' ? (
                             <button onClick={() => setGameState('reveal')} className="bg-slate-800 dark:bg-slate-600 text-white font-bold px-8 py-3 rounded-full">
                                Reveal Answer
                             </button>
                         ) : (
                             <div className="animate-fade-in-up">
                                 <div className="flex items-center justify-center gap-4 text-3xl font-bold text-green-500 mb-8">
                                    <Check size={40} /> Top Middle!
                                 </div>
                                 <div className="grid grid-cols-3 gap-4 md:gap-8 opacity-50 pointer-events-none">
                                    {items.map((item, i) => (
                                        <div key={i} className={`bg-white dark:bg-slate-800 aspect-square rounded-xl shadow-lg flex items-center justify-center border-4 ${item.name === 'Controller' ? 'border-green-500 scale-110 opacity-100' : 'border-transparent'}`}>
                                            {item.icon}
                                        </div>
                                    ))}
                                </div>
                             </div>
                         )}
                    </div>
                )}
            </div>
        </SlideContainer>
    )
}