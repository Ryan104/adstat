import express, { Request, Response } from "express";
import { productController } from "../controllers";

export const router = express.Router({
  strict: true
});

router.get("/:id", (req: Request, res: Response) => {
  productController.show(req, res);
});

router.get("/", (req: Request, res: Response) => {
  productController.index(req, res);
});
