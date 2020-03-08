import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Input from "@material-ui/core/Input";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  list: {
    overflow: "auto",
    flex: 1
  },
  item: {
    borderBottom: "1px solid #ccc"
  }
}));

export const ProductList = ({ products }) => {
  const classes = useStyles();

  const productList = products.map(product => (
    <ListItem className={classes.item} key={product.id} button>
      <ListItemText primary={product.name} />
    </ListItem>
  ));

  return (
    <div className={classes.root}>
      <ListItem>
        <Input placeholder="search..." />
      </ListItem>
      <List
        component="nav"
        className={classes.list}
        aria-label="mailbox folders"
      >
        {productList}
      </List>
    </div>
  );
};
