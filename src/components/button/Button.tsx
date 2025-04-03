import { ComponentProps, PropsWithChildren } from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonVariantProps, StyledButton, StyledLink } from "./variants";

type ButtonProps = PropsWithChildren<
  ComponentProps<typeof MuiButton> & ComponentProps<"a"> & ButtonVariantProps
>;

const Button = ({
  variant = "contained",
  size = "large",
  children,
  href,
  target = "_blank",
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <StyledLink href={href} variant="button" target={target}>
        Button
      </StyledLink>
    );
  }
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
