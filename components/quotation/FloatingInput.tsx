import { TextInput } from "react-native-paper";

interface FloatingInputProps {
  label: string;
  value: string;
  keyboardType?:
    | "default"
    | "numeric"
    | "phone-pad";

  onChangeText: (text: string) => void;
}

export default function FloatingInput({
  label,
  value,
  keyboardType = "default",
  onChangeText,
}: FloatingInputProps) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      style={{
        backgroundColor: "white",
      }}
    />
  );
}