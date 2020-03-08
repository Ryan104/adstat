import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ProductList } from "./ProductList";
import { SidebarLayout } from "./SidebarLayout";
import { get as getProducts } from "../repositories/product-repository";

export const ProductPage = () => {
  const [products, setProducts] = useState({ list: [], isLoading: false });
  useEffect(() => {
    const fetchProducts = async () => {
      setProducts({ ...products, isLoading: true });
      try {
        const productList = await getProducts();
        console.log(productList);
        setProducts({ list: productList, isLoading: false });
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
