import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Header from "../components/header";
import HeaderFilters from "../components/headerFilters";
import Sidebar from "../components/sidebar";
import VideoList from "../containers/videoList";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 875px)",
  });

  console.log({ isMobileDevice });
  return (
    <SafeAreaView style={styles.container}>
      {isMobileDevice ? (
        <View style={styles.homePage}>
          <View style={styles.mainContainer}>
            <Header />
            <HeaderFilters />
            <VideoList />
          </View>
        </View>
      ) : (
        <View style={styles.homePage}>
          <Sidebar />
          <View style={styles.mainContainer}>
            <Header />
            <HeaderFilters />
            <VideoList />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  homePage: {
    flexDirection: "row",
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
