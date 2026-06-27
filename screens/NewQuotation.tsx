import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Alert,
} from "react-native";

import { ActivityIndicator } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import CustomerCard from "../components/quotation/CustomerCard";
import WindowDetailsCard from "../components/quotation/WindowDetailsCard";
import MainFrameCard from "../components/quotation/MainFrameCard";
import GlassFrameCard from "../components/quotation/GlassFrameCard";
import NetFrameCard from "../components/quotation/NetFrameCard";
import GlassCard from "../components/quotation/GlassCard";
import AdditionalCostCard from "../components/quotation/AdditionalCostCard";
import CalculateButton from "../components/quotation/CalculateButton";

import {
  calculateSlidingWindow,
} from "../utils/calculations";

import ProfileRepository from "../database/repositories/ProfileRepository";
import GlassTypeRepository from "../database/repositories/GlassTypeRepository";
import ColorRepository from "../database/repositories/ColorRepository";

import type { DropdownOption } from "../components/quotation/Dropdown";

type RootStackParamList = {
  Dashboard: undefined;
  NewQuotation: undefined;
  CalculationResult: {
    quotation: any;
  };
};

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function NewQuotation() {

  const navigation = useNavigation<NavigationProp>();

  // ----------------------------------------
  // Loading
  // ----------------------------------------

  const [loading, setLoading] = useState(true);

  const [calculating, setCalculating] =
    useState(false);

  // ----------------------------------------
  // Dropdown Data
  // ----------------------------------------

  const [profiles, setProfiles] = useState<
    DropdownOption[]
  >([]);

  const [glassTypes, setGlassTypes] =
    useState<DropdownOption[]>([]);

  const [colors, setColors] = useState<
    DropdownOption[]
  >([]);

  const windowTypes: DropdownOption[] = [
    {
      label: "Sliding Window",
      value: "sliding",
    },
  ];

  // ----------------------------------------
  // Customer
  // ----------------------------------------

  const [customerName, setCustomerName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [address, setAddress] =
    useState("");

  // ----------------------------------------
  // Window
  // ----------------------------------------

  const [windowType, setWindowType] =
    useState("sliding");

  const [widthFeet, setWidthFeet] =
    useState("");

  const [widthInches, setWidthInches] =
    useState("");

  const [heightFeet, setHeightFeet] =
    useState("");

  const [heightInches, setHeightInches] =
    useState("");

  const [quantity, setQuantity] =
    useState("1");

  // ----------------------------------------
  // Main Frame
  // ----------------------------------------

  const [mainProfile, setMainProfile] =
    useState("");

  const [bottomProfile, setBottomProfile] =
    useState("");

  // ----------------------------------------
  // Glass Frame
  // ----------------------------------------

  const [glassTopBottom, setGlassTopBottom] =
    useState("");

  const [glassLeft, setGlassLeft] =
    useState("");

  const [glassRight, setGlassRight] =
    useState("");

  // ----------------------------------------
  // Net
  // ----------------------------------------

  const [netProfile, setNetProfile] =
    useState("");

  // ----------------------------------------
  // Glass
  // ----------------------------------------

  const [glassType, setGlassType] =
    useState("");

  const [glassColour, setGlassColour] =
    useState("");

  // ----------------------------------------
  // Costs
  // ----------------------------------------

  const [hardwareCost, setHardwareCost] =
    useState("");

  const [labourCost, setLabourCost] =
    useState("");
      // ----------------------------------------
  // Load Master Data
  // ----------------------------------------

  useEffect(() => {
    loadMasterData();
  }, []);

  async function loadMasterData() {
    try {
      setLoading(true);

      // Load from SQLite repositories
      const profileData = await ProfileRepository.getAll();
      const glassData = await GlassTypeRepository.getAll();
      const colorData = await ColorRepository.getAll();

      // Convert Profiles
      const profileOptions: DropdownOption[] = profileData.map(
        (item: any) => ({
          label: item.name,
          value: item.id.toString(),
        })
      );

      // Convert Glass Types
      const glassOptions: DropdownOption[] = glassData.map(
        (item: any) => ({
          label: item.name,
          value: item.id.toString(),
        })
      );

      // Convert Colours
      const colorOptions: DropdownOption[] = colorData.map(
        (item: any) => ({
          label: item.name,
          value: item.id.toString(),
        })
      );

      setProfiles(profileOptions);
      setGlassTypes(glassOptions);
      setColors(colorOptions);
    } catch (error) {
      console.error(error);

      Alert.alert(
        "Database Error",
        "Unable to load application data."
      );
    } finally {
      setLoading(false);
    }
  }

  // ----------------------------------------
  // Measurement Helpers
  // ----------------------------------------

  function feetInchesToFeet(
    feet: string,
    inches: string
  ): number {
    const ft = Number(feet) || 0;
    const inch = Number(inches) || 0;

    return ft + inch / 12;
  }

  // ----------------------------------------
  // Validation
  // ----------------------------------------

  function validateForm(): boolean {
    if (!customerName.trim()) {
      Alert.alert("Validation", "Customer name is required.");
      return false;
    }

    if (!phone.trim()) {
      Alert.alert("Validation", "Phone number is required.");
      return false;
    }

    if (!widthFeet.trim()) {
      Alert.alert("Validation", "Enter window width.");
      return false;
    }

    if (!heightFeet.trim()) {
      Alert.alert("Validation", "Enter window height.");
      return false;
    }

    if (!mainProfile) {
      Alert.alert("Validation", "Select Main Frame profile.");
      return false;
    }

    if (!bottomProfile) {
      Alert.alert("Validation", "Select Bottom profile.");
      return false;
    }

    if (!glassTopBottom) {
      Alert.alert(
        "Validation",
        "Select Glass Top/Bottom profile."
      );
      return false;
    }

    if (!glassLeft) {
      Alert.alert(
        "Validation",
        "Select Glass Left profile."
      );
      return false;
    }

    if (!glassRight) {
      Alert.alert(
        "Validation",
        "Select Glass Right profile."
      );
      return false;
    }

    if (!netProfile) {
      Alert.alert(
        "Validation",
        "Select Net profile."
      );
      return false;
    }

    if (!glassType) {
      Alert.alert(
        "Validation",
        "Select Glass Type."
      );
      return false;
    }

    if (!glassColour) {
      Alert.alert(
        "Validation",
        "Select Glass Colour."
      );
      return false;
    }

    return true;
  }

  // ----------------------------------------
  // Loading Screen
  // ----------------------------------------

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" />
      </View>
    );
  }
    // ==========================================
  // Helpers
  // ==========================================

  function getSelectedProfile(id: string) {
    return profiles.find((item) => item.value === id);
  }

  function getSelectedGlassType(id: string) {
    return glassTypes.find((item) => item.value === id);
  }

  function getSelectedColor(id: string) {
    return colors.find((item) => item.value === id);
  }

  // ==========================================
  // Calculate
  // ==========================================

  async function handleCalculate() {
    if (!validateForm()) return;

    try {
      setCalculating(true);

      const width = feetInchesToFeet(
        widthFeet,
        widthInches
      );

      const height = feetInchesToFeet(
        heightFeet,
        heightInches
      );

      const qty = Number(quantity);

      // ----------------------------
      // Material Calculation
      // ----------------------------

      const materialCalculation =
        calculateSlidingWindow({
          width,
          height,
          quantity: qty,
        });

      // ----------------------------
      // Selected Materials
      // ----------------------------

      const quotation = {
        customer: {
          name: customerName,
          phone,
          address,
        },

        window: {
          type: windowType,
          width,
          height,
          quantity: qty,
        },

        profiles: {
          main: getSelectedProfile(mainProfile),

          bottom: getSelectedProfile(bottomProfile),

          glassTopBottom:
            getSelectedProfile(glassTopBottom),

          glassLeft:
            getSelectedProfile(glassLeft),

          glassRight:
            getSelectedProfile(glassRight),

          net:
            getSelectedProfile(netProfile),
        },

        glass: {
          type: getSelectedGlassType(glassType),

          colour: getSelectedColor(glassColour),
        },

        additional: {
          hardware:
            Number(hardwareCost) || 0,

          labour:
            Number(labourCost) || 0,
        },

        calculation: materialCalculation,
      };

      navigation.navigate(
        "CalculationResult",
        {
          quotation,
        }
      );
    } catch (error) {
      console.error(error);

      Alert.alert(
        "Calculation Error",
        "Unable to calculate quotation."
      );
    } finally {
      setCalculating(false);
    }
  }
    return (
    <ScrollView
      className="flex-1 bg-gray-100"
      contentContainerStyle={{
        padding: 16,
        paddingBottom: 20,
        paddingTop: 20,
      }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >

      {/* Customer */}

      <CustomerCard
        customerName={customerName}
        phone={phone}
        address={address}
        onCustomerNameChange={setCustomerName}
        onPhoneChange={setPhone}
        onAddressChange={setAddress}
      />

      {/* Window */}

      <WindowDetailsCard
        windowType={windowType}
        windowTypes={windowTypes}
        widthFeet={widthFeet}
        widthInches={widthInches}
        heightFeet={heightFeet}
        heightInches={heightInches}
        quantity={quantity}
        onWindowTypeChange={setWindowType}
        onWidthFeetChange={setWidthFeet}
        onWidthInchesChange={setWidthInches}
        onHeightFeetChange={setHeightFeet}
        onHeightInchesChange={setHeightInches}
        onQuantityChange={setQuantity}
      />

      {/* Main Frame */}

      <MainFrameCard
        mainProfile={mainProfile}
        bottomProfile={bottomProfile}
        profiles={profiles}
        onMainProfileChange={setMainProfile}
        onBottomProfileChange={setBottomProfile}
      />

      {/* Glass Frame */}

      <GlassFrameCard
        topBottomProfile={glassTopBottom}
        leftProfile={glassLeft}
        rightProfile={glassRight}
        profiles={profiles}
        onTopBottomChange={setGlassTopBottom}
        onLeftChange={setGlassLeft}
        onRightChange={setGlassRight}
      />

      {/* Net Frame */}

      <NetFrameCard
        profile={netProfile}
        profiles={profiles}
        onProfileChange={setNetProfile}
      />
      {/* Glass */}

      <GlassCard
        glassType={glassType}
        glassColour={glassColour}
        glassTypes={glassTypes}
        glassColours={colors}
        onGlassTypeChange={setGlassType}
        onGlassColourChange={setGlassColour}
      />

      {/* Additional Costs */}

      <AdditionalCostCard
        hardwareCost={hardwareCost}
        labourCost={labourCost}
        onHardwareCostChange={setHardwareCost}
        onLabourCostChange={setLabourCost}
      />

      {/* Calculate */}

      <CalculateButton
        loading={calculating}
        onPress={handleCalculate}
      />

    </ScrollView>
  );
}