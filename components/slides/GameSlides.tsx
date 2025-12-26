import React, { useState, useEffect } from 'react';
import { SlideContainer } from '../SlideContainer';
import { MANDELA_QUESTIONS, ROBOT_LYRICS, EMOJI_IDIOMS, ODD_ONE_OUT, SLANG_SCRAMBLE, PRICE_IS_RIGHT } from '../../constants';
import { Gamepad2, FireExtinguisher, Smartphone, Apple, Eye, DollarSign, Clock, HelpCircle, Check, X, Car, Plane, Watch } from 'lucide-react';
import { playClick, playCorrect, playIncorrect, playReveal } from '../../utils/sound';

export const MandelaSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = (option: string) => {
    if (revealed) return;
    setRevealed(true);
    if (option === item.correct) {
        playCorrect();
    } else {
        playIncorrect();
    }
  };

  return (
    <SlideContainer>
      <div className="flex flex-col h-full items-center justify-center">
        <div className="flex-shrink-0 mb-8 text-center">
            <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-pink-500 uppercase tracking-wider mb-2">
            Game 5: The Mandela Effect #{index + 1}
            </h2>
            <p className="font-outfit text-base md:text-xl opacity-80">Which one is REAL?</p>
        </div>
        
        <div className="flex-grow flex flex-col justify-center items-center w-full max-w-3xl">
            <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-pink-500/30 flex flex-col items-center text-center w-full">
                <h3 className="font-righteous text-3xl md:text-5xl mb-8">{item.title}</h3>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <button onClick={() => handleReveal('A')} className={`w-full py-6 md:py-8 px-4 rounded-xl border-4 font-bold transition-all text-xl md:text-3xl ${revealed && item.correct === 'A' ? 'bg-green-500 text-white border-green-500 scale-105' : revealed ? 'border-slate-300 dark:border-slate-600 opacity-30' : 'border-slate-300 dark:border-slate-600 hover:bg-pink-500 hover:text-white hover:border-pink-500'}`}>
                        {item.optionA}
                    </button>
                    <button onClick={() => handleReveal('B')} className={`w-full py-6 md:py-8 px-4 rounded-xl border-4 font-bold transition-all text-xl md:text-3xl ${revealed && item.correct === 'B' ? 'bg-green-500 text-white border-green-500 scale-105' : revealed ? 'border-slate-300 dark:border-slate-600 opacity-30' : 'border-slate-300 dark:border-slate-600 hover:bg-pink-500 hover:text-white hover:border-pink-500'}`}>
                        {item.optionB}
                    </button>
                </div>
                {revealed && <p className="mt-8 text-xl md:text-2xl italic opacity-80 animate-fade-in">{item.hint}</p>}
            </div>
        </div>
      </div>
    </SlideContainer>
  );
};

export const RobotLyricsSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
      <SlideContainer>
        <div className="flex flex-col h-full w-full items-center justify-center">
            <div className="flex-shrink-0 mb-8 text-center">
                <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-green-500 uppercase tracking-wider mb-2">
                Game 6: Robot Lyrics #{index + 1}
                </h2>
                <p className="font-outfit text-base md:text-xl opacity-80">Guess the Song!</p>
            </div>
            
            <div className="flex-grow flex items-center justify-center w-full max-w-4xl">
                <div className="bg-slate-200 dark:bg-slate-800 p-8 md:p-16 rounded-3xl border-l-8 border-green-500 shadow-xl relative overflow-hidden group cursor-pointer w-full text-center hover:scale-105 transition-transform" onMouseEnter={playClick}>
                    <div className="font-mono text-green-600 dark:text-green-400 text-3xl md:text-5xl font-bold mb-8 relative z-10 leading-snug">
                        "{item.text}"
                    </div>
                    <div className="font-outfit text-2xl md:text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-slate-800 dark:text-slate-100">
                        <strong>{item.answer}</strong>
                    </div>
                    <div className="absolute top-4 right-4 text-sm uppercase tracking-widest opacity-30 group-hover:opacity-0 transition-opacity">Hover to reveal</div>
                </div>
            </div>
        </div>
      </SlideContainer>
    );
};

