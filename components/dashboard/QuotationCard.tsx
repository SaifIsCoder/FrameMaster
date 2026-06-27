import { Pressable, Text, View } from "react-native";

interface Props {
  customer: string;
  size: string;
  quantity: number;
  total: number;
  date: string;
  onPress: () => void;
}

export default function QuotationCard({
  customer,
  size,
  quantity,
  total,
  date,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-white rounded-2xl p-5 mb-4 border border-gray-100 shadow-sm"
    >
      <View className="flex-row justify-between">
        <Text className="text-lg font-bold">
          {customer}
        </Text>

        <Text className="text-gray-500">
          {date}
        </Text>
      </View>

      <Text className="text-gray-600 mt-2">
        Sliding Window • {size}
      </Text>

      <Text className="text-gray-600">
        Quantity : {quantity}
      </Text>

      <Text className="text-[#4682B4] text-xl font-bold mt-3">
        PKR {total.toLocaleString()}
      </Text>
    </Pressable>
  );
}