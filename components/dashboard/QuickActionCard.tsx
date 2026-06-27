import { Pressable, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  title: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  onPress: () => void;
}

export default function QuickActionCard({
  title,
  icon,
  color,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
    >
      <View
        className="w-14 h-14 rounded-2xl items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={28}
          color="white"
        />
      </View>

      <Text className="text-lg font-semibold mt-4">
        {title}
      </Text>
    </Pressable>
  );
}