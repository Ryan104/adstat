import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    overflow: "hidden",
    display: "flex"
  },
  scrollList: {
    height: "100%",
    boxShadow: theme.shadows[1]
  },
  content: {
    height: "100%"
  }
}));

export const SidebarLayout = ({ sideBarContent, primaryContent }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2} className={classes.scrollList}>
          {sideBarContent}
        </Grid>
        <Grid className={classes.content} item xs={10}>
          {primaryContent}
        </Grid>
      </Grid>
    </div>
  );
};
