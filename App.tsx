import "./global.css";

import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import Dashboard from "./screens/Dashboard";
import NewQuotation from "./screens/NewQuotation";
import { initializeDatabase } from "./database/db";
import CalculationResult from "./screens/CalculationResult";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isDatabaseReady, setIsDatabaseReady] = useState(false);

  useEffect(() => {
    async function setupDatabase() {
      try {
        await initializeDatabase();
        console.log("Database initialized successfully");
      } catch (error) {
        console.error("Database initialization failed:", error);
      } finally {
        setIsDatabaseReady(true);
      }
    }

    setupDatabase();
  }, []);

  if (!isDatabaseReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <ActivityIndicator size="large" color="#4682B4" />
      </View>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            // options={{
            //   title: "FrameMaster",
            // }}
          />

          <Stack.Screen
            name="NewQuotation"
            component={NewQuotation}
            options={{
              title: "New Quotation",
            }}
          />

          <Stack.Screen
            name="CalculationResult"
            component={CalculationResult}
            options={{
              title: "Calculation Result",
            }}
          />

          {/* <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: "Settings",
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
