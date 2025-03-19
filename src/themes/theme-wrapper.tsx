import React, { PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useCustomTheme } from "./useCutomTheme";

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  const { muiTheme, styledTheme } = useCustomTheme();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <StyledThemeProvider theme={styledTheme}>{children}</StyledThemeProvider>
    </ThemeProvider>
  );
};
