import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { ProductList } from "./ProductList";
import { SidebarLayout } from "./SidebarLayout";

export const ProductPage = () => {
  const [products, setProducts] = useState({ list: [], isLoading: false });
  useEffect(() => {
    const fetchProducts = async () => {
      setProducts({ ...products, isLoading: true });
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/product`
        );
        console.log(res.data);
        setProducts({ list: res.data, isLoading: false });
      } catch (e) {
        console.log(e);
        setProducts({ ...products, isLoading: false });
      }
    };
    fetchProducts();
  }, []);

  const listContent = products.isLoading ? (
    <CircularProgress />
  ) : (
    <ProductList products={products.list} />
  );

  return <SidebarLayout sideBarContent={listContent} />;
};
