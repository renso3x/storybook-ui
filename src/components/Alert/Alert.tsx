import MuiAlert from "@mui/material/Alert";
import { ComponentProps, PropsWithChildren } from "react";
import { StyledAlert } from "./variants";

type AlertProps = PropsWithChildren<ComponentProps<typeof MuiAlert>>;

const Alert = ({ children, ...props }: AlertProps) => {
  return <StyledAlert {...props}>{children}</StyledAlert>;
};

export default Alert;
