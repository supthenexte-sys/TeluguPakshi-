
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t-4 border-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">TeluguPakshi<span className="text-[#cc0000]">.</span></h2>
            <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 max-w-sm leading-relaxed">
                Empowering the Telugu-speaking world with high-speed, accurate, and independent journalism. One bird, many stories.
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y-2 border-white/20 py-12 mb-12">
           <div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-6">Archive</h4>
              <ul className="text-xs font-bold text-white/60 space-y-4 uppercase tracking-widest">
                 <li><button className="hover:text-white transition-all">Daily Edition</button></li>
                 <li><button className="hover:text-white transition-all">Weekly Digest</button></li>
                 <li><button className="hover:text-white transition-all">Video Archive</button></li>
              </ul>
           </div>
           <div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-6">Connect</h4>
              <ul className="text-xs font-bold text-white/60 space-y-4 uppercase tracking-widest">
                 <li><button className="hover:text-white transition-all">Editorial Team</button></li>
                 <li><button className="hover:text-white transition-all">Advertising</button></li>
                 <li><button className="hover:text-white transition-all">Join Us</button></li>
              </ul>
           </div>
           <div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-6">Legal</h4>
              <ul className="text-xs font-bold text-white/60 space-y-4 uppercase tracking-widest">
                 <li><button className="hover:text-white transition-all">Privacy Policy</button></li>
                 <li><button className="hover:text-white transition-all">Terms of Service</button></li>
                 <li><button className="hover:text-white transition-all">Cookie Policy</button></li>
              </ul>
           </div>
           <div>
              <h4 className="text-xs font-black uppercase tracking-widest mb-6">Subscription</h4>
              <button className="w-full border-2 border-white p-3 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                GET THE APP
              </button>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[8px] font-black uppercase tracking-[0.4em] text-white/30">
           <p>© TELUGUPAKSHI MEDIA GROUP MMXXVI. ALL RIGHTS RESERVED.</p>
           <p className="mt-4 md:mt-0">THE TRUTH AT HIGH SPEED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
