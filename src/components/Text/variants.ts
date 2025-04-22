import { styled, SxProps, Theme } from "@mui/material/styles";
import { Typography as MuiTypography, Typography } from "@mui/material";
import { PropsWithChildren, ComponentProps } from "react";

export type TextProps = PropsWithChildren<ComponentProps<typeof Typography>> & {
  sx?: SxProps<Theme>;
};

export const StyledText = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== "type",
})(() => ({}));
