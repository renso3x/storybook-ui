import { StyledText, TextProps } from "./variants";

const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
