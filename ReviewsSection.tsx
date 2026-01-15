
import React from 'react';
import { Typography, Rate, Avatar, Space, Badge } from 'antd';
import { UserOutlined, CheckCircleFilled } from '@ant-design/icons';
import { Quote } from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

const { Title, Paragraph, Text } = Typography;

interface ReviewsSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <section id="customers" className={`py-32 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <Badge 
              count={t.reviews.tag} 
              style={{ backgroundColor: '#10b98110', color: '#10b981', border: '1px solid #10b98120' }} 
              className="mb-8 font-black uppercase tracking-widest"
            />
            <Title level={2} className="text-3xl md:text-5xl font-black mb-8 tracking-tight leading-tight">
              {t.reviews.title}
            </Title>
            <Paragraph className={`text-lg max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.reviews.subtitle}
            </Paragraph>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.items.map((review, i) => (
            <Reveal key={i} delay={i * 200} direction="up">
              <div className={`p-8 rounded-[3rem] border h-full flex flex-col justify-between transition-all hover:scale-[1.02] duration-500 
                ${isDark ? 'bg-slate-900/40 border-slate-800 hover:border-blue-500/30 shadow-2xl' : 'bg-white border-slate-100 shadow-xl shadow-blue-900/5 hover:border-blue-200'}`}>
                
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <Quote size={40} className="text-blue-600 opacity-20" />
                    <Rate disabled defaultValue={review.rating} className="text-xs" />
                  </div>
                  
                  <Paragraph className={`text-base md:text-lg italic font-medium leading-relaxed mb-10 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    "{review.text}"
                  </Paragraph>
                </div>

                <div className="flex items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <Avatar 
                    size={56} 
                    icon={<UserOutlined />} 
                    className="bg-blue-600 shadow-lg shadow-blue-600/20"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <Text strong className={`text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{review.name}</Text>
                      <CheckCircleFilled style={{ fontSize: 12 }} className="text-blue-500" />
                    </div>
                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest mt-0.5">
                      {review.position} • {review.org}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Brand Bar */}
        <Reveal delay={800}>
          <div className="mt-32 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {[1, 2, 3, 4, 5].map(i => (
               <div key={i} className="flex items-center gap-2">
                 <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
                 <Text strong className={`uppercase text-[10px] tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>PARTNER {i}</Text>
               </div>
             ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
