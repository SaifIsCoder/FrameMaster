import { View } from "react-native";

import Dropdown, { DropdownOption } from "./Dropdown";
import SectionHeader from "./SectionHeader";

interface GlassCardProps {
  glassType: string;
  glassColour: string;
  glassTypes: DropdownOption[];
  glassColours: DropdownOption[];
  onGlassTypeChange: (value: string) => void;
  onGlassColourChange: (value: string) => void;
}

export default function GlassCard({
  glassType,
  glassColour,
  glassTypes,
  glassColours,
  onGlassTypeChange,
  onGlassColourChange,
}: GlassCardProps) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">
      <SectionHeader
        title="Glass Details"
        icon="window-closed"
      />

      <Dropdown
        label="Glass Type"
        value={glassType}
        options={glassTypes}
        onSelect={onGlassTypeChange}
      />

      <Dropdown
        label="Glass Colour"
        value={glassColour}
        options={glassColours}
        onSelect={onGlassColourChange}
      />
    </View>
  );
}