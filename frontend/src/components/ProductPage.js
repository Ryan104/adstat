import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ProductList } from "./ProductList";
import { SidebarLayout } from "./SidebarLayout";
import {
  get as getProducts,
  getOne as getProduct
} from "../repositories/product-repository";
import { ProductDashboard } from "./ProductDashboard";

export const ProductPage = () => {
  const [products, setProducts] = useState({
    list: [],
    isLoadingProductList: false,
    selectedId: null,
    selectedProduct: null,
    isLoadingProduct: false
  });
  useEffect(() => {
    const fetchProducts = async () => {
      setProducts({ ...products, isLoadingProductList: true });
      try {
        const productList = await getProducts();
        setProducts({ list: productList, isLoadingProductList: false });
      } catch (e) {
        console.log(e);
        setProducts({ ...products, isLoadingProductList: false });
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProduct = async id => {
      try {
        setProducts({ ...products, isLoadingProduct: true });
        const product = await getProduct(id);
        setProducts({
          ...products,
          isLoadingProduct: false,
          selectedProduct: product
        });
      } catch (e) {
        console.log(e);
        setProducts({
          ...products,
          isLoadingProduct: false,
          selectedProduct: null
        });
      }
    };
    if (products.selectedId) {
      fetchProduct(products.selectedId);
    }
  }, [products.selectedId]);

  const handleSelectProduct = productId => {
    setProducts({ ...products, selectedId: productId });
  };

  if (!products.selectedId && products.list.length) {
    handleSelectProduct(products.list[0].id)
  }

  const listContent = products.isLoadingProductList ? (
    <CircularProgress />
  ) : (
    <ProductList
      onSelect={handleSelectProduct}
      selectedId={products.selectedId}
      products={products.list}
    />
  );

  const mainContent = products.isLoadingProduct ? (
    <CircularProgress />
  ) : products.selectedProduct ? (
    <ProductDashboard product={products.selectedProduct} />
  ) : null;

  return (
    <SidebarLayout primaryContent={mainContent} sideBarContent={listContent} />
  );
};
