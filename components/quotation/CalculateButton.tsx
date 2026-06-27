import { Button } from "react-native-paper";

interface CalculateButtonProps {
  loading?: boolean;
  onPress: () => void;
}

export default function CalculateButton({
  loading = false,
  onPress,
}: CalculateButtonProps) {
  return (
    <Button
      mode="contained"
      loading={loading}
      disabled={loading}
      onPress={onPress}
      buttonColor="#4682B4"
      contentStyle={{
        height: 56,
      }}
      labelStyle={{
        fontSize: 18,
        fontWeight: "700",
      }}
      style={{
        borderRadius: 14,
        marginVertical: 20,
      }}
    >
        
      Calculate Quotation
    </Button>
  );
}