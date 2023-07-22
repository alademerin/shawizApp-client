import React, { useState } from "react";
import { StyleSheet, ScrollView, View, KeyboardAvoidingView, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Bold, Container, TinyText } from "./LoginScreen.styled";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import { Text } from "./LoginScreen.styled";
import TextInput from "../../components/TextInput/TextInput";
import { AuthButton } from "../../components/Buttons/Buttons";
import { useLazyQuery, gql } from "@apollo/client";

import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSclice";
import Toast from "react-native-toast-message";

const save = async (key, value) => {
  await SecureStore.setItemAsync(key, value);
};

const LOGIN = gql`
  query Login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;

const LoginScreen = () => {
  const dispatch = useDispatch(authActions.login());

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [getUser, { loading, data, error }] = useLazyQuery(LOGIN, {
    onCompleted: async (data) => {
      const token = data.login.token;
      const user = data.login.user;
      try {
        await save("token", JSON.stringify(token));
        await save("user", JSON.stringify(user));
      } catch (err) {
        console.log(err);
      }
      dispatch(authActions.login({ user, token }));
    },
    onError: () => {
      console.log(error.title);
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Login Error",
        text2: error.message,
      });
    },
  });
  const loginUser = () => {
    getUser({ variables: { userName, password } });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.scrollViewContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.contentContainer}>
              <View style={{ marginTop: 30 }}>
                <Title title="Login" underline="80px" />
              </View>
              <Container>
                <Text>Let's get you signed into your account.</Text>
                <TextInput
                  label="Username"
                  placeholder="username or email"
                  onChangeText={(text) => setUserName(text)}
                />
                <TextInput
                  label="Password"
                  password={true}
                  placeholder="password"
                  onChangeText={(text) => setPassword(text)}
                />
              </Container>
            </View>
          </ScrollView>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: "#ddd",
              // marginTop: 20,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
{/* <Button title="reset" onClick={()=>{SecureStore.deleteItemAsync("token")}}/> */}
            <TinyText>
              Don't have an account? <Bold>Sign Up</Bold>
            </TinyText>
            <AuthButton title="Sign In" authPressed={() => loginUser()} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
  },
  contentContainer: {},
});

export default LoginScreen;
