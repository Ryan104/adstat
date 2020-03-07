import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from "typeorm";
import { Product } from "./Product";
import { AdvertiserSource } from "./AdvertiserSource";

@Entity()
export class AdvertiserReport {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "date" })
  reportDate!: string;

  @Column({ type: "int" })
  clicks!: number;

  @ManyToOne(
    type => Product,
    product => product.advertiserReports
  )
  product!: Product;

  @ManyToOne(
    type => AdvertiserSource,
    advertiserSource => advertiserSource.advertiserReports
  )
  advertiserSource!: AdvertiserSource;

  @CreateDateColumn()
  createdAt!: string;
}
