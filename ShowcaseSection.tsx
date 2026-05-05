import { Car, Check, Home, Link, PhoneCall, Send, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Reveal } from './components/ui/Reveal';
import { i18n, Language } from './shared/i18n';

interface ShowcaseSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

const SMSAutomationAnimation: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [stream, setStream] = useState<any[]>([]);

  useEffect(() => {
    const names = ['Damdin.B', 'Suren.D', 'Bolor.E', 'Anar.M', 'Tsetseg.B', 'Gantuya.P', 'Batzorig.S'];
    const interval = setInterval(() => {
      const newItem = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setStream((prev) => [newItem, ...prev.slice(0, 4)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-[390px] flex flex-col p-0 rounded-2xl border overflow-hidden glass-card-pro ${isDark ? 'border-white/10' : 'border-[#0958d9]/20'}`}>
      <div className={`p-6 border-b ${isDark ? 'bg-[#030304]/65 border-white/10' : 'bg-[#f5f9ff]/75 border-[#0958d9]/20'}`}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 brand-grad rounded-lg flex items-center justify-center text-white shadow-[0_0_20px_-8px_rgba(22,119,255,0.7)]">
            <Send size={16} />
          </div>
          <div>
            <h4 className={`font-mono text-[10px] uppercase tracking-[0.2em] ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>GATEWAY_V4</h4>
            <span className="text-[10px] font-mono text-[#1677ff]">Active Stream</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-3">
        {stream.map((item, i) => (
          <div key={item.id} className={`flex items-center justify-between p-3 rounded-xl border ${isDark ? 'border-white/10 bg-white/5' : 'border-[#0958d9]/15 bg-[#eff6ff]'}`} style={{ opacity: 1 - (i * 0.2) }}>
            <div className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[#69b1ff] ${isDark ? 'bg-[#69b1ff]/10' : 'bg-[#dbeafe]'}`}>
                <Check size={12} strokeWidth={3} />
              </div>
              <span className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{item.name}</span>
            </div>
            <span className={`font-mono text-[10px] ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ lang, theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="showcase" className={`py-24 md:py-32 transition-colors ${isDark ? 'bg-[#030304]' : 'bg-[#f5f9ff]'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal direction="right">
            <div>
              <div className="inline-flex items-center gap-3 tag-pill mb-7">
                <Users size={16} className="text-[#1677ff]" />
                <span className="font-mono">BORROWER 360°</span>
              </div>
              <h2 className={`text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                {lang === 'mn' ? 'Харилцагч ба Барьцаа хөрөнгө' : 'Borrower & Assets 360°'}
              </h2>
              <p className={`text-base md:text-lg mb-10 leading-relaxed ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
                {lang === 'mn'
                  ? 'Зээлдэгч, хамтран зээлдэгч болон барьцаа хөрөнгийн мэдээллийг нэг дор төвлөрүүлж хянах боломж.'
                  : 'Centralize main borrower, co-borrower, and collateral details. Access everything in one interface.'}
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Car className="text-[#1677ff]" size={18} />, title: lang === 'mn' ? 'Автомашин' : 'Automotive' },
                  { icon: <Home className="text-[#69b1ff]" size={18} />, title: lang === 'mn' ? 'Үл хөдлөх' : 'Real Estate' },
                  { icon: <Link className="text-[#0958d9]" size={18} />, title: lang === 'mn' ? 'Хамаарал' : 'Family Link' },
                  { icon: <PhoneCall className="text-[#1677ff]" size={18} />, title: lang === 'mn' ? 'Харилцаа' : 'History' }
                ].map((item, i) => (
                  <div key={i} className={`p-4 md:p-6 rounded-xl border ${isDark ? 'border-white/10 bg-[#0f1115]' : 'border-[#0958d9]/15 bg-[#ffffff]'}`}>
                    <div className="mb-3">{item.icon}</div>
                    <h4 className={`text-xs md:text-sm font-mono uppercase tracking-wide ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <div className="space-y-6">
              <SMSAutomationAnimation isDark={isDark} />
              <div className={`rounded-2xl p-6 border ${isDark ? 'bg-[#0f1115] border-white/10' : 'bg-[#ffffff] border-[#0958d9]/15'}`}>
                <h4 className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-4 ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>Node Activity</h4>
                <div className="space-y-3">
                  {[
                    lang === 'mn' ? 'Актив мөрдлөг илэрсэн' : 'Active contact path discovered',
                    lang === 'mn' ? 'Барьцааны шинэчлэл баталгаажсан' : 'Collateral update validated',
                    lang === 'mn' ? 'Өөрчлөлтийн лог блокт бичигдсэн' : 'Mutation log written to block'
                  ].map((line, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1677ff]" />
                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-[#334155]'}`}>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};




