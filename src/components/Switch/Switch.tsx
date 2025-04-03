import { ComponentProps } from "react";
import { Switch as MuiSwitch } from "@mui/material";
import { StyledSwitch } from "./variants";

const Switch = (props: ComponentProps<typeof MuiSwitch>) => {
  return <StyledSwitch {...props} />;
};

export default Switch;
