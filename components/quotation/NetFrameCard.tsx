import { View } from "react-native";

import Dropdown, { DropdownOption } from "./Dropdown";
import SectionHeader from "./SectionHeader";

interface NetFrameCardProps {
  profile: string;

  profiles: DropdownOption[];

  onProfileChange: (value: string) => void;
}

export default function NetFrameCard({
  profile,
  profiles,
  onProfileChange,
}: NetFrameCardProps) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <SectionHeader
        title="Net Frame Profile"
        icon="grid"
      />

      <Dropdown
        label="Net Profile"
        value={profile}
        options={profiles}
        onSelect={onProfileChange}
      />

    </View>
  );
}