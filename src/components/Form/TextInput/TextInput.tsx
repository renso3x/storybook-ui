import FormField from "../FormField";
import { InputField, TextInputProps } from "./variants";

const TextInput = ({
  inputBase,
  disabled,
  error,
  ...formField
}: TextInputProps) => {
  return (
    <FormField {...formField} error={error}>
      <InputField {...inputBase} disabled={disabled} error={!!error} />
    </FormField>
  );
};
export default TextInput;
