// components/dashboard/DashboardHeader.tsx

import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DashboardHeader() {
  return (
    <View className="bg-[#4682B4] px-6 pt-14 pb-8 rounded-b-3xl">
      <View className="flex-row items-center">
        <View className="w-14 h-14 rounded-2xl bg-white items-center justify-center">
          <MaterialCommunityIcons
            name="window-open-variant"
            size={30}
            color="#4682B4"
          />
        </View>

        <View className="ml-4">
          <Text className="text-white text-3xl font-bold">
            FrameMaster
          </Text>

          <Text className="text-blue-100 text-base mt-1">
            Professional Aluminium Fabrication
          </Text>
        </View>
      </View>
    </View>
  );
}