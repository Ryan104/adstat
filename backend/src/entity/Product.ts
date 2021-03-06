import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { AdvertiserReport } from "./AdvertiserReport";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(
    type => AdvertiserReport,
    advertiserReport => advertiserReport.product
  )
  advertiserReports!: AdvertiserReport[];

  totalClicks?: number;

  getClicks() {
    this.totalClicks = this.advertiserReports.reduce(
      (sum, report) => sum + report.clicks,
      0
    );
  }

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;
}
