import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://unipump-contracts.onrender.com/graphql",
  cache: new InMemoryCache(),
})

export default client
