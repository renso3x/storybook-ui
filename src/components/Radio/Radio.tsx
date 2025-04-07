import { FormControlLabel } from "@mui/material";
import { RadioProps, StyledRadio } from "./variants";

const Radio = ({
  onChange,
  value,
  label,
  checked,
  formLabelSx,
  radioSx,
}: RadioProps) => {
  return (
    <FormControlLabel
      value={value}
      sx={formLabelSx}
      control={
        <StyledRadio onChange={onChange} checked={checked} sx={radioSx} />
      }
      label={label}
    />
  );
};

export default Radio;
