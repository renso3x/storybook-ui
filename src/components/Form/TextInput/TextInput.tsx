import { forwardRef } from "react";
import FormField from "../FormField/FormField";
import { InputField, TextInputProps } from "./variants";

const TextInput = forwardRef<HTMLDivElement, TextInputProps>(
  (
    {
      disabled,
      error,
      control,
      startAdornment,
      endAdornment,
      textInputSx,
      ...formField
    },
    ref
  ) => {
    return (
      <FormField {...formField} error={error}>
        <InputField
          {...control}
          sx={textInputSx}
          disabled={disabled}
          error={!!error}
          ref={ref}
          slotProps={{
            input: {
              startAdornment,
              endAdornment,
            },
          }}
        />
      </FormField>
    );
  }
);

export default TextInput;
