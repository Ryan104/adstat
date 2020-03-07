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
export class AdvertiserSource {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @OneToMany(
    type => AdvertiserReport,
    advertiserReport => advertiserReport.advertiserSource
  )
  advertiserReports!: AdvertiserReport[];

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt!: string;
}
