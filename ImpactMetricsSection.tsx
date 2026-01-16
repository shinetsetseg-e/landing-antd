
import React from 'react';
import { Typography } from 'antd';
import { SectionProps } from './shared/types';
import { i18n } from './i18n';
import { Reveal, NumberTicker } from './CommonUI';
import { 
  Zap, 
  BarChart3, 
  Target, 
  TrendingUp, 
  TrendingDown,
  ShieldCheck,
  Users,
  Activity,
  ArrowUpRight,
  ClipboardCheck,
  ShieldAlert
} from 'lucide-react';

const { Text } = Typography;

export const ImpactMetricsSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].impactMetrics;
  const isDark = theme === 'dark';

  // Define Groups for 11 items
  const productivityItems = t.items.slice(0, 4); // Transparency, Time, Staff Satis, Manual
  const qualityItems = t.items.slice(4, 8);      // PTP, Complaints, Legal, Cust Satis
  const financialItems = t.items.slice(8, 11);    // Op Cost, NPL, NPE

  const renderMetricCard = (item: any, index: number) => {
    const isPositive = item.prefix === '+' || !item.prefix || item.value === '100';
    const isReduction = item.prefix === '-';

    return (
      <div key={index} className={`
        group relative p-6 rounded-2xl border transition-all duration-500
        ${isDark 
          ? 'bg-white/5 border-white/5 hover:border-blue-500/40 hover:bg-white/[0.08]' 
          : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl shadow-sm'}
      `}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-baseline gap-1">
            <span className={`text-3xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {item.prefix || ''}
              <NumberTicker value={parseFloat(item.value) || 0} />
              {item.value.includes('-') && !parseFloat(item.value) ? item.value : ''}
            </span>
            <span className="text-blue-500 font-black text-xs uppercase">{item.suffix}</span>
          </div>
          <div className={`p-1.5 rounded-lg ${isReduction ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
            {isReduction ? <TrendingDown size={14}/> : <ArrowUpRight size={14}/>}
          </div>
        </div>
        
        <h4 className={`text-[11px] font-black uppercase tracking-tight mb-2 ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
          {item.label}
        </h4>
        
        <p className={`text-[10px] font-medium leading-relaxed opacity-60 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {item.desc}
        </p>

        {/* Decorative background element */}
        <div className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
          <Activity size={80} className="text-blue-500" />
        </div>
      </div>
    );
  };

  return (
    <section id="metrics" className={`py-32 md:py-48 transition-colors relative overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-[#fcfdfe]'}`}>
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.07] ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.05] ${isDark ? 'bg-emerald-600' : 'bg-emerald-400'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-24">
            <div className={`inline-flex items-center gap-3 px-5 py-1.5 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
              <Zap size={14} className="text-blue-500" />
              <Text className={`text-[9px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.tag}</Text>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Бодит <span className="text-blue-600">Үр Өгөөж</span>
            </h2>
            <p className={`text-base md:text-xl max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Column 1: Operational Efficiency */}
          <Reveal direction="up" delay={0}>
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                  <ClipboardCheck size={20} />
                </div>
                <div>
                  <h3 className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Бүтээмж</h3>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Efficiency Engine</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {productivityItems.map((item, i) => renderMetricCard(item, i))}
              </div>
            </div>
          </Reveal>

          {/* Column 2: Service Quality */}
          <Reveal direction="up" delay={100}>
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Чанар</h3>
                  <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Process Integrity</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {qualityItems.map((item, i) => renderMetricCard(item, i))}
              </div>
            </div>
          </Reveal>

          {/* Column 3: Financial Health */}
          <Reveal direction="up" delay={200}>
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h3 className={`text-sm font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Санхүү</h3>
                  <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Portfolio Growth</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {financialItems.map((item, i) => renderMetricCard(item, i))}
                
                {/* Final Accent Card */}
                <div className={`p-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center
                  ${isDark ? 'border-white/10 bg-blue-600/5' : 'border-blue-200 bg-blue-50/50'}
                `}>
                   <ShieldAlert className="text-blue-500 mb-4" size={32} />
                   <h4 className={`text-xs font-black uppercase tracking-widest mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Эрсдэлгүй Ирээдүй</h4>
                   <p className="text-[9px] font-bold text-slate-500 uppercase leading-relaxed">
                     Өгөгдөл бол DebtPro системийн зүрх юм
                   </p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
