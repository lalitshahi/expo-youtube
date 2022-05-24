import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const HeaderFilters = () => {
  const filters = [
    { value: "All", id: 0, selected: true },
    { value: "Coding", id: 1 },
    { value: "JavaScript", id: 2 },
    { value: "Python", id: 3 },
    { value: "CSS", id: 4 },
  ];
  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <Pressable
          style={[styles.filter, filter.selected && styles.selected]}
          key={filter.id}
        >
          <Text style={[filter.selected && styles.selectedText]}>
            {filter.value}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  filter: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginHorizontal: 8,
    borderColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  selected: {
    backgroundColor: "#333",
  },
  selectedText: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default HeaderFilters;