export const ZoomInSlide: React.FC<{ index: number }> = ({ index }) => {
    // We handle the specific render content here based on index
    const renderContent = () => {
        if (index === 0) {
            return (
                <div className="w-64 h-64 md:w-96 md:h-96 bg-zinc-800 rounded-full border-8 border-white overflow-hidden flex items-center justify-center mb-6">
                    <span className="text-zinc-400 text-6xl md:text-9xl font-bold tracking-widest">△○✕□</span>
                </div>
            );
        } else if (index === 1) {
            return (
                <div className="w-64 h-64 md:w-96 md:h-96 bg-yellow-500 rounded-full overflow-hidden flex items-center justify-center mb-6 relative">
                    <div className="absolute w-32 md:w-48 h-8 md:h-12 bg-black rotate-45"></div>
                    <div className="absolute w-8 md:w-12 h-32 md:h-48 bg-black rotate-45"></div>
                </div>
            );
        } else {
             return (
                <div className="w-64 h-64 md:w-96 md:h-96 bg-white rounded-full overflow-hidden flex items-center justify-center mb-6 border-8 border-slate-200">
                    <span className="text-8xl md:text-[10rem]">🍎</span>
                </div>
            );
        }
    };
    
    const answers = ["PlayStation Controller", "Minecraft Bee", "iPhone Logo"];

    return (
        <SlideContainer>
             <div className="flex flex-col h-full items-center justify-center">
                <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-purple-500 uppercase tracking-wider mb-2 text-center flex-shrink-0">
                Game 8: Zoom In #{index + 1}
                </h2>
                <p className="text-center font-outfit text-base md:text-xl mb-8 opacity-80 flex-shrink-0">What is this object?</p>

                <div className="flex-grow flex items-center justify-center">
                    <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center shadow-2xl group cursor-pointer hover:border-purple-500 transition-colors" onClick={playReveal}>
                        {renderContent()}
                        <p className="text-lg opacity-50 italic group-hover:opacity-0 transition-opacity mb-4">Hover/Tap to reveal</p>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-500 font-bold text-3xl md:text-5xl">{answers[index]}</div>
                    </div>
                </div>
             </div>
        </SlideContainer>
    )
}

