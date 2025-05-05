import { styled } from "@mui/material/styles";
import { ComponentProps, ReactNode } from "react";
import { FormFieldProps } from "../FormField/variants";
import { TextField } from "@mui/material";

export type TextInputProps = FormFieldProps & {
  control?: ComponentProps<typeof TextField>;
  disabled?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
};

type StyledInputProps = {
  error?: boolean;
};
export const InputField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "error",
})<StyledInputProps>(({ theme, error }) => ({
  "label + &": {
    color: theme.palette.monochrome[200],
    marginTop: theme.spacing(3),
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,

    "& fieldset": {
      borderWidth: 1,
      borderColor: error
        ? theme.palette.errorRed[600]
        : theme.palette.monochrome[200],
    },
    "&:hover fieldset": {
      borderWidth: 1,
      borderColor: error
        ? theme.palette.errorRed[600]
        : theme.palette.monochrome[200],
    },
    "&.Mui-focused fieldset": {
      borderWidth: 1,
      borderColor: error
        ? theme.palette.errorRed[600]
        : theme.palette.monochrome[200],
    },
  },

  "& .MuiInputBase-input": {
    fontSize: 14,
    padding: "8px 14px",
    border: "none",
    outline: "none",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },

  "& .MuiInputBase-adornedStart .MuiInputBase-input": {
    paddingLeft: theme.spacing(1),
  },
  "& .MuiInputBase-adornedEnd .MuiInputBase-input": {
    paddingRight: theme.spacing(1),
  },

  "& .Mui-disabled": {
    backgroundColor: theme.palette.monochrome[50],
  },
}));
