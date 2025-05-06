import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Select, SelectChangeEvent } from "@mui/material";
import FormField from "../FormField/FormField";
import { StyledSelectInput, SelectInputProps } from "./variants";

function Dropdown<T extends string | number>({
  items,
  value,
  onChange,
  label,
  placeholder = "Select an option",
  error,
  selectInputSx,
  ...formField
}: SelectInputProps<T>) {
  return (
    <FormField {...formField} error={error}>
      {label && <InputLabel id="select-label">{label}</InputLabel>}
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={label}
        sx={selectInputSx}
        onChange={(event: SelectChangeEvent<unknown>) => {
          onChange(event.target.value as T);
        }}
        input={<StyledSelectInput error={error} />}
      >
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      {formField.formControlProps?.required && (
        <FormHelperText>Required</FormHelperText>
      )}
    </FormField>
  );
}

export default Dropdown;
