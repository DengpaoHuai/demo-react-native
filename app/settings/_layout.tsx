import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "react-native-reanimated";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="update" />
      <Stack.Screen
        name="update-password"
        options={{
          title: "demo",
        }}
      />
      <Stack.Screen name="update-password/name" />
      <Stack.Screen name="update-password/demo" />
    </Stack>
  );
}
