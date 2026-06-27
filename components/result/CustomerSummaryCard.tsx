import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  customerName: string;
  phone: string;
  windowType: string;
  width: number;
  height: number;
  quantity: number;
}

export default function CustomerSummaryCard({
  customerName,
  phone,
  windowType,
  width,
  height,
  quantity,
}: Props) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <View className="flex-row items-center mb-4">

        <MaterialCommunityIcons
          name="account-outline"
          size={24}
          color="#4682B4"
        />

        <Text className="text-xl font-bold ml-3">
          Customer Summary
        </Text>

      </View>

      <View className="space-y-2">

        <Text className="text-lg font-semibold">
          {customerName}
        </Text>

        <Text className="text-gray-600">
          {phone}
        </Text>

        <Text className="text-gray-600">
          {windowType}
        </Text>

        <Text className="text-gray-600">
          Size : {width}' × {height}'
        </Text>

        <Text className="text-gray-600">
          Quantity : {quantity}
        </Text>

      </View>

    </View>
  );
}