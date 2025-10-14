import { MD3DarkTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Poppins_200ExtraLight',
      fontWeight: '200',
    },
    medium: {
      fontFamily: 'Poppins_200ExtraLight',
      fontWeight: '200',
    },
    light: {
      fontFamily: 'Poppins_200ExtraLight',
      fontWeight: '200',
    },
    thin: {
      fontFamily: 'Poppins_200ExtraLight',
      fontWeight: '200',
    },
  },
  elevation: {
      ...DefaultTheme.colors.elevation,
      level0: 'transparent',
      level1: 'rgba(0, 0, 0, 0.2)',
      level2: 'rgba(0, 0, 0, 0.4)',
      level3: 'rgba(0, 0, 0, 0.6)',
      level4: 'rgba(0, 0, 0, 0.8)',
      level5: 'rgba(0, 0, 0, 0.9)',
    },
};
