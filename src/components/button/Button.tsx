import { ComponentProps, PropsWithChildren } from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonVariantProps, StyledButton } from "./button-variants";
import { ThemeWrapper } from "../../themes";

type IButtonProps = PropsWithChildren<
  ComponentProps<typeof MuiButton> & ButtonVariantProps
>;

const Button = ({
  variant = "contained",
  size = "large",
  children,
  ...props
}: IButtonProps) => {
  return (
    <ThemeWrapper>
      <StyledButton variant={variant} size={size} href={props.href} {...props}>
        {children}
      </StyledButton>
    </ThemeWrapper>
  );
};

export default Button;
