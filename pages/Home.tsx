
import React from 'react';
import { Article } from '../types';

interface HomeProps {
  articles: Article[];
  onArticleClick: (id: string) => void;
  selectedCategory: string;
}

const Home: React.FC<HomeProps> = ({ articles, onArticleClick, selectedCategory }) => {
  const filteredArticles = selectedCategory === 'Home' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="space-y-6">
        {filteredArticles.map(article => (
          <div 
            key={article.id} 
            onClick={() => onArticleClick(article.id)}
            className="bg-white p-4 rounded-md shadow-sm border border-gray-100 cursor-pointer hover:border-red-200 transition-colors flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/3">
              <img src={article.imageUrl} className="w-full aspect-video object-cover rounded" alt={article.title} />
            </div>
            <div className="md:w-2/3 flex flex-col justify-between py-1">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{article.category}</span>
                <h2 className="text-xl font-bold mt-2 leading-tight hover:text-red-700 transition-colors">{article.title}</h2>
                <p className="text-sm text-gray-500 mt-3 line-clamp-2">{article.excerpt}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                 <span className="text-[10px] text-gray-400 font-bold">{article.date}</span>
                 <button className="text-red-600 text-xs font-bold hover:underline">Read More →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
