import { styled } from "@mui/material/styles";
import { Link, Button as MuiButton } from "@mui/material";

export interface ButtonVariantProps {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "variant",
})<ButtonVariantProps>(({ theme, variant, size }) => ({
  borderRadius: 6,
  fontFamily: theme.typography.fontFamily,
  "--primary": theme.palette.primary.main,
  "--hover-color": theme.palette.midTeal[800],

  ...(size === "large" && {
    padding: "16px 24px",
    minWidth: 244,
  }),

  ...(size === "medium" && {
    padding: "8px 24px",
  }),

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

export const StyledLink = styled(Link)(({ theme }) => ({
  "--primary": theme.palette.midTeal[700],
  color: "var(--primary)",
  fontWeight: "bold",
  textTransform: "none",
  textDecoration: "underline",
}));
