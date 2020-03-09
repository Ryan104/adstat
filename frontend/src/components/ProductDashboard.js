import React from "react";
import { Typography, Container } from "@material-ui/core";
import { ProductClicksLineChart } from "./ProductClicksLineChart";

export const ProductDashboard = ({ product }) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3">{product.name}</Typography>
      <Typography variant="h6">Total Clicks: {product.totalClicks}</Typography>
      <ProductClicksLineChart productReports={product.advertiserReports} />
    </Container>
  );
};
