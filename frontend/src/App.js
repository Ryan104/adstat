import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
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

function App() {
  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <Redirect from="/" to="/products" />
      <div className={classes.root}>
        <NavBar />
        <div className={classes.content}>
          <Switch>
            <Route exact path="/products">
              <ProductPage />
            </Route>
            <Route path="/advertisers">
              <Typography variant="h1">advertisers</Typography>
            </Route>
            <Route path="/reports">
              <Typography variant="h1">reports</Typography>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
