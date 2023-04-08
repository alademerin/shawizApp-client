import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./src/components/Navigation";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { store } from "./src/store/store.js";
import { Provider, useSelector } from "react-redux";
import AppContainer from "./src/screens/AppContainer";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: "http://172.20.10.3:5000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
      <Toast/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
  },
});
