import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import teal from "@material-ui/core/colors/teal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import { Typography } from "@material-ui/core";
import { NavBar } from "./components/NavBar";
import { ProductPage } from "./components/ProductPage";
import { AdvertiserPage } from "./components/AdvertiserPage";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  content: {
    flex: 1,
    overflow: "hidden"
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: teal
  }
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <Redirect from="/" to="/products" />
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <NavBar />
          <div className={classes.content}>
            <Switch>
              <Route exact path="/products">
                <ProductPage />
              </Route>
              <Route path="/advertisers">
                <AdvertiserPage />
              </Route>
              <Route path="/reports">
                <Typography variant="h1">reports</Typography>
              </Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
