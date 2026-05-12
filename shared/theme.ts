
import { theme as antdTheme } from 'antd';
import { ThemeMode } from './types';

export const getThemeConfig = (mode: ThemeMode) => ({
  algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
  token: {
    colorPrimary: '#1677ff',
    colorInfo: '#1677ff',
    colorSuccess: '#1677ff',
    fontSize: 15,
    fontSizeSM: 13,
    fontSizeLG: 16,
    lineHeight: 1.62,
    lineHeightLG: 1.65,
    lineHeightSM: 1.5,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 18,
    borderRadius: 16,
    borderRadiusLG: 20,
    fontFamily: "'Noto Sans', 'Noto Sans KR', sans-serif",
    colorBgContainer: mode === 'dark' ? '#0F1115' : '#FFFFFF',
    colorText: mode === 'dark' ? '#FFFFFF' : '#0F172A',
    colorBgLayout: mode === 'dark' ? '#030304' : '#F5F9FF',
    colorBorder: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.12)',
    colorTextDescription: mode === 'dark' ? '#94A3B8' : '#475569',
  },
  components: {
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: '0.75em',
    },
    Button: {
      fontWeight: 800,
      controlHeight: 48,
      controlHeightLG: 54,
      borderRadius: 999,
      defaultBorderColor: mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.18)',
      defaultColor: mode === 'dark' ? '#FFFFFF' : '#0F172A',
      defaultBg: mode === 'dark' ? 'rgba(255,255,255,0.02)' : '#FFFFFF',
      primaryColor: '#FFFFFF',
      primaryShadow: '0 0 24px -6px rgba(22,119,255,0.6)',
    },
    Card: {
      borderRadiusLG: 24,
      colorBgContainer: mode === 'dark' ? 'rgba(15, 17, 21, 0.78)' : '#FFFFFF',
    },
    Segmented: {
      borderRadius: 12,
      fontWeightStrong: 900,
      colorBgLayout: mode === 'dark' ? 'rgba(255,255,255,0.06)' : '#EFF6FF',
      itemSelectedBg: mode === 'dark' ? 'rgba(22,119,255,0.22)' : 'rgba(22,119,255,0.16)',
      itemSelectedColor: mode === 'dark' ? '#69b1ff' : '#0958d9',
    },
    Input: {
      borderRadius: 10,
      colorBgContainer: mode === 'dark' ? 'rgba(0,0,0,0.45)' : '#FFFFFF',
      activeBorderColor: '#1677ff',
      hoverBorderColor: '#1677ff',
    }
  }
});




