import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { ComponentProps } from "react";
import { FormFieldProps } from "../variants";

export type TextInputProps = FormFieldProps & {
  control: ComponentProps<typeof InputBase>;
  disabled?: boolean;
};

type StyledInputProps = {
  error?: boolean;
};
export const InputField = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "error",
})<StyledInputProps>(({ theme, error }) => ({
  "label + &": {
    color: theme.palette.midTeal[900],
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    width: "100%",
    position: "relative",
    border: "1px solid",
    borderColor: error
      ? theme.palette.errorRed[600]
      : theme.palette.monochrome[200],
    fontSize: 14,
    padding: "8px 14px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      borderColor: error
        ? theme.palette.errorRed[600]
        : theme.palette.monochrome[200],
    },
  },
  "& .Mui-disabled": {
    background: theme.palette.monochrome[50],
    border: `1px solid ${theme.palette.monochrome[200]}`,
  },
}));
