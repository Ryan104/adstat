import { seed as advertiserSourceSeeder } from "./advertiser-source-seeder";
import { seed as productSeeder } from "./product-seeder";
import { Connection } from "typeorm";

export const seed = async (connection: Connection) => {
  await advertiserSourceSeeder(connection);
  await productSeeder(connection);
};
