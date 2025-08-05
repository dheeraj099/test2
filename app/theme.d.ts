// theme.d.ts or app/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    blues: {
      50: string;
      100: string;
      200: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    greens: {
      50: string;
      100: string;
      200: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  }

  interface PaletteOptions {
    blues?: {
      50?: string;
      100?: string;
      200?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
    greens?: {
      50?: string;
      100?: string;
      200?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
  }
}
