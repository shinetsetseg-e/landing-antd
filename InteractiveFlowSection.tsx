import React, { useState } from 'react';
import { Activity, Cpu, FileText, RefreshCcw, ShieldCheck } from 'lucide-react';
import { Language } from './shared/types';
import { i18n } from './shared/i18n';
import { Reveal } from './components/ui/Reveal';
import {
  PreviewBorrower360,
  PreviewCommandCenter,
  PreviewDocAutomation,
  PreviewLegalPipeline,
  PreviewSMSTemplate
} from './DashboardPreviews';

interface InteractiveFlowSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const InteractiveFlowSection: React.FC<InteractiveFlowSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  const [activeStep, setActiveStep] = useState(0);

  const flowIcons = [
    <Cpu size={22} />,
    <RefreshCcw size={22} />,
    <FileText size={22} />,
    <Activity size={22} />,
    <ShieldCheck size={22} />
  ];

  const flowPreviews = [
    <PreviewCommandCenter lang={lang} theme={theme} />,
    <PreviewSMSTemplate lang={lang} theme={theme} />,
    <PreviewDocAutomation lang={lang} theme={theme} />,
    <PreviewBorrower360 lang={lang} theme={theme} />,
    <PreviewLegalPipeline lang={lang} theme={theme} />
  ];

  return (
    <section id="product" className={`py-24 md:py-32 transition-colors ${isDark ? 'bg-[#0f1115]' : 'bg-[#ffffff]'}`}>
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-5 md:px-6">
        <Reveal>
          <div className="mb-10 md:mb-16 text-center">
            <div className="inline-block tag-pill mb-5">{t.flow.tag}</div>
            <h2 className={`text-3xl md:text-5xl font-heading font-bold mb-4 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              {t.flow.title}
            </h2>
            <p className={`text-sm md:text-base max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
              {t.flow.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            {t.flow.steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`text-left relative p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all duration-300
                  ${activeStep === i
                    ? `${isDark ? 'bg-[#030304] border-[#1677ff]/45' : 'bg-white border-[#0958d9]/45'} shadow-[0_0_30px_-10px_rgba(22,119,255,0.35)] scale-[1.01]`
                    : `${isDark ? 'bg-[#030304]/55 border-white/10 hover:border-[#1677ff]/35' : 'bg-white/80 border-[#0958d9]/20 hover:border-[#0958d9]/40'}`
                  }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 md:w-11 md:h-11 rounded-lg flex items-center justify-center shrink-0
                    ${activeStep === i
                      ? 'brand-grad text-white shadow-[0_0_20px_-7px_rgba(22,119,255,0.7)]'
                      : `${isDark ? 'bg-white/5 text-slate-400' : 'bg-[#e8f1ff] text-[#0958d9]'}`}`}>
                    {flowIcons[i]}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm md:text-lg font-heading font-semibold ${activeStep === i ? (isDark ? 'text-white' : 'text-[#0f172a]') : (isDark ? 'text-slate-300' : 'text-[#334155]')}`}>
                      {step.title}
                    </h3>
                    <p className={`hidden lg:block text-xs md:text-sm leading-relaxed mt-1 ${activeStep === i ? (isDark ? 'text-slate-400' : 'text-[#475569]') : 'text-transparent'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 w-full">
            <div className={`relative rounded-[1.25rem] md:rounded-[2rem] border p-2 md:p-8 overflow-hidden min-h-[250px] sm:min-h-[350px] md:min-h-[500px] flex items-center
              ${isDark ? 'bg-[#030304] border-white/10' : 'bg-white border-[#0958d9]/20'} shadow-[0_0_60px_-15px_rgba(22,119,255,0.2)]`}>
              <div className="absolute inset-0 grid-bg-complex opacity-25 pointer-events-none" />
              <div key={activeStep} className="relative z-10 w-full animate-content-entrance">
                {flowPreviews[activeStep]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




