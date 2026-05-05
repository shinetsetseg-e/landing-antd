import {
  BankOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  UserOutlined
} from '@ant-design/icons';
import { App, Button, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';
import { Reveal } from './components/ui/Reveal';
import { i18n } from './shared/i18n';
import { Language } from './shared/types';

const { Text } = Typography;

interface ContactSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const ct = t.contactSection;
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const isDark = theme === 'dark';

  const onFinish = (values: any) => {
    setLoading(true);
    const subject = encodeURIComponent(`DebtPro Partnership Request: ${values.organization}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\n` +
      `Organization: ${values.organization}\n` +
      `Phone: ${values.phone}\n` +
      `Email: ${values.email}\n`
    );

    setTimeout(() => {
      setLoading(false);
      window.location.href = `mailto:info@kchsolution.mn?subject=${subject}&body=${body}`;
      message.success(ct.success);
    }, 1000);
  };

  return (
    <section id="contact" className={`py-24 md:py-32 transition-colors duration-500 ${isDark ? 'bg-[#0f1115]' : 'bg-[#ffffff]'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Row gutter={[48, 48]} align="top">
          <Col xs={24} lg={11}>
            <Reveal direction="right">
              <div className="inline-flex items-center gap-3 tag-pill mb-7">
                <Text className="!m-0 !text-inherit font-mono">CONTACT_CHANNELS</Text>
              </div>
              <h2 className={`text-4xl md:text-6xl font-heading font-bold mb-7 leading-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                {ct.title}
              </h2>
              <p className={`text-base md:text-lg mb-10 leading-relaxed max-w-xl ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>
                {ct.subtitle}
              </p>

              <div className={`p-8 rounded-2xl border ${isDark ? 'bg-[#030304] border-white/10' : 'bg-white border-[#0958d9]/15'} shadow-[0_0_40px_-15px_rgba(22,119,255,0.2)]`}>
                <h3 className={`text-xl font-heading font-semibold mb-6 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>{ct.companyInfo.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0958d9]/15 border border-[#1677ff]/35 flex items-center justify-center text-[#1677ff]"><PhoneOutlined /></div>
                    <span className={`text-base font-semibold ${isDark ? 'text-slate-300' : 'text-[#334155]'}`}>{ct.companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0958d9]/15 border border-[#1677ff]/35 flex items-center justify-center text-[#1677ff]"><MailOutlined /></div>
                    <span className={`text-base font-semibold ${isDark ? 'text-slate-300' : 'text-[#334155]'}`}>{ct.companyInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0958d9]/15 border border-[#1677ff]/35 flex items-center justify-center text-[#1677ff]"><EnvironmentOutlined /></div>
                    <div className="flex flex-col">
                      <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-[#475569]'}`}>{ct.companyInfo.address}</span>
                      <a
                        href="https://share.google/kwC3NBy0lnHErvoJ2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono uppercase tracking-widest mt-1 text-[#1677ff] hover:text-[#69b1ff]"
                      >
                        {ct.companyInfo.map}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Col>

          <Col xs={24} lg={13}>
            <Reveal direction="left">
              <div className={`glass-card-pro rounded-2xl p-8 md:p-10 border ${isDark ? 'border-white/10 bg-[#030304]/55' : 'border-[#0958d9]/20 bg-white/80'} shadow-[0_0_50px_-15px_rgba(22,119,255,0.2)]`}>
                <Form form={form} layout="vertical" onFinish={onFinish} size="large" className="space-y-3">
                  <Form.Item
                    label={<Text className={`text-[10px] font-mono uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>{ct.name}</Text>}
                    name="name"
                    rules={[{ required: true, message: lang === 'mn' ? 'Хоосон байж болохгүй' : 'Required field' }]}
                  >
                    <Input prefix={<UserOutlined className="opacity-60" />} placeholder={ct.placeholders.name} className={`h-12 input-brand ${isDark ? 'text-white' : 'text-[#0f172a]'}`} />
                  </Form.Item>

                  <Form.Item
                    label={<Text className={`text-[10px] font-mono uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>{ct.org}</Text>}
                    name="organization"
                    rules={[{ required: true, message: lang === 'mn' ? 'Хоосон байж болохгүй' : 'Required field' }]}
                  >
                    <Input prefix={<BankOutlined className="opacity-60" />} placeholder={ct.placeholders.org} className={`h-12 input-brand ${isDark ? 'text-white' : 'text-[#0f172a]'}`} />
                  </Form.Item>

                  <Form.Item
                    label={<Text className={`text-[10px] font-mono uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>{lang === 'mn' ? 'ХОЛБОГДОХ УТАС' : 'PHONE NUMBER'}</Text>}
                    name="phone"
                    rules={[{ required: true, message: lang === 'mn' ? 'Хоосон байж болохгүй' : 'Required field' }]}
                  >
                    <Input prefix={<PhoneOutlined className="opacity-60" />} placeholder={lang === 'mn' ? 'Утасны дугаар' : 'Phone Number'} className={`h-12 input-brand ${isDark ? 'text-white' : 'text-[#0f172a]'}`} />
                  </Form.Item>

                  <Form.Item
                    label={<Text className={`text-[10px] font-mono uppercase tracking-[0.24em] ${isDark ? 'text-slate-500' : 'text-[#64748b]'}`}>EMAIL</Text>}
                    name="email"
                    rules={[{ required: true, type: 'email', message: lang === 'mn' ? 'Зөв имэйл оруулна уу' : 'Provide valid email' }]}
                  >
                    <Input prefix={<MailOutlined className="opacity-60" />} placeholder={ct.placeholders.email} className={`h-12 input-brand ${isDark ? 'text-white' : 'text-[#0f172a]'}`} />
                  </Form.Item>

                  <Button type="primary" htmlType="submit" loading={loading} block icon={<SendOutlined />} className="mt-6 h-12 brand-button border-0 font-mono uppercase tracking-[0.18em]">
                    {ct.submit}
                  </Button>
                </Form>
              </div>
            </Reveal>
          </Col>
        </Row>
      </div>
    </section>
  );
};




