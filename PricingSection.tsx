import { BankFilled, CheckCircleFilled, CloudFilled, SafetyCertificateFilled, ThunderboltFilled } from '@ant-design/icons';
import { Typography } from 'antd';
import React from 'react';
import { Reveal } from './components/ui/Reveal';
import { i18n, Language } from './shared/i18n';

const { Text } = Typography;

interface PricingSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const PricingSection: React.FC<PricingSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  const purchaseUrl = 'https://debtpro.kchsolution.mn/';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className={`py-24 md:py-32 transition-colors duration-500 ${isDark ? 'bg-[#0f1115]' : 'bg-[#ffffff]'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-7 tag-pill">
              <Text className="!m-0 !text-inherit font-mono">{t.pricing.tag}</Text>
            </div>
            <h2 className={`text-4xl md:text-6xl font-heading font-bold mb-7 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              {t.pricing.title}
            </h2>
            <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
              {t.pricing.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-stretch">
          <Reveal direction="up" delay={180} className="h-full">
            <div className={`group relative p-9 md:p-11 rounded-2xl h-full flex flex-col border brand-outline brand-outline-hover transition-all duration-300 ${isDark ? 'bg-[#030304]' : 'bg-white'}`}>
              <div className="absolute top-0 right-0 p-10 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity">
                <CloudFilled style={{ fontSize: '110px' }} />
              </div>

              <div className="mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1677ff]/10 text-[#1677ff] text-[10px] font-mono tracking-widest uppercase mb-6 border border-[#1677ff]/30">
                  <ThunderboltFilled /> {t.pricing.starter.period}
                </div>
                <Text className={`font-mono text-[11px] uppercase tracking-[0.35em] block mb-5 ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>{t.pricing.starter.name}</Text>
                <div className="flex flex-col">
                  <span className={`text-5xl md:text-6xl font-heading font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{t.pricing.starter.price}</span>
                  <span className="text-[#1677ff] font-mono text-sm uppercase tracking-[0.2em] mt-1">{t.pricing.starter.subPrice}</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-1 relative z-10">
                {t.pricing.starter.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border border-[#1677ff]/35 text-[#1677ff]">
                      <CheckCircleFilled style={{ fontSize: '11px' }} />
                    </div>
                    <Text className={`${isDark ? 'text-slate-300' : 'text-[#334155]'} text-sm leading-snug`}>{feature}</Text>
                  </div>
                ))}
              </div>

              <button className="h-14 w-full rounded-full font-mono text-xs uppercase tracking-[0.25em] brand-button active:scale-95" onClick={() => { window.location.href = purchaseUrl; }}>
                {t.pricing.starter.cta}
              </button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={350} className="h-full">
            <div className={`group relative p-9 md:p-11 rounded-2xl h-full flex flex-col border transition-all duration-300 lg:scale-105 shadow-[0_0_40px_-10px_rgba(22,119,255,0.2)] ${isDark ? 'bg-[#030304] border-[#1677ff]/55' : 'bg-white border-[#0958d9]/45'}`}>
              <div className="absolute top-0 right-0 p-10 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity">
                <BankFilled style={{ fontSize: '110px' }} />
              </div>

              <div className="mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#69b1ff]/12 text-[#69b1ff] text-[10px] font-mono tracking-widest uppercase mb-6 border border-[#69b1ff]/35">
                  <SafetyCertificateFilled /> {t.pricing.enterprise.period}
                </div>
                <Text className={`font-mono text-[11px] uppercase tracking-[0.35em] block mb-5 ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>{t.pricing.enterprise.name}</Text>
                <div className="flex flex-col">
                  <span className={`text-5xl md:text-6xl font-heading font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{t.pricing.enterprise.price}</span>
                  <span className="text-[#69b1ff] font-mono text-sm uppercase tracking-[0.2em] mt-1">Custom License</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-1 relative z-10">
                {t.pricing.enterprise.features.slice(0, 7).map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border border-[#69b1ff]/35 text-[#69b1ff]">
                      <CheckCircleFilled style={{ fontSize: '11px' }} />
                    </div>
                    <Text className={`${isDark ? 'text-slate-200' : 'text-[#334155]'} text-sm leading-snug`}>{feature}</Text>
                  </div>
                ))}
                {t.pricing.enterprise.features.length > 7 && (
                  <div className={`text-[10px] font-mono uppercase tracking-wider pt-1 ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>
                    + {t.pricing.enterprise.features.length - 7} more capabilities
                  </div>
                )}
              </div>

              <button className="h-14 w-full rounded-full font-mono text-xs uppercase tracking-[0.25em] brand-button active:scale-95" onClick={() => { window.location.href = purchaseUrl; }}>
                {t.pricing.enterprise.cta}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};




