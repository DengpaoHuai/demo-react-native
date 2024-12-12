import { Control, Controller, FieldValues } from "react-hook-form";
import { TextInput } from "react-native";

type CustomTextInputProps = {
  control: Control<any>;
  placeholder: string;
  name: string;
};

const CustomTextInput = ({
  control,
  placeholder,
  name,
}: CustomTextInputProps) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      name={name}
    />
  );
};

export default CustomTextInput;
