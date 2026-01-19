
import { App as AntdApp, ConfigProvider, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { ChatBot } from './ChatBot';
import { Navbar } from './components/layout/Navbar';
import { ContactSection } from './ContactSection';
import { FAQSection } from './FAQSection';
import { HeroSection } from './features/home/HeroSection';
import { Footer } from './Footer';
import { ImpactMetricsSection } from './ImpactMetricsSection';
import { InteractiveFlowSection } from './InteractiveFlowSection';
import { PricingSection } from './PricingSection';
import { RecoveryStagesSection } from './RecoveryStagesSection';
import { ReviewsSection } from './ReviewsSection';
import { ScrollTracker } from './ScrollTracker';
import { getThemeConfig } from './shared/theme';
import { Language, ThemeMode } from './shared/types';
import { ShowcaseSection } from './ShowcaseSection';
import { WhyDebtProSection } from './WhyDebtProSection';
import { WorkflowSection } from './WorkflowSection';

const { Content } = Layout;

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('mn');
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    document.documentElement.className = themeMode;
    document.body.className = `antialiased ${themeMode}`;
  }, [themeMode]);

  const themeConfig = getThemeConfig(themeMode);

  return (
    <ConfigProvider theme={themeConfig}>
      <AntdApp>
        <Layout className={`min-h-screen transition-colors duration-700 ${themeMode === 'dark' ? 'bg-slate-950' : 'bg-[#fdfdfe]'}`}>
          <Navbar 
            lang={lang} 
            setLang={setLang} 
            theme={themeMode} 
            setTheme={setThemeMode} 
          />
          <ScrollTracker lang={lang} theme={themeMode} />
          
          <Content className="relative">
            <div id="home"><HeroSection lang={lang} theme={themeMode} /></div>            
            <div id="lifecycle"><RecoveryStagesSection lang={lang} theme={themeMode} /></div>
            <ImpactMetricsSection lang={lang} theme={themeMode} />
            <div id="why"><WhyDebtProSection lang={lang} theme={themeMode} /></div>
            <div id="solutions"><WorkflowSection lang={lang} theme={themeMode} /></div>
            <div id="product"><InteractiveFlowSection lang={lang} theme={themeMode} /></div>
            
            <div id="showcase"><ShowcaseSection lang={lang} theme={themeMode} /></div>
            <div id="pricing"><PricingSection lang={lang} theme={themeMode} /></div>
            <div id="customers"><ReviewsSection lang={lang} theme={themeMode} /></div>
            <div id="contact"><ContactSection lang={lang} theme={themeMode} /></div>
            <div id="faq"><FAQSection lang={lang} theme={themeMode} /></div>
          </Content>

          <Footer lang={lang} theme={themeMode} />
          <ChatBot lang={lang} theme={themeMode} />
        </Layout>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
