
import {
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { Button, Segmented } from 'antd';
import React, { useEffect, useState } from 'react';
import { i18n } from '../../shared/i18n';
import { Language, ThemeMode } from '../../shared/types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme }) => {
  const t = i18n[lang];
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';
  const purchaseUrl = 'https://debtpro.kchsolution.mn/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { key: 'product', label: t.nav.product, target: 'lifecycle' },
    { key: 'why', label: t.nav.why, target: 'metrics' },
    { key: 'solutions', label: t.nav.solutions, target: 'product' },
    { key: 'pricing', label: t.nav.pricing, target: 'pricing' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-6 ${scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-10'}`}>
      <nav className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 h-16 md:h-20 px-4 md:px-10 rounded-2xl md:rounded-[24px] backdrop-blur-xl border 
        ${scrolled ? 'shadow-[0_0_50px_-10px_rgba(22,119,255,0.25)] scale-[0.99] md:scale-[0.98]' : 'scale-100'} 
        ${isDark ? 'bg-[#030304]/55 border-white/10' : 'bg-[#f5f9ff]/78 border-[#0958d9]/20'}`}>
        
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer group" onClick={() => scrollTo('home')}>
          <img
            src="/images/debtpro_kch_logo.svg"
            alt="DebtPro"
            className="h-8 md:h-10 w-auto shrink-0"
          />
        </div>

        <div className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <Button 
              key={item.key} 
              type="text" 
              onClick={() => scrollTo(item.target)} 
              className={`uppercase font-mono text-[10px] font-bold tracking-[0.2em] ${isDark ? 'text-slate-300 hover:!text-[#1677ff]' : 'text-[#475569] hover:!text-[#0958d9]'}`}
            >
              {item.label}
            </Button>
          ))}
          <Button 
            type="text" 
            onClick={() => scrollTo('contact')} 
            className={`uppercase font-mono text-[10px] font-bold tracking-[0.2em] ${isDark ? 'text-slate-300 hover:!text-[#1677ff]' : 'text-[#475569] hover:!text-[#0958d9]'}`}
          >
            {t.nav.resources}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-2">
            <Button 
              shape="circle" 
              size="small"
              icon={isDark ? <SunOutlined /> : <MoonOutlined />} 
              onClick={() => setTheme(isDark ? 'light' : 'dark')} 
              className={`md:scale-100 !border ${isDark ? '!border-white/15 !text-[#69b1ff] !bg-white/5 hover:!bg-white/10' : '!border-[#0958d9]/30 !text-[#0958d9] !bg-[#eff6ff]'}`}
            />
            <Segmented
              size="small"
              options={['MN', 'EN', 'KO']}
              value={lang.toUpperCase()}
              onChange={(val) => setLang(val.toString().toLowerCase() as Language)}
              className="font-mono font-bold text-[8px] md:text-[9px] hidden sm:block"
            />
          </div>
          <Button 
            type="primary" 
            size={window.innerWidth < 768 ? "small" : "middle"}
            className="h-8 md:h-12 px-4 md:px-8 text-[9px] md:text-[11px] font-black uppercase tracking-wider brand-button border-0"
            onClick={() => { window.location.href = purchaseUrl; }}
          >
            {t.nav.demo}
          </Button>
        </div>
      </nav>
    </div>
  );
};



