import { Typography } from "@mui/material";
import { ComponentProps, PropsWithChildren } from "react";
import { StyledText } from "./variants";

type TextProps = PropsWithChildren<ComponentProps<typeof Typography>>;

const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
