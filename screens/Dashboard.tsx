import { ScrollView, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import QuickActionCard from "../components/dashboard/QuickActionCard";
import QuotationCard from "../components/dashboard/QuotationCard";

type RootStackParamList = {
  Dashboard: undefined;
  NewQuotation: undefined;
  QuotationHistory: undefined;
  Settings: undefined;
  QuotationDetails: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Dashboard() {
  const navigation = useNavigation<NavigationProp>();

  const recentQuotations = [
    {
      id: 1,
      customer: "Ahmed Ali",
      size: "4 × 4",
      quantity: 2,
      total: 48500,
      date: "Today",
    },
    {
      id: 2,
      customer: "Ali Hassan",
      size: "6 × 4",
      quantity: 1,
      total: 37200,
      date: "Yesterday",
    },
    {
      id: 3,
      customer: "Muhammad",
      size: "5 × 5",
      quantity: 3,
      total: 82400,
      date: "22 Jun",
    },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <DashboardHeader />

        <View className="px-5 mt-6">

          {/* New Quotation */}

          <Button
            mode="contained"
            icon="plus"
            contentStyle={{
              height: 60,
            }}
            buttonColor="#4682B4"
            labelStyle={{
              fontSize: 18,
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("NewQuotation")}
          >
            New Quotation
          </Button>

          {/* Quick Actions */}

          <Text className="text-xl font-bold mt-8 mb-4">
            Quick Actions
          </Text>

          <View className="flex-row gap-4">
            <QuickActionCard
              title="History"
              icon="file-document-outline"
              color="#4682B4"
              onPress={() =>
                navigation.navigate("QuotationHistory")
              }
            />

            <QuickActionCard
              title="Settings"
              icon="cog-outline"
              color="#6C757D"
              onPress={() => navigation.navigate("Settings")}
            />
          </View>

          {/* Recent Quotations */}

          <Text className="text-xl font-bold mt-8 mb-4">
            Recent Quotations
          </Text>

          {recentQuotations.map((quotation) => (
            <QuotationCard
              key={quotation.id}
              customer={quotation.customer}
              size={quotation.size}
              quantity={quotation.quantity}
              total={quotation.total}
              date={quotation.date}
              onPress={() =>
                navigation.navigate("QuotationDetails")
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}