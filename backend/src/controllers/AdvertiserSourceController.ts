import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { IBaseController } from "./IBaseController";
import { AdvertiserSource } from "../entity/AdvertiserSource";

export class AdvertiserSourceController implements IBaseController {
  async index(req: Request, res: Response) {
    const advertisers = await getRepository(AdvertiserSource).find();
    res.json(advertisers);
  }

  async show(req: Request, res: Response) {
    try {
      const advertiser = await getRepository(AdvertiserSource).findOneOrFail(
        req.params.id
      );
      res.json(advertiser);
    } catch (e) {
      res.status(404).json({ error: "Requested resource cannot be found." });
    }
  }
}
