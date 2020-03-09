import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { IBaseController } from "./IBaseController";
import { Product } from "../entity/Product";

export class ProductController implements IBaseController {
  async index(req: Request, res: Response) {
    const products = await getRepository(Product).find();
    res.json(products);
  }

  async show(req: Request, res: Response) {
    try {
      const product = await getRepository(Product).findOneOrFail(
        req.params.id,
        {
          relations: ["advertiserReports", "advertiserReports.advertiserSource"]
        }
      );
      product.getClicks();
      // const { advertiserReports, ...withoutReports } = product;
      res.json(product);
    } catch (e) {
      res.status(404).json({
        error: "Requested resource cannot be found.",
        message: e.message
      });
    }
  }

  // async update(req: Request, res: Response) {
  //   try {
  //     const product = await getRepository(Product).findOneOrFail(req.params.id);
  //     if (req.body.description !== undefined) {
  //       product.description = req.body.description;
  //       await getRepository(Product).save(product);
  //       res.json(product);
  //     }
  //   } catch (e) {
  //     res.status(404).json({ error: "Requested resource cannot be found." });
  //   }
  // }
}
