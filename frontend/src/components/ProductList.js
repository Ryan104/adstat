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
  },
  selectedItem: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  }
}));

export const ProductList = ({ products, selectedId, onSelect }) => {
  const classes = useStyles();

  const handleSelect = id => () => {
    onSelect(id);
  };

  const productList = products.map(product => (
    <ListItem
      className={`${classes.item} ${
        product.id === selectedId ? classes.selectedItem : ""
      }`}
      key={product.id}
      button
      onClick={handleSelect(product.id)}
    >
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
