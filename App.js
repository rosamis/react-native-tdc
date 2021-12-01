import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TalksList from "./src/screens/TalksList";
import Talk from "./src/screens/Talk";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TalksList"
          component={TalksList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Talk"
          component={Talk}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
