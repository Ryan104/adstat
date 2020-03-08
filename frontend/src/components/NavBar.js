import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  appBar: {
    display: "flex",
    flexDirection: "row"
  },
  tabs: {
    flex: 1
  },
  title: {
    fontStyle: "italic",
    paddingLeft: "0.5em"
  }
}));

export const NavBar = () => {
  let history = useHistory();
  let location = useLocation();
  const classes = useStyles();

  const handleNav = (e, path) => {
    history.push(path);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Hidden xsDown>
        <Typography variant="h4" className={classes.title}>
          adStat
        </Typography>
      </Hidden>
      <Tabs
        className={classes.tabs}
        centered={true}
        value={location.pathname}
        onChange={handleNav}
      >
        <Tab label="Products" value="/products" />
        <Tab label="Advertisers" value="/advertisers" />
        <Tab label="Reports" value="/reports" />
      </Tabs>
    </AppBar>
  );
};
