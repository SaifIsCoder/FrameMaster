import { View, Text } from 'react-native';
import React from 'react';

export default function Dashboard() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-3xl font-bold text-primary">FrameMaster</Text>
      <Text className="text-lg text-accent mt-2">Professional Fabrication</Text>
    </View>
  );
}