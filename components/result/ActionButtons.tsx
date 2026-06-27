import { View } from "react-native";
import { Button } from "react-native-paper";

interface ActionButtonsProps {
  loading?: boolean;
  onSave: () => void;
  onGeneratePdf: () => void;
  onBack: () => void;
}

export default function ActionButtons({
  loading = false,
  onSave,
  onGeneratePdf,
  onBack,
}: ActionButtonsProps) {
  return (
    <View className="mb-8">

      <Button
        mode="contained"
        icon="content-save"
        loading={loading}
        disabled={loading}
        buttonColor="#4682B4"
        contentStyle={{
          height: 56,
        }}
        labelStyle={{
          fontSize: 17,
          fontWeight: "700",
        }}
        style={{
          borderRadius: 14,
          marginBottom: 14,
        }}
        onPress={onSave}
      >
        Save Quotation
      </Button>

      <Button
        mode="outlined"
        icon="file-pdf-box"
        textColor="#4682B4"
        contentStyle={{
          height: 56,
        }}
        style={{
          borderRadius: 14,
          marginBottom: 14,
          borderColor: "#4682B4",
          borderWidth: 2,
        }}
        onPress={onGeneratePdf}
      >
        Generate PDF
      </Button>

      <Button
        mode="text"
        icon="arrow-left"
        textColor="#666"
        contentStyle={{
          height: 52,
        }}
        onPress={onBack}
      >
        Back
      </Button>

    </View>
  );
}