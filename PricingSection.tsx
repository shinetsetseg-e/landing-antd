
import React from 'react';
import { Typography, Badge, Button, Card, Space } from 'antd';
import { CheckCircleFilled, RocketFilled, ThunderboltFilled } from '@ant-design/icons';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

const { Title, Paragraph, Text } = Typography;

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
    <section id="pricing" className={`py-32 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <Badge 
              count={t.pricing.tag} 
              style={{ backgroundColor: '#2563eb10', color: '#2563eb', border: '1px solid #2563eb20' }} 
              className="mb-8 font-black uppercase tracking-widest"
            />
            <Title level={2} className="text-3xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
              {t.pricing.title}
            </Title>
            <Paragraph className={`text-lg max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.pricing.subtitle}
            </Paragraph>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Reveal direction="right" delay={200}>
            <div className={`p-10 rounded-[3rem] border h-full flex flex-col transition-all hover:scale-[1.02] duration-500 
              ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100 shadow-xl shadow-blue-900/5 hover:border-blue-200'}`}>
              
              <div className="mb-8">
                <Text strong className="text-xs uppercase tracking-widest text-slate-500 block mb-4">{t.pricing.free.name}</Text>
                <div className="flex items-baseline gap-2 mb-4">
                  <Text className={`text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.pricing.free.price}</Text>
                  <Text className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">/ {t.pricing.free.period}</Text>
                </div>
                <Paragraph className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.pricing.free.desc}
                </Paragraph>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {t.pricing.free.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircleFilled className="text-slate-300 dark:text-slate-700" />
                    <Text className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>{feature}</Text>
                  </li>
                ))}
              </ul>

              <Button 
                size="large" 
                block 
                className="h-14 rounded-2xl font-black uppercase tracking-widest text-[11px]"
                onClick={() => scrollTo('contact')}
              >
                {t.pricing.free.cta}
              </Button>
            </div>
          </Reveal>

          {/* Pro Plan */}
          <Reveal direction="left" delay={400}>
            <div className={`relative p-10 rounded-[3.5rem] border h-full flex flex-col transition-all hover:scale-[1.02] duration-500 overflow-hidden
              ${isDark ? 'bg-blue-600/10 border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.1)]' : 'bg-blue-50/50 border-blue-200 shadow-2xl shadow-blue-900/10'}`}>
              
              <div className="absolute top-0 right-0 p-8">
                <ThunderboltFilled className="text-4xl text-blue-500 opacity-20" />
              </div>

              <div className="mb-8 relative z-10">
                <Badge 
                  count="RECOMMENDED" 
                  style={{ backgroundColor: '#2563eb', color: '#fff', fontSize: '9px', fontWeight: 900 }} 
                  className="mb-6"
                />
                <Text strong className="text-xs uppercase tracking-widest text-blue-600 block mb-4">{t.pricing.pro.name}</Text>
                <div className="flex items-baseline gap-2 mb-4">
                  <Text className={`text-5xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.pricing.pro.price}</Text>
                  <Text className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">/ {t.pricing.pro.period}</Text>
                </div>
                <Paragraph className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.pricing.pro.desc}
                </Paragraph>
              </div>

              <ul className="space-y-4 mb-12 flex-1 relative z-10">
                {t.pricing.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircleFilled className="text-blue-500" />
                    <Text strong className={`text-sm ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{feature}</Text>
                  </li>
                ))}
              </ul>

              <Button 
                type="primary" 
                size="large" 
                block 
                icon={<RocketFilled />}
                className="h-16 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl shadow-blue-600/20"
                onClick={() => scrollTo('contact')}
              >
                {t.pricing.pro.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
