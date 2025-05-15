import { SxProps, Theme } from "@mui/material";
import { PickerValue } from "@mui/x-date-pickers/internals";
import { Dayjs } from "dayjs";

export type DatePickerFieldProps = {
  value: Dayjs | null;
  onChange: (value: PickerValue) => void;
  label?: string;
  styles?: SxProps<Theme>;
};
