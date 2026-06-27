import { View } from "react-native";

import Dropdown, { DropdownOption } from "./Dropdown";
import SectionHeader from "./SectionHeader";

interface GlassFrameCardProps {
  topBottomProfile: string;
  leftProfile: string;
  rightProfile: string;

  profiles: DropdownOption[];

  onTopBottomChange: (value: string) => void;
  onLeftChange: (value: string) => void;
  onRightChange: (value: string) => void;
}

export default function GlassFrameCard({
  topBottomProfile,
  leftProfile,
  rightProfile,
  profiles,
  onTopBottomChange,
  onLeftChange,
  onRightChange,
}: GlassFrameCardProps) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <SectionHeader
        title="Glass Frame Profiles"
        icon="view-grid-outline"
      />

      <View className="gap-4">

        <Dropdown
          label="Top / Bottom Profile"
          value={topBottomProfile}
          options={profiles}
          onSelect={onTopBottomChange}
        />

        <Dropdown
          label="Left Profile"
          value={leftProfile}
          options={profiles}
          onSelect={onLeftChange}
        />

        <Dropdown
          label="Right Profile"
          value={rightProfile}
          options={profiles}
          onSelect={onRightChange}
        />

      </View>

    </View>
  );
}