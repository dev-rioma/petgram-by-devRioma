import React from 'react'
import reactDom from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-by-devrioma-e63s5rlxw-dev-rioma.vercel.app/graphql',
  cache: new InMemoryCache()
})

reactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app')
)
