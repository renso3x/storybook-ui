import FormControl from "@mui/material/FormControl";
import { FormFieldProps, FormLabel, FormLabelError } from "./variants";

const FormField = ({
  formControlProps,
  children,
  formLabel,
  formLabelsx,
  error,
  errorMessage,
}: FormFieldProps) => {
  return (
    <FormControl variant="standard" {...formControlProps} error={error}>
      <FormLabel shrink sx={formLabelsx}>
        {formLabel}
      </FormLabel>
      {children}
      {errorMessage && (
        <FormLabelError variant="subtitle2">{errorMessage}</FormLabelError>
      )}
    </FormControl>
  );
};
export default FormField;
