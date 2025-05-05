import { InputLabel } from "@mui/material";
import { styled, SxProps } from "@mui/material/styles";
import { PropsWithChildren } from "react";
import Text from "../../Text/Text";
import { Theme } from "@emotion/react";

export type FormFieldProps = PropsWithChildren & {
  formLabel?: string;
  formLabelsx?: SxProps<Theme>;
  error?: Error;
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
