import { View } from "react-native";

import FloatingInput from "./FloatingInput";
import SectionHeader from "./SectionHeader";

interface CustomerCardProps {
  customerName: string;
  phone: string;
  address: string;

  onCustomerNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onAddressChange: (value: string) => void;
}

export default function CustomerCard({
  customerName,
  phone,
  address,
  onCustomerNameChange,
  onPhoneChange,
  onAddressChange,
}: CustomerCardProps) {
  return (
    <View className="bg-white rounded-2xl p-5 mb-5 shadow-sm">

      <SectionHeader
        title="Customer Information"
        icon="account-outline"
      />

      <View className="gap-4">

        <FloatingInput
          label="Customer Name"
          value={customerName}
          onChangeText={onCustomerNameChange}
        />

        <FloatingInput
          label="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={onPhoneChange}
        />

        <FloatingInput
          label="Address"
          value={address}
          onChangeText={onAddressChange}
        />

      </View>

    </View>
  );
}