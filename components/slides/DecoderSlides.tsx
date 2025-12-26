
import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { QuizItem, Difficulty } from '../../types';

interface DecoderRoundProps {
  title: string;
  items: QuizItem[];
  difficulty: Difficulty;
}

export const DecoderRound: React.FC<DecoderRoundProps> = ({ title, items, difficulty }) => {
  const isSingle = items.length === 1;

  // Hint Logic
  const getHintClass = () => {
    switch (difficulty) {
        case 'medium': return 'blur-sm hover:blur-0 transition-all duration-300 cursor-help';
        case 'hard': return 'opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-help';
        default: return ''; // Easy: fully visible
    }
  };

  const hintClass = getHintClass();
  const hintLabel = difficulty === 'hard' ? '(Hover to reveal)' : '';

  return (
    <SlideContainer>
      <div className="flex flex-col h-full items-center">
        <h2 className="font-righteous text-2xl md:text-3xl lg:text-5xl text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-4 md:mb-6 lg:mb-8 text-center flex-shrink-0">
          {title}
        </h2>
        {/* Scrollable grid area */}
        <div className={`flex-grow w-full flex items-center justify-center ${!isSingle ? 'overflow-y-auto pr-2 pb-4' : 'p-4'}`}>
            {isSingle ? (
                // Single Item Layout
                 <div className="bg-white dark:bg-slate-800 border-4 border-purple-500 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center shadow-2xl w-full max-w-4xl aspect-[4/3] md:aspect-video hover:scale-[1.02] transition-transform">
                    <span className="font-righteous text-xl md:text-3xl text-green-600 dark:text-green-400 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 mb-6">
                        #{items[0].id}
                    </span>
                    <span className="text-[8rem] md:text-[12rem] leading-none filter drop-shadow-xl mb-6">{items[0].emoji}</span>
                    <div className="relative">
                        <span className={`font-outfit text-2xl md:text-5xl text-slate-500 dark:text-slate-400 italic text-center block ${hintClass}`}>
                            {items[0].hint}
                        </span>
                        {difficulty === 'hard' && <span className="absolute inset-0 flex items-center justify-center text-slate-300 text-sm uppercase tracking-widest pointer-events-none">Hover for Hint</span>}
                    </div>
                </div>
            ) : (
                // Grid Layout
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6 w-full">
                {items.map((item) => (
                    <div 
                    key={item.id}
                    className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col items-center justify-between h-36 md:h-48 lg:h-64 shadow-lg hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-300 hover:border-purple-500"
                    >
                    <span className="font-righteous text-xs md:text-lg text-green-600 dark:text-green-400 bg-slate-100 dark:bg-slate-900 px-2 md:px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                        #{item.id}
                    </span>
                    <span className="text-3xl md:text-4xl lg:text-6xl filter drop-shadow-md py-1 md:py-4">{item.emoji}</span>
                    <span className={`font-outfit text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400 italic text-center line-clamp-2 ${hintClass}`}>
                        {item.hint}
                    </span>
                    </div>
                ))}
                </div>
            )}
        </div>
      </div>
    </SlideContainer>
  );
};

export const RevealSlide: React.FC<{ title: string; item: QuizItem }> = ({ title, item }) => {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full items-center justify-center">
        <h2 className="font-righteous text-2xl md:text-3xl lg:text-5xl text-green-600 dark:text-green-400 uppercase tracking-wider mb-4 md:mb-8 text-center flex-shrink-0">
          {title}
        </h2>
        <div className="flex-grow w-full flex items-center justify-center p-4">
             <div className="bg-white dark:bg-slate-800 border-4 border-green-500 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center shadow-2xl w-full max-w-4xl aspect-[4/3] md:aspect-video animate-pop-in relative overflow-hidden">
                {/* Background glow/effect */}
                <div className="absolute inset-0 bg-green-500/5 dark:bg-green-500/10 pointer-events-none" />
                
                <span className="font-righteous text-xl md:text-3xl text-slate-400 dark:text-slate-500 mb-6 relative z-10">
                    #{item.id}
                </span>
                <span className="text-[6rem] md:text-[10rem] leading-none filter drop-shadow-xl mb-6 relative z-10 animate-bounce">
                    {item.emoji}
                </span>
                 <div className="relative z-10 text-center">
                    <span className="font-outfit text-4xl md:text-6xl font-bold text-slate-800 dark:text-white block drop-shadow-sm">
                        {item.answer}
                    </span>
                    <span className="font-outfit text-xl text-slate-500 mt-2 block italic">
                        {item.hint}
                    </span>
                </div>
            </div>
        </div>
      </div>
    </SlideContainer>
  );
};

interface AnswerRoundProps {
  title: string;
  items: QuizItem[];
  SvgGraphic?: React.ReactNode;
}

export const AnswerRound: React.FC<AnswerRoundProps> = ({ title, items, SvgGraphic }) => {
  return (
    <SlideContainer bleed={!!SvgGraphic}>
        <div className={`h-full ${SvgGraphic ? 'lg:grid lg:grid-cols-2 flex flex-col' : 'flex flex-col p-4 md:p-16'}`}>
            <div className={`flex flex-col justify-center h-full space-y-4 md:space-y-6 overflow-y-auto ${SvgGraphic ? 'p-6 md:p-12 lg:p-16' : ''}`}>
                <h2 className="font-righteous text-2xl md:text-4xl lg:text-5xl text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2 md:mb-4 flex-shrink-0">
                {title}
                </h2>
                <div className="overflow-y-auto pr-2 pb-20 md:pb-0 flex-grow">
                    <div className={`grid gap-3 md:gap-4 w-full ${!SvgGraphic ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-1'}`}>
                        {items.map((item) => (
                            <div key={item.id} className="bg-white dark:bg-slate-800 p-3 md:p-4 lg:p-6 rounded-lg md:rounded-xl flex items-center justify-between border-l-4 border-green-500 shadow-sm md:shadow-md">
                                <div className="flex items-center overflow-hidden">
                                    <span className="font-righteous text-sm md:text-lg text-slate-400 mr-2 md:mr-3 w-6 flex-shrink-0">{item.id}.</span>
                                    <span className="font-righteous text-sm md:text-lg lg:text-xl text-slate-800 dark:text-slate-100 truncate">
                                        {item.answer}
                                    </span>
                                </div>
                                <span className="text-xl md:text-2xl flex-shrink-0 ml-2">{item.emoji.slice(-2)}</span> 
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {SvgGraphic && (
                 <div className="h-64 lg:h-full w-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-300 dark:border-slate-700 relative overflow-hidden p-8 flex-shrink-0">
                     <div className="w-full h-full max-w-[200px] md:max-w-xs lg:max-w-md bg-white dark:bg-slate-900 rounded-3xl p-2 shadow-2xl border-4 border-sky-500 flex items-center justify-center">
                        {SvgGraphic}
                     </div>
                 </div>
            )}
        </div>
    </SlideContainer>
  );
};
