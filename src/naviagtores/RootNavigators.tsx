import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabsNaviagtor, { TabsStackParamList } from "./TabsNaviagtor";

export type RootStackParamList = {
  TabsStack: NavigatorScreenParams<TabsStackParamList>;
  DetailsScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigators = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="TabsStack"
        component={TabsNaviagtor}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="DetailsScreen" component={DetailsScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigators;
