import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

export const CharacterCard = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Character", { item })}
    >
      <View
        style={{
          backgroundColor: "rgb(32, 35, 41)",
          margin: 10,
          borderRadius: 20,
          // paddingHorizontal: 20,
          // paddingVertical: 10,
          flexDirection: "row",
          // justifyContent: "space-between",
          height: height * 0.22,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: width * 0.45,
            height: "100%",
            objectFit: "cover",
          }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "900" }}>
              {item.name.length > 15
                ? item.name.slice(0, 15) + "..."
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
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: "gray", fontSize: 16 }}>
                Last known location:
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "900", color: "#fff" }}>
                {item.location.name.length > 20
                  ? item.location.name.slice(0, 20) + "..."
                  : item.location.name}
              </Text>
            </View>
            <View>
              <Text style={{ color: "gray", fontSize: 16 }}>Gender:</Text>
              <Text style={{ fontSize: 16, fontWeight: "900", color: "#fff" }}>
                {item.gender}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
