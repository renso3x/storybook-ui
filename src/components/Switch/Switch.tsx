import { FormControlLabel } from "@mui/material";
import { StyledSwitch, SwitchProps } from "./variants";

const Switch = ({ label, formLabelSx, switchSx, ...props }: SwitchProps) => {
  return (
    <FormControlLabel
      sx={formLabelSx}
      control={<StyledSwitch sx={switchSx} {...props} />}
      label={label}
    />
  );
};

export default Switch;
