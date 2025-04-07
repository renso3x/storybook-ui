import MuiCheckbox from "@mui/material/Checkbox";
import { CheckboxProps, CustomTooltip } from "./variants";
import { FormControlLabel } from "@mui/material";

const Checkbox = ({
  label,
  title,
  tooltip = true,
  tooltipPlacement = "top-start",
  onChange,
  ...checkboxProps
}: CheckboxProps) => {
  const checkboxElement = (
    <MuiCheckbox onChange={onChange} {...checkboxProps} />
  );

  return tooltip ? (
    <CustomTooltip title={title || ""} placement={tooltipPlacement} arrow>
      <FormControlLabel control={checkboxElement} label={label} />
    </CustomTooltip>
  ) : (
    <FormControlLabel control={checkboxElement} label={label} />
  );
};

export default Checkbox;
