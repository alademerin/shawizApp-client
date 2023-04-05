import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, TextInputField } from "./TextInput.styled";

const TextInput = ({ label, password, placeholder, onChangeText}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInputField placeholder={placeholder} secureTextEntry={password} onChangeText={onChangeText}/>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({});
