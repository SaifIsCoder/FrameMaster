import { TextInput } from "react-native-paper";

interface PKRInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function PKRInput({
  label,
  value,
  onChangeText,
}: PKRInputProps) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      keyboardType="numeric"
      onChangeText={onChangeText}
      left={<TextInput.Affix text="PKR" />}
      style={{
        backgroundColor: "white",
      }}
    />
  );
}