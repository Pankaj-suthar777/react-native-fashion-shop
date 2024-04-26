import { View, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const PriceRangeSelector = ({
  minPrice,
  endPrice,
  maxPrice,
  onEndpriceChange,
  onStartpriceChange,
  startPrice,
}: {
  minPrice: number;
  maxPrice: number;
  startPrice: number;
  endPrice: number;
  onStartpriceChange: (value: number) => void;
  onEndpriceChange: (value: number) => void;
}) => {
  const theme = useTheme();
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={{ marginBottom: 24 }}>
        <Text>Price Range</Text>
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: theme.colors.border,
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            left: `${(100 * startPrice) / maxPrice}%`,
            width: `${(100 * (endPrice - startPrice)) / maxPrice}%`,
            height: "100%",
            backgroundColor: theme.colors.primary,
          }}
        />

        <View style={{ position: "absolute", left: "10%" }}>
          <SliderHandle />
        </View>
        <View style={{ position: "absolute", left: "50%" }}>
          <SliderHandle />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
            ${minPrice}
          </Text>
          <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
            ${maxPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PriceRangeSelector;

const SliderHandle = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        position: "absolute",
        left: "10%",
        height: 24,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        transform: [
          {
            translateX: -12,
          },
          {
            translateY: -12,
          },
        ],
      }}
    >
      <View
        style={{
          width: 3,
          height: 3,
          borderRadius: 10,
          backgroundColor: theme.colors.primary,
        }}
      ></View>
    </View>
  );
};
