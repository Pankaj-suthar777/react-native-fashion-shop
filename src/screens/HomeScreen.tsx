import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 24,
            gap: 8,
          }}
        >
          <Image
            style={{ width: 52, aspectRatio: 1, borderRadius: 52 }}
            source={{
              uri: "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
            }}
            resizeMode="cover"
          />
          <View>Hi, james</View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
