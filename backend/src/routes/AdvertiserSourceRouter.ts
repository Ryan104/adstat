import express, { Request, Response } from "express";
import { advertiserSourceController } from "../controllers";

export const router = express.Router({
  strict: true
});

router.get("/:id", (req: Request, res: Response) => {
  advertiserSourceController.show(req, res);
});

router.get("/", (req: Request, res: Response) => {
  advertiserSourceController.index(req, res);
});
