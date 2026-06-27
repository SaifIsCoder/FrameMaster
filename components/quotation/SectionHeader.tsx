import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface SectionHeaderProps {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

export default function SectionHeader({
  title,
  icon,
}: SectionHeaderProps) {
  return (
    <View className="flex-row items-center border-b border-gray-200 pb-3 mb-4">
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color="#4682B4"
      />

      <Text className="text-xl font-bold text-gray-800 ml-3">
        {title}
      </Text>
    </View>
  );
}