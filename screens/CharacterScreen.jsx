import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

export const CharacterScreen = ({ route, navigate }) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(32, 35, 41)" }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width, height: 350, marginRight: 10 }}>
            <Image
              source={{ uri: item.image, width: "100%", height: "100%" }}
            />
          </View>
          <View
            style={{
              backgroundColor: "rgb(60, 62, 68)",
              width,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontWeight: "900",
                textAlign: "center",
                paddingTop: 20,
              }}
            >
              {item.name.length > 30
                ? item.name.slice(0, 30) + "..."
                : item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor:
                    item.status == "unknown" ? "gray" : "greenyellow",
                  borderRadius: 50,
                  marginRight: 10,
                }}
              ></View>
              <Text
                style={{
                  fontSize: 16,
                  color: item.status == "unknown" ? "gray" : "#fff",
                  fontWeight: "900",
                }}
              >
                {item.status} - {item.species}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
