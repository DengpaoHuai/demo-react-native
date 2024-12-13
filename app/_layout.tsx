import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import MovieContextProvider from "@/contexts/MovieContextProvider";
import CustomModalProvider from "@/components/CustomModal";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const demo = useSafeAreaInsets();

  console.log(demo);

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CustomModalProvider>
      <ThemeProvider value={DefaultTheme}>
        <MovieContextProvider>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                header: (props) => {
                  return (
                    <View
                      style={{
                        height: 100,
                        backgroundColor: "#000",
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 20,
                          textAlign: "center",
                          padding: 20,
                        }}
                      >
                        {props.route.name}
                      </Text>
                    </View>
                  );
                },
              }}
            />
            <Stack.Screen name="demo" />
            <Stack.Screen name="settings" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="dark" />
        </MovieContextProvider>
      </ThemeProvider>
    </CustomModalProvider>
  );
}
