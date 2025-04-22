import { InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ComponentProps, PropsWithChildren } from "react";
import Text from "../Text/Text";

export type FormFieldProps = PropsWithChildren & {
  inputLabel: ComponentProps<typeof InputLabel>;
  formLabel?: string;
  error?: Error;
  disabled?: boolean;
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
