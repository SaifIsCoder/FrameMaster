import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface MaterialItem {
  profile: string;
  length: number;
  price?: number;
  amount?: number;
}

interface Props {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  items: MaterialItem[];
}

export default function MaterialCard({
  title,
  icon,
  items,
}: Props) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <View className="flex-row items-center mb-4">

        <MaterialCommunityIcons
          name={icon}
          size={24}
          color="#4682B4"
        />

        <Text className="text-xl font-bold ml-3">
          {title}
        </Text>

      </View>

      {items.map((item, index) => (

        <View
          key={index}
          className="flex-row justify-between py-3 border-b border-gray-100"
        >

          <View>

            <Text className="font-semibold">
              {item.profile}
            </Text>

            <Text className="text-gray-500">
              {item.length.toFixed(2)} ft
            </Text>

          </View>

          {item.amount !== undefined && (

            <Text className="font-bold text-[#4682B4]">
              Rs {item.amount.toLocaleString()}
            </Text>

          )}

        </View>

      ))}

    </View>
  );
}