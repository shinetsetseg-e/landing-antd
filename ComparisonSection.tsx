
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    FileExcelOutlined,
    RocketOutlined
} from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import React from 'react';
import { DebtProOrderAnimation, ExcelChaosAnimation, Reveal } from './CommonUI';
import { i18n, Language } from './shared/i18n';

const { Title, Text, Paragraph } = Typography;

interface ComparisonSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <section id="comparison" className={`section-fullscreen transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
       <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
          <Reveal>
             <div className="text-center mb-10 md:mb-24">
                <div className={`inline-flex items-center gap-3 px-4 md:px-6 py-2 rounded-full border mb-6 md:mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                   <Text className={`text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.excelSection.tag}</Text>
                </div>
                <h2 className={`text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.excelSection.title}</h2>
                <p className={`text-base md:text-xl max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.excelSection.subtitle}</p>
             </div>
          </Reveal>
          
          <Row gutter={[24, 24]} className="relative">
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex w-16 h-16 rounded-full text-[10px] font-black items-center justify-center shadow-2xl border ${isDark ? 'bg-slate-950 text-white border-white/10' : 'bg-white text-slate-900 border-slate-200'}`}>VS</div>
             
             <Col xs={24} lg={12}>
                <Reveal direction="right">
                   <div className={`glass-card-pro h-full rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-transparent hover:border-red-500/30 group`}>
                      <ExcelChaosAnimation />
                      <div className="mt-8 md:mt-10">
                         <h3 className={`text-xl md:text-2xl font-black mb-4 flex items-center gap-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                           <FileExcelOutlined className="text-red-500" /> {t.excelSection.excel.title}
                         </h3>
                         <ul className="space-y-3 md:space-y-4">
                            {t.excelSection.excel.items.map((item, idx) => (
                               <li key={idx} className="flex items-start gap-3 md:gap-4">
                                  <CloseCircleOutlined className="text-red-500/40 mt-1 shrink-0" />
                                  <Text className={`text-xs md:text-base font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item}</Text>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </Reveal>
             </Col>
             
             <Col xs={24} lg={12}>
                <Reveal direction="left">
                   <div className={`glass-card-pro h-full rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border transition-all duration-500 ${isDark ? 'border-blue-500/20 hover:border-blue-500' : 'border-blue-100 hover:border-blue-400'}`}>
                      <DebtProOrderAnimation />
                      <div className="mt-8 md:mt-10">
                         <h3 className={`text-xl md:text-2xl font-black mb-4 flex items-center gap-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                           <RocketOutlined className="text-blue-500" /> {t.excelSection.debtpro.title}
                         </h3>
                         <ul className="space-y-3 md:space-y-4">
                            {t.excelSection.debtpro.items.map((item, idx) => (
                               <li key={idx} className="flex items-start gap-3 md:gap-4">
                                  <CheckCircleOutlined className="text-blue-500 mt-1 shrink-0" />
                                  <Text className={`text-xs md:text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item}</Text>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </Reveal>
             </Col>
          </Row>
       </div>
    </section>
  );
};
