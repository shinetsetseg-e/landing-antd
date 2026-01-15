
import React, { useState } from 'react';
/* Added Space to the antd imports to fix the missing name error */
import { Button, Typography, Input, Avatar, Badge, Space } from 'antd';
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
import { i18n, Language } from './i18n';
import { Reveal, GlowOrb } from './CommonUI';
import { 
  PreviewCommandCenter, 
  PreviewBorrower360, 
  PreviewLegalPipeline, 
  PreviewSMSDashboard, 
  PreviewPerformance 
} from './DashboardPreviews';

const { Text } = Typography;

interface HeroProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const [activeKey, setActiveKey] = useState('dashboard');
  const isDark = theme === 'dark';

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: t.hero.carousel.dashboard, component: <PreviewCommandCenter lang={lang} theme={theme}/> },
    { key: 'profile', icon: <UserOutlined />, label: t.hero.carousel.profile, component: <PreviewBorrower360 lang={lang} theme={theme}/> },
    { key: 'legal', icon: <SafetyOutlined />, label: t.hero.carousel.legal, component: <PreviewLegalPipeline lang={lang} theme={theme}/> },
    { key: 'sms', icon: <MessageOutlined />, label: t.hero.carousel.sms, component: <PreviewSMSDashboard lang={lang} theme={theme}/> },
    { key: 'performance', icon: <RiseOutlined />, label: t.hero.carousel.performance, component: <PreviewPerformance lang={lang} theme={theme}/> },
  ];

  const currentView = menuItems.find(m => m.key === activeKey);

  return (
    <header className="relative pt-48 pb-32 overflow-hidden flex flex-col items-center min-h-screen">
      {/* Background Deep Ambience */}
      <div className="absolute inset-0 grid-bg-complex -z-10"></div>
      <GlowOrb color="bg-blue-600" className="top-20 left-1/4 w-[600px] h-[600px] opacity-10 blur-[180px]" />
      <GlowOrb color="bg-cyan-500" className="bottom-40 right-1/4 w-[500px] h-[500px] opacity-10 blur-[200px]" />
      
      {/* Central Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-24">
        <Reveal>
           <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-10 transition-colors ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50'}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              <Text className={`text-[11px] font-black tracking-[0.1em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.hero.tag}</Text>
           </div>
           
           <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[1.05] tracking-tighter gradient-text-hero">
             {lang === 'mn' ? (
               <>Ирээдүйн <br/>Зээлийн Удирдлага</>
             ) : (
               <>Future-Proof <br/>Loan Recovery</>
             )}
           </h1>
           
           <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-14 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
             {t.hero.subtitle}
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <Button 
                type="primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-16 px-12 rounded-2xl text-[12px] font-black uppercase tracking-wider flex items-center gap-4"
             >
                {t.hero.cta}
                <ArrowRightOutlined />
             </Button>
             <button className={`h-16 px-10 rounded-2xl text-[12px] font-black uppercase tracking-wider border flex items-center gap-4 transition-all active:scale-95 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100'}`}>
                <PlayCircleFilled className="text-blue-500 text-2xl" />
                {t.hero.secondary}
             </button>
           </div>
        </Reveal>
      </div>

      {/* Interactive Dashboard Cockpit Stage */}
      <div className="w-full max-w-7xl mx-auto px-6 relative">
         <Reveal delay={400} className="relative">
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[140%] h-[400px] stage-glow opacity-40 pointer-events-none"></div>
            
            {/* The Dashboard App Shell */}
            <div className={`relative z-10 glass-card-pro rounded-[3rem] overflow-hidden border flex h-[700px] animate-float shadow-2xl ${isDark ? 'border-white/5' : 'border-slate-200 shadow-slate-900/5'}`}>
               
               {/* Sidebar Navigation */}
               <aside className={`w-20 md:w-64 flex flex-col border-r transition-colors ${isDark ? 'bg-slate-950/40 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="p-8 flex items-center gap-4">
                     <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white">D</div>
                     <span className={`hidden md:block text-xs font-black tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO_OS</span>
                  </div>
                  
                  <nav className="flex-1 px-4 space-y-2 mt-4">
                    {menuItems.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setActiveKey(item.key)}
                        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group
                          ${activeKey === item.key 
                            ? (isDark ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'bg-blue-600 text-white shadow-lg shadow-blue-600/20') 
                            : (isDark ? 'text-slate-500 hover:bg-white/5' : 'text-slate-400 hover:bg-slate-200/50')}`}
                      >
                        <span className={`text-lg transition-transform group-hover:scale-110 ${activeKey === item.key && !isDark ? 'text-white' : ''}`}>{item.icon}</span>
                        <span className={`hidden md:block text-[10px] font-black uppercase tracking-[0.1em] ${activeKey === item.key && !isDark ? 'text-white' : ''}`}>
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </nav>

                  <div className="p-6 border-t border-white/5">
                     <div className={`hidden md:flex items-center gap-4 p-3 rounded-xl ${isDark ? 'bg-white/5' : 'bg-white border border-slate-100'}`}>
                        <Avatar size="small" icon={<UserOutlined />} className="bg-blue-600" />
                        <div className="overflow-hidden">
                           <div className={`text-[9px] font-black uppercase tracking-[0.05em] truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>Admin_User_01</div>
                           <div className="text-[8px] font-bold text-slate-500 uppercase">Supervisor</div>
                        </div>
                     </div>
                  </div>
               </aside>

               {/* Main Dashboard Area */}
               <main className="flex-1 flex flex-col overflow-hidden">
                  {/* Internal Header */}
                  <header className={`h-20 border-b flex items-center justify-between px-10 transition-colors ${isDark ? 'bg-slate-950/20 border-white/5' : 'bg-white/40 border-slate-100'}`}>
                     <div className="flex items-center gap-6 flex-1">
                        <MenuUnfoldOutlined className="text-slate-500 cursor-pointer hover:text-blue-500 transition-colors" />
                        <div className="hidden md:flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.1em]">
                           <span>Network</span>
                           <span className="text-slate-700">/</span>
                           <span className={isDark ? 'text-white' : 'text-slate-900'}>{currentView?.label}</span>
                        </div>
                        <Input 
                           prefix={<SearchOutlined className="text-slate-500" />} 
                           placeholder="Global search command..." 
                           className={`hidden lg:flex max-w-xs border-none h-10 rounded-xl text-xs font-medium ${isDark ? 'bg-white/5' : 'bg-slate-100'}`} 
                        />
                     </div>
                     <div className="flex items-center gap-6">
                        <Space className="hidden md:flex gap-4">
                           <Badge count={3} size="small" color="#2563eb">
                              <BellOutlined className="text-lg text-slate-500 hover:text-blue-500 cursor-pointer" />
                           </Badge>
                           <QuestionCircleOutlined className="text-lg text-slate-500 hover:text-blue-500 cursor-pointer" />
                        </Space>
                        <div className={`w-px h-6 mx-2 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}></div>
                        <div className="flex items-center gap-3">
                           <div className="text-right hidden sm:block">
                              <div className={`text-[10px] font-black uppercase tracking-[0.05em] ${isDark ? 'text-white' : 'text-slate-900'}`}>TND_ADMIN</div>
                              <div className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest flex items-center justify-end gap-1">
                                 <span className="w-1 h-1 rounded-full bg-emerald-500"></span> Online
                              </div>
                           </div>
                           <Avatar shape="square" className="bg-blue-600 rounded-lg">A</Avatar>
                        </div>
                     </div>
                  </header>

                  {/* Viewport Area */}
                  <div className={`flex-1 overflow-y-auto p-8 no-scrollbar ${isDark ? 'bg-slate-900/20' : 'bg-slate-50/30'}`}>
                     <div className="animate-content-entrance w-full h-full">
                        {currentView?.component}
                     </div>
                  </div>
               </main>
            </div>

            {/* Micro Widget - Floating Status */}
            <div className="absolute -right-12 top-1/2 hidden 2xl:block animate-float" style={{ animationDelay: '2s' }}>
               <div className={`glass-card-pro p-8 rounded-[2rem] w-64 border shadow-2xl ${isDark ? 'border-blue-500/20' : 'border-blue-100'}`}>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-[10px] font-black uppercase tracking-[0.1em] text-blue-500">Node_Status</div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
                  </div>
                  <div className={`text-3xl font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>98.2<span className="text-sm ml-1 text-slate-500">%</span></div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[98%]"></div>
                  </div>
                  <div className="mt-4 flex justify-between text-[8px] font-black text-slate-500 uppercase tracking-widest">
                     <span>Latency: 14ms</span>
                     <span>Uptime: 99.9%</span>
                  </div>
               </div>
            </div>
         </Reveal>
      </div>
    </header>
  );
};
