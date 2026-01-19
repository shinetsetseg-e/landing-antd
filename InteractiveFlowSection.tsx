
import React, { useState } from 'react';
import { 
  Cpu, 
  RefreshCcw, 
  FileText, 
  Activity, 
  ShieldCheck
} from 'lucide-react';
// Fix: Language is not exported from shared/i18n, so we import it from shared/types
import { Language } from './shared/types';
import { i18n } from './shared/i18n';
import { Reveal } from './CommonUI';
import { 
  PreviewCommandCenter, 
  PreviewBorrower360, 
  PreviewLegalPipeline, 
  PreviewSMSTemplate,
  PreviewDocAutomation
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
    <Cpu size={24} />,
    <RefreshCcw size={24} />,
    <FileText size={24} />,
    <Activity size={24} />,
    <ShieldCheck size={24} />
  ];

  const flowPreviews = [
    <PreviewCommandCenter lang={lang} theme={theme} />,
    <PreviewSMSTemplate lang={lang} theme={theme} />,
    <PreviewDocAutomation lang={lang} theme={theme} />,
    <PreviewBorrower360 lang={lang} theme={theme} />,
    <PreviewLegalPipeline lang={lang} theme={theme} />
  ];

  return (
    <section id="product" className={`section-fullscreen transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 md:px-6">
        <Reveal>
          <div className="mb-8 md:mb-16 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4">
              {t.flow.tag}
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.flow.title}
            </h2>
            <p className={`text-sm md:text-base font-medium max-w-2xl mx-auto ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.flow.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            {t.flow.steps.map((step, i) => (
              <div 
                key={i} 
                onClick={() => setActiveStep(i)}
                className={`relative z-10 p-4 md:p-6 rounded-xl md:rounded-[2rem] border cursor-pointer transition-all duration-500
                  ${activeStep === i 
                    ? (isDark ? 'bg-slate-900 border-blue-500/30 shadow-2xl scale-[1.02]' : 'bg-white border-blue-500/30 shadow-xl scale-[1.02]') 
                    : (isDark ? 'bg-transparent border-white/5 opacity-40 hover:opacity-100' : 'bg-transparent border-slate-100 opacity-40 hover:opacity-100')
                  }`}
              >
                <div className="flex items-center lg:items-start gap-4">
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center shrink-0
                    ${activeStep === i ? 'bg-blue-600 text-white shadow-lg' : (isDark ? 'bg-slate-900 text-slate-500' : 'bg-slate-100 text-slate-400')}`}>
                    {React.cloneElement(flowIcons[i] as React.ReactElement<any>, { size: activeStep === i ? 20 : 16 })}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-[13px] md:text-lg font-black transition-colors ${activeStep === i ? (isDark ? 'text-white' : 'text-slate-900') : 'text-slate-500'}`}>
                      {step.title}
                    </h3>
                    <p className={`hidden lg:block text-xs md:text-sm font-medium leading-relaxed mt-1 ${activeStep === i ? (isDark ? 'text-slate-400' : 'text-slate-600') : 'text-transparent'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 w-full">
            <div className={`relative rounded-[1.25rem] md:rounded-[3rem] border p-2 md:p-10 overflow-hidden min-h-[250px] sm:min-h-[350px] md:min-h-[500px] flex items-center
              ${isDark ? 'bg-slate-900/20 border-slate-800' : 'bg-white border-slate-100 shadow-2xl shadow-blue-900/5'}`}>
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
