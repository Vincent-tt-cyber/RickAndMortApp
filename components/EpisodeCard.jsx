import { Dimensions, Text, View } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

export const EpisodeCard = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "rgb(60, 62, 68)",
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        flexDirection: "column",
        // flexWrap: "wrap",
        alignItems: "center",
        borderWidth: 2,
      }}
    >
      <View
        style={{
          marginRight: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "900" }}>
          Season: {item.episode.slice(1, 3)} -{" "}
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "900",
            borderColor: "#fff",
          }}
        >
          Episode: {item.episode.slice(4, 6)}
        </Text>
      </View>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          flexWrap: "wrap",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};
