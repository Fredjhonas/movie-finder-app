import { extendTheme } from 'native-base';

const newColorTheme = {
  brand: {
    900: '#3E1424',
    800: '#5A1E38',
    700: '#7C2A4B',
    600: '#9C375D',
    500: '#BB466F',
    400: '#D55682',
    300: '#E96E9A',
    200: '#F5A3C2',
    100: '#FCD4E5',
    50: '#FDECF0',
  },
};

const theme = extendTheme({
  colors: newColorTheme,
});

export default theme;
