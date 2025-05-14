import { Dayjs } from "dayjs";

export type DatePickerFieldProps = {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
  label?: string;
};
