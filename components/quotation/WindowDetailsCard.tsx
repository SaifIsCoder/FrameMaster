import { View } from "react-native";

import Dropdown, { DropdownOption } from "./Dropdown";
import FloatingInput from "./FloatingInput";
import SectionHeader from "./SectionHeader";

interface WindowDetailsCardProps {
  windowType: string;

  widthFeet: string;
  widthInches: string;

  heightFeet: string;
  heightInches: string;

  quantity: string;

  windowTypes: DropdownOption[];

  onWindowTypeChange: (value: string) => void;

  onWidthFeetChange: (value: string) => void;
  onWidthInchesChange: (value: string) => void;

  onHeightFeetChange: (value: string) => void;
  onHeightInchesChange: (value: string) => void;

  onQuantityChange: (value: string) => void;
}

export default function WindowDetailsCard({
  windowType,

  widthFeet,
  widthInches,

  heightFeet,
  heightInches,

  quantity,

  windowTypes,

  onWindowTypeChange,

  onWidthFeetChange,
  onWidthInchesChange,

  onHeightFeetChange,
  onHeightInchesChange,

  onQuantityChange,
}: WindowDetailsCardProps) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <SectionHeader
        title="Window Details"
        icon="window-open-variant"
      />

      <View className="gap-4">

        <Dropdown
          label="Window Type"
          value={windowType}
          options={windowTypes}
          onSelect={onWindowTypeChange}
        />

        {/* Width */}

        <View className="flex-row gap-3">

          <View className="flex-1">
            <FloatingInput
              label="Width (ft)"
              keyboardType="numeric"
              value={widthFeet}
              onChangeText={onWidthFeetChange}
            />
          </View>

          <View className="flex-1">
            <FloatingInput
              label="Width (in)"
              keyboardType="numeric"
              value={widthInches}
              onChangeText={onWidthInchesChange}
            />
          </View>

        </View>

        {/* Height */}

        <View className="flex-row gap-3">

          <View className="flex-1">
            <FloatingInput
              label="Height (ft)"
              keyboardType="numeric"
              value={heightFeet}
              onChangeText={onHeightFeetChange}
            />
          </View>

          <View className="flex-1">
            <FloatingInput
              label="Height (in)"
              keyboardType="numeric"
              value={heightInches}
              onChangeText={onHeightInchesChange}
            />
          </View>

        </View>

        <FloatingInput
          label="Quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={onQuantityChange}
        />

      </View>

    </View>
  );
}