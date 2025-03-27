import { Typography } from "@mui/material";
import { ComponentProps, PropsWithChildren } from "react";
import { StyledText, TextVariantProps } from "./styles";

type TextProps = PropsWithChildren<
  ComponentProps<typeof Typography> & TextVariantProps
>;

const Text = ({ type, children, ...props }: TextProps) => {
  return (
    <StyledText type={type} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
