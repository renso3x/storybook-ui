import { ComponentProps, PropsWithChildren } from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonVariantProps, StyledButton } from "./button-variants";

type IButtonProps = PropsWithChildren<
  ComponentProps<typeof MuiButton> & ButtonVariantProps
>;

const Button = ({
  variant = "contained",
  size = "medium",
  children,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton variant={variant} size={size} href={props.href} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
