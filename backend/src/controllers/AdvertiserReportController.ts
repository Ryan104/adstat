import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AdvertiserReport } from "../entity/AdvertiserReport";

export class AdvertiserReportController {
  async index(req: Request, res: Response) {
    const reports = await getRepository(AdvertiserReport).find();
    res.json(reports);
  }

  async show(req: Request, res: Response) {
    try {
      const report = await getRepository(AdvertiserReport).findOneOrFail(
        req.params.id
      );
      res.json(report);
    } catch (e) {
      res.status(404).json({ error: "Requested resource cannot be found." });
    }
  }
}
