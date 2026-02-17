
import React from 'react';
import { Category } from '../types';

interface NavbarProps {
  activeCategory: string;
  onCategorySelect: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeCategory, onCategorySelect }) => {
  const categories = Object.values(Category);

  return (
    <nav className="bg-[#1a1a1a] text-white overflow-x-auto no-scrollbar sticky top-[64px] z-40 border-b border-white/5">
      <div className="container mx-auto flex items-center whitespace-nowrap px-2 h-12 max-w-7xl">
        <button 
          onClick={() => onCategorySelect("Home")}
          className={`px-4 flex items-center justify-center h-full transition-colors ${activeCategory === 'Home' ? 'text-white' : 'text-white/60'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategorySelect(cat)}
            className={`px-4 h-full text-sm font-bold transition-all relative flex items-center ${
              activeCategory === cat 
                ? 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#cc0000]' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