export const ForbiddenWordSlide: React.FC<{ item: any }> = ({ item }) => {
    return (
        <SlideContainer>
            <div className="flex flex-col h-full justify-center items-center">
                 <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-pink-500 uppercase tracking-wider mb-8 md:mb-12 text-center flex-shrink-0">
                    Game 9: Forbidden Word
                </h2>
                <div className="flex-grow flex flex-col justify-center items-center w-full max-w-3xl">
                     <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-700 relative overflow-hidden w-full">
                        <div className={`absolute top-0 left-0 w-full h-4 bg-${item.color}-500`}></div>
                        <h3 className={`text-${item.color}-500 font-righteous text-3xl md:text-5xl mb-6`}>{item.team} Challenge</h3>
                        <p className="font-outfit text-2xl md:text-4xl mb-6">Describe: <strong className="text-4xl md:text-7xl block mt-4">{item.target}</strong></p>
                        <div className="h-px w-full bg-slate-200 dark:bg-slate-700 my-6"></div>
                        <p className="text-pink-500 font-bold text-xl md:text-3xl mb-6 uppercase tracking-widest">🚫 You CANNOT say:</p>
                        <ul className="space-y-4 font-outfit text-2xl md:text-4xl font-medium opacity-80">
                            {item.forbidden.map((word: string, i: number) => (
                                <li key={i}>• {word}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </SlideContainer>
    )
}

export const DiscussionSlide: React.FC<{ item: any }> = ({ item }) => {
    const getIcon = (icon: string) => {
        const props = { className: "w-16 h-16 md:w-32 md:h-32 mb-4" };
        if (icon === 'gamepad') return <Gamepad2 {...props} />;
        if (icon === 'fire') return <FireExtinguisher {...props} />;
        if (icon === 'apple') return <Apple {...props} />;
        if (icon === 'phone') return <Smartphone {...props} />;
        return null;
    }

    return (
        <SlideContainer>
            <div className="flex flex-col h-full justify-center">
                 <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-8 text-center flex-shrink-0">
                    Discussion: This or That?
                </h2>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-8 md:gap-0">
                        <div className="flex flex-col items-center text-sky-500 transform hover:scale-110 transition-transform cursor-pointer" onClick={playClick}>
                            {getIcon(item.leftIcon)}
                            <span className="font-righteous text-2xl md:text-5xl text-center">{item.left}</span>
                        </div>
                        <div className="mx-8 md:mx-32 font-bungee text-5xl md:text-9xl text-pink-500 animate-pulse">VS</div>
                        <div className="flex flex-col items-center text-sky-500 transform hover:scale-110 transition-transform cursor-pointer" onClick={playClick}>
                            {getIcon(item.rightIcon)}
                            <span className="font-righteous text-2xl md:text-5xl text-center">{item.right}</span>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainer>
    )
}

// --- NEW GAMES ---

export const EmojiIdiomsSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
  return (
    <SlideContainer>
        <div className="flex flex-col h-full items-center justify-center">
            <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-yellow-500 uppercase tracking-wider mb-2 text-center flex-shrink-0">
                Game 10: Emoji Idioms #{index + 1}
            </h2>
            <p className="text-center font-outfit text-base md:text-xl mb-8 opacity-80 flex-shrink-0">Guess the English phrase!</p>
            
            <div className="flex-grow flex items-center justify-center w-full max-w-4xl p-4">
                 <div className="group relative w-full aspect-video perspective">
                    <div className="w-full h-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border-4 border-yellow-500/30 flex flex-col items-center justify-center p-8 transition-all duration-700 transform group-hover:rotate-y-180 preserve-3d cursor-pointer" onMouseEnter={playClick}>
                        {/* Front */}
                        <div className="absolute backface-hidden flex flex-col items-center justify-center w-full h-full">
                            <span className="text-6xl md:text-9xl mb-8 animate-bounce">{item.emojis}</span>
                            <span className="text-lg md:text-2xl uppercase tracking-widest opacity-50 font-bold bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full">Hover to reveal</span>
                        </div>
                        {/* Back */}
                        <div className="absolute inset-0 bg-yellow-500 rounded-3xl rotate-y-180 backface-hidden flex items-center justify-center p-8 text-center">
                            <span className="font-righteous text-white text-4xl md:text-7xl shadow-sm">{item.answer}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SlideContainer>
  )
}

export const OddOneOutSlide: React.FC<{ item: any, index: number }> = ({ item: set, index }) => {
    const [revealed, setRevealed] = useState(false);
    const [wrongGuess, setWrongGuess] = useState<string | null>(null);

    const handleGuess = (item: string) => {
        if (revealed) return;
        if (item === set.answer) {
            setRevealed(true);
            setWrongGuess(null);
            playCorrect();
        } else {
            setWrongGuess(item);
            playIncorrect();
            setTimeout(() => setWrongGuess(null), 500);
        }
    };

    return (
        <SlideContainer>
             <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-6">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-orange-500 uppercase tracking-wider mb-2">
                        Game 11: Odd One Out #{index + 1}
                    </h2>
                    <p className="font-outfit text-base md:text-xl opacity-80">Click the item that doesn't belong!</p>
                </div>
                
                <div className="flex-grow flex flex-col items-center justify-center w-full max-w-5xl">
                    <div className="bg-slate-100 dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] w-full border-l-8 md:border-l-[16px] border-orange-500 shadow-2xl">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                             {set.items.map((option: string, i: number) => {
                                 const isWrong = wrongGuess === option;
                                 const isCorrect = revealed && option === set.answer;
                                 return (
                                     <button 
                                         key={i} 
                                         onClick={() => handleGuess(option)}
                                         className={`
                                             px-6 py-6 rounded-2xl font-bold border-4 transition-all duration-300 text-xl md:text-3xl
                                             ${isWrong ? 'animate-shake bg-red-100 border-red-500 text-red-600' : ''}
                                             ${isCorrect ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-600 dark:text-green-400 scale-105' : ''}
                                             ${!isWrong && !isCorrect && !revealed ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-orange-400 hover:shadow-lg' : ''}
                                             ${revealed && !isCorrect ? 'opacity-30 grayscale' : ''}
                                         `}
                                     >
                                         {option}
                                     </button>
                                 );
                             })}
                         </div>
                         
                         {revealed && (
                             <div className="text-center animate-fade-in-up">
                                <span className="block font-righteous text-3xl md:text-5xl text-green-500 mb-4">Correct!</span>
                                <span className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 font-outfit block">
                                    "{set.reason}"
                                </span>
                             </div>
                         )}
                    </div>
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

export const SlangScrambleSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-indigo-500 uppercase tracking-wider mb-2">
                        Game 12: Slang Scramble #{index + 1}
                    </h2>
                    <p className="font-outfit text-base md:text-xl opacity-80">Unscramble the Gen Z words!</p>
                </div>
                
                <div className="flex-grow flex items-center justify-center w-full max-w-4xl">
                    <div className="bg-white dark:bg-slate-800 p-12 md:p-20 rounded-[4rem] shadow-2xl text-center group cursor-pointer hover:bg-indigo-500 transition-colors duration-500 flex flex-col justify-center w-full aspect-[4/3] md:aspect-video border-4 border-slate-100 dark:border-slate-700" onMouseEnter={playClick}>
                        <div className="font-bungee text-5xl md:text-8xl text-slate-300 group-hover:text-white/50 mb-8 tracking-[0.2em] transition-colors">
                            {item.scrambled}
                        </div>
                        <div className="font-righteous text-4xl md:text-7xl text-indigo-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-8 group-hover:translate-y-0">
                            {item.answer}
                        </div>
                        <p className="mt-8 text-lg uppercase tracking-widest opacity-40 group-hover:text-white group-hover:opacity-80">Hover to solve</p>
                    </div>
                </div>
            </div>
        </SlideContainer>
    )
}

export const PriceIsRightSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    const [revealed, setRevealed] = useState(false);

    const getIcon = (idx: number) => {
        const icons = [
            <Gamepad2 className="w-16 h-16 md:w-24 md:h-24 text-emerald-600 dark:text-emerald-400" />,
            <Smartphone className="w-16 h-16 md:w-24 md:h-24 text-emerald-600 dark:text-emerald-400" />,
            <Car className="w-16 h-16 md:w-24 md:h-24 text-emerald-600 dark:text-emerald-400" />,
            <Watch className="w-16 h-16 md:w-24 md:h-24 text-emerald-600 dark:text-emerald-400" />,
            <div className="text-6xl md:text-8xl">👟</div>,
            <Plane className="w-16 h-16 md:w-24 md:h-24 text-emerald-600 dark:text-emerald-400" />
        ];
        return icons[idx] || <DollarSign className="w-16 h-16 md:w-24 md:h-24 text-emerald-600 dark:text-emerald-400" />;
    };

    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-emerald-500 uppercase tracking-wider mb-2">
                        Game 13: Price is Right #{index + 1}
                    </h2>
                    <p className="font-outfit text-base md:text-xl opacity-80">Guess the price (in USD). Closest wins!</p>
                </div>

                <div className="flex-grow flex items-center justify-center w-full max-w-4xl">
                     <div className="bg-white dark:bg-slate-800 p-8 md:p-16 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center w-full border-t-[16px] border-emerald-500 hover:scale-[1.02] transition-transform duration-300">
                        <div className="bg-emerald-100 dark:bg-emerald-900/30 p-8 rounded-full mb-8">
                            {getIcon(index)}
                        </div>
                        <h3 className="font-righteous text-3xl md:text-6xl text-center mb-12">{item.item}</h3>
                        <div className="w-full flex justify-center">
                            {revealed ? (
                                <div className="animate-bounce font-bungee text-5xl md:text-8xl text-emerald-500">{item.price}</div>
                            ) : (
                                <button 
                                    onClick={() => { setRevealed(true); playReveal(); }}
                                    className="bg-slate-100 dark:bg-slate-700 hover:bg-emerald-500 hover:text-white text-slate-600 dark:text-slate-300 px-12 py-6 rounded-full font-bold transition-all shadow-lg border border-slate-200 dark:border-slate-600 text-2xl md:text-4xl"
                                >
                                    Show Price
                                </button>
                            )}
                        </div>
                    </div>
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
        { icon: <Apple size={30} className="md:w-10 md:h-10 text-red-500" />, name: 'Apple', color: 'Red', pos: 'Top Left' },
        { icon: <Gamepad2 size={30} className="md:w-10 md:h-10 text-blue-500" />, name: 'Controller', color: 'Blue', pos: 'Top Middle' },
        { icon: <Smartphone size={30} className="md:w-10 md:h-10 text-black dark:text-white" />, name: 'Phone', color: 'Black/White', pos: 'Top Right' },
        { icon: <FireExtinguisher size={30} className="md:w-10 md:h-10 text-orange-500" />, name: 'Extinguisher', color: 'Orange', pos: 'Bottom Left' },
        { icon: <Eye size={30} className="md:w-10 md:h-10 text-green-500" />, name: 'Eye', color: 'Green', pos: 'Bottom Middle' },
        { icon: <Clock size={30} className="md:w-10 md:h-10 text-purple-500" />, name: 'Clock', color: 'Purple', pos: 'Bottom Right' },
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
        playClick();
        setTimeLeft(10);
        setGameState('memorize');
    }

    return (
        <SlideContainer>
            <div className="flex flex-col h-full justify-center items-center overflow-y-auto">
                <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-rose-500 uppercase tracking-wider mb-4 md:mb-8 text-center flex-shrink-0">
                    Game 14: Memory Master
                </h2>
                
                {/* STATE: START */}
                {gameState === 'start' && (
                    <div className="text-center">
                        <p className="font-outfit text-base md:text-xl mb-8">You have <strong>10 seconds</strong> to memorize the grid.</p>
                        <button onClick={startGame} className="bg-rose-500 text-white font-righteous text-xl md:text-2xl px-8 md:px-12 py-3 md:py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
                            START TIMER
                        </button>
                    </div>
                )}

                {/* STATE: MEMORIZE */}
                {gameState === 'memorize' && (
                    <div className="w-full max-w-sm md:max-w-3xl">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-4 rounded-full mb-8 overflow-hidden">
                            <div 
                                className="bg-rose-500 h-full transition-all duration-1000 ease-linear" 
                                style={{ width: `${(timeLeft / 10) * 100}%` }}
                            ></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 md:gap-8">
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
                    <div className="w-full max-w-sm md:max-w-3xl text-center">
                         <div className="bg-white dark:bg-slate-800 p-4 md:p-8 rounded-3xl shadow-xl border-2 border-rose-500 mb-8">
                             <HelpCircle size={40} className="mx-auto text-rose-500 mb-4 md:w-14 md:h-14" />
                             <h3 className="font-righteous text-lg md:text-4xl mb-4">Where was the <span className="text-blue-500">Blue Controller</span>?</h3>
                             <p className="text-sm md:text-lg opacity-60">Top Left? Middle? Bottom Right?</p>
                         </div>
                         
                         {gameState === 'quiz' ? (
                             <button onClick={() => { setGameState('reveal'); playCorrect(); }} className="bg-slate-800 dark:bg-slate-600 text-white font-bold px-8 py-3 rounded-full text-lg">
                                Reveal Answer
                             </button>
                         ) : (
                             <div className="animate-fade-in-up">
                                 <div className="flex items-center justify-center gap-4 text-xl md:text-3xl font-bold text-green-500 mb-8">
                                    <Check size={30} className="md:w-10 md:h-10"/> Top Middle!
                                 </div>
                                 <div className="grid grid-cols-3 gap-2 md:gap-8 opacity-50 pointer-events-none">
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
