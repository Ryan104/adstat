import { Connection, getRepository } from "typeorm";
import { parseFromCsv } from "../parse-from-csv";
import { AdvertiserReport } from "../entity/AdvertiserReport";
import { AdReportLoader } from "../services/data-loader/AdReportLoader";
import { AdvertiserSource } from "../entity/AdvertiserSource";

export async function seed(
  connection: Connection,
  { advertiserId }: { advertiserId: number }
) {
  const advertiser = await getRepository(AdvertiserSource).findOneOrFail(
    advertiserId
  );
  const loader = new AdReportLoader(advertiser);
  await loader.loadAvailableReports();
}
