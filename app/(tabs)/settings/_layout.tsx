import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="update" />
      <Stack.Screen name="update-password/toto" />
      <Stack.Screen name="update-password/demo" />
    </Stack>
  );
}
