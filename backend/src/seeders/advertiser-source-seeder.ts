import { AdvertiserSource } from "../entity/AdvertiserSource";
import { parseFromCsv } from "../parse-from-csv";
import { Connection } from "typeorm";

export async function seed(connection: Connection) {
  const repo = connection.getRepository(AdvertiserSource);
  const data = await parseFromCsv(
    "import-data/input-data/advertiser-sources.csv"
  );

  const advertisers = data.map((sourceData: { [Source: string]: string }) => {
    const source = new AdvertiserSource();
    source.name = sourceData.Source;
    return source;
  });

  await repo.save(advertisers);
}
