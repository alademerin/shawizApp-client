import { StyleSheet, Text, View } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from "@apollo/client";
import { store } from "./src/store/store.js";
import { Provider } from "react-redux";
import AppContainer from "./src/screens/AppContainer";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import * as SecureStore from "expo-secure-store";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://172.20.10.3:5000/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  const authorization = await SecureStore.getItemAsync("token");
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${authorization}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
      <Toast />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
  },
});
