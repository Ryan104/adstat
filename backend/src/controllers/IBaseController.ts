import { Request, Response } from "express";

export interface IBaseController {
  index(req: Request, res: Response): void;
  show(req: Request, res: Response): void;
}
