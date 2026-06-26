import './global.css';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';
import { initDatabase } from './database/db';
import "./global.css";
const Stack = createNativeStackNavigator();

export default function App() {
  // Initialize the SQLite database when the app starts
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{
            title: 'FrameMaster',
            headerStyle: { backgroundColor: '#4682B4' }, // Primary Steel Blue
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}