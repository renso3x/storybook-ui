import { PropsWithChildren } from "react";
import { useCustomTheme } from "./useCutomTheme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  const { muiTheme } = useCustomTheme();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
