import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children, className = '', bleed = false }) => {
  return (
    <div className={`
      relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border 
      flex flex-col
      transition-all duration-300
      dark:bg-slate-900 dark:border-white/10 dark:text-slate-100
      bg-slate-50 border-black/10 text-slate-800
      ${className}
    `}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 z-0 pointer-events-none opacity-[0.05] dark:opacity-[0.1] bg-grid-pattern dark:text-sky-400 text-sky-600 bg-[length:40px_40px]`} />
      
      {/* Radial Overlay for depth */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--tw-gradient-to)_90%)] from-transparent dark:to-slate-900/90 to-slate-200/50" />

      {/* Content wrapper with auto scroll */}
      {/* Using 'dvh' ensures we respect mobile toolbars, but flex-1 lets parent control height */}
      <div className={`relative z-10 w-full flex-1 overflow-y-auto custom-scrollbar flex flex-col ${bleed ? '' : 'p-[clamp(1.5rem,4vw,4rem)]'}`}>
        {children}
      </div>
    </div>
  );
};