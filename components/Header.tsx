
import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onHomeClick }) => {
  return (
    <header className="bg-[#cc0000] text-white px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <div className="flex items-center gap-3">
          <button 
            onClick={onHomeClick}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#cc0000] shadow-inner">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.17 0-2.39.15-3.5.5v13.5c1.11-.35 2.33-.5 3.5-.5 1.95 0 4.05.4 5.5 1.5 1.45-1.1 3.55-1.5 5.5-1.5 1.17 0 2.39.15 3.5.5V5zM9 11.5c.66-.4 1.5-.7 2.5-.8V6.5c-1.15.1-2.13.4-3 .8v4.2zm12 5.5c-1.17 0-2.39.15-3.5.5-1.95 0-4.05.4-5.5 1.5V6.5c1.45-1.1 3.55-1.5 5.5-1.5 1.17 0 2.39.15 3.5.5V17z"/></svg>
            </div>
            <div className="flex flex-col leading-none font-black">
              <span className="text-2xl tracking-tighter uppercase">TeluguPakshi</span>
              <span className="text-[10px] tracking-widest border-t border-white/40 pt-0.5 font-bold uppercase">తెలుగు పక్షి</span>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-5">
          <button className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
            <div className="w-7 h-5 border border-white rounded flex items-center justify-center relative overflow-hidden">
               <div className="bg-white w-full h-full absolute flex items-center justify-center opacity-10"></div>
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2 4-4"/><path d="m3 17 2 2 4-4"/><path d="m13 6 2 2 4-4"/></svg>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest leading-none">LIVE</span>
          </button>
          
          <button className="hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>

          <button onClick={onMenuClick} className="flex flex-col gap-1.5 p-1 hover:opacity-80 transition-opacity">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
