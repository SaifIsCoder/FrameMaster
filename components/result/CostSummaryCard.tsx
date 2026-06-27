import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  aluminiumCost: number;
  glassCost: number;
  hardwareCost: number;
  labourCost: number;
}

export default function CostSummaryCard({
  aluminiumCost,
  glassCost,
  hardwareCost,
  labourCost,
}: Props) {
  const subtotal =
    aluminiumCost +
    glassCost +
    hardwareCost +
    labourCost;

  const formatCurrency = (value: number) =>
    `Rs ${value.toLocaleString()}`;

  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <View className="flex-row items-center mb-5">

        <MaterialCommunityIcons
          name="cash-multiple"
          size={24}
          color="#4682B4"
        />

        <Text className="text-xl font-bold ml-3">
          Cost Summary
        </Text>

      </View>

      <View className="space-y-4">

        <View className="flex-row justify-between">

          <Text className="text-gray-600">
            Aluminium Cost
          </Text>

          <Text className="font-semibold">
            {formatCurrency(aluminiumCost)}
          </Text>

        </View>

        <View className="flex-row justify-between">

          <Text className="text-gray-600">
            Glass Cost
          </Text>

          <Text className="font-semibold">
            {formatCurrency(glassCost)}
          </Text>

        </View>

        <View className="flex-row justify-between">

          <Text className="text-gray-600">
            Hardware Cost
          </Text>

          <Text className="font-semibold">
            {formatCurrency(hardwareCost)}
          </Text>

        </View>

        <View className="flex-row justify-between">

          <Text className="text-gray-600">
            Labour Cost
          </Text>

          <Text className="font-semibold">
            {formatCurrency(labourCost)}
          </Text>

        </View>

        <View className="border-t border-gray-300 pt-4 mt-3">

          <View className="flex-row justify-between">

            <Text className="text-lg font-bold">
              Subtotal
            </Text>

            <Text className="text-lg font-bold text-[#4682B4]">
              {formatCurrency(subtotal)}
            </Text>

          </View>

        </View>

      </View>

    </View>
  );
}