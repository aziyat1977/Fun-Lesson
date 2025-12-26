
import React, { useState, useEffect, useRef } from 'react';
import { SlideContainer } from '../SlideContainer';
import { Check, X, HelpCircle, Eye, MessageCircle, Link2, Timer } from 'lucide-react';
import { playClick, playCorrect, playIncorrect, playReveal } from '../../utils/sound';
import { Difficulty } from '../../types';

// --- GAME 15: CATEGORIES ---
export const CategoriesSlide: React.FC<{ item: any, index: number, difficulty: Difficulty }> = ({ item, index, difficulty }) => {
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [isActive, setIsActive] = useState(false);
    
    const getDuration = () => {
        switch(difficulty) {
            case 'easy': return 10;
            case 'medium': return 5;
            case 'hard': return 3;
            default: return 5;
        }
    }

    useEffect(() => {
        let interval: any;
        if (isActive && timeLeft !== null && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => (prev !== null ? prev - 0.1 : 0));
            }, 100);
        } else if (timeLeft !== null && timeLeft <= 0) {
            setIsActive(false);
            setTimeLeft(0);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);

    const startTimer = () => {
        playClick();
        setTimeLeft(getDuration());
        setIsActive(true);
    };

    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-indigo-500 uppercase tracking-wider mb-2">Game 15: Rapid Categories</h2>
                    <p className="font-outfit text-xl opacity-80">Name 3 things!</p>
                </div>
                <div className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl gap-8">
                     <div className="bg-white dark:bg-slate-800 p-12 md:p-16 rounded-[3rem] shadow-2xl border-l-[16px] border-indigo-500 group hover:shadow-[0_20px_50px_rgba(99,102,241,0.3)] transition-all w-full text-center" onMouseEnter={playClick}>
                        <h3 className="font-righteous text-3xl md:text-6xl text-slate-800 dark:text-slate-100 mb-8 leading-tight">{item.question}</h3>
                        <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500 font-bold font-outfit text-2xl md:text-3xl">
                            Ex: {item.answer}
                        </div>
                        <div className="mt-8 text-sm md:text-lg uppercase tracking-widest opacity-30 group-hover:opacity-0">Hover for example</div>
                    </div>

                    {/* Timer UI */}
                    <div className="w-full flex flex-col items-center">
                        {!isActive && timeLeft !== 0 && (
                            <button onClick={startTimer} className="bg-indigo-500 hover:bg-indigo-600 text-white font-righteous text-xl px-8 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105">
                                <Timer size={24} /> Start {getDuration()}s Timer
                            </button>
                        )}
                        
                        {(isActive || timeLeft === 0) && (
                            <div className="w-full max-w-md h-8 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden relative border border-slate-300 dark:border-slate-600">
                                <div 
                                    className={`h-full transition-all ease-linear ${timeLeft === 0 ? 'bg-red-500' : 'bg-indigo-500'}`}
                                    style={{ width: `${(Math.max(0, timeLeft || 0) / getDuration()) * 100}%`, transitionDuration: '100ms' }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-800 dark:text-white drop-shadow-md">
                                    {Math.ceil(timeLeft || 0)}s
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 16: TWO TRUTHS A LIE ---
export const TwoTruthsSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-6">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-rose-500 uppercase tracking-wider mb-2">Game 16: Two Truths, One Lie</h2>
                    <p className="font-outfit text-xl opacity-80">Find the lie!</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-4xl">
                    <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-700 w-full">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-righteous text-3xl md:text-5xl text-rose-500">{item.topic}</h3>
                            <button 
                                onClick={() => { setRevealed(!revealed); playReveal(); }}
                                className="bg-slate-100 dark:bg-slate-700 p-3 md:p-4 rounded-full hover:bg-rose-100 text-rose-500 transition-colors"
                            >
                                {revealed ? <Eye size={32} /> : <HelpCircle size={32} />}
                            </button>
                        </div>
                        <div className="space-y-4">
                            {item.options.map((opt: any, i: number) => (
                                <div key={i} className={`p-6 rounded-2xl border-4 font-outfit text-xl md:text-3xl flex justify-between items-center transition-all ${revealed ? (opt.isLie ? 'border-rose-500 bg-rose-50 dark:bg-rose-900/20 shadow-lg scale-105' : 'border-green-500 opacity-50') : 'border-slate-200 dark:border-slate-700 hover:border-rose-200'}`}>
                                    <span>{opt.text}</span>
                                    {revealed && opt.isLie && <span className="font-bold text-rose-600">LIE!</span>}
                                </div>
                            ))}
                        </div>
                        {revealed && (
                            <p className="mt-8 text-slate-600 dark:text-slate-300 italic animate-fade-in text-xl md:text-2xl text-center">
                                💡 {item.explanation}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 17: QUOTES ---
export const QuotesSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
        <SlideContainer>
             <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-amber-500 uppercase tracking-wider mb-2">Game 17: Who Said It?</h2>
                    <p className="font-outfit text-xl opacity-80">Guess the person or movie!</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-4xl">
                    <div className="bg-amber-50 dark:bg-slate-800 p-12 md:p-20 rounded-[4rem] border-4 border-amber-200 dark:border-amber-900/30 group hover:border-amber-500 transition-colors cursor-pointer flex flex-col justify-center text-center w-full shadow-2xl aspect-[4/3]" onMouseEnter={playClick}>
                        <MessageCircle className="w-16 h-16 md:w-24 md:h-24 mx-auto text-amber-400 mb-6 opacity-50" />
                        <h3 className="font-righteous text-3xl md:text-6xl text-slate-800 dark:text-slate-100 mb-8 leading-snug">"{item.question}"</h3>
                        <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-8 group-hover:translate-y-0 text-amber-600 dark:text-amber-400 font-bold font-outfit text-2xl md:text-4xl">
                            — {item.answer}
                        </div>
                        <p className="mt-8 text-lg uppercase tracking-widest opacity-30 group-hover:opacity-0">Hover to reveal</p>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 18: FACT OR FICTION ---
export const FactFictionSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-cyan-500 uppercase tracking-wider mb-2">Game 18: Fact or Fiction</h2>
                    <p className="font-outfit text-xl opacity-80">Is it true or false?</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-4xl">
                     <div className="bg-white dark:bg-slate-800 p-12 md:p-16 rounded-[3rem] shadow-2xl border-l-[16px] border-cyan-500 flex flex-col items-center justify-center gap-8 w-full text-center">
                        <div className="w-full">
                            <span className="font-bold text-cyan-500 text-2xl block mb-4">Statement #{index+1}</span>
                            <span className="font-outfit text-3xl md:text-5xl leading-tight">{item.statement}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-8">
                            {revealed ? (
                                <div className={`font-righteous text-3xl md:text-5xl px-8 py-4 rounded-2xl flex items-center gap-4 ${item.isTrue ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'} animate-bounce`}>
                                    {item.isTrue ? <Check size={40} /> : <X size={40} />}
                                    {item.isTrue ? 'FACT' : 'FICTION'}
                                </div>
                            ) : (
                                <button onClick={() => { setRevealed(true); playReveal(); }} className="bg-slate-200 dark:bg-slate-700 px-12 py-4 rounded-full hover:bg-cyan-500 hover:text-white transition-colors font-bold text-2xl shadow-lg">
                                    REVEAL
                                </button>
                            )}
                        </div>
                        {revealed && (
                            <div className="w-full text-xl md:text-2xl text-slate-500 italic bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl animate-fade-in-up">
                                {item.fact}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 19: RIDDLES ---
export const RiddlesSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-violet-500 uppercase tracking-wider mb-2">Game 19: Riddle Me This</h2>
                    <p className="font-outfit text-xl opacity-80">Use your brain!</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-4xl">
                     <div className="perspective w-full aspect-video group cursor-pointer">
                        <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-700" onMouseEnter={playClick}>
                            <div className="absolute backface-hidden w-full h-full bg-violet-100 dark:bg-slate-800 rounded-[3rem] flex flex-col items-center justify-center p-12 text-center border-4 border-violet-200 dark:border-slate-700 shadow-2xl">
                                <p className="font-outfit text-3xl md:text-6xl font-medium leading-tight">{item.question}</p>
                                <div className="absolute bottom-8 text-lg text-violet-400 font-bold uppercase tracking-widest bg-white/50 dark:bg-black/20 px-4 py-2 rounded-full">Flip for answer</div>
                            </div>
                            <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-violet-500 rounded-[3rem] flex items-center justify-center p-12 text-center shadow-2xl">
                                <p className="font-righteous text-4xl md:text-8xl text-white drop-shadow-md">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 20: WOULD YOU RATHER ---
export const WYRSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-orange-500 uppercase tracking-wider mb-2">Game 20: Would You Rather?</h2>
                    <p className="font-outfit text-xl opacity-80">Pick a side!</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-6xl">
                    <div className="flex flex-col md:flex-row items-stretch rounded-[3rem] overflow-hidden shadow-2xl w-full h-96 md:h-[30rem]">
                        <div className="flex-1 bg-blue-500 text-white p-8 flex items-center justify-center text-center font-bold text-3xl md:text-5xl hover:bg-blue-600 transition-colors cursor-pointer relative group" onClick={playClick}>
                            <span className="z-10">{item.optionA}</span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="bg-slate-900 text-white flex items-center justify-center px-8 py-4 md:py-0 font-bungee z-10 text-3xl md:text-5xl">OR</div>
                        <div className="flex-1 bg-orange-500 text-white p-8 flex items-center justify-center text-center font-bold text-3xl md:text-5xl hover:bg-orange-600 transition-colors cursor-pointer relative group" onClick={playClick}>
                            <span className="z-10">{item.optionB}</span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 21: CONNECTIONS ---
export const ConnectionsSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-teal-500 uppercase tracking-wider mb-2">Game 21: The Connection</h2>
                    <p className="font-outfit text-xl opacity-80">What connects these 3 words?</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-2xl">
                    <div onClick={() => { setRevealed(true); playReveal(); }} className={`w-full aspect-square md:aspect-[4/3] p-12 rounded-[3rem] border-8 text-center cursor-pointer transition-all duration-500 shadow-2xl flex flex-col items-center justify-center ${revealed ? 'bg-teal-500 border-teal-500 text-white' : 'bg-white dark:bg-slate-800 border-teal-100 dark:border-teal-900 hover:border-teal-400'}`}>
                        {revealed ? (
                            <div className="flex flex-col items-center justify-center h-full animate-pop-in">
                                <Link2 size={64} className="mb-6" />
                                <h3 className="font-righteous text-5xl md:text-7xl">{item.answer}</h3>
                            </div>
                        ) : (
                            <div className="flex flex-col justify-between h-full space-y-4 w-full">
                                <div className="flex-grow flex flex-col justify-center space-y-6">
                                    {item.words.map((w: string, i: number) => (
                                        <span key={i} className="font-outfit text-3xl md:text-5xl font-medium py-4 border-b-2 border-dashed border-slate-300 dark:border-slate-600 last:border-0">{w}</span>
                                    ))}
                                </div>
                                <p className="text-sm md:text-lg uppercase tracking-widest text-teal-500 mt-4">Tap to solve</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 22: SCRAMBLE ---
export const ScrambleSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
        <SlideContainer>
             <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-lime-500 uppercase tracking-wider mb-2">Game 22: Sentence Scramble</h2>
                    <p className="font-outfit text-xl opacity-80">Put the words in order.</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-5xl">
                    <div className="bg-white dark:bg-slate-800 p-12 md:p-16 rounded-[3rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(132,204,22,0.3)] transition-all border border-slate-100 dark:border-slate-700 group cursor-default w-full text-center" onMouseEnter={playClick}>
                        <div className="flex flex-col items-center justify-center gap-8">
                            <div className="font-mono text-2xl md:text-5xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-8 py-6 rounded-2xl w-full">
                                {item.question}
                            </div>
                            <div className="text-slate-300 text-4xl rotate-90 md:rotate-0">➜</div>
                            <div className="font-outfit text-3xl md:text-5xl font-bold text-lime-600 dark:text-lime-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-8 md:translate-y-0 md:translate-x-8 group-hover:translate-y-0 group-hover:translate-x-0 w-full">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 23: SYNONYMS ---
export const SynonymSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    const [revealed, setRevealed] = useState(false);

    return (
        <SlideContainer>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-fuchsia-500 uppercase tracking-wider mb-2">Game 23: Synonym Snap</h2>
                    <p className="font-outfit text-xl opacity-80">Find the word with the SAME meaning.</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-4xl">
                     <div className="bg-white dark:bg-slate-800 p-12 md:p-16 rounded-[3rem] border-l-[16px] border-fuchsia-500 shadow-2xl w-full">
                        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                            <h3 className="font-black text-4xl md:text-7xl text-slate-800 dark:text-white">{item.word}</h3>
                            {!revealed && <button onClick={() => { setRevealed(true); playReveal(); }} className="text-xl bg-slate-200 dark:bg-slate-700 px-8 py-2 rounded-full hover:bg-fuchsia-200 hover:text-fuchsia-800 transition-colors">Check Answer</button>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            {item.options.map((opt: string, i: number) => (
                                <div 
                                    key={i} 
                                    onClick={() => { setRevealed(true); i === item.correctIndex ? playCorrect() : playIncorrect(); }}
                                    className={`
                                        text-center py-6 px-4 rounded-2xl font-bold border-4 cursor-pointer transition-all text-2xl md:text-3xl
                                        ${revealed 
                                            ? (i === item.correctIndex ? 'bg-green-500 text-white border-green-500 scale-110 shadow-lg' : 'opacity-30 border-slate-200')
                                            : 'border-slate-200 hover:border-fuchsia-300 dark:border-slate-700 hover:scale-105'
                                        }
                                    `}
                                >
                                    {opt}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};

// --- GAME 24: FLAG QUIZ ---
export const FlagSlide: React.FC<{ item: any, index: number }> = ({ item, index }) => {
    return (
        <SlideContainer>
             <div className="flex flex-col h-full items-center justify-center">
                <div className="flex-shrink-0 text-center mb-8">
                    <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-red-500 uppercase tracking-wider mb-2">Game 24: Guess the Flag</h2>
                    <p className="font-outfit text-xl opacity-80">Which country is this?</p>
                </div>
                <div className="flex-grow flex items-center justify-center w-full max-w-2xl">
                    <div className="bg-white dark:bg-slate-800 p-16 rounded-[4rem] flex flex-col items-center justify-center aspect-square shadow-2xl group hover:scale-105 transition-transform cursor-pointer border border-slate-100 dark:border-slate-700 w-full relative overflow-hidden" onMouseEnter={playClick}>
                        <div className="text-[10rem] md:text-[15rem] mb-4 filter drop-shadow-lg leading-none">{item.question}</div>
                        <div className="font-righteous text-4xl md:text-7xl text-slate-800 dark:text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity absolute bg-white/95 dark:bg-slate-900/95 w-full h-full flex items-center justify-center z-10">
                            {item.answer}
                        </div>
                        <p className="absolute bottom-12 text-lg uppercase tracking-widest opacity-30 group-hover:opacity-0">Hover to reveal</p>
                    </div>
                </div>
            </div>
        </SlideContainer>
    );
};
