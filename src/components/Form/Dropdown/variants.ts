import { InputBase } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";
import { FormFieldProps } from "../FormField/variants";

export type SelectInputProps<T extends string | number> = FormFieldProps & {
  items: T[];
  value: T;
  onChange: (event: T) => void;
  label?: string;
  placeholder?: string;
  error?: boolean;
  selectInputSx?: SxProps<Theme>;
};

type StyledProps = {
  error?: boolean;
};

export const StyledSelectInput = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "error",
})<StyledProps>(({ theme, error }) => {
  return {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      border: `1px solid ${
        error ? theme.palette.red[400] : theme.palette.monochrome[600]
      }`,
      width: "365px",
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),

      "&:focus": {
        borderRadius: 4,
        borderColor: error
          ? theme.palette.red[400]
          : theme.palette.monochrome[600],
      },
    },
  };
});
