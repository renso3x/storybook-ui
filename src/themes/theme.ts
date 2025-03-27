import { PaletteColor, Theme } from "@mui/material";
import { colors } from "./colors";

declare module "@mui/material/styles" {
  interface Palette {
    common: {
      black: string;
      white: string;
    };
    teal: Record<number, string>;
    midTeal: Record<number, string>;
    monochrome: Record<number, string>;
    primary: PaletteColor;
    disabled: PaletteColor;
  }

  interface Theme {
    palette: Palette;
  }
}

export const sharedTheme = {
  palette: {
    common: {
      black: colors.black,
      white: colors.white,
    },
    grey: colors.monochrome,
    teal: colors.teal,
    midTeal: colors.midTeal,
    monochrome: colors.monochrome,
    primary: {
      main: colors.teal.main,
      contrastText: colors.white,
    },
    disabled: {
      main: colors.monochrome[500],
    },
  },
  typography: {
    fontFamily: [`"Open Sans", sans-serif`].join(","),
  },
} as unknown as Theme;
