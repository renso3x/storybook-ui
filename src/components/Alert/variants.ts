import { Alert, styled, SxProps, Theme } from "@mui/material";
import { PropsWithChildren, ComponentProps } from "react";

export type AlertProps = PropsWithChildren<ComponentProps<typeof Alert>> & {
  sx?: SxProps<Theme>;
};

export const StyledAlert = styled(Alert)(({ theme }) => ({
  "& .MuiAlert-icon": {
    color: theme.palette.primary.main,
  },
  "& .MuiAlert-message": {
    fontWeight: 500,
  },
  "&.MuiAlert-filledError": {
    backgroundColor: theme.palette.red[50],
    color: theme.palette.red[700],
  },
  "&.MuiAlert-filledSuccess": {
    backgroundColor: theme.palette.green[50],
    color: theme.palette.green[500],
  },
  "&.MuiAlert-filledWarning": {
    backgroundColor: theme.palette.yellow[50],
    color: theme.palette.yellow[300],
  },
  "&.MuiAlert-filledInfo": {
    backgroundColor: theme.palette.midTeal[50],
    color: theme.palette.midTeal[400],
  },

  "&.MuiAlert-outlined": {
    border: "none",
  },
  "&.MuiAlert-outlinedError": {
    color: theme.palette.red[700],
  },
  "&.MuiAlert-outlinedSuccess": {
    color: theme.palette.green[500],
  },
  "&.MuiAlert-outlinedWarning": {
    color: theme.palette.yellow[300],
  },
  "&.MuiAlert-outlinedInfo": {
    color: theme.palette.midTeal[400],
  },
}));
