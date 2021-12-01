import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListTalks from './src/screens/ListTaks';
import Talk from './src/screens/Talk';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ListTalks"
          component={ListTalks}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Talk" component={Talk} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
