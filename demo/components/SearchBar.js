import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../constants/color";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search first name" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    borderWidth: 4,
    borderColor: colors.header,
    height: 40,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 20,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 20,
  },
});
export default SearchBar;
