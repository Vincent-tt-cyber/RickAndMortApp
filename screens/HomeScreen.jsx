import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  RefreshControl,
} from "react-native";
import React from "react";
import axios from "axios";
import { CharacterCard } from "../components/CharacterCard";

const { width, height } = Dimensions.get("window");

export const HomeScreen = ({ navigation }) => {
  const [episodes, setEpisodes] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);

  const getEpisodes = () => {
    if (episodes.length == 0) {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then(({ data }) => {
          setEpisodes(data.results);
        });
    }
  };

  const pullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
    }, 1000);
  };

  React.useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
        }
      >
        <View
          style={{
            width,
            height: height * 0.3,
            backgroundColor: "rgb(32, 35, 41)",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "900", color: "#fff" }}>
            The Rick and Morty API
          </Text>
        </View>
        <FlatList
          data={episodes}
          renderItem={({ item }) => (
            <CharacterCard item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
