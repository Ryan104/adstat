import "reflect-metadata";
import { createConnection } from "typeorm";
import { seed } from "./seeders";

/** Seeds the database. */
async function run() {
  try {
    const connection = await createConnection();
    await seed(connection);
    console.log("Seeding Complete");
  } catch (error) {
    console.log(error);
  }
  process.exit();
}

run();
