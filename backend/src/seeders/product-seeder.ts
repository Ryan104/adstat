import { Product } from "../entity/Product";
import { parseFromCsv } from "../parse-from-csv";
import { Connection } from "typeorm";

export async function seed(connection: Connection) {
  const repo = connection.getRepository(Product);
  const data = await parseFromCsv("import-data/input-data/product-list.csv");

  const products = data.map((productData: { [product: string]: string }) => {
    const product = new Product();
    product.name = productData.product;
    return product;
  });

  await repo.save(products);
}
