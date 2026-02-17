
import React, { useEffect } from 'react';
import { Article } from '../types';

interface ArticleDetailProps {
  article: Article;
  relatedArticles: Article[];
  onArticleClick: (id: string) => void;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, relatedArticles, onArticleClick, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.id]);

  return (
    <article className="max-w-4xl mx-auto px-4 py-6 bg-white">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-2">
        <button onClick={onBack} className="hover:text-red-600 transition-colors">Home</button>
        <span className="text-gray-300">›</span>
        <span className="text-gray-400">TG News</span>
        <span className="text-gray-300">›</span>
        <span className="text-gray-700 font-medium truncate max-w-[150px] md:max-w-xs">{article.title}</span>
      </nav>

      {/* Headline */}
      <h1 className="text-2xl md:text-4xl font-bold leading-snug mb-6 text-black">
        {article.title}
      </h1>

      {/* Featured Image with potential Inset Style */}
      <div className="relative mb-6 overflow-hidden rounded-sm group">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full object-cover aspect-video"
        />
        {/* Mock Inset Image like in screenshot */}
        <div className="absolute top-4 left-4 w-1/4 max-w-[120px] aspect-square border-2 border-white shadow-lg overflow-hidden hidden sm:block">
           <img src="https://picsum.photos/seed/farmer/300/300" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Meta Information */}
      <div className="mb-4">
        <p className="text-sm font-bold text-black">By {article.author}</p>
        <p className="text-[12px] text-gray-500 mt-1">Published On : {article.date}</p>
      </div>

      {/* Social Share Bar */}
      <div className="flex items-center gap-3 border-y border-gray-200 py-4 mb-8">
         <button className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 7.6 11.7l1.9.9z"/></svg>
         </button>
         <button className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-sm hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348c0 .729.597 1.326 1.325 1.326H12.82V14.706h-3.128V11.1h3.128V8.441c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763V11.1h3.587l-.467 3.606h-3.12V24h6.116c.73 0 1.325-.597 1.325-1.326V1.326c0-.729-.596-1.326-1.325-1.326z"/></svg>
         </button>
         <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-sm hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
         </button>
         <button className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white shadow-sm hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
         </button>
         <button className="w-10 h-10 rounded-full bg-[#FF4500] flex items-center justify-center text-white shadow-sm hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.051l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.687 0 1.25.562 1.25 1.25 0 .687-.563 1.25-1.25 1.25-.477 0-.898-.182-1.207-.492-1.454.968-3.474 1.568-5.69 1.615l-.859 4.038c-.01.05-.061.08-.11.061l-2.833-.6c-.051-.01-.082-.062-.07-.11l.14-.658c.687 0 1.25-.562 1.25-1.25 0-.688-.563-1.25-1.25-1.25a1.25 1.25 0 0 0-1.25 1.25c0 .247.073.473.197.66l-1.393-.294c-.05-.01-.08-.06-.06-.11l1.01-4.74c-2.215-.047-4.235-.647-5.688-1.614-.31.31-.73.492-1.207.492-.688 0-1.25-.563-1.25-1.25 0-.688.562-1.25 1.25-1.25.478 0 .899.182 1.208.491 1.194-.856 2.85-1.419 4.674-1.488l.8-3.747-2.598.547a1.25 1.25 0 0 1-2.498-.051c0-.688.562-1.249 1.25-1.249.687 0 1.25.561 1.25 1.249l2.597-.547.8-3.747c.01-.05.061-.08.11-.061l2.833.6c.051.011.082.061.07.11l-.14.658c-.687 0-1.25.562-1.25 1.25 0 .688.563 1.25 1.25 1.25a1.25 1.25 0 0 0 1.25-1.25c0-.247-.073-.473-.197-.66l1.393.294c.05.011.081.061.061.11z"/></svg>
         </button>
         <button className="w-10 h-10 rounded-full bg-[#007FB2] flex items-center justify-center text-white shadow-sm hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
         </button>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none text-[#333] leading-loose text-lg">
         {article.content.split('\n\n').map((para, i) => (
            <p key={i} className="mb-6 font-medium">
               {para}
            </p>
         ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
         <h3 className="text-xl font-bold mb-6 text-red-600 uppercase tracking-wider">Related Stories</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map(rel => (
               <div 
                  key={rel.id} 
                  onClick={() => onArticleClick(rel.id)}
                  className="flex gap-4 cursor-pointer group hover:bg-gray-50 p-2 rounded-lg transition-colors"
               >
                  <img src={rel.imageUrl} className="w-24 h-24 object-cover rounded shadow-sm" />
                  <div className="flex-1">
                     <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{rel.category}</span>
                     <h4 className="font-bold text-sm leading-snug mt-1 group-hover:text-red-700">{rel.title}</h4>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </article>
  );
};

export default ArticleDetail;
