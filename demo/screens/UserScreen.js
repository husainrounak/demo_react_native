import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RoundButton from "../components/RoundButton";
import SearchBar from "../components/SearchBar";
import UserInput from "../components/UserInput";
import UserList from "../components/UserList";

const UserScreen = () => {
  const [userInput, setUserInput] = useState(false);
  const [users, setUsers] = useState([]);

  const findUsers = async () => {
    const result = await AsyncStorage.getItem("users");
    console.log(result);
    if (result !== null) setUsers(JSON.parse(result));
  };

  useEffect(() => {
    //findUsers();
    AsyncStorage.clear();
  }, []);

  const handleOnSubmit = async (fName, lName, gender, email) => {
    const user = {
      uid: Math.floor(Math.random() * 100000 + 1),
      f_name: fName,
      l_name: lName,
      gender: gender,
      e_mail: email,
    };
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <SearchBar />
        </View>
        <View>
          <FlatList
            data={users}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 15,
            }}
            keyExtractor={(item) => item.uid.toString()}
            renderItem={({ item }) => <UserList item={item} />}
          />
        </View>
      </View>
      <View>
        <RoundButton
          onPress={() => setUserInput(true)}
          antIconName="plus"
          style={styles.addbtn}
        />
      </View>

      <UserInput
        visible={userInput}
        OnClose={() => setUserInput(false)}
        OnSubmit={handleOnSubmit}
      />
    </>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    zIndex: 1,
    paddingTop: 5,
  },
  addbtn: {
    position: "absolute",
    right: 30,
    bottom: 30,
    zIndex: 1,
  },
});
