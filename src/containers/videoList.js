import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import VideoCard from "../components/videoCard";
import { API_KEY } from "@env";
import { useQuery } from "react-query";
import { data } from "./data";
// const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=programming&type=video&key=${API_KEY}`;

// const fetchVideos = async () => {
// const result = await fetch(apiUrl);
// return result.json();
// };
const VideoList = () => {
  // const { data, status } = useQuery("videos", fetchVideos);
  // console.log({ data: JSON.stringify(data) });
  // console.log({ status });

  const renderVideos = () =>
    data?.items.map((item) => (
      <VideoCard
        key={item.etag}
        title={item.snippet.title}
        thumbnail={item.snippet.thumbnails.medium.url}
        channelTitle={item.snippet.channelTitle}
        publishedDate={item.snippet.publishedAt}
      />
    ));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollViewContainer}>
        {/* <FlatList
          data={data?.items || []}
          renderItem={renderVideos}
          keyExtractor={(item) => item.etag}
          numColumns={numColumns}
        /> */}
        {renderVideos()}
        {/* <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard /> */}
      </View>
    </ScrollView>
  );
};

export default VideoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  scrollViewContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    position: "relative",
  },
});
