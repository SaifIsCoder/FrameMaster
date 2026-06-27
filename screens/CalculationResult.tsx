import { useState } from "react";
import {
  Alert,
  ScrollView,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";

import CustomerSummaryCard from "../components/result/CustomerSummaryCard";
import MaterialCard from "../components/result/MaterialCard";
import GlassSummaryCard from "../components/result/GlassSummaryCard";
import CostSummaryCard from "../components/result/CostSummaryCard";
import GrandTotalCard from "../components/result/GrandTotalCard";
import ActionButtons from "../components/result/ActionButtons";

type RootStackParamList = {
  Dashboard: undefined;
  CalculationResult: {
    quotation: any;
    metadata: any;
  };
};

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

type ResultRouteProp =
  RouteProp<
    RootStackParamList,
    "CalculationResult"
  >;

export default function CalculationResult() {

  const navigation =
    useNavigation<NavigationProp>();

  const route =
    useRoute<ResultRouteProp>();

  const { quotation, metadata } = route.params;

  const [saving, setSaving] =
    useState(false);


  const customer = quotation.customer;
  const windowData = quotation.windowDetails;
  const materials = quotation.materials;
  const pricing = quotation.pricing;

  const aluminiumCost = pricing.aluminiumCost ?? 0;
  const glassCost = pricing.glassCost ?? 0;
  const hardwareCost = pricing.hardwareCost ?? 0;
  const labourCost = pricing.labourCost ?? 0;
  const total = pricing.totalCost ?? 0;
  async function handleSave() {

    try {

      setSaving(true);

      // TODO
      // Save quotation to SQLite

      Alert.alert(
        "Success",
        "Quotation saved successfully."
      );

      navigation.navigate("Dashboard");

    } catch (error) {

      Alert.alert(
        "Error",
        "Unable to save quotation."
      );

    } finally {

      setSaving(false);

    }

  }


  function handlePdf() {

    Alert.alert(
      "Coming Soon",
      "PDF generation will be added in Phase 5."
    );

  }


  function handleBack() {

    navigation.goBack();

  }
    return (
    <ScrollView
      className="flex-1 bg-gray-100"
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 40,
      }}
      showsVerticalScrollIndicator={false}
    >

      {/* Customer */}

      <CustomerSummaryCard
        customerName={customer.name}
        phone={customer.phone}
        windowType={metadata.windowType}
        width={windowData.width}
        height={windowData.height}
        quantity={windowData.quantity}
      />

      {/* Main Frame */}

      <MaterialCard
        title="Main Frame"
        icon="crop-square"
        items={[
          {
            profile: metadata.profiles.main,
            length: materials.mainFrame.top,
          },
          {
            profile: metadata.profiles.bottom,
            length: materials.mainFrame.bottom,
          },
        ]}
      />

      {/* Glass Frame */}

      <MaterialCard
        title="Glass Frame"
        icon="view-grid-outline"
        items={[
          {
            profile: metadata.profiles.glassTopBottom,
            length: materials.glassFrame.top,
          },
          {
            profile: metadata.profiles.glassLeft,
            length: materials.glassFrame.left,
          },
          {
            profile: metadata.profiles.glassRight,
            length: materials.glassFrame.right,
          },
        ]}
      />

      {/* Net Frame */}

      <MaterialCard
        title="Net Frame"
        icon="grid"
        items={[
          {
            profile: metadata.profiles.net,
            length: materials.netFrame.total,
          },
        ]}
      />

      {/* Glass */}

      <GlassSummaryCard
        glassType={metadata.glass.typeName}
        glassColour={metadata.glass.colourName}
        area={materials.glassArea}
        pricePerSqft={metadata.glass.pricePerSqft || 0}
        totalCost={glassCost}
      />

      {/* Cost */}

      <CostSummaryCard
        aluminiumCost={aluminiumCost}
        glassCost={glassCost}
        hardwareCost={hardwareCost}
        labourCost={labourCost}
      />

      {/* Grand Total */}

      <GrandTotalCard
        total={total}
      />

      {/* Actions */}

      <ActionButtons
        loading={saving}
        onSave={handleSave}
        onGeneratePdf={handlePdf}
        onBack={handleBack}
      />

    </ScrollView>
  );
}