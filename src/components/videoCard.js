import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Animated,
} from "react-native";
import moment from "moment";
import { Hoverable, useHover } from "react-native-web-hooks";
import Icon from "react-native-vector-icons/Ionicons";

const VideoCard = ({ title, thumbnail, channelTitle, publishedDate }) => {
  const ref = useRef(null);
  const [card, setCard] = useState(false);
  const scale = useRef(new Animated.Value(1)).current;
  const isHovered = useHover(ref);

  const scaleCardUp = () => {
    setCard(true);
    Animated.timing(scale, {
      toValue: 1.2,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const scaleCardDown = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      setCard(false);
    }, 101);
  };

  return (
    <Hoverable
      style={[styles.videoCardContainer, { zIndex: isHovered && 100 }]}
      onHoverIn={scaleCardUp}
      onHoverOut={scaleCardDown}
    >
      <View
        style={[styles.videoCardContainer, { zIndex: isHovered && 100 }]}
        ref={ref}
      >
        <View
          style={[
            styles.container,
            // When these booleans become true, the following styles will be applied...
            // isHovered && {
            //   transform: [{ scale: 1.2 }],
            //   padding: 8,
            //   backgroundColor: "#444",
            //   zIndex: 2,
            //   // position: "absolute",
            // },
            // isFocused && { backgroundColor: "green" },
            // isActive && { backgroundColor: "red" },
          ]}
        >
          <View style={styles.videoThumbnail}>
            <Image style={styles.thumbnails} source={{ uri: thumbnail }} />
            <Text style={styles.duration}>23:12</Text>
          </View>
          <View style={styles.videoInfo}>
            <View style={styles.channelImg}>
              <Image
                style={styles.logo}
                resizeMode="contain"
                source={require("./../assets/YouTube.png")}
              />
            </View>
            <View style={styles.videoDetails}>
              <Text style={styles.title} numberOfLines={2}>
                {title}
              </Text>
              <Text style={styles.channelName}>{channelTitle}</Text>
              <View style={styles.viewCount}>
                <Text style={styles.channelName}>96M Views</Text>
                <Text style={styles.dotSeparator}>•</Text>
                <Text style={styles.channelName}>
                  {moment(publishedDate).format("L")}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {card && (
          <Animated.View
            style={[styles.cardOnHover, { transform: [{ scale: scale }] }]}
          >
            <View style={styles.videoThumbnail}>
              <Image style={styles.thumbnails} source={{ uri: thumbnail }} />
            </View>
            <View style={styles.videoInfo}>
              <View style={styles.channelImg}>
                <Image
                  style={styles.logo}
                  resizeMode="contain"
                  source={require("./../assets/YouTube.png")}
                />
              </View>
              <View style={styles.videoDetails}>
                <Text style={styles.title} numberOfLines={2}>
                  {title}
                </Text>
                <Text style={styles.channelName}>{channelTitle}</Text>
                <View style={styles.viewCount}>
                  <Text style={styles.channelName}>96M Views</Text>
                  <Text style={styles.dotSeparator}>•</Text>
                  <Text style={styles.channelName}>
                    {moment(publishedDate).format("L")}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.buttons}>
              <Pressable style={styles.button}>
                <Icon name="time-outline" color="#606060" size={20} />
                <Text style={styles.text}>WATCH LATER</Text>
              </Pressable>
              <Pressable style={styles.button}>
                <Icon name="ios-list" color="#606060" size={20} />
                <Text style={styles.text}>ADD TO QUEUE</Text>
              </Pressable>
            </View>
          </Animated.View>
        )}
      </View>
    </Hoverable>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  videoCardContainer: {
    position: "relative",
    minWidth: 250,
    maxWidth: "100%",
    maxHeight: 280,
    flex: 1,
    margin: 8,
  },
  container: {
    minWidth: 250,
    maxWidth: "100%",
    flex: 1,
    padding: 8,
    zIndex: -10,
  },
  cardOnHover: {
    position: "absolute",
    minWidth: 280,
    maxWidth: "100%",
    backgroundColor: "#ecf0f1",
    zIndex: 100,
    flex: 1,
    margin: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.38,
  },
  videoThumbnail: {
    width: "100%",
    height: 170,
    backgroundColor: "#111",
  },
  thumbnails: {
    width: "100%",
    height: "100%",
  },
  videoInfo: {
    padding: 8,
    flexDirection: "row",
  },
  channelImg: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 8,
    backgroundColor: "#ddd",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  videoDetails: {
    flexShrink: 1,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  viewCount: {
    flexDirection: "row",
  },
  dotSeparator: {
    marginHorizontal: 8,
    color: "#606060",
  },
  channelName: {
    fontSize: 14,
    color: "#606060",
    fontWeight: "500",
  },
  buttons: {
    margin: 8,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#ddd",
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#606060",
    marginLeft: 8,
  },
  duration: {
    backgroundColor: "#000",
    position: "absolute",
    bottom: 10,
    right: 5,
    opacity: 0.9,
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
    fontWeight: "700",
  },
});
