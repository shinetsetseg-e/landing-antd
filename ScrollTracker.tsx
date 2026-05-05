import { Tooltip } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { i18n, Language } from './shared/i18n';

interface ScrollTrackerProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ScrollTracker: React.FC<ScrollTrackerProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const [activeSection, setActiveSection] = useState('home');
  const isDark = theme === 'dark';

  const sections = useMemo(() => ([
    { id: 'home', label: lang === 'mn' ? 'Нүүр' : 'Home' },
    { id: 'lifecycle', label: lang === 'mn' ? 'Үе шат' : 'Lifecycle' },
    { id: 'metrics', label: lang === 'mn' ? 'Үр дүн' : 'Impact' },
    { id: 'why', label: t.nav.why },
    { id: 'product', label: t.nav.solutions },
    { id: 'showcase', label: lang === 'mn' ? 'Үзүүлэн' : 'Showcase' },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'contact', label: lang === 'mn' ? 'Холбоо барих' : 'Contact' },
    { id: 'faq', label: t.nav.faq },
  ]), [lang, t.nav.faq, t.nav.pricing, t.nav.solutions, t.nav.why]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-4 lg:left-7 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center pointer-events-none">
      <div className={`w-px h-8 bg-gradient-to-b from-transparent ${isDark ? 'via-white/10' : 'via-[#0958d9]/20'} to-[#1677ff]/30 opacity-60 mb-4`} />
      <div className="flex flex-col gap-4 pointer-events-auto">
        {sections.map((section) => (
          <Tooltip
            key={section.id}
            title={<span className="font-mono text-[10px] uppercase tracking-[0.14em]">{section.label}</span>}
            placement="right"
            color={isDark ? '#0f1115' : '#0958d9'}
            overlayInnerStyle={{ borderRadius: '8px', border: isDark ? '1px solid rgba(22,119,255,0.35)' : 'none' }}
          >
            <button onClick={() => scrollTo(section.id)} className="group relative flex items-center justify-center w-6 h-6 outline-none transition-all">
              <div
                className={`rounded-full transition-all duration-300 z-10
                  ${activeSection === section.id
                    ? 'w-2.5 h-2.5 bg-[#1677ff] shadow-[0_0_16px_rgba(22,119,255,0.9)]'
                    : `w-1.5 h-1.5 ${isDark ? 'bg-white/20 group-hover:bg-[#1677ff]' : 'bg-[#0958d9]/35 group-hover:bg-[#1677ff]'}`
                  }`}
              />
            </button>
          </Tooltip>
        ))}
      </div>
      <div className={`w-px h-8 bg-gradient-to-t from-transparent ${isDark ? 'via-white/10' : 'via-[#0958d9]/20'} to-[#1677ff]/30 opacity-60 mt-4`} />
    </div>
  );
};



