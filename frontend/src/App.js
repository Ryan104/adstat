import React from "react";

import Container from "@material-ui/core/Container";
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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
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
      <Redirect from="/" to="/products" />
      <div className={classes.root}>
        <NavBar />
        <Container className={classes.content}>
          <Switch>
            <Route exact path="/products">
              <Typography variant="h1">products</Typography>
            </Route>
            <Route path="/advertisers">
              <Typography variant="h1">advertisers</Typography>
            </Route>
            <Route path="/reports">
              <Typography variant="h1">reports</Typography>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
