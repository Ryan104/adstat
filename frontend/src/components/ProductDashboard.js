import React from "react";
import { Typography, Container, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ProductClicksLineChart } from "./product-charts/ProductClicksLineChart";
import { ProductClicksAreaChart } from "./product-charts/ProductClicksAreaChart";
import { productClicksOverTime } from "../chart-data-helpers/product-clicks-over-time";
import { productClicksPerAdvertiser } from "../chart-data-helpers/product-clicks-per-advertiser";
import { ProductAdvertiserClicksPieChart } from "./product-charts/ProductAdvertiserClicksPieChart";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingTop: "1em"
  },
  titleContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.main
  },
  headerBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1em",
    marginBottom: "1em"
  },
  contentArea: {
    flex: 1,
    overflow: "auto"
  }
}));

export const ProductDashboard = ({ product }) => {
  const classes = useStyles();
  const { chartData, chartLines: advertiserColors } = productClicksOverTime(
    product.advertiserReports
  );

  const clicksPerAdvertiser = productClicksPerAdvertiser(
    product.advertiserReports
  ).map(adClicks => ({
    ...adClicks,
    color: advertiserColors.find(c => c.name === adClicks.name).color
  }));

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid className={classes.contentArea} container spacing={2}>
        <Grid item xs={12} lg={2}>
          <Card className={classes.titleContainer}>
            <Typography variant="h1">{product.name}</Typography>
            <Typography variant="subtitle1">
              total clicks:
              {product.totalClicks}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} lg={10}>
          <Card>
            <ProductClicksAreaChart
              chartData={chartData}
              chartLines={advertiserColors}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <ProductClicksLineChart
              chartData={chartData}
              chartLines={advertiserColors}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <ProductAdvertiserClicksPieChart chartData={clicksPerAdvertiser} />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
