import { ArrowRight, Zap } from 'lucide-react';
import React from 'react';
import { Reveal } from './components/ui/Reveal';
import { i18n, Language } from './shared/i18n';

interface FooterProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className={`py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0f1115]' : 'bg-[#ffffff]'}`}>
        <div className="max-w-7xl mx-auto relative group">
          <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[560px] h-[300px] md:h-[560px] bg-[#0958d9]/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[560px] h-[300px] md:h-[560px] bg-[#69b1ff]/12 rounded-full blur-[140px]" />

          <div className={`relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border glass-card-pro ${isDark ? 'border-white/10' : 'border-[#0958d9]/20 shadow-xl'}`}>
            <div className="absolute inset-0 grid-bg-complex opacity-[0.18]" />

            <div className="relative z-10 px-6 py-16 md:py-24 flex flex-col items-center text-center">
              <Reveal>
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#1677ff]/35 bg-[#1677ff]/10 mb-10">
                  <Zap size={16} className="text-[#1677ff] fill-[#1677ff]" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#1677ff]">MISSION_CRITICAL_READY</span>
                </div>

                <h2 className={`text-4xl md:text-7xl font-heading font-bold mb-8 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                  {lang === 'mn' ? (
                    <>Эрсдэлээ <span className="gradient-text-impact">Орлого</span> болго.</>
                  ) : (
                    <>Turn Risk Into <span className="gradient-text-impact">Revenue.</span></>
                  )}
                </h2>

                <p className={`text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#475569]'}`}>
                  {t.finalCta.subtitle}
                </p>

                <div className="w-full flex items-center justify-center">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="group h-14 px-10 brand-button font-mono rounded-full text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3"
                  >
                    {t.finalCta.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          .gradient-text-impact {
            background: linear-gradient(to right, #1677ff, #69b1ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </section>

      <footer className={`pt-16 pb-10 border-t transition-colors duration-500 ${isDark ? 'bg-[#030304] border-white/10' : 'bg-[#f5f9ff] border-[#0958d9]/18'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-12">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollTo('home')}>
                <div className="w-11 h-11 brand-grad rounded-xl flex items-center justify-center font-black text-white text-lg shadow-[0_0_20px_-5px_rgba(22,119,255,0.7)]">D</div>
                <span className={`text-xl font-heading font-bold uppercase tracking-[0.1em] ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>DEBTPRO</span>
              </div>
              <p className={`text-sm max-w-[320px] ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
                {t.hero.subtitle}
              </p>
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:flex gap-x-8 gap-y-5 text-[10px] font-mono uppercase tracking-[0.15em] ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
              <button onClick={() => scrollTo('home')} className="text-left hover:text-[#1677ff] transition-colors">Home</button>
              <button onClick={() => scrollTo('product')} className="text-left hover:text-[#1677ff] transition-colors">Platform</button>
              <button onClick={() => scrollTo('why')} className="text-left hover:text-[#1677ff] transition-colors">Advantages</button>
              <button onClick={() => scrollTo('pricing')} className="text-left hover:text-[#1677ff] transition-colors">Licensing</button>
              <button onClick={() => scrollTo('faq')} className="text-left hover:text-[#1677ff] transition-colors">FAQ</button>
            </div>
          </div>

          <div className={`pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-5 ${isDark ? 'border-white/10' : 'border-[#0958d9]/18'}`}>
            <p className={`text-[10px] font-mono uppercase tracking-[0.1em] ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>
              © 2026 KCH SOLUTION LLC. All rights reserved.
            </p>
            <span className={`text-[10px] font-mono uppercase tracking-[0.1em] ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>
              Engineered in Mongolia
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};




