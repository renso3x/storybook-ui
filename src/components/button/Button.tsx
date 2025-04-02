import { ComponentProps, PropsWithChildren } from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonVariantProps, StyledButton } from "./variants";

type ButtonProps = PropsWithChildren<
  ComponentProps<typeof MuiButton> & ButtonVariantProps
>;

const Button = ({
  variant = "contained",
  size = "large",
  children,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} href={props.href} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
