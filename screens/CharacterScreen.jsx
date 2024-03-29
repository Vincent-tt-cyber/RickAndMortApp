import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React from "react";
import axios from "axios";
import { EpisodeCard } from "../components/EpisodeCard";

const { width, height } = Dimensions.get("window");

export const CharacterScreen = ({ route, navigate }) => {
  const [episodes, setEpisodes] = React.useState([]);

  const [isLoadig, setIsLoadig] = React.useState(true);
  const { item } = route.params;

  const getEpisodes = async (episodesURL) => {
    setIsLoadig(true);
    await episodesURL.map((episodeURL) => {
      axios
        .get(episodeURL)
        .then(({ data }) => {
          const newEpisode = data;
          // console.log(data);
          setEpisodes((prevObj) => [...prevObj, newEpisode]);
        })
        .finally(() => setIsLoadig(false));

  const { item } = route.params;

  const getEpisodes = () => {
    // sdjfjksdhfjksdf
    // console.log("Запрос на эпизоды");

    axios.get("https://rickandmortyapi.com/api/episode").then(({ data }) => {
      // console.log("Эпизоды =======> ", data.results);
      setEpisodes(data.results);
    });
  };

  React.useEffect(() => {
    getEpisodes(item.episode);
    getEpisodes();
  }, []);

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
                paddingTop: 10,
              }}
            >
              {item.name}
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
              <Text
                style={{ color: "gray", fontSize: 16, textAlign: "center" }}
              >
                Last known location:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "900",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
<<<<<<< HEAD
                {item.location.name}
              </Text>
            </View>
            <View style={{ paddingBottom: 10 }}>
              <Text
                style={{ color: "gray", fontSize: 16, textAlign: "center" }}
              >
                Gender:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "900",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {item.gender}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <FlatList
            data={episodes}
            renderItem={({ item }) => <EpisodeCard item={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
