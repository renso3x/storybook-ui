import { FormControlOwnProps, InputLabel } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import Text from "../../Text/Text";

export type FormFieldProps = PropsWithChildren & {
  formControlProps?: FormControlOwnProps;
  formLabel?: string;
  formLabelsx?: SxProps<Theme>;
  error?: boolean;
  errorMessage?: string;
};

export const FormLabelError = styled(Text)(({ theme }) => ({
  color: theme.palette.errorRed[600],
  fontStyle: "italic",
  textTransform: "none",
}));

export const FormLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.midTeal[900],
  fontSize: "18px",
  fontWeight: 600,
}));
