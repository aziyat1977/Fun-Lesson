import React from 'react';
import { SlideContainer } from '../SlideContainer';
import { Gamepad2 } from 'lucide-react';

export const TitleSlide: React.FC = () => {
  return (
    <SlideContainer className="text-center">
      <div className="flex flex-col items-center justify-center h-full space-y-6 md:space-y-8 min-h-min">
        <h1 className="font-bungee text-5xl md:text-7xl lg:text-9xl leading-tight filter drop-shadow-lg">
          EXAM<br />RECOVERY
        </h1>
        <p className="font-righteous text-xl md:text-3xl lg:text-4xl text-green-500 dark:text-green-400 tracking-widest uppercase">
          English Club • Level 3 • 80 Min
        </p>
        <div className="flex items-center text-lg md:text-2xl text-slate-500 dark:text-slate-400 font-outfit font-medium mt-4 md:mt-8">
          <Gamepad2 className="w-6 h-6 md:w-8 md:h-8 mr-3" />
          <span>Movies • Music • Games • Prizes</span>
        </div>
      </div>
    </SlideContainer>
  );
};

export const WarmUpSlide: React.FC = () => {
  return (
    <SlideContainer bleed className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full p-8 md:p-12 lg:p-16 bg-slate-50 dark:bg-slate-900/50 overflow-y-auto">
          <h2 className="font-righteous text-4xl md:text-6xl text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-8 drop-shadow-sm leading-tight">
            How are you feeling?
          </h2>
          
          <div className="space-y-6">
            {/* Option A Card */}
            <div className="flex items-center p-4 md:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border-l-8 border-orange-500 hover:scale-[1.02] transition-transform cursor-default">
               <div className="text-4xl md:text-5xl mr-6 filter drop-shadow-sm">🍕</div>
               <div>
                  <h3 className="font-bold text-xl md:text-2xl text-slate-800 dark:text-white mb-1">Option A</h3>
                  <p className="font-outfit text-lg md:text-xl text-slate-600 dark:text-slate-300">
                    Full of energy like <span className="text-orange-500 font-bold">Pizza</span>?
                  </p>
               </div>
            </div>

            {/* Option B Card */}
             <div className="flex items-center p-4 md:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-md border-l-8 border-yellow-500 hover:scale-[1.02] transition-transform cursor-default">
               <div className="text-4xl md:text-5xl mr-6 filter drop-shadow-sm">🍛</div>
               <div>
                  <h3 className="font-bold text-xl md:text-2xl text-slate-800 dark:text-white mb-1">Option B</h3>
                  <p className="font-outfit text-lg md:text-xl text-slate-600 dark:text-slate-300">
                    Relaxed and heavy like <span className="text-yellow-600 dark:text-yellow-400 font-bold">Plov</span>?
                  </p>
               </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-sky-100/50 dark:bg-sky-900/20 rounded-xl border border-sky-200 dark:border-sky-800 backdrop-blur-sm">
              <p className="font-outfit italic text-slate-600 dark:text-slate-400 text-base md:text-lg mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-500"></span>
                Turn to your partner. You have 30 seconds.
              </p>
              <p className="font-outfit text-green-600 dark:text-green-400 text-xl md:text-2xl font-bold">
                "I feel like <span className="underline decoration-wavy decoration-slate-300">...</span> because..."
              </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-64 md:h-full w-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-300 dark:border-slate-700 overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-400 via-transparent to-transparent" />
          
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[350px] md:max-w-[500px] animate-spin-slow drop-shadow-2xl p-8">
              <defs>
                  <radialGradient id="riceGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="100%" stopColor="#d97706" />
                  </radialGradient>
              </defs>
              <circle cx="250" cy="250" r="220" className="fill-white dark:fill-slate-900" />
              <circle cx="250" cy="250" r="200" fill="#fde68a" stroke="#d97706" strokeWidth="2"/>
              <circle cx="250" cy="250" r="180" fill="url(#riceGrad)" />
              <path d="M200 150 L300 160" stroke="#ea580c" strokeWidth="8" strokeLinecap="round"/>
              <path d="M180 200 L280 210" stroke="#ea580c" strokeWidth="8" strokeLinecap="round"/>
              <path d="M220 250 L320 240" stroke="#ea580c" strokeWidth="8" strokeLinecap="round"/>
              <path d="M210 300 L290 290" stroke="#ea580c" strokeWidth="8" strokeLinecap="round"/>
              <circle cx="220" cy="220" r="30" fill="#78350f" />
              <circle cx="280" cy="280" r="35" fill="#78350f" />
              <circle cx="240" cy="300" r="25" fill="#78350f" />
              <circle cx="250" cy="180" r="25" fill="#fff" stroke="#ccc" />
          </svg>
        </div>
      </div>
    </SlideContainer>
  );
};