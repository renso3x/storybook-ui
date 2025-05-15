import {
  PickersTextField,
  PickersTextFieldProps,
} from "@mui/x-date-pickers/PickersTextField";
import * as React from "react";

const TextFieldPicker = React.forwardRef(
  (
    { sx: styles, ...props }: PickersTextFieldProps,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <PickersTextField
      {...props}
      ref={ref}
      size="small"
      sx={{
        ...styles,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#ccc",
          },
          "&:hover fieldset": {
            borderColor: "#999",
          },
          "&.Mui-focused fieldset": {
            borderColor: "darkgreen",
          },
        },
        "& .MuiInputAdornment-root": {
          borderLeft: "1px solid #ccc",
          marginLeft: "4px",
          padding: "20px 6px",
        },
      }}
    />
  )
);

export default TextFieldPicker;
