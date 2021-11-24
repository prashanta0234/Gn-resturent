import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Nav from "./Component/Home/Nav/Nav";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Lobster Two", "Lobster", "cursive"].join(","),
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav></Nav>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
