import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Game from "./screens/Game";
import Result from "./screens/Result";
import * as NavigationBar from "expo-navigation-bar";

export type RootStackParamList = {
  Home: undefined;
  Game: {
    palavra: string;
  };
  Result: {
    erros: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  NavigationBar.setVisibilityAsync("hidden");

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1F2937",
          },
          headerTintColor: "#EC4899",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Jogo da Forca",
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            title: "Jogo",
          }}
        />

        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            title: "Resultado",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
