// app/theme.ts
import { createTheme, PaletteMode, ThemeOptions } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const getTheme = (mode: PaletteMode = 'light') => {
  const themeOptions: ThemeOptions = {
    palette: {
      mode: mode ?? 'light',
      common: {
        black: '#000000',
        white: '#ffffff',
      },
      blues: {
        50: '#EEF2FF',
        100: '#DFE6FF',
        200: '#C6D0FF',
        400: '#7E87FB',
        500: '#5757F4',
        600: '#4F42E9',
        700: '#4334CE',
        800: '#372DA6',
        900: '#312C83',
      },
      grey: {
        50: '#F6F6F6',
        100: '#E7E7E7',
        200: '#D1D1D1',
        300: '#B0B0B0',
        500: '#666666',
        600: '#5D5D5D',
        700: '#4F4F4F',
        800: '#454545',
        900: '#3D3D3D',
      },
      primary: {
        main: '#4F42E9',
        light: '#C6D0FF',
        dark: '#312C83',
        contrastText: '#F2F2F7',
      },
      background: {
        ...(mode === 'light'
          ? {
              default: '#FFFFFF',
              paper: '#F2F2F7',
            }
          : {
              default: '#16191F',
              paper: '#0D0E11',
            }),
      },
      text: {
        ...(mode === 'light'
          ? {
              primary: '#454545',
              disabled: '#3D3D3D',
            }
          : {
              primary: '#F6F6F6',
              disabled: '#3D3D3D',
            }),
      },
    },
    typography: {
      fontFamily: inter?.style?.fontFamily ?? '"Helvetica", "Arial", sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 481,
        mdTab: 769,
        md: 1025,
        lg: 1201,
        xl: 1601,
      },
    },
  };

  return createTheme(themeOptions);
};
