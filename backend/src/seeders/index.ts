import { seed as advertiserSourceSeeder } from "./advertiser-source-seeder";
import { seed as advertiserReportSeeder } from "./advertiser-report-seeder";
import { seed as productSeeder } from "./product-seeder";
import { Connection } from "typeorm";

export const seed = async (connection: Connection) => {
  await advertiserSourceSeeder(connection);
  await productSeeder(connection);

  // Seed report info for testing -- in future this should be done on demand using a queue
  await advertiserReportSeeder(connection, { advertiserId: 1 });
  await advertiserReportSeeder(connection, { advertiserId: 2 });
  await advertiserReportSeeder(connection, { advertiserId: 3 });
  await advertiserReportSeeder(connection, { advertiserId: 4 });
  await advertiserReportSeeder(connection, { advertiserId: 5 });
};
