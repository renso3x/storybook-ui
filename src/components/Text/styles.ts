import { styled } from "@mui/material/styles";
import { Typography as MuiTypography } from "@mui/material";

export interface TextVariantProps {
  type: "heading" | "body" | "label";
}

export const StyledText = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== "type",
})<TextVariantProps>(({ type }) => ({
  ...(type === "heading" && {
    fontSize: "30px",
    fontWeight: "bold",
  }),

  ...(type === "body" && {
    fontSize: "16px",
  }),

  ...(type === "label" && {
    fontSize: "16px",
  }),
}));
