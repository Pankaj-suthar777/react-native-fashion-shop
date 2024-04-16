import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigators from "./src/naviagtores/RootNavigators";

export default function App() {
  return (
    <View style={styles.conatiner}>
      <NavigationContainer>
        <RootNavigators />
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
});
