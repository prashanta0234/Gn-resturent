import { ThemeProvider } from "@emotion/react";

import { createTheme } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Component/Context/AuthProvider";

import Home from "./Route/Home/Home";
import Login from "./Route/Login/Login";
import Profile from "./Route/Profile/Profile";
import Registration from "./Route/Registration/Registration";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Lobster Two", "Lobster", "cursive"].join(","),
    },
    textfield: {
      color: "white",
      borderColor: "white",
    },
    button: {
      cursor: "pointer",
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
