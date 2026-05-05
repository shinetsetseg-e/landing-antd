import { Typography } from 'antd';
import { Activity, ShieldCheck, TrendingDown, TrendingUp } from 'lucide-react';
import React from 'react';
import { Reveal } from './components/ui/Reveal';
import { i18n } from './shared/i18n';
import { SectionProps } from './shared/types';

const { Text } = Typography;

export const ImpactMetricsSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].impactMetrics;
  const isDark = theme === 'dark';

  const heroIndices = [0, 3, 9, 10];
  const heroMetrics = heroIndices.map((idx) => t.items[idx]);
  const supportingMetrics = t.items.filter((_, idx) => !heroIndices.includes(idx));

  return (
    <section id="metrics" className={`py-24 md:py-32 transition-colors relative overflow-hidden ${isDark ? 'bg-[#0f1115]' : 'bg-[#ffffff]'}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 tag-pill mb-7">
              <Text className="!m-0 !text-inherit font-mono">{t.tag}</Text>
            </div>
            <h2 className={`text-4xl md:text-6xl font-heading font-bold mb-7 leading-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              {t.title}
            </h2>
            <p className={`text-base md:text-lg max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>{t.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 items-stretch">
          {heroMetrics.map((item, i) => {
            const isReduction = item.prefix === '-';
            return (
              <Reveal key={i} delay={i * 130} direction="up" className="h-full">
                <div className={`group h-full rounded-2xl p-7 border brand-outline brand-outline-hover transition-all duration-300 ${isDark ? 'bg-[#030304]' : 'bg-white'}`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg border border-[#1677ff]/45 bg-[#0958d9]/15 text-[#1677ff] flex items-center justify-center">
                      <Activity size={17} />
                    </div>
                    <div className={`text-[10px] font-mono tracking-wider uppercase flex items-center gap-1 ${isReduction ? 'text-[#0958d9]' : 'text-[#69b1ff]'}`}>
                      {isReduction ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                      {isReduction ? (lang === 'mn' ? 'Бууралт' : 'Reduction') : (lang === 'mn' ? 'Өсөлт' : 'Growth')}
                    </div>
                  </div>
                  <div className={`text-4xl font-heading font-bold mb-3 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    {item.prefix || ''}{item.value}
                    <span className="text-xl text-[#1677ff]">{item.suffix}</span>
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{item.label}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-[#334155]'}`}>{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={560}>
          <div className="mt-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1677ff]/30 to-transparent" />
              <h4 className={`text-[10px] font-mono uppercase tracking-[0.25em] ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>Additional Metrics</h4>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#1677ff]/30 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {supportingMetrics.map((item, i) => {
                const isReduction = item.prefix === '-';
                return (
                  <div key={i} className={`p-5 rounded-xl border ${isDark ? 'bg-[#030304] border-white/10' : 'bg-white border-[#0958d9]/15'}`}>
                    <h4 className={`text-[10px] font-mono uppercase tracking-wider mb-2 ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>{item.label}</h4>
                    <div className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                      {item.prefix || ''}{item.value}{item.suffix}
                    </div>
                    <div className={`mt-2 text-[11px] ${isReduction ? 'text-[#0958d9]' : 'text-[#1677ff]'}`}>{item.desc}</div>
                  </div>
                );
              })}
              <div className={`p-5 rounded-xl border border-dashed flex items-center gap-3 ${isDark ? 'border-[#1677ff]/35 bg-[#1677ff]/10' : 'border-[#0958d9]/30 bg-[#eff6ff]'}`}>
                <ShieldCheck className="text-[#1677ff] shrink-0" size={21} />
                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
                  Verified Result Data
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-[760px] h-[760px] rounded-full blur-[180px] opacity-[0.1] bg-[#0958d9]" />
        <div className="absolute bottom-0 right-0 w-[620px] h-[620px] rounded-full blur-[170px] opacity-[0.08] bg-[#69b1ff]" />
      </div>
    </section>
  );
};




