
import React, { useState, useEffect, useMemo } from 'react';
import { Typography, Input, Avatar, Badge, Space } from 'antd';
import { 
  ArrowRightOutlined, 
  PlayCircleFilled,
  DashboardOutlined, 
  UserOutlined, 
  SafetyOutlined, 
  MessageOutlined, 
  RiseOutlined, 
  SearchOutlined, 
  BellOutlined, 
  QuestionCircleOutlined, 
  MenuUnfoldOutlined 
} from '@ant-design/icons';
import { SectionProps } from '../../shared/types';
import { i18n } from '../../i18n';
import { Reveal } from '../../components/ui/Reveal';
import { GlowOrb } from '../../components/ui/GlowOrb';
import { 
  PreviewCommandCenter, 
  PreviewBorrower360, 
  PreviewLegalPipeline, 
  PreviewSMSDashboard, 
  PreviewPerformance 
} from '../../DashboardPreviews';

const { Text } = Typography;

export const HeroSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const [activeKey, setActiveKey] = useState('dashboard');
  const [scrollY, setScrollY] = useState(0);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const scrollProgress = useMemo(() => {
    if (isMobile) return 0;
    return Math.min(scrollY / 800, 1);
  }, [scrollY, isMobile]);
  
  const titleScale = 1 - (scrollProgress * 0.45);
  const titleOpacity = 1 - (scrollProgress * 2.2);
  const titleTranslateY = scrollProgress * -140;

  const mockupScale = isMobile ? 1 : 0.85 + (scrollProgress * 0.15);
  const mockupTranslateY = isMobile ? 0 : (1 - scrollProgress) * 200;
  const mockupOpacity = isMobile ? 1 : 0.3 + (scrollProgress * 0.7);
  const mockupBlur = isMobile ? 0 : (1 - scrollProgress) * 12;

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: t.hero.carousel.dashboard, component: <PreviewCommandCenter lang={lang} theme={theme}/> },
    { key: 'profile', icon: <UserOutlined />, label: t.hero.carousel.profile, component: <PreviewBorrower360 lang={lang} theme={theme}/> },
    { key: 'legal', icon: <SafetyOutlined />, label: t.hero.carousel.legal, component: <PreviewLegalPipeline lang={lang} theme={theme}/> },
    { key: 'sms', icon: <MessageOutlined />, label: t.hero.carousel.sms, component: <PreviewSMSDashboard lang={lang} theme={theme}/> },
    { key: 'performance', icon: <RiseOutlined />, label: t.hero.carousel.performance, component: <PreviewPerformance lang={lang} theme={theme}/> },
  ];

  const currentView = menuItems.find(m => m.key === activeKey);

  return (
    <header className="relative min-h-[110dvh] md:min-h-[175vh] flex flex-col items-center">
      <div className="fixed inset-0 grid-bg-complex -z-10 pointer-events-none"></div>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <GlowOrb color="bg-blue-600" className="top-[-10%] left-[-10%] opacity-[0.06] blur-[100px] md:blur-[220px]" size="100vw" />
        <GlowOrb color="bg-indigo-500" className="bottom-[-10%] right-[-10%] opacity-[0.06] blur-[100px] md:blur-[240px]" size="90vw" />
      </div>

      <div 
        className="w-full min-h-[70dvh] md:h-screen flex flex-col items-center justify-center md:sticky top-0 z-20 pointer-events-none px-6 py-12 md:pb-32 will-change-transform"
        style={{ 
          transform: isMobile ? 'none' : `scale(${titleScale}) translateY(${titleTranslateY}px)`,
          opacity: isMobile ? 1 : Math.max(0, titleOpacity),
          visibility: !isMobile && titleOpacity <= -0.1 ? 'hidden' : 'visible'
        }}
      >
        <div className="flex flex-col items-center w-full max-w-7xl pointer-events-auto text-center">
          <div className={`inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2.5 rounded-full border mb-6 md:mb-12 animate-content-entrance ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-100 bg-blue-50'}`}>
            <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <Text className={`text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.hero.tag}</Text>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] font-black mb-6 md:mb-12 leading-[1.1] md:leading-[0.8] tracking-tighter gradient-text-hero animate-content-entrance" style={{ animationDelay: '100ms' }}>
            {lang === 'mn' ? (
              <>ИРЭЭДҮЙН <br className="hidden md:block"/>ЗЭЭЛИЙН <br className="hidden md:block"/>УДИРДЛАГА</>
            ) : (
              <>FUTURE-PROOF <br className="hidden md:block"/>LOAN <br className="hidden md:block"/>RECOVERY</>
            )}
          </h1>
          
          <p className={`text-base md:text-xl lg:text-2xl max-w-[300px] sm:max-w-md md:max-w-3xl mb-10 md:mb-16 font-medium leading-relaxed animate-content-entrance ${isDark ? 'text-slate-400' : 'text-slate-600'}`} style={{ animationDelay: '200ms' }}>
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 animate-content-entrance w-full px-4" style={{ animationDelay: '300ms' }}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-14 md:h-20 w-full sm:w-[260px] md:w-[320px] rounded-xl md:rounded-2xl bg-blue-600 text-white text-[11px] md:text-[13px] font-black uppercase tracking-[0.15em] md:tracking-[0.25em] flex items-center justify-center gap-3 md:gap-4 shadow-2xl shadow-blue-600/40 hover:bg-blue-500 transition-all duration-300 active:scale-95"
            >
              {t.hero.cta}
              <ArrowRightOutlined className="text-sm md:text-xl" />
            </button>
            <button 
              className={`h-14 md:h-20 w-full sm:w-[260px] md:w-[320px] rounded-xl md:rounded-2xl text-[11px] md:text-[13px] font-black uppercase tracking-[0.15em] md:tracking-[0.25em] border flex items-center justify-center gap-3 md:gap-4 transition-all duration-300 active:scale-95 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200'}`}
            >
              <PlayCircleFilled className="text-blue-500 text-2xl md:text-3xl" />
              {t.hero.secondary}
            </button>
          </div>
        </div>
      </div>

      <div 
        className="w-full max-w-[98vw] xl:max-w-[1400px] mx-auto px-2 md:px-6 mt-12 md:mt-[65vh] pb-24 md:pb-48 relative z-10 transition-all duration-300 ease-out will-change-transform"
        style={{ 
          transform: isMobile ? 'none' : `scale(${mockupScale}) translateY(${mockupTranslateY}px)`,
          opacity: isMobile ? 1 : Math.max(0, mockupOpacity),
          filter: isMobile ? 'none' : `blur(${mockupBlur}px)`
        }}
      >
        <div className="relative">
          <div className={`relative z-10 glass-card-pro rounded-[1.5rem] md:rounded-[4.5rem] overflow-hidden border flex flex-col md:flex-row h-auto md:h-[820px] ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
             <aside className={`w-full md:w-20 lg:w-64 flex flex-row md:flex-col border-b md:border-b-0 md:border-r transition-colors p-3 md:p-0 overflow-x-auto no-scrollbar ${isDark ? 'bg-slate-950/60 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                <div className="p-4 lg:p-10 hidden md:flex items-center gap-5">
                   <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-lg lg:rounded-xl flex items-center justify-center font-black text-white shrink-0">D</div>
                   <span className={`hidden lg:block text-[11px] font-black tracking-[0.25em] ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO_OS</span>
                </div>
                
                <nav className="flex flex-row md:flex-col flex-1 px-1 md:px-5 space-x-2 md:space-x-0 md:space-y-3 md:mt-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setActiveKey(item.key)}
                      className={`flex items-center justify-center lg:justify-start gap-4 px-3 md:px-5 py-2.5 md:py-4 rounded-xl lg:rounded-[2rem] transition-all duration-300 group shrink-0
                        ${activeKey === item.key 
                          ? (isDark ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20' : 'bg-blue-600 text-white shadow-lg') 
                          : (isDark ? 'text-slate-500 hover:bg-white/5' : 'text-slate-400 hover:bg-slate-200/50')}`}
                    >
                      <span className={`text-lg md:text-xl transition-transform group-hover:scale-110`}>{item.icon}</span>
                      <span className={`hidden lg:block text-[10px] font-black uppercase tracking-[0.2em]`}>
                        {item.label}
                      </span>
                    </button>
                  ))}
                </nav>
             </aside>

             <main className="flex-1 flex flex-col overflow-hidden min-h-[400px] md:min-h-0">
                <header className={`h-14 md:h-24 border-b flex items-center justify-between px-4 md:px-12 transition-colors ${isDark ? 'bg-slate-950/20 border-white/5' : 'bg-white/40 border-slate-100'}`}>
                   <div className="flex items-center gap-3 md:gap-10 flex-1">
                      <MenuUnfoldOutlined className="text-slate-500 cursor-pointer hover:text-blue-500 text-lg md:text-2xl" />
                      <div className="hidden sm:flex items-center gap-3 text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                         <span>Network</span>
                         <span className="text-slate-800">/</span>
                         <span className={isDark ? 'text-white' : 'text-slate-900'}>{currentView?.label}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <Avatar shape="square" size="small" className="bg-blue-600 rounded-lg md:hidden">A</Avatar>
                      <Avatar shape="square" size="large" className="bg-blue-600 rounded-xl hidden md:flex">A</Avatar>
                   </div>
                </header>

                <div className={`flex-1 overflow-y-auto p-4 md:p-12 no-scrollbar ${isDark ? 'bg-slate-900/20' : 'bg-slate-50/20'}`}>
                   <div className="animate-content-entrance w-full h-full">
                      {currentView?.component}
                   </div>
                </div>
             </main>
          </div>
        </div>
      </div>
    </header>
  );
};
