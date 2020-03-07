import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { advertiserSourceRouter, productRouter } from "./routes";

createConnection()
  .then(async connection => {
    const app = express();
    const port = process.env.PORT || 3000;

    // define a route handler for the default home page
    app.get("/", (req, res) => {
      res.send("Hellooo world!");
    });

    app.use(express.json());

    app.use("/api/advertiser", advertiserSourceRouter);
    app.use("/api/product", productRouter);

    // start the Express server
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  })
  .catch(error => console.log(error));
