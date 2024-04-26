import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { ReactNode, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import PriceRangeSelector from "./PriceRangeSelector";

const COLORS = [
  {
    color: "red",
    label: "red",
    itemCount: 1,
  },
  {
    color: "blue",
    label: "Blue",
    itemCount: 2,
  },
  {
    color: "yellow",
    label: "yellow",
    itemCount: 3,
  },
  {
    color: "purple",
    label: "purple",
    itemCount: 4,
  },
  {
    color: "green",
    label: "green",
    itemCount: 5,
  },
];

const SLEVES = [
  { id: "sortsleeve", label: "Sort Sleeve", itemCount: 20 },
  { id: "longsleeve", label: "Long Sleeve", itemCount: 100 },
  { id: "sleeveless", label: "Sleeve Less", itemCount: 600 },
];

const MIN_PRICE = 0;
const MAX_PRICE = 500;

const FilterView = () => {
  const [startPrice, setStartPrice] = useState(50);
  const [endPrice, setEndPrice] = useState(250);
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingVertical: 24, gap: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 24,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Filters</Text>
            <TouchableOpacity>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>

          {/*range selector */}

          <PriceRangeSelector
            minPrice={0}
            maxPrice={MAX_PRICE}
            startPrice={startPrice}
            endPrice={endPrice}
            onEndpriceChange={setEndPrice}
            onStartpriceChange={setStartPrice}
          />

          {/* Sports category */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
              Sports
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {new Array(8).fill("").map((_, i) => {
                return <Chip isSelected={i === 0} itemCount={i} label="item" />;
              })}
            </View>
          </View>

          {/* colors */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
              Colors
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {COLORS.map((item, i) => {
                return (
                  <Chip
                    isSelected={i === 0}
                    itemCount={i}
                    label={item.label}
                    left={
                      <View
                        style={{
                          backgroundColor: item.color,
                          width: 12,
                          height: 12,
                          borderRadius: 8,
                        }}
                      ></View>
                    }
                  />
                );
              })}
            </View>
          </View>

          {/* sleeves filter */}
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
              Colors
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
              {SLEVES.map((item, i) => {
                return (
                  <Chip isSelected={i === 0} itemCount={i} label={item.label} />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Button */}
      <View style={{ padding: 24, paddingBottom: 24 + insets.bottom }}>
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.primary,
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
              color: theme.colors.border,
            }}
          >
            Applay Filters
          </Text>
          <View
            style={{
              backgroundColor: theme.colors.card,
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
            <Icons name="arrow-forward" size={24} color={theme.colors.text} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterView;

const Chip = ({
  isSelected,
  label,
  itemCount,
  left,
}: {
  isSelected: boolean;
  label: string;
  itemCount: number;
  left?: ReactNode;
}) => {
  const theme = useTheme();
  return (
    <View
      key={itemCount}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: isSelected
          ? theme.colors.text
          : theme.colors.background,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {!!left && <View style={{ marginRight: 4 }}>{left}</View>}
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: isSelected ? theme.colors.background : theme.colors.text,
        }}
      >
        {label} {itemCount}
      </Text>
    </View>
  );
};
