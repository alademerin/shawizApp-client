import * as SecureStore from "expo-secure-store";
// import { getStoredCountry, getCountryAsync, getLocationAsync } from "./../helpers/location";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { split } from 'apollo-link'
// import { HttpLink } from 'apollo-link-http'
// import { WebSocketLink } from 'apollo-link-ws'
import { setContext } from "apollo-link-context";
// import { getMainDefinition } from 'apollo-utilities'

// import { graphQL_URL, ws_graphQL_URL } from './../helpers/constants'

const httpLink = new HttpLink({
  uri: `172.20.10.3:5000/graphql`,
});

// const wsLink = new WebSocketLink({
//   uri: 172.20.10.3:5000,
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: async () => await SecureStore.getItemAsync('authToken'),
//     },
//   },
// })

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const [authToken, country] = await Promise.all([
    SecureStore.getItemAsync("authToken"),
    // await getStoredCountry() || await getCountryAsync() || 'GH',
  ]);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      token: authToken ? `Bearer ${authToken}` : null,
      // country,
      // language,
    },
  };
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  // wsLink,
  authLink.concat(httpLink)
);

export default apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: false,
    dataIdFromObject: (object) => object.key || null,
  }),
  // connectToDevTools: true,
});
