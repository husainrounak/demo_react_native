import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Keyboard,
  StatusBar,
  Alert,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RoundButton from "../components/RoundButton";

import colors from "../constants/color";

const UserInput = ({ visible, OnClose, OnSubmit }) => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleModalClose = () => {
    Keyboard.dismiss();
  };

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === "fname") setFname(text);
    if (valueFor === "lname") setLname(text);
    if (valueFor === "gender") setGender(text);
    if (valueFor === "email") setEmail(text);
  };

  //console.log(fName, lName, gender, email);

  const handleSubmit = () => {
    if (!fName.trim() || !lName.trim() || !gender.trim() || !email.trim()) {
      Alert.alert("No Field can be empty", "Please Fill All the Fields", [
        {
          text: "Okay",
          onPress: () => console.log("Okay Pressed in no field can be empty"),
          style: "cancel",
        },
      ]);
    } else {
      OnSubmit(fName, lName, gender, email);
      setFname("");
      setLname("");
      setGender("");
      setEmail("");
      OnClose();
    }
  };

  const closeModel = () => {
    setFname("");
    setLname("");
    setGender("");
    setEmail("");
    OnClose();
  };

  return (
    <>
      <StatusBar hidden />
      <Modal visible={visible} animationType="slide">
        <View style={styles.container}>
          <View style={styles.headtitle}>
            <Text style={styles.title}>Add New User</Text>
          </View>
          <TextInput
            onChangeText={(text) => handleOnChangeText(text, "fname")}
            placeholder="First Name"
            style={[styles.input, styles.fname]}
            value={fName}
          />
          <TextInput
            onChangeText={(text) => handleOnChangeText(text, "lname")}
            placeholder="Last Name"
            style={[styles.input, styles.lname]}
            value={lName}
          />
          <TextInput
            onChangeText={(text) => handleOnChangeText(text, "gender")}
            placeholder="Gender"
            style={[styles.input, styles.gender]}
            value={gender}
          />
          <TextInput
            onChangeText={(text) => handleOnChangeText(text, "email")}
            placeholder="Email"
            style={[styles.input, styles.email]}
            value={email}
          />

          <View style={styles.btnContainer}>
            <RoundButton antIconName="check" onPress={handleSubmit} />
            <RoundButton
              style={{ marginLeft: 15 }}
              antIconName="close"
              onPress={closeModel}
            />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  headtitle: {
    paddingLeft: 100,
    paddingBottom: 20,
  },
  title: {
    fontSize: 25,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: colors.header,
    fontSize: 20,
  },
  fname: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  lname: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  gender: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  email: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
    backgroundColor: "red",
  },
});

export default UserInput;
