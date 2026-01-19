
import { Typography } from 'antd';
import {
  ArrowUpRight,
  BarChart3,
  ClipboardCheck,
  Cpu,
  Search,
  ShieldCheck,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import React from 'react';
import { Reveal } from './CommonUI';
import { i18n } from './shared/i18n';
import { SectionProps } from './shared/types';

const { Text } = Typography;

export const ImpactMetricsSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].impactMetrics;
  const isDark = theme === 'dark';

  // Specific Hero Metrics requested by user
  // Index 0: Transparency, Index 3: Manual, Index 9: NPL, Index 10: NPE
  const heroIndices = [0, 3, 9, 10];
  const heroMetrics = heroIndices.map(idx => t.items[idx]);
  
  // Remaining supporting metrics
  const supportingMetrics = t.items.filter((_, idx) => !heroIndices.includes(idx));

  const renderHeroCard = (item: any, index: number) => {
    const isReduction = item.prefix === '-';
    // Fix: Store component references instead of elements to avoid React.cloneElement type issues with Lucide icons
    const IconComponents = [ClipboardCheck, Cpu, BarChart3, Search];
    const Icon = IconComponents[index];
    
    return (
      <div key={index} className={`
        group relative p-10 rounded-[3rem] border transition-all duration-700 h-full flex flex-col
        ${isDark 
          ? 'bg-blue-600/5 border-blue-500/20 hover:border-blue-500 hover:bg-blue-600/10' 
          : 'bg-white border-blue-100 shadow-xl shadow-blue-900/5 hover:border-blue-500'}
      `}>
        <div className="flex justify-between items-start mb-8">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 
            ${isDark ? 'bg-blue-600/20 text-blue-400' : 'bg-blue-600 text-white shadow-lg'}`}>
            <Icon size={28} />
          </div>
          <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2
            ${isReduction ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
            {isReduction ? <TrendingDown size={14}/> : <TrendingUp size={14}/>}
            {isReduction ? (lang === 'mn' ? 'Бууралт' : 'Reduction') : (lang === 'mn' ? 'Өсөлт' : 'Growth')}
          </div>
        </div>

        {/* <div className="flex items-baseline gap-2 mb-4">
          {item.prefix || ''}
          <span className={`text-6xl md:text-7xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {typeof parseFloat(item.value) === 'number' && !isNaN(parseFloat(item.value)) ? (
              <NumberTicker value={parseFloat(item.value)} />
            ) : item.value}
          </span>
        </div> */}

        <span className={`text-2xl mb-4 font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {item.prefix || ''}{item.value}<span className="text-blue-500 font-black text-xl uppercase">{item.suffix}</span>

        </span>

        <h3 className={`text-lg md:text-xl font-black tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {item.label}
        </h3>
        
        <p className={`text-sm font-medium leading-relaxed flex-1 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
          {item.desc}
        </p>

        {/* Highlight Glow for Hero items */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[60px] rounded-full group-hover:bg-blue-600/10 transition-colors"></div>
      </div>
    );
  };

  const renderSupportingCard = (item: any, index: number) => {
    const isReduction = item.prefix === '-';
    return (
      <div key={index} className={`
        p-6 rounded-2xl border flex items-center justify-between transition-all hover:-translate-y-1 h-full
        ${isDark ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-slate-50 border-slate-100 hover:border-blue-200'}
      `}>
        <div className="flex-1">
          <h4 className={`text-[11px] font-black uppercase tracking-tight mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.label}</h4>
          <div className="flex items-baseline gap-1">
            <span className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {item.prefix || ''}{item.value}{item.suffix}
            </span>
          </div>
        </div>
        <div className={isReduction ? 'text-rose-500' : 'text-emerald-500'}>
          {isReduction ? <TrendingDown size={18}/> : <ArrowUpRight size={18}/>}
        </div>
      </div>
    );
  };

  return (
    <section id="metrics" className={`py-32 md:py-48 transition-colors relative overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-[#fcfdfe]'}`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-24">
            <div className={`inline-block px-5 py-2 rounded-full border text-[11px] font-black uppercase tracking-widest mb-6 ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
              {t.tag}
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.title}
            </h2>
            <p className={`text-base md:text-xl max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.subtitle}</p>
          </div>
        </Reveal>

        {/* Hero Grid: The Big 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
          {heroMetrics.map((item, i) => (
            <Reveal key={i} delay={i * 150} direction="up" className="h-full">
              {renderHeroCard(item, i)}
            </Reveal>
          ))}
        </div>

        {/* Supporting Metrics Grid */}
        <Reveal delay={600}>
          <div className="mt-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-500/20 to-transparent"></div>
              <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Additional Performance Metrics</h4>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-500/20 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              {supportingMetrics.map((item, i) => (
                <div key={i} className="h-full">
                  {renderSupportingCard(item, i)}
                </div>
              ))}
              
              {/* Trust Badge */}
              <div className={`p-6 rounded-2xl border-2 border-dashed flex items-center justify-center gap-4 h-full
                ${isDark ? 'border-white/5 bg-blue-500/5' : 'border-blue-100 bg-blue-50/30'}
              `}>
                <ShieldCheck className="text-blue-500 shrink-0" size={24} />
                <span className={`text-[9px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  Verified Enterprise Results
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className={`absolute top-1/4 left-0 w-[800px] h-[800px] rounded-full blur-[180px] opacity-[0.05] ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.03] ${isDark ? 'bg-indigo-600' : 'bg-indigo-400'}`}></div>
      </div>
    </section>
  );
};
