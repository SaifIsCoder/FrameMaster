import { View } from "react-native";

import Dropdown, { DropdownOption } from "./Dropdown";
import SectionHeader from "./SectionHeader";

interface MainFrameCardProps {
  mainProfile: string;
  bottomProfile: string;

  profiles: DropdownOption[];

  onMainProfileChange: (value: string) => void;
  onBottomProfileChange: (value: string) => void;
}

export default function MainFrameCard({
  mainProfile,
  bottomProfile,
  profiles,
  onMainProfileChange,
  onBottomProfileChange,
}: MainFrameCardProps) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <SectionHeader
        title="Main Frame Profiles"
        icon="crop-square"
      />

      <View className="gap-4">

        <Dropdown
          label="Top / Left / Right Profile"
          value={mainProfile}
          options={profiles}
          onSelect={onMainProfileChange}
        />

        <Dropdown
          label="Bottom Profile"
          value={bottomProfile}
          options={profiles}
          onSelect={onBottomProfileChange}
        />

      </View>

    </View>
  );
}