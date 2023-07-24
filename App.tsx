import { StyleSheet, Text, View } from "react-native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  createHttpLink,
  split,
} from "@apollo/client";
import { store } from "./src/store/store.js";
import { Provider } from "react-redux";
import AppContainer from "./src/screens/AppContainer";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import * as SecureStore from "expo-secure-store";
import { setContext } from "@apollo/client/link/context";

import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "@apollo/client/link/ws";

import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink(
  new SubscriptionClient("ws://172.20.10.3:5000/graphql", {
    connectionParams: {
      token: async () => await SecureStore.getItemAsync("token"),
    },
  })
);

const httpLink = createHttpLink({
  uri: "http://172.20.10.3:5000/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  const authorization = await SecureStore.getItemAsync("token");
  const token = JSON.parse(authorization);
  return {
    headers: {
      ...headers,
      token: `Bearer ${token}`,
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
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
