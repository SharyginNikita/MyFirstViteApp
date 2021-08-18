import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { createApolloProvider } from "@vue/apollo-option";

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_APOLLO_CLIENT_URL,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const basic = localStorage.getItem("basic");
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: basic ? `Basic ${basic}` : "",
        },
    };
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
});

export default apolloProvider;
