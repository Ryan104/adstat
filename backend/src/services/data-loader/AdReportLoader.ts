import fs from "fs";
import { getRepository, Repository } from "typeorm";
import { parseFromCsv } from "../../parse-from-csv";
import { AdvertiserReport } from "../../entity/AdvertiserReport";
import { AdvertiserSource } from "../../entity/AdvertiserSource";
import { Product } from "../../entity/Product";

export class AdReportLoader {
  constructor(advertiserSource: AdvertiserSource) {
    this.advertiserSource = advertiserSource;
    this.repo = getRepository(AdvertiserReport);
  }

  advertiserSource: AdvertiserSource;
  private repo: Repository<AdvertiserReport>;
  private PATH_TO_REPORTS: string = "import-data/test-data/";

  async loadAvailableReports(): Promise<number> {
    let count = 0;
    const fileNames = await this.fetchAvailableReports();
    const promises = fileNames.map(async fileName => {
      if (await this.isNewReport(fileName)) {
        const data = await this.fetchReportData(fileName);
        await this.saveReportData(data, fileName);
        count += 1;
      }
    });
    await Promise.all(promises).catch(e => console.log(e));
    return count;
  }

  /**
   * Fetch list of available reports
   *
   * @return {string[]} file names of available reports
   */
  async fetchAvailableReports(): Promise<string[]> {
    return new Promise((res, rej) => {
      fs.readdir(this.PATH_TO_REPORTS, (e, files) => {
        if (e) rej(e);
        const matches = files.filter(
          fileName =>
            fileName
              .toLowerCase()
              .indexOf(this.advertiserSource.name.toLowerCase()) === 0
        );
        res(matches);
      });
    });
  }

  private async saveReportData(
    data: { product: string; clicks: number }[],
    fileName: string
  ) {
    const promises = data.map(async reportData => {
      const product = await getRepository(Product).findOne({
        name: reportData.product
      });
      if (!product) {
        return null;
      }
      const report = new AdvertiserReport();
      report.product = product;
      report.advertiserSource = this.advertiserSource;
      report.clicks = reportData.clicks;
      report.reportDate = this.parseDateFromFileName(fileName);
      report.fileName = fileName;
      return report;
    });
    const resolved = await Promise.all(promises);
    const reports = resolved.filter(rep => !!rep) as AdvertiserReport[];
    return this.repo.save(reports);
  }

  private parseDateFromFileName(fileName: string): Date {
    const match = fileName.match(/\w+_(\d{2})_(\d{2})_(\d{4})/);
    if (!match) throw new Error(`Cannot parse date from filename ${fileName}`);
    const month = +match[1] - 1;
    const day = +match[2];
    const year = +match[3];
    console.log(month, day, year);
    return new Date(year, month, day); //.toISOString();
  }

  private async fetchReportData(filename: string) {
    const data = await parseFromCsv(this.PATH_TO_REPORTS + filename);
    console.log(data);
    return data;
  }

  private async isNewReport(fileName: string) {
    const report = await this.repo.findOne({ fileName });
    return !report;
  }
}
