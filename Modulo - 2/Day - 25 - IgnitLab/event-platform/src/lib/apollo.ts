import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
 uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sq6mwf2dbr01zc3mqdhku4/master',
 cache: new InMemoryCache()
})