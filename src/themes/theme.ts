import { PaletteColor, Theme } from "@mui/material";
import { colors } from "./colors";

declare module "@mui/material/styles" {
  interface Palette {
    common: {
      black: string;
      white: string;
    };
    teal: Record<number, string>;
    darkTeal: Record<number, string>;
    midTeal: Record<number, string>;
    lightTeal: Record<number, string>;
    monochrome: Record<number, string>;
    yellow: Record<number, string>;
    red: Record<number, string>;
    errorRed: Record<number, string>;
    green: Record<number, string>;
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
      brand: colors.brand,
      black: colors.black,
      white: colors.white,
    },
    grey: colors.monochrome,
    midTeal: colors.midTeal,
    monochrome: colors.monochrome,
    lightTeal: colors.lightTeal,
    darkTeal: colors.darkTeal,
    green: colors.green,
    errorRed: colors.errorRed,
    red: colors.xRed,
    xOrange: colors.xOrange,
    yellow: colors.xYellow,
    xTangerine: colors.xTangerine,
    primary: {
      main: colors.midTeal[700],
    },
    disabled: {
      main: colors.monochrome[500],
    },
  },
  typography: {
    fontFamily: [`"Open Sans", sans-serif`].join(","),
    h1: {
      fontSize: "24px",
    },
    h2: {
      fontSize: "20px",
    },
    h3: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "16px",
    },
    subtitle1: {
      fontSize: "14px",
      textTransform: "uppercase",
    },
    subtitle2: {
      fontSize: "14px",
      textTransform: "capitalize",
    },
  },
} as unknown as Theme;
