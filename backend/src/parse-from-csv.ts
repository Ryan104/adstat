import csv from "csv-parser";
import fs from "fs";

export const parseFromCsv = (filePath: string): Promise<any[]> => {
  return new Promise(res => {
    const results: any[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", data => {
        results.push(data);
      })
      .on("end", () => {
        res(results);
      });
  });
};
