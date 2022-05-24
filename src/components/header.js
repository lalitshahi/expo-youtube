import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useHover } from "react-native-web-hooks";

const Header = () => {
  const [search, setSearch] = useState("");
  const micRef = useRef(null);
  const videoRef = useRef(null);
  const appRef = useRef(null);
  const notificationRef = useRef(null);
  const isMicHovered = useHover(micRef);
  const isVideoHovered = useHover(videoRef);
  const isAppHovered = useHover(appRef);
  const isNotifyHovered = useHover(notificationRef);

  return (
    <View style={styles.container}>
      {/* <Image source={require("./../assets/YouTube.png")} style={styles.logo} /> */}
      <View style={styles.searchAndMic}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Search"
          />
          <View style={styles.searchIcon}>
            <Icon name="md-search-outline" size={24} color="#333" />
          </View>
        </View>
        <View
          style={[
            styles.icons,
            styles.micIcon,
            isMicHovered && styles.iconHover,
          ]}
          ref={micRef}
        >
          <Icon name="ios-mic" size={24} color="#333" />
        </View>
      </View>
      <View style={styles.rightIcons}>
        <View
          style={[styles.icons, isVideoHovered && styles.iconHover]}
          ref={videoRef}
        >
          <Icon name="videocam-outline" size={30} color="#333" />
        </View>
        <View
          style={[styles.icons, isAppHovered && styles.iconHover]}
          ref={appRef}
        >
          <Icon name="apps-outline" size={24} color="#333" />
        </View>
        <View
          style={[styles.icons, isNotifyHovered && styles.iconHover]}
          ref={notificationRef}
        >
          <Icon name="notifications-outline" size={24} color="#333" />
        </View>
        <View style={[styles.icons]}>
          <Image
            source={require("./../assets/snack-icon.png")}
            style={styles.userImg}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  // logo: {
  //   width: 120,
  //   height: 56,
  // },
  searchAndMic: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  searchBar: {
    flexDirection: "row",
    height: 40,
    minWidth: 300,
    flex: 0.7,
    marginLeft: 25,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
  },
  searchIcon: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    // cursor: "pointer",
  },
  input: {
    padding: 10,
    flex: 1,
  },
  rightIcons: {
    marginLeft: "auto",
    flexDirection: "row",
  },
  userImg: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#333",
    marginHorizontal: 8,
  },
  iconHover: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  micIcon: {
    backgroundColor: "rgba(0, 0, 0, 0.02)",
  },
  icons: {
    width: 40,
    // cursor: "pointer",
    height: 40,
    marginHorizontal: 8,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
