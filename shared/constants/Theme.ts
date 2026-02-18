import { Platform } from 'react-native';

const tintColorLight = '#059669';

const tintColorDark = '#6ee7b7';

export const Colors = {
  light: {
    text: '#11181C',
    disabledText: '#ADB5BD',
    background: '#F8F6F0',
    navHeaderBackgroud: '#F1F5F9',
    tint: tintColorLight,
    secondary: '#8C68CD',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    line: '#CCCCCC',
    overlay: 'rgba(0, 0, 0, 0.45)',
    inputBackground: '#f1f5f9',
    inputBorder: '#e2e8f0',
    inputError: '#ef4444',
    inputPlaceholder: '#94a3b8',
    errorText: '#b91c1c',
    link: '#1A73E8',
    confirmationButtonBackground: '#34d399',
    cancelButtonBackground: '#f43f5e',
    card: '#FFFFFF',
    cardBorder: '#E5E7EB',
    danger: '#F44336',
    grey: '#E0E0E0',
    surface: '#DEE2E6',
    activeTrackColor: '#A7F3D0',
    deactiveTrackColor: '#E0E0E0',
    activeThumbColor: '#059669',
    deactiveThumbColor: '#F8F6F0',
    blue: '#60A5FA',
    logoBackground: '#ECFDF5',
    mapRegionStrokeColor: '#007BFF',
    mapRegionFillColor: 'rgba(0,123,255,0.3)',
    warning: '#D97706',
  },
  dark: {
    text: '#ECEDEE',
    disabledText: '#94a3b8',
    background: '#343436',
    navHeaderBackgroud: '#23232A',
    tint: tintColorDark,
    secondary: '#D8B4FE',

    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    line: '#444444',
    overlay: 'rgba(0, 0, 0, 0.65)',
    inputBackground: '#282b2f',
    inputBorder: '#444444',
    inputError: '#ef4444',
    inputPlaceholder: '#64748b',
    errorText: '#fca5a5',
    link: '#185ABC',
    confirmationButtonBackground: '#10B981',
    cancelButtonBackground: '#be123c',
    card: '#3F3F46',
    cardBorder: '#4B5563',
    danger: '#EF5350',
    grey: '#454550',
    surface: '#586069',
    activeTrackColor: '#065F46',
    deactiveTrackColor: '#2A2A32',
    activeThumbColor: '#6ee7b7',
    deactiveThumbColor: '#9BA1A6',
    blue: '#AECBFA',
    logoBackground: '#064E3B',
    mapRegionStrokeColor: '#66B2FF',
    mapRegionFillColor: 'rgba(102, 178, 255, 0.2)',
    warning: '#FBBF24',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Times New Roman, 'Georgia', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});