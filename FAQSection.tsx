import { Collapse, Typography } from 'antd';
import React from 'react';
import { Reveal } from './components/ui/Reveal';
import { i18n, Language } from './shared/i18n';

const { Text } = Typography;

interface FAQSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <section id="faq" className={`py-24 md:py-32 transition-colors duration-500 ${isDark ? 'bg-[#030304]' : 'bg-[#f5f9ff]'}`}>
      <div className="max-w-4xl mx-auto px-6 w-full">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-7 tag-pill">
              <Text className="!m-0 !text-inherit font-mono">OPERATIONAL_FAQ</Text>
            </div>
            <h2 className={`text-4xl md:text-6xl font-heading font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{t.faq.title}</h2>
          </div>
        </Reveal>

        <Collapse
          accordion
          ghost
          size="large"
          expandIconPosition="end"
          className={`debtpro-faq ${isDark ? 'dark-faq' : 'light-faq'}`}
          items={t.faq.items.map((item, i) => ({
            key: i,
            label: <span className={`faq-question text-lg md:text-xl font-heading font-semibold tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{item.q}</span>,
            children: <p className={`text-sm md:text-base leading-relaxed pb-4 ${isDark ? 'text-slate-300' : 'text-[#334155]'}`}>{item.a}</p>,
          }))}
        />
      </div>

      <style>{`
        .debtpro-faq .ant-collapse-item {
          margin-bottom: 16px;
          border-radius: 16px !important;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .dark-faq .ant-collapse-item {
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          background: rgba(15, 17, 21, 0.9) !important;
        }
        .dark-faq .ant-collapse-item-active {
          border-color: rgba(22, 119, 255, 0.45) !important;
          box-shadow: 0 0 28px -12px rgba(22, 119, 255, 0.4);
        }
        .light-faq .ant-collapse-item {
          border: 1px solid rgba(22, 119, 255, 0.2) !important;
          background: rgba(255, 255, 255, 0.98) !important;
        }
        .light-faq .ant-collapse-item-active {
          border-color: rgba(22, 119, 255, 0.45) !important;
          box-shadow: 0 0 28px -12px rgba(22, 119, 255, 0.2);
        }
        .debtpro-faq .ant-collapse-expand-icon,
        .debtpro-faq .ant-collapse-expand-icon svg {
          color: #1677ff !important;
        }
        .debtpro-faq .ant-collapse-item-active .faq-question {
          color: #1677ff !important;
        }
        .debtpro-faq .ant-collapse-header:hover .faq-question {
          color: #2f54eb !important;
        }
        .debtpro-faq .ant-collapse-header { padding: 20px 24px !important; }
        .debtpro-faq .ant-collapse-content-box { padding: 0 24px 20px 24px !important; }
      `}</style>
    </section>
  );
};




