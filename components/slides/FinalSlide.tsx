import React from 'react';
import { SlideContainer } from '../SlideContainer';

export const FinalSlide: React.FC = () => {
  return (
    <SlideContainer className="text-center">
       <div className="flex flex-col items-center justify-center h-full">
            <h1 className="font-bungee text-7xl md:text-9xl text-green-500 dark:text-green-400 mb-8 filter drop-shadow-lg">
                GAME OVER
            </h1>
            <p className="font-righteous text-3xl md:text-4xl mb-12">Count your points!</p>
            
            <div className="flex flex-col md:flex-row gap-8">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-sky-500/30 w-64 transform hover:scale-105 transition-transform">
                    <h3 className="font-righteous text-3xl text-sky-500 mb-2">15-20</h3>
                    <p className="font-outfit text-xl">Legend 🏆</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-purple-500/30 w-64 transform hover:scale-105 transition-transform">
                    <h3 className="font-righteous text-3xl text-purple-500 mb-2">10-14</h3>
                    <p className="font-outfit text-xl">Pro Player 🎮</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-500/30 w-64 transform hover:scale-105 transition-transform">
                    <h3 className="font-righteous text-3xl text-slate-500 mb-2">0-9</h3>
                    <p className="font-outfit text-xl">Needs Practice 📚</p>
                </div>
            </div>
       </div>
    </SlideContainer>
  );
};
