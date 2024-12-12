import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "react-native-reanimated";

export default function Layout() {
  return (
    <View>
      <Text>demo layout</Text>
      <Slot></Slot>
    </View>
  );
}
