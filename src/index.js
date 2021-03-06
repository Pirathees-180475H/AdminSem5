import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
import { ApolloClient,ApolloProvider,InMemoryCache,createHttpLink } from "@apollo/client";


const link = createHttpLink({
  uri:"https://shop-on-wheel-server.veensiva10.workers.dev/",
  useGETForQueries:true,
  credentials: 'same-origin'
});
const client = new ApolloClient({
    link,
    cache:new InMemoryCache(),
  
})

ReactDOM.render(
  <ApolloProvider client={client} >
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>
  </ApolloProvider>
  ,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
