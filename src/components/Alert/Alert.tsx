import { AlertProps, StyledAlert } from "./variants";

const Alert = ({ children, ...props }: AlertProps) => {
  return <StyledAlert {...props}>{children}</StyledAlert>;
};

export default Alert;
