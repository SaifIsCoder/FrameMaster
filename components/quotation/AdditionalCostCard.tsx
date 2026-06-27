import { View } from "react-native";

import PKRInput from "./PKRInput";
import SectionHeader from "./SectionHeader";

interface AdditionalCostCardProps {
  hardwareCost: string;
  labourCost: string;

  onHardwareCostChange: (value: string) => void;
  onLabourCostChange: (value: string) => void;
}

export default function AdditionalCostCard({
  hardwareCost,
  labourCost,
  onHardwareCostChange,
  onLabourCostChange,
}: AdditionalCostCardProps) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <SectionHeader
        title="Additional Costs"
        icon="cash-multiple"
      />

      <View className="gap-4">

        <PKRInput
          label="Hardware Cost"
          value={hardwareCost}
          onChangeText={onHardwareCostChange}
        />

        <PKRInput
          label="Labour Cost"
          value={labourCost}
          onChangeText={onLabourCostChange}
        />

      </View>

    </View>
  );
}