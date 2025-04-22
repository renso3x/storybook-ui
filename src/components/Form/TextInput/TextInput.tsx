import FormField from "../FormField";
import { InputField, TextInputProps } from "./variants";

const TextInput = ({
  disabled,
  error,
  control,
  ...formField
}: TextInputProps) => {
  return (
    <FormField {...formField} error={error}>
      <InputField {...control} disabled={disabled} error={!!error} />
    </FormField>
  );
};
export default TextInput;
