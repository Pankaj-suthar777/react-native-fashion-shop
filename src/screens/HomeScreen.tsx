import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import MasonryList from "reanimated-masonry-list";

const CATEGORIES = [
  "Clothing",
  "Shoes",
  "Accessories 1",
  "Accessories 2",
  "Accessories 3",
  "Accessories 4",
];

const HomeScreen = () => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        {/* header*/}

        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: "row",
            alignItems: "center",

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
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}
                numberOfLines={1}
              >
                Hi, james 👌
              </Text>
              <Text
                style={{ color: colors.text, opacity: 0.75 }}
                numberOfLines={1}
              >
                Discover fashion that suit your style
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 52,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 52,
                borderWidth: 1,
                borderColor: colors.border,
              }}
            >
              <Icons name="notifications" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        {/* search */}
        <View style={{ flexDirection: "row", paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              gap: 12,
              flexDirection: "row",
            }}
          >
            <Icons
              name="search"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: colors.text,
                opacity: 0.5,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              backgroundColor: colors.primary,
            }}
          >
            <Icons name="tune" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>

        {/* grid collections */}
        <View style={{ paddingHorizontal: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              New Collections
            </Text>
            <TouchableOpacity>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
            {/* Card */}
            <View style={{ flex: 1 }}>
              <Card />
            </View>
            <View style={{ flex: 1, gap: 12 }}>
              <Card />
              <Card />
            </View>
          </View>
        </View>

        {/*cayegories */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          horizontal
          contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderRadius: 100,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontWeight: "600",
                    fontSize: 16,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* mesaunary  */}
        <MasonryList
          data={[8, 9, 89, 88]}
          keyExtractor={(item): string => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          renderItem={({ item, i }) => (
            <View
              style={{
                aspectRatio: i === 0 ? 1 : 2 / 3,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "red",
                marginTop: 12,
                borderRadius: 24,
              }}
            >
              <Image
                resizeMode="cover"
                source={require("../assets/images/image-7.jpg")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        borderRadius: 24,
        position: "relative",
      }}
    >
      <Image
        source={require("../assets/images/image-1.jpg")}
        resizeMode="cover"
        style={{ height: "100%", width: "100%", borderRadius: 24 }}
      />
      <View
        style={{
          position: "absolute",
          left: 16,
          top: 16,
          paddingHorizontal: 14,
          paddingVertical: 10,
          backgroundColor: "rgba(0,0,0,0.25)",
          borderRadius: 100,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#fff" }}>
          $130
        </Text>
      </View>
    </View>
  );
};
