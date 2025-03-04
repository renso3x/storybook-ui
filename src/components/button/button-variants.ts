import { styled } from "@mui/material/styles";
import { Button as MuiButton } from "@mui/material";
import { colors } from "../../tokens/colors";

export interface ButtonVariantProps {
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}

export const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "variant",
})<ButtonVariantProps>(({ variant }) => ({
  fontSize: 12,
  borderRadius: 4,
  padding: 10,
  "--primary": colors.midTeal[700],
  "--hover-color": colors.midTeal[800],
  ...(variant === "contained" && {
    backgroundColor: "var(--primary)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "var(--hover-color)",
    },
    "&.Mui-disabled": {
      backgroundColor: colors.monochrome[200],
      color: colors.monochrome[500],
      cursor: "not-allowed",
    },
  }),
  ...(variant === "outlined" && {
    border: `1px solid var(--primary)`,
    backgroundColor: "transparent",
    color: "var(--primary)",
    "&.Mui-disabled": {
      color: colors.monochrome[500],
      cursor: "not-allowed",
    },
  }),
  ...(variant === "text" && {
    color: "var(--primary)",
    "&.Mui-disabled": {
      color: colors.monochrome[500],
      cursor: "not-allowed",
    },
  }),
}));
