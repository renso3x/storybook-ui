import { styled } from "@mui/material/styles";
import { Typography as MuiTypography } from "@mui/material";

export const StyledText = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== "type",
})(() => ({}));
