import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { ProductList } from "./ProductList";

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

export const ProductPage = () => {
  const [products, setProducts] = useState({ list: [], isLoading: false });
  const classes = useStyles();
  useEffect(() => {
    const fetchProducts = async () => {
      setProducts({ ...products, isLoading: true });
      try {
        const res = await axios.get("http://localhost:8080/api/product");
        console.log(res.data);
        setProducts({ list: res.data, isLoading: false });
      } catch (e) {
        console.log(e);
        setProducts({ ...products, isLoading: false });
      }
    };
    fetchProducts();
  }, []);

  const content = products.isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={2}>
      <Grid item xs={2} className={classes.scrollList}>
        <ProductList products={products.list} />
      </Grid>
      <Grid item xs={10}>
        <div className={classes.content}></div>
      </Grid>
    </Grid>
  );
  return <div className={classes.root}>{content}</div>;
};
