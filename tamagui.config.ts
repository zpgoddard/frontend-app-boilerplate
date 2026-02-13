import { createFont, createTamagui, createTokens } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v5';

// ---------------------------------------------------------------------------
// Tokens: color tokens (themes reference these)
// ---------------------------------------------------------------------------

const tokens = createTokens({
  ...defaultConfig.tokens,
  color: {
    // LIGHT
    backgroundLight: '#faf8f5',
    textLight: '#2c2420',
    primaryLight: '#0d9488',
    secondaryLight: '#c2410c',
    accentLight: '#7dd3c0',
    uiLight: '#ffffff',
    invalidLight: '#6b5d4f',
    borderLight: '#ddd6c9',
    // DARK
    backgroundDark: '#0f1419',
    textDark: '#f1f5f9',
    primaryDark: '#2dd4bf',
    secondaryDark: '#fb923c',
    accentDark: '#5eead4',
    uiDark: '#1a2332',
    invalidDark: '#94a3b8',
    borderDark: '#3d4f66',
    accentForegroundDark: '#0f172a',
  },
});

// ---------------------------------------------------------------------------
// Themes: map theme keys to tokens (what you use in UI: $background, $color, etc.)
// ---------------------------------------------------------------------------

const themes = {
  light: {
    background: tokens.color.backgroundLight,
    color: tokens.color.textLight,
    primary: tokens.color.primaryLight,
    secondary: tokens.color.secondaryLight,
    accent: tokens.color.accentLight,
    ui: tokens.color.uiLight,
    invalid: tokens.color.invalidLight,
    borderColor: tokens.color.borderLight,
    colorMuted: tokens.color.invalidLight,
    accentBackground: tokens.color.primaryLight,
    accentColor: tokens.color.uiLight,
  },
  dark: {
    background: tokens.color.backgroundDark,
    color: tokens.color.textDark,
    primary: tokens.color.primaryDark,
    secondary: tokens.color.secondaryDark,
    accent: tokens.color.accentDark,
    ui: tokens.color.uiDark,
    invalid: tokens.color.invalidDark,
    borderColor: tokens.color.borderDark,
    colorMuted: tokens.color.invalidDark,
    accentBackground: tokens.color.primaryDark,
    accentColor: tokens.color.accentForegroundDark,
  },
};

// ---------------------------------------------------------------------------
// Fonts: Inter + size scale
// ---------------------------------------------------------------------------

const fontFamily = 'Inter_400Regular';
const isWeb = typeof window !== 'undefined';
const face = isWeb
  ? undefined
  : {
      400: { normal: 'Inter_400Regular' },
      600: { normal: 'Inter_600SemiBold' },
      700: { normal: 'Inter_700Bold' },
      800: { normal: 'Inter_800ExtraBold' },
    };

const size = {
  1: 11, 2: 12, 3: 14, 4: 16, true: 16, 5: 18, 6: 20, 7: 24, 8: 28, 9: 34,
  10: 40, 11: 46, 12: 52, 13: 60, 14: 70, 15: 85, 16: 100,
};

const bodyLineHeight: Record<keyof typeof size, number> = {
  1: 16, 2: 18, 3: 20, 4: 22, true: 22, 5: 26, 6: 28, 7: 32, 8: 36, 9: 42,
  10: 48, 11: 56, 12: 64, 13: 72, 14: 84, 15: 102, 16: 120,
};

const headingLineHeight: Record<keyof typeof size, number> = {
  1: 14, 2: 16, 3: 18, 4: 20, true: 20, 5: 22, 6: 26, 7: 30, 8: 34, 9: 42,
  10: 48, 11: 56, 12: 64, 13: 72, 14: 84, 15: 102, 16: 120,
};

const body = createFont({
  family: fontFamily,
  size,
  lineHeight: bodyLineHeight,
  weight: { 1: '400', 4: '400', 6: '600', 9: '700' },
  letterSpacing: { 4: 0 },
  ...(face && { face }),
});

const heading = createFont({
  family: fontFamily,
  size,
  lineHeight: headingLineHeight,
  weight: { 1: '600', 4: '600', 6: '700', 9: '800' },
  letterSpacing: { 4: 0 },
  ...(face && { face }),
});

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  defaultFont: 'body',
  tokens,
  themes,
  fonts: {
    body,
    heading,
  },
});

export default tamaguiConfig;
export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
