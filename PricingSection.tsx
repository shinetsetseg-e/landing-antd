
import { BankFilled, CheckCircleFilled, CloudFilled, SafetyCertificateFilled, ThunderboltFilled } from '@ant-design/icons';
import { Typography } from 'antd';
import React from 'react';
import { Reveal } from './CommonUI';
import { i18n, Language } from './shared/i18n';

const { Text } = Typography;

interface PricingSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const PricingSection: React.FC<PricingSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className={`py-32 md:py-48 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="text-center mb-24 md:mb-32">
             <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.pricing.tag}</Text>
             </div>
            <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black mb-10 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.pricing.title}
            </h2>
            <p className={`text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.pricing.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 max-w-6xl mx-auto items-stretch">
          {/* StarterPro Plan - Redesigned to be equally premium */}
          <Reveal direction="up" delay={200} className="h-full">
            <div className={`
              group relative p-10 md:p-14 rounded-[4rem] h-full flex flex-col transition-all duration-700 border
              ${isDark 
                ? 'bg-slate-900/40 border-white/10 hover:border-blue-500/50 hover:bg-slate-900/60 shadow-2xl' 
                : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-2xl shadow-blue-900/5'}
            `}>
              {/* Decorative Corner Icon */}
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <CloudFilled style={{ fontSize: '120px' }} />
              </div>

              <div className="mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black tracking-widest uppercase mb-8 border border-blue-500/20">
                  <ThunderboltFilled /> {t.pricing.starter.period}
                </div>
                <Text className={`text-[12px] font-black uppercase tracking-[0.5em] block mb-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.pricing.starter.name}</Text>
                
                <div className="flex flex-col mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className={`text-6xl md:text-7xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.pricing.starter.price}</span>
                  </div>
                  <span className="text-blue-500 font-black text-xl uppercase tracking-widest mt-1">
                    {t.pricing.starter.subPrice}
                  </span>
                </div>
              </div>

              <div className="space-y-6 mb-16 flex-1 relative z-10">
                {t.pricing.starter.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${isDark ? 'border-blue-500/30 text-blue-400' : 'border-blue-200 text-blue-500'}`}>
                      <CheckCircleFilled style={{ fontSize: '12px' }} />
                    </div>
                    <Text className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-sm md:text-base font-bold tracking-tight leading-snug group-hover/item:text-blue-500 transition-colors`}>{feature}</Text>
                  </div>
                ))}
              </div>

              <button 
                className={`h-20 w-full rounded-2xl border font-black uppercase tracking-[0.3em] text-[12px] transition-all duration-300 active:scale-95 shadow-xl ${isDark ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500 shadow-blue-900/40' : 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500 shadow-blue-600/20'}`}
                onClick={() => scrollTo('contact')}
              >
                {t.pricing.starter.cta}
              </button>
            </div>
          </Reveal>

          {/* EnterprisePro Plan - Balanced with StarterPro */}
          <Reveal direction="up" delay={400} className="h-full">
            <div className={`
              group relative p-10 md:p-14 rounded-[4rem] h-full flex flex-col transition-all duration-700 border
              ${isDark 
                ? 'bg-slate-900/40 border-white/10 hover:border-emerald-500/50 hover:bg-slate-900/60 shadow-2xl' 
                : 'bg-white border-slate-200 hover:border-emerald-400 hover:shadow-2xl shadow-blue-900/5'}
            `}>
              {/* Decorative Corner Icon */}
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <BankFilled style={{ fontSize: '120px' }} />
              </div>

              <div className="mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black tracking-widest uppercase mb-8 border border-emerald-500/20">
                  <SafetyCertificateFilled /> {t.pricing.enterprise.period}
                </div>
                <Text className={`text-[12px] font-black uppercase tracking-[0.5em] block mb-6 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{t.pricing.enterprise.name}</Text>
                
                <div className="flex flex-col mb-6">
                  <span className={`text-6xl md:text-7xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.pricing.enterprise.price}</span>
                  <span className="text-emerald-500 font-black text-xl uppercase tracking-widest mt-1">
                    Custom License
                  </span>
                </div>
              </div>

              <div className="space-y-6 mb-16 flex-1 relative z-10">
                {t.pricing.enterprise.features.slice(0, 7).map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border transition-colors ${isDark ? 'border-emerald-500/30 text-emerald-400' : 'border-emerald-200 text-emerald-500'}`}>
                      <CheckCircleFilled style={{ fontSize: '12px' }} />
                    </div>
                    <Text className={`${isDark ? 'text-slate-300' : 'text-slate-700'} text-sm md:text-base font-bold tracking-tight leading-snug group-hover/item:text-emerald-500 transition-colors`}>{feature}</Text>
                  </div>
                ))}
                {t.pricing.enterprise.features.length > 7 && (
                  <div className={`text-[10px] font-black uppercase tracking-widest pt-2 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                    + {t.pricing.enterprise.features.length - 7} more enterprise capabilities
                  </div>
                )}
              </div>

              <button 
                className={`h-20 w-full rounded-2xl border font-black uppercase tracking-[0.3em] text-[12px] transition-all duration-300 active:scale-95 shadow-xl ${isDark ? 'bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500 shadow-emerald-900/40' : 'bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500 shadow-emerald-600/20'}`}
                onClick={() => scrollTo('contact')}
              >
                {t.pricing.enterprise.cta}
              </button>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
