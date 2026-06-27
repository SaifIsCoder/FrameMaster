import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  glassType: string;
  glassColour: string;
  area: number;
  pricePerSqft: number;
  totalCost: number;
}

export default function GlassSummaryCard({
  glassType,
  glassColour,
  area,
  pricePerSqft,
  totalCost,
}: Props) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <View className="flex-row items-center mb-4">

        <MaterialCommunityIcons
          name="image-outline"
          size={24}
          color="#4682B4"
        />

        <Text className="text-xl font-bold ml-3">
          Glass Summary
        </Text>

      </View>

      <View className="space-y-3">

        <View className="flex-row justify-between">

          <Text className="text-gray-600">
            Glass Type
          </Text>

          <Text className="font-semibold">
            {glassType}
          </Text>

        </View>

        <View className="flex-row justify-between">

          <Text className="text-gray-600">
            Colour
          </Text>

          <Text className="font-semibold">
            {glassColour}
          </Text>

        </View>

        <View className="flex-row justify-between">

          <Text className="text-gray-600">
            Area
          </Text>

          <Text className="font-semibold">
            {area.toFixed(2)} sqft
          </Text>

        </View>

        <View className="flex-row justify-between">

          <Text className="text-gray-600">
            Rate
          </Text>

          <Text className="font-semibold">
            Rs {pricePerSqft.toLocaleString()}
          </Text>

        </View>

        <View className="border-t border-gray-200 pt-3 mt-2 flex-row justify-between">

          <Text className="text-lg font-bold">
            Total
          </Text>

          <Text className="text-lg font-bold text-[#4682B4]">
            Rs {totalCost.toLocaleString()}
          </Text>

        </View>

      </View>

    </View>
  );
}