import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePickerFieldProps } from "./types";
import Icon from "../Icon/Icon";
import TextFieldPicker from "./TextFieldPicker";

const CustomDateIcon = () => <Icon name="Datepicker" width={20} height={20} />;

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
