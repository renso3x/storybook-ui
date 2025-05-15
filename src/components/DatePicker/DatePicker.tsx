import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DateIcon from "./date-icon.svg";
import TextFieldPicker from "./TextFieldPicker";
import { DatePickerFieldProps } from "./types";

const CustomDateIcon = () => (
  <img src={DateIcon} alt="calendar" style={{ width: 20, height: 20 }} />
);

export default function DatePickerField({
  value,
  onChange,
  styles,
}: DatePickerFieldProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            sx: styles,
          },
        }}
        slots={{
          textField: TextFieldPicker,
          openPickerIcon: CustomDateIcon,
        }}
      />
    </LocalizationProvider>
  );
}
