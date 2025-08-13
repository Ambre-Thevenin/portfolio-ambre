import { type DefaultTheme } from 'styled-components';

const colors = {
  lightPink: '#FFF2E3',
  darkPink: '#F9A685',
  lightOrange: '#FFBE45',
  darkOrange: '#F47E2F',
  lightBlue: '#7DC5C5',
  darkBlue: '#006477',
  black: '#000000',
  white: '#FFFFFF',
  cappucino: '#B2917E',
  latte: '#FFEEE4',
  moka: '#4A3B33'
};

const theme: DefaultTheme = {
  breakpoints: {
    xs: 320, // smallest smartphone
    sm: 640, // medium smartphone
    md: 768, // tablet
    lg: 1024, // desktop
    xl: 1280,
    xxl: 1536,
  },
  colors: {
    headerBackgroundColor: colors.cappucino,
    mainBackgroundColor: colors.latte,
    lightText: colors.white,
    textPrimaryColor: colors.cappucino,
    textSecondaryColor: colors.moka,
    hashtagBackgroundColor: colors.darkPink,
    hashtagBackgroundColor2: colors.darkBlue,
    experienceColor: colors.lightOrange,
    memojiBackground: colors.cappucino,
  },
  spacings: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
  },
};

export { theme };
