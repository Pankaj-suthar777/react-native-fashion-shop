import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { RootStackScreenProps } from "../naviagtores/RootNavigators";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import BottomSheet from "@gorhom/bottom-sheet";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL"];

const DetailsScreen = ({
  navigation,
  route: {
    params: { id },
  },
}: RootStackScreenProps<"DetailsScreen">) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState(1);
  const [size, setSize] = useState(SIZES[0]);
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../assets/images/image-3.jpg")}
        style={{ flex: 1 }}
      />
      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <StatusBar style="light" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 8,
          }}
        >
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
              zIndex: 88,
            }}
            onPress={() => navigation.goBack()}
          >
            <Icons name="arrow-back" size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
              zIndex: 88,
            }}
            onPress={() => navigation.goBack()}
          >
            <Icons name="favorite-border" size={24} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
              zIndex: 88,
            }}
            onPress={() => navigation.goBack()}
          >
            <Icons name="add-shopping-cart" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <BottomSheet
        detached={true}
        style={{ marginHorizontal: 20 }}
        bottomInset={insets.bottom + 20}
        snapPoints={[64, 500]}
        index={0}
        backgroundStyle={{
          borderRadius: 24,
          backgroundColor: colors.background,
        }}
      >
        <View style={{ padding: 16, gap: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "600", color: colors.text }}>
            PUMA Everyday Hussle
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View style={{ flex: 1 }}>
              <View style={{ flexDirection: "row", gap: 2 }}>
                {new Array(5).fill("").map((_, i) => (
                  <Icons
                    key={i}
                    name={i < 3 ? "star" : "star-border"}
                    color={"#facc15"}
                    size={20}
                  />
                ))}
              </View>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.text,
                  opacity: 0.5,
                  marginTop: 4,
                }}
              >
                3.0 (30k Reviews)
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                backgroundColor: colors.primary,
                padding: 4,
                borderRadius: 100,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: colors.card,
                  width: 34,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34,
                }}
                onPress={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                <Icons name="remove" size={20} color={colors.text} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.background,
                }}
              >
                {count}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.card,
                  width: 34,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 34,
                }}
                onPress={() => {
                  setCount(count + 1);
                }}
              >
                <Icons name="add" size={20} color={colors.text} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.text,
                  textTransform: "uppercase",
                }}
              >
                Model is 6'1 ,Size is M
              </Text>
              <Text style={{ color: colors.text, opacity: 0.5 }}>
                Size guide
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 6,
              }}
            >
              {SIZES.map((s, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setSize(s)}
                  style={{
                    width: 44,
                    height: 44,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: s === size ? colors.primary : colors.card,
                    borderRadius: 44,
                  }}
                >
                  <Text style={{ color: s === size ? "#fff" : colors.text }}>
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 6,
                color: colors.text,
              }}
            >
              Description
            </Text>
            <Text
              style={{
                color: colors.text,
                opacity: 0.75,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus esse, ipsam veritatis praesentium nisi ipsa quod animi
              suscipit eligendi corrupti aut nemo voluptatum officia sed rem
              quas aperiam, labore dolorum.
            </Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{ color: colors.text, opacity: 0.75, marginBottom: 4 }}
                >
                  Total
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  ${(2500).toLocaleString()}
                </Text>
              </View>
              <View style={{ width: "70%" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.primary,
                    height: 64,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 64,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      color: colors.border,
                    }}
                  >
                    Add to cart
                  </Text>
                  <View
                    style={{
                      backgroundColor: colors.card,
                      width: 40,
                      aspectRatio: 1,
                      borderRadius: 40,
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bottom: 12,
                    }}
                  >
                    <Icons name="arrow-forward" size={24} color={colors.text} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default DetailsScreen;
