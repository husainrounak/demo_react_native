import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../constants/color";

const UserList = ({ item }) => {
  const { f_name, l_name, gender, e_mail } = item;
  return (
    <TouchableOpacity style={styles.container}>
      <Text numberOfLines={2}>FirstName:{f_name}</Text>
      <Text numberOfLines={2}>LastName:{l_name}</Text>
      <Text numberOfLines={1}>Gender:{gender}</Text>
      <Text numberOfLines={3}>Email:{e_mail}</Text>
    </TouchableOpacity>
  );
};

const width = Dimensions.get("window").width - 40;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: colors.header,
    width: width / 2 - 10,
    padding: 8,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    //color: colors.LIGHT,
  },
});

export default UserList;
