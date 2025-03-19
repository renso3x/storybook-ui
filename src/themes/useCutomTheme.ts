import { createTheme } from "@mui/material";
import { useMemo } from "react";
import { sharedTheme } from "./theme";

export const useCustomTheme = () => {
  const theme = useMemo(() => {
    return {
      muiTheme: createTheme({ ...sharedTheme }),
      styledTheme: sharedTheme,
    };
  }, []);

  return theme;
};
