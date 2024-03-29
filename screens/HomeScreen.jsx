import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
  Button,
} from "react-native";
import React from "react";
import axios from "axios";
import { CharacterCard } from "../components/CharacterCard";

const { width, height } = Dimensions.get("window");

export const HomeScreen = ({ navigation }) => {
  const [episodes, setEpisodes] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoadig, setIsLoadig] = React.useState(true);

  const getEpisodes = () => {
    setIsLoadig(true);
    if (episodes.length == 0) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=`, page)
        .then(({ data }) => {
          setEpisodes(data.results);
        })
        .finally(() => setIsLoadig(false));
    }
  };

  const loadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  React.useEffect(() => {
    getEpisodes();
  }, [page]);

  return (
    <SafeAreaView>
      <ScrollView>
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
        {isLoadig ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              width,
              height: 300,
            }}
          >
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            <FlatList
              data={episodes}
              renderItem={({ item }) => (
                <CharacterCard item={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
            />
            <Button title="Load more" onPress={() => loadMore()} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
