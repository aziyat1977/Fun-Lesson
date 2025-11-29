import React, { useState } from 'react';
import { SlideContainer } from '../SlideContainer';
import { Search, Eye } from 'lucide-react';

export const AIRemixSlide: React.FC = () => {
    const [revealed, setRevealed] = useState(false);

    return (
        <SlideContainer bleed className="grid grid-cols-1 md:grid-cols-2">
             <div className="p-8 md:p-16 flex flex-col justify-center h-full space-y-6 overflow-y-auto">
                <h2 className="font-righteous text-3xl md:text-5xl text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-4">
                    Game 7: AI Remix
                </h2>
                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 space-y-4">
                    <p className="font-outfit text-lg md:text-xl"><strong>The Challenge:</strong> I asked AI to put a famous character in Uzbekistan.</p>
                    <br />
                    <p className="flex items-center text-lg font-bold"><Search className="w-5 h-5 mr-2"/> Clues:</p>
                    <ul className="list-disc pl-5 font-outfit text-lg space-y-2 opacity-80">
                        <li>He is wearing a traditional Chapan.</li>
                        <li>He is eating Plov with his hands.</li>
                        <li>He has a lightning bolt on his forehead.</li>
                    </ul>
                    <br />
                    <div 
                        onClick={() => setRevealed(!revealed)}
                        className={`font-righteous text-2xl md:text-3xl transition-colors cursor-pointer flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 -ml-2 select-none ${revealed ? 'text-pink-500' : 'text-green-500 dark:text-green-400'}`}
                    >
                        {revealed ? "It's Harry Potter! ⚡" : "Who is it? (Click to Reveal)"}
                        {!revealed && <Eye size={24} className="animate-pulse" />}
                    </div>
                </div>
             </div>

             <div className="h-64 md:h-full w-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-300 dark:border-slate-700 relative overflow-hidden p-8">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[300px] md:max-w-[400px] drop-shadow-2xl">
                    <rect width="400" height="400" className="fill-transparent"/>
                    {/* Robe */}
                    <path d="M100 400 L100 200 Q200 150 300 200 L300 400 Z" fill="#be185d"/>
                    {/* Gold trim */}
                    <path d="M120 400 L120 220 L140 220 L140 400" fill="#fbbf24"/>
                    <path d="M260 400 L260 220 L280 220 L280 400" fill="#fbbf24"/>
                    {/* Head */}
                    <circle cx="200" cy="150" r="60" fill="#fde047"/>
                    {/* Glasses */}
                    <circle cx="180" cy="150" r="15" fill="none" stroke="#000" strokeWidth="3"/>
                    <circle cx="220" cy="150" r="15" fill="none" stroke="#000" strokeWidth="3"/>
                    <line x1="195" y1="150" x2="205" y2="150" stroke="#000" strokeWidth="3"/>
                    {/* Scar */}
                    <path d="M200 110 L210 120 L200 130" stroke="#ef4444" strokeWidth="3" fill="none"/>
                    {/* Hat / Hair */}
                    <path d="M150 110 Q200 60 250 110 Z" fill="#000"/>
                </svg>
             </div>
        </SlideContainer>
    )
}