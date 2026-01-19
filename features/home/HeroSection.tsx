
import {
  BarChartOutlined,
  BellOutlined,
  DatabaseOutlined,
  HistoryOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  MoreOutlined,
  QuestionCircleOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
  ThunderboltOutlined,
  UploadOutlined
} from '@ant-design/icons';
import { Avatar, Badge, Input, Typography } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { GlowOrb } from '../../components/ui/GlowOrb';
import { i18n } from '../../shared/i18n';
import { SectionProps } from '../../shared/types';

const { Text } = Typography;

export const HeroSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const [activeKey, setActiveKey] = useState('info');
  const [scrollY, setScrollY] = useState(0);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const scrollProgress = useMemo(() => {
    if (isMobile) return 0;
    return Math.min(scrollY / 800, 1);
  }, [scrollY, isMobile]);
  
  const titleScale = 1 - (scrollProgress * 0.4);
  const titleOpacity = 1 - (scrollProgress * 2.5);
  const titleTranslateY = scrollProgress * -150;

  const mockupScale = isMobile ? 1 : 0.88 + (scrollProgress * 0.12);
  const mockupTranslateY = isMobile ? 0 : (1 - scrollProgress) * 150;
  const mockupOpacity = isMobile ? 1 : 0.4 + (scrollProgress * 0.6);

  // Exact labels and images from the provided system screenshots
  const sidebarItems = [
    { 
      key: 'info', 
      icon: <DatabaseOutlined />, 
      label: lang === 'mn' ? 'Мэдээлэл' : 'Information',
      subItems: [
        { label: lang === 'mn' ? 'Харилцагч' : 'Borrowers' },
        { label: lang === 'mn' ? 'Зээл' : 'Loans' },
        { label: lang === 'mn' ? 'Ажилтан' : 'Employees' }
      ],
      image: '/images/zeel.png' // Borrower List
    },
    { 
      key: 'action', 
      icon: <ThunderboltOutlined />, 
      label: lang === 'mn' ? 'Ажиллагаа' : 'Activities',
      image: '/images/ajillagaa.png' // Activity List
    },
    { 
      key: 'files', 
      icon: <UploadOutlined />, 
      label: lang === 'mn' ? 'Файл оруулах' : 'File Upload',
      image: '/images/file.png' // Repayment Report/File List
    },
    { 
      key: 'reports', 
      icon: <BarChartOutlined />, 
      label: lang === 'mn' ? 'Тайлан хяналт' : 'Reporting',
      image: '/images/report.png' // visual Reports
    },
    { 
      key: 'messages', 
      icon: <MessageOutlined />, 
      label: lang === 'mn' ? 'Мессеж' : 'Messages',
      image: '/images/message.png' // SMS Templates
    },
  ];

  const bottomItems = [
    { key: 'help', icon: <QuestionCircleOutlined />, label: lang === 'mn' ? 'Тусламж' : 'Help', image: '/images/help.png' },
    { key: 'audit', icon: <HistoryOutlined />, label: lang === 'mn' ? 'Аудит лог' : 'Audit Log', image: '/images/audit.png' },
    { key: 'settings', icon: <SettingOutlined />, label: lang === 'mn' ? 'Тохиргоо' : 'Settings', image: '/images/settings.png' },
  ];

  const allItems = [...sidebarItems, ...bottomItems];
  const currentView = allItems.find(m => m.key === activeKey) || sidebarItems[0];

  return (
    <header className="relative min-h-[110dvh] md:min-h-[180vh] flex flex-col items-center">
      <div className="fixed inset-0 grid-bg-complex -z-10 pointer-events-none"></div>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <GlowOrb color="bg-blue-600" className="top-[-10%] left-[-10%] opacity-[0.08] blur-[120px] md:blur-[240px]" size="120vw" />
      </div>

      {/* Landing Page Content (Hero Text) */}
      <div 
        className="w-full min-h-[70dvh] md:h-screen flex flex-col items-center justify-center md:sticky top-10 z-20 pointer-events-none px-6 py-12 will-change-transform"
        style={{ 
          transform: isMobile ? 'none' : `scale(${titleScale}) translateY(${titleTranslateY}px)`,
          opacity: isMobile ? 1 : Math.max(0, titleOpacity),
          visibility: !isMobile && titleOpacity <= -0.1 ? 'hidden' : 'visible'
        }}
      >
        <div className="flex flex-col items-center w-full max-w-7xl pointer-events-auto text-center">
          <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-black mb-8 leading-[0.9] tracking-tighter gradient-text-hero animate-content-entrance" style={{ animationDelay: '100ms' }}>
            {lang === 'mn' ? (
              <>ЗЭЭЛИЙН <br className="hidden md:block"/>ХЯНАЛТЫН <br className="hidden md:block"/><span className="text-blue-600">ШИНЭ ЭРИН</span></>
            ) : (
              <>THE UNIFIED <br className="hidden md:block"/>CONTROL <br className="hidden md:block"/><span className="text-blue-600">INTERFACE</span></>
            )}
          </h1>
          
          <p className={`text-base md:text-xl lg:text-2xl max-w-[320px] sm:max-w-lg md:max-w-3xl mb-12 font-medium leading-relaxed animate-content-entrance ${isDark ? 'text-slate-400' : 'text-slate-600'}`} style={{ animationDelay: '200ms' }}>
            {t.hero.subtitle}
          </p>
        </div>
      </div>

      {/* Realistic System Mockup with Real Screenshots */}
      <div 
        className="w-full max-w-[90vw] xl:max-w-[1420px] mx-auto px-2 md:px-6 mt-16 md:mt-[60vh] pb-32 relative z-10 transition-all duration-300 ease-out will-change-transform"
        style={{ 
          transform: isMobile ? 'none' : `scale(${mockupScale}) translateY(${mockupTranslateY}px)`,
          opacity: isMobile ? 1 : Math.max(0, mockupOpacity),
        }}
      >
        <div className="relative group">
          {/* Main Container */}
          <div className={`relative z-10 glass-card-pro rounded-[2rem] md:rounded-[4rem] overflow-hidden border flex flex-col md:flex-row h-auto md:h-[920px] shadow-[0_50px_100px_rgba(0,0,0,0.2)] ${isDark ? 'border-white/5 bg-[#0b0f1a]/95' : 'border-slate-200 bg-white'}`}>
             
             {/* Sidebar - Mimicking screenshots */}
             <aside className={`w-full md:w-64 flex flex-row md:flex-col border-b md:border-b-0 md:border-r transition-colors p-4 md:p-0 overflow-x-auto no-scrollbar ${isDark ? 'bg-[#0b0f1a] border-white/5' : 'bg-[#fcfdfe] border-slate-100'}`}>
                <div className="p-6 lg:p-10 hidden md:flex items-center gap-4 border-b border-white/5 md:mb-4">
                   <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg text-xl">D</div>
                   <div className="flex flex-col">
                      <span className={`text-[13px] font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>DebtPro</span>
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">KCH_CRM_V1</span>
                   </div>
                </div>
                
                <nav className="flex flex-row md:flex-col flex-1 px-2 md:px-4 space-x-2 md:space-x-0 md:space-y-1">
                  {sidebarItems.map((item) => (
                    <div key={item.key} className="flex flex-col w-full">
                      <button
                        onClick={() => setActiveKey(item.key)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group shrink-0 w-full
                          ${activeKey === item.key 
                            ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-sm' 
                            : `text-slate-500 hover:bg-slate-500/5`}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-lg ${activeKey === item.key ? 'text-blue-500' : ''}`}>{item.icon}</span>
                          <span className={`text-[12px] font-bold tracking-tight ${activeKey === item.key ? 'text-blue-600' : ''}`}>
                            {item.label}
                          </span>
                        </div>
                        {item.subItems && <RightOutlined className={`text-[9px] transition-transform ${activeKey === item.key ? 'rotate-90' : ''}`} />}
                      </button>
                      
                      {activeKey === item.key && item.subItems && (
                        <div className="hidden md:flex flex-col pl-10 pr-4 mt-1 space-y-1 animate-slide-up">
                          {item.subItems.map((sub, si) => (
                            <button key={si} className="text-left py-2.5 px-3 rounded-lg text-[11px] font-bold text-blue-500/70 hover:text-blue-500 hover:bg-blue-500/5 transition-colors">
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="hidden md:block py-4 border-t border-slate-500/10 mt-6 opacity-30"></div>
                  
                  {bottomItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setActiveKey(item.key)}
                      className={`hidden md:flex items-center gap-4 px-4 py-3 rounded-xl transition-colors w-full
                        ${activeKey === item.key ? 'bg-blue-600/10 text-blue-500' : 'text-slate-500 hover:text-blue-500'}`}
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="text-[11px] font-bold">{item.label}</span>
                    </button>
                  ))}
                </nav>

                <div className="p-6 mt-auto hidden md:block">
                   <div className={`flex items-center gap-3 p-3 rounded-2xl ${isDark ? 'bg-white/5 border border-white/5' : 'bg-white border border-slate-100 shadow-sm'}`}>
                      <Avatar size="small" className="bg-blue-600" src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" />
                      <div className="flex-1 overflow-hidden">
                         <div className={`text-[10px] font-black truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>A.Admin</div>
                         <div className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Active_Session</div>
                      </div>
                      <MoreOutlined className="text-slate-400" />
                   </div>
                </div>
             </aside>

             {/* Main Content Area */}
             <main className={`flex-1 flex flex-col overflow-hidden ${isDark ? 'bg-[#080b12]' : 'bg-[#f0f2f5]'}`}>
                {/* System Header */}
                <header className={`h-16 md:h-20 border-b flex items-center justify-between px-6 md:px-10 ${isDark ? 'bg-[#0b0f1a] border-white/5' : 'bg-white border-slate-200'}`}>
                   <div className="flex items-center gap-8 flex-1">
                      <MenuUnfoldOutlined className="text-slate-400 cursor-pointer hover:text-blue-500 text-xl" />
                      <div className="hidden md:flex items-center gap-2 text-[11px] font-medium text-slate-400">
                         <span className="hover:text-blue-500 cursor-pointer">Мэдээлэл</span>
                         <span className="text-slate-300">/</span>
                         <span className="text-blue-500 font-bold">{currentView?.label}</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <Input 
                         prefix={<SearchOutlined className="text-slate-300" />} 
                         placeholder="Түргэн хайлт..." 
                         className={`hidden lg:flex w-72 h-10 rounded-xl border text-[11px] font-medium ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-100'}`}
                      />
                      <Badge dot color="#ef4444">
                        <BellOutlined className="text-xl text-slate-400 hover:text-blue-500 cursor-pointer transition-colors" />
                      </Badge>
                      <div className="w-px h-6 bg-slate-300/30 mx-2"></div>
                      <Avatar shape="square" size="default" className="bg-blue-600 rounded-lg shadow-lg">A</Avatar>
                   </div>
                </header>

                {/* Dashboard Canvas Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 no-scrollbar relative flex items-center justify-center">
                   
                   {/* Screenshot Display Container */}
                   <div key={activeKey} className="animate-content-entrance w-full h-full flex items-center justify-center rounded-2xl overflow-hidden border border-slate-200/50 bg-[#ffffff]">
                      {currentView.image ? (
                        <img 
                          src={currentView.image} 
                          alt={currentView.label}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="text-slate-400 font-black uppercase tracking-widest text-[10px]">View Unavailable</div>
                      )}
                   </div>

                   {/* Subtle shadow overlay */}
                   <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.03)]"></div>
                </div>
             </main>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-600/20 blur-[120px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>
      </div>

      <style>{`
        .gradient-text-hero {
          background: linear-gradient(to bottom, #fff 40%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .light .gradient-text-hero {
          background: linear-gradient(to bottom, #0f172a 40%, #64748b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes content-entrance {
          from { opacity: 0; transform: translateY(40px) scale(0.98); filter: blur(20px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-content-entrance {
          animation: content-entrance 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }
      `}</style>
    </header>
  );
};
