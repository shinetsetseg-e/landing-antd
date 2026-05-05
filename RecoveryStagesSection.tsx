import { Typography } from 'antd';
import { Blocks, Shield, Timer } from 'lucide-react';
import React from 'react';
import { Reveal } from './components/ui/Reveal';
import { i18n } from './shared/i18n';
import { SectionProps } from './shared/types';

const { Text } = Typography;

export const RecoveryStagesSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].recoveryStages;
  const isDark = theme === 'dark';

  const icons = [Blocks, Timer, Shield, Blocks, Timer, Shield];

  return (
    <section id="lifecycle" className={`py-14 md:py-16 transition-colors duration-500 overflow-hidden ${isDark ? 'bg-[#030304]' : 'bg-[#f5f9ff]'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 mb-4 tag-pill">
              <Text className="!m-0 !text-inherit font-mono">{t.tag}</Text>
            </div>
            <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              {t.title}
            </h2>
            <p className={`text-sm md:text-base max-w-3xl mx-auto font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className={`absolute left-4 md:left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b ${isDark ? 'from-[#1677ff] via-[#0958d9]/40 to-transparent' : 'from-[#0958d9] via-[#1677ff]/35 to-transparent'}`} />
          <div className="space-y-4 md:space-y-5">
            {t.stages.map((stage, i) => {
              const Icon = icons[i % icons.length];
              const isRight = i % 2 === 1;
              return (
                <Reveal key={stage.id} delay={i * 110} direction={isRight ? 'left' : 'right'}>
                  <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 ${isRight ? 'md:[&>div:first-child]:order-2' : ''}`}>
                    <div className="hidden md:block" />
                    <div className={`relative rounded-xl p-4 md:p-5 border brand-outline brand-outline-hover transition-all duration-300 ${isDark ? 'bg-[#0f1115]' : 'bg-[#ffffff]'}`}>
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1677ff]/70 rounded-tl-xl" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1677ff]/70 rounded-br-xl" />

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-md flex items-center justify-center bg-[#0958d9]/15 border border-[#1677ff]/40 text-[#1677ff] shrink-0">
                          <Icon size={14} />
                        </div>
                        <div>
                          <div className="font-mono text-[9px] tracking-[0.16em] uppercase text-[#1677ff] mb-1.5">{`Block ${String(i + 1).padStart(2, '0')}`}</div>
                          <h3 className={`text-base md:text-lg font-heading font-semibold mb-1.5 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{stage.label}</h3>
                          <p className={`text-[11px] uppercase tracking-[0.08em] mb-2 ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>{stage.title}</p>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-[#334155]'}`}>{stage.desc}</p>
                        </div>
                      </div>
                    </div>
                    <span className="absolute left-4 md:left-1/2 top-5 md:top-8 -translate-x-1/2 w-6 h-6 rounded-full border border-[#1677ff] bg-[#030304] shadow-[0_0_14px_rgba(22,119,255,0.4)] flex items-center justify-center font-mono text-[9px] text-[#69b1ff]">
                      {i + 1}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};




