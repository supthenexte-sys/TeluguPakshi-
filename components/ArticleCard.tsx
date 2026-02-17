
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  variant?: 'hero' | 'grid' | 'list' | 'mini';
  onClick: (id: string) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'list', onClick }) => {
  if (variant === 'hero') {
    return (
      <div 
        onClick={() => onClick(article.id)}
        className="group cursor-pointer border-b-4 border-black pb-12 mb-12"
      >
        <div className="relative mb-8 overflow-hidden">
          <img 
            src={article.imageUrl} 
            className="w-full aspect-[21/9] object-cover brightness-105 group-hover:scale-105 transition-transform duration-700"
            alt={article.title}
          />
          <div className="absolute top-0 left-0 bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-2">
            Featured / {article.category}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="serif text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight group-hover:underline decoration-4 underline-offset-8">
            {article.title}
          </h2>
          <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            {article.excerpt}
          </p>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4">
             <span>{article.author}</span>
             <span className="w-4 h-[2px] bg-black"></span>
             <span>{article.date}</span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div onClick={() => onClick(article.id)} className="group cursor-pointer flex flex-col gap-4 border-b-2 md:border-b-0 md:border-r-2 border-black/10 last:border-0 pb-8 md:pb-0 md:pr-8">
        <div className="aspect-square overflow-hidden bg-gray-100">
           <img src={article.imageUrl} className="w-full h-full object-cover transition-all duration-500" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-black/40">{article.category}</span>
        <h3 className="serif text-2xl font-black leading-tight group-hover:underline decoration-2 underline-offset-4">{article.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
        <div className="text-[10px] font-bold uppercase tracking-widest mt-2">{article.author}</div>
      </div>
    );
  }

  if (variant === 'mini') {
    return (
        <div onClick={() => onClick(article.id)} className="group cursor-pointer py-4 border-b border-black/10 flex gap-4">
            <span className="serif text-2xl font-black text-black/10 group-hover:text-black transition-colors">→</span>
            <div>
                <h4 className="font-bold text-sm leading-tight group-hover:underline">{article.title}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{article.category}</p>
            </div>
        </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(article.id)}
      className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b-2 border-black/10 items-center"
    >
      <div className="md:col-span-8">
        <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 inline-block mb-3">
          {article.category}
        </span>
        <h3 className="serif text-3xl font-black mb-4 leading-none group-hover:underline decoration-2 underline-offset-4">
          {article.title}
        </h3>
        <p className="text-gray-600 font-medium mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="text-[10px] font-bold uppercase tracking-widest text-black/50">
           BY {article.author} / {article.date}
        </div>
      </div>
      <div className="md:col-span-4 aspect-video overflow-hidden">
        <img 
          src={article.imageUrl} 
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
    </div>
  );
};
