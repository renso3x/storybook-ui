import { ComponentProps, PropsWithChildren } from "react";
import { Button as MuiButton } from "@mui/material";

type ButtonProps = PropsWithChildren<
  ComponentProps<typeof MuiButton> & {
    variant?: "contained" | "outlined" | "text" | "lined";
    size: "small" | "medium" | "large";
  }
>;

const Button = ({
  variant = "contained",
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton variant={variant} size={size} {...props}>
      {children}
    </MuiButton>
  );
};

export { Button };
