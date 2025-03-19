import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";

export interface ButtonVariantProps {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "variant",
})<ButtonVariantProps>(({ theme, variant, size }) => ({
  borderRadius: 12,
  "--primary": theme.palette.primary.main,
  "--hover-color": theme.palette.primary.main,

  ...(size === "large" && {
    padding: "16px 24px",
    minWidth: 244,
  }),

  ...(size === "medium" && {
    padding: "8px 24px",
  }),

  // ...(variant === "outline-white" && {
  //   backgroundColor: theme.palette.common.white,
  //   border: `1px solid var(--primary)`,
  //   color: theme.palette.text.primary,
  // }),

  ...(variant === "contained" && {
    backgroundColor: "var(--primary)",
    color: "#fff",
    "&.Mui-disabled": {
      backgroundColor: theme.palette.disabled,
      color: theme.palette.disabled,
      cursor: "not-allowed",
    },
  }),
  ...(variant === "outlined" && {
    border: `1px solid var(--primary)`,
    backgroundColor: "transparent",
    color: "var(--primary)",
    "&.Mui-disabled": {
      color: theme.palette.disabled,
      cursor: "not-allowed",
    },
  }),
  ...(variant === "text" && {
    color: "var(--primary)",
    "&.Mui-disabled": {
      color: theme.palette.disabled,
      cursor: "not-allowed",
    },
  }),
}));
