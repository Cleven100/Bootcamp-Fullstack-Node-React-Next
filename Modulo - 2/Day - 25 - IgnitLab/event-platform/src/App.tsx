import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'
import Event from './pages/Event'
import { ApolloProvider } from "@apollo/client"
import { client } from './lib/apollo'


const App = () => {
  return (
    <div>
         <ApolloProvider client={client}>
           <BrowserRouter>
             <Router />
           </BrowserRouter>       
         </ApolloProvider>
      
    
      
      </div>
  )
}

export default App