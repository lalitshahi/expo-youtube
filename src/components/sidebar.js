import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Icon name="menu-outline" size={30} color="#606060" />
        <Image
          source={require("./../assets/YouTube.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.menus}>
        <View style={[styles.menuBar, styles.selected]}>
          <Icon
            name="home-outline"
            size={20}
            color="#111"
            style={styles.icon}
          />
          <Text>Home</Text>
        </View>
        <View style={styles.menuBar}>
          <Icon
            name="compass-outline"
            size={20}
            color="#111"
            style={styles.icon}
          />
          <Text>Explore</Text>
        </View>
        <View style={styles.menuBar}>
          <Icon
            name="md-rocket-outline"
            size={20}
            color="#111"
            style={styles.icon}
          />
          <Text>Shorts</Text>
        </View>
        <View style={styles.menuBar}>
          <Icon
            name="duplicate-outline"
            size={20}
            color="#111"
            style={styles.icon}
          />
          <Text>Subscriptions</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.menuBar}>
          <Icon
            name="albums-outline"
            size={20}
            color="#111"
            style={styles.icon}
          />
          <Text>Library</Text>
        </View>
        <View style={styles.menuBar}>
          <Icon
            name="md-timer-outline"
            size={20}
            color="#111"
            style={styles.icon}
          />
          <Text>History</Text>
        </View>
        <View style={styles.menuBar}>
          <Icon
            name="md-time-outline"
            size={20}
            color="#111"
            style={styles.icon}
          />
          <Text>Watch Later</Text>
        </View>
        <View style={styles.menuBar}>
          <Icon
            name="thumbs-up-outline"
            size={20}
            color="#111"
            style={styles.icon}
          />
          <Text>Liked Videos</Text>
        </View>
      </View>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: 20,
  },
  headerLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  menus: {
    marginTop: 10,
  },
  menuBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  selected: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginVertical: 15,
    width: 200,
    height: 1,
  },
  icon: {
    marginRight: 20,
  },
  logo: {
    width: 120,
    height: 56,
  },
});
