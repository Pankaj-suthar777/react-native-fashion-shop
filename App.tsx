import {
  DarkTheme,
  NavigationContainer,
  Theme,
  DefaultTheme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import RootNavigators from "./src/naviagtores/RootNavigators";
import { useMemo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const colorScheme = useColorScheme();

  const theme: Theme = useMemo(
    () =>
      colorScheme === "dark"
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: "#fff",
              text: "#fff",
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              background: "#f5f5f5",
              text: "#191919",
              border: "#D9D9D9",
              primary: "#191919",
            },
          },
    [colorScheme]
  );
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.conatiner}>
        <NavigationContainer theme={theme}>
          <BottomSheetModalProvider>
            <RootNavigators />
          </BottomSheetModalProvider>
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
