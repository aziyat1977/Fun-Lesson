import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { QuizItem } from '../../types';

interface DecoderRoundProps {
  title: string;
  items: QuizItem[];
}

export const DecoderRound: React.FC<DecoderRoundProps> = ({ title, items }) => {
  return (
    <SlideContainer>
      <div className="flex flex-col h-full">
        <h2 className="font-righteous text-3xl md:text-5xl text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-6 md:mb-8 text-center md:text-left">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 flex-grow items-center content-center">
          {items.map((item) => (
            <div 
              key={item.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-between h-48 md:h-64 shadow-lg hover:-translate-y-2 transition-transform duration-300 hover:border-purple-500"
            >
              <span className="font-righteous text-sm md:text-lg text-green-600 dark:text-green-400 bg-slate-100 dark:bg-slate-900 px-3 md:px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                #{item.id}
              </span>
              <span className="text-4xl md:text-6xl filter drop-shadow-md py-2 md:py-4">{item.emoji}</span>
              <span className="font-outfit text-xs md:text-base text-slate-500 dark:text-slate-400 italic text-center">
                {item.hint}
              </span>
            </div>
          ))}
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
        <div className={`h-full ${SvgGraphic ? 'grid grid-cols-1 md:grid-cols-2' : 'flex flex-col p-8 md:p-16'}`}>
            <div className={`flex flex-col justify-center h-full space-y-6 overflow-y-auto ${SvgGraphic ? 'p-8 md:p-16' : ''}`}>
                <h2 className="font-righteous text-3xl md:text-5xl text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-4">
                {title}
                </h2>
                <div className={`grid gap-4 w-full ${!SvgGraphic ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                    {items.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl flex items-center justify-between border-l-4 border-green-500 shadow-md">
                            <span className="font-righteous text-lg md:text-xl lg:text-2xl text-slate-800 dark:text-slate-100 truncate mr-2">
                                <span className="mr-2 opacity-50">{item.id}.</span>{item.answer}
                            </span>
                             <span className="text-2xl flex-shrink-0">{item.emoji.slice(-2)}</span> 
                        </div>
                    ))}
                </div>
            </div>

            {SvgGraphic && (
                 <div className="h-64 md:h-full w-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-300 dark:border-slate-700 relative overflow-hidden p-8">
                     <div className="w-full h-full max-w-[300px] md:max-w-md bg-white dark:bg-slate-900 rounded-3xl p-2 shadow-2xl border-4 border-sky-500 flex items-center justify-center">
                        {SvgGraphic}
                     </div>
                 </div>
            )}
        </div>
    </SlideContainer>
  );
};