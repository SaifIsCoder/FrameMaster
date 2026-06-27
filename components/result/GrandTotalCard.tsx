import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  total: number;
}

export default function GrandTotalCard({
  total,
}: Props) {
  const formatCurrency = (value: number) =>
    `Rs ${value.toLocaleString()}`;

  return (
    <View className="bg-[#4682B4] rounded-2xl p-6 mb-6 shadow-lg">

      <View className="flex-row items-center justify-center">

        <MaterialCommunityIcons
          name="cash-check"
          size={28}
          color="white"
        />

        <Text className="text-white text-2xl font-bold ml-3">
          Grand Total
        </Text>

      </View>

      <View className="items-center mt-5">

        <Text className="text-blue-100 text-base">
          Final Quotation Amount
        </Text>

        <Text className="text-white text-4xl font-extrabold mt-2">
          {formatCurrency(total)}
        </Text>

      </View>

    </View>
  );
}