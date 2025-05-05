import FormField from "../FormField/FormField";
import { InputField, TextInputProps } from "./variants";

const TextInput = ({
  disabled,
  error,
  control,
  startAdornment,
  endAdornment,
  ...formField
}: TextInputProps) => {
  return (
    <FormField {...formField} error={error}>
      <InputField
        {...control}
        disabled={disabled}
        error={!!error}
        slotProps={{
          input: {
            startAdornment,
            endAdornment,
          },
        }}
      />
    </FormField>
  );
};
export default TextInput;
