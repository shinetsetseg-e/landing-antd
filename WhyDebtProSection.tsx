import { CheckCircle2, ShieldCheck, ShieldPlus } from 'lucide-react';
import React from 'react';
import { Reveal } from './components/ui/Reveal';
import { i18n, Language } from './shared/i18n';

interface WhyDebtProSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const WhyDebtProSection: React.FC<WhyDebtProSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <section id="why" className={`py-24 md:py-32 transition-colors ${isDark ? 'bg-[#030304]' : 'bg-[#f5f9ff]'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block tag-pill mb-6">{t.whyDebtPro.tag}</div>
            <h2 className={`text-4xl md:text-6xl font-heading font-bold mb-6 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              {t.whyDebtPro.title}
            </h2>
            <p className={`text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
              {t.whyDebtPro.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal direction="right">
            <div className={`h-full p-8 md:p-10 rounded-2xl border brand-outline brand-outline-hover transition-all duration-300 ${isDark ? 'bg-[#0f1115]' : 'bg-[#ffffff]'}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#1677ff]/15 border border-[#1677ff]/40 rounded-xl flex items-center justify-center text-[#1677ff]">
                  <ShieldPlus size={22} />
                </div>
                <h3 className={`text-xl md:text-2xl font-heading font-semibold ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                  {t.whyDebtPro.legacy.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {t.whyDebtPro.legacy.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#0958d9] mt-1 shrink-0" />
                    <span className={`text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-[#334155]'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="left">
            <div className={`h-full p-8 md:p-10 rounded-2xl border brand-outline brand-outline-hover transition-all duration-300 relative overflow-hidden ${isDark ? 'bg-[#0f1115]' : 'bg-[#ffffff]'}`}>
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#69b1ff]/15 blur-[80px]" />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 bg-[#69b1ff]/15 border border-[#69b1ff]/45 rounded-xl flex items-center justify-center text-[#69b1ff]">
                  <ShieldCheck size={22} />
                </div>
                <h3 className={`text-xl md:text-2xl font-heading font-semibold ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                  {t.whyDebtPro.advantage.title}
                </h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {t.whyDebtPro.advantage.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#1677ff] mt-1 shrink-0" />
                    <span className={`text-sm md:text-base font-medium ${isDark ? 'text-slate-200' : 'text-[#334155]'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};




