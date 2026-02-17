
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import { MOCK_ARTICLES } from './data';
import { Article } from './types';

const App: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("Home");
  const [viewedArticleId, setViewedArticleId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const articles = useMemo(() => MOCK_ARTICLES, []);
  
  const viewedArticle = useMemo(() => 
    articles.find(a => a.id === viewedArticleId), 
    [viewedArticleId, articles]
  );

  const relatedArticles = useMemo(() => 
    viewedArticle ? articles.filter(a => a.id !== viewedArticle.id).slice(0, 4) : [],
    [viewedArticle, articles]
  );

  const handleArticleClick = (id: string) => {
    setViewedArticleId(id);
    window.scrollTo(0, 0);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategoryId(category);
    setViewedArticleId(null);
    window.scrollTo(0, 0);
  };

  const handleHomeClick = () => {
    setViewedArticleId(null);
    setSelectedCategoryId("Home");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#cc0000] selection:text-white">
      <Header 
        onMenuClick={() => setIsMenuOpen(!isMenuOpen)} 
        onHomeClick={handleHomeClick}
      />
      
      {!viewedArticleId && (
        <Navbar 
          activeCategory={selectedCategoryId} 
          onCategorySelect={handleCategorySelect} 
        />
      )}

      <main className="flex-grow">
        {viewedArticleId && viewedArticle ? (
          <ArticleDetail 
            article={viewedArticle} 
            relatedArticles={relatedArticles}
            onArticleClick={handleArticleClick}
            onBack={() => setViewedArticleId(null)}
          />
        ) : (
          <Home 
            articles={articles} 
            selectedCategory={selectedCategoryId}
            onArticleClick={handleArticleClick}
          />
        )}
      </main>

      <Footer />

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col p-8 animate-in slide-in-from-right duration-300">
           <button 
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-white hover:opacity-70"
           >
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
           </button>
           <div className="mt-12 flex flex-col gap-8">
              <button 
                onClick={handleHomeClick}
                className="text-5xl font-black text-white text-left uppercase tracking-tighter"
              >
                TeluguPakshi<span className="text-[#cc0000]">.</span>
              </button>
              <div className="flex flex-col gap-4 mt-8">
                {["Home", "బిగ్ స్టోరీస్", "తెలంగాణ", "ఆంధ్రప్రదేశ్", "సినిమా", "రివ్యూస్"].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => {
                        handleCategorySelect(cat);
                        setIsMenuOpen(false);
                    }}
                    className="text-white text-2xl font-bold uppercase tracking-widest text-left hover:text-[#cc0000]"
                  >
                    {cat}
                  </button>
                ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default App;
