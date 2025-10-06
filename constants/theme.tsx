import { MD3DarkTheme as DefaultTheme } from 'react-native-paper';

const accentFrom = "#6059FE";
const accentTo = "#393598";
const dark0 = "#17171C";
const dark1 = "#26272F";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    accentFrom: accentFrom,
    accentTo: accentTo,
    text: "white",
    background0: dark0,
    background1: dark1,
  },
};
