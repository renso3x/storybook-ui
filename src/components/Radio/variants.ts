import { Radio, styled, SxProps, Theme } from "@mui/material";
import { ComponentProps } from "react";

export type RadioProps = ComponentProps<typeof Radio> & {
  label?: string;
  formLabelSx: SxProps<Theme>;
  radioSx?: SxProps<Theme>;
};

export const StyledRadio = styled(Radio)(({ theme }) => ({
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
}));
