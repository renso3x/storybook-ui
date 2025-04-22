import { Fragment } from "react";
import FormControl from "@mui/material/FormControl";
import { FormFieldProps, FormLabel, FormLabelError } from "./variants";

const FormField = ({
  children,
  inputLabel,
  formLabel,
  error,
}: FormFieldProps) => {
  return (
    <Fragment>
      <FormControl variant="standard">
        <FormLabel shrink {...inputLabel}>
          {formLabel}
        </FormLabel>
        {children}
        {error && (
          <FormLabelError variant="subtitle2">{error.message}</FormLabelError>
        )}
      </FormControl>
    </Fragment>
  );
};
export default FormField;
