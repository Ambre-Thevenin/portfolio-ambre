import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    colors: {
      headerBackgroundColor: string;
      lightText: string;
      mainBackgroundColor: string;
      textPrimaryColor: string;
      textSecondaryColor: string;
      hashtagBackgroundColor: string;
      hashtagBackgroundColor2: string;
      experienceColor: string;
      memojiBackground: string;
    };
    spacings: {
      xxs: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
  }
}
