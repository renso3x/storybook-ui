import { SxProps, Theme } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";

interface Props {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
  styles?: SxProps<Theme>;
}
export default function TimePicker({ value, onChange, styles }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiTimePicker
        value={value}
        onChange={onChange}
        ampm
        slotProps={{
          textField: {
            variant: "outlined",
            InputLabelProps: { shrink: false },
            label: "",
            InputProps: {
              sx: {
                ...styles,
                "& .MuiPickersSectionList-root": {
                  padding: 0,
                },
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
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
