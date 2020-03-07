import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import { Product } from "./Product";
import { AdvertiserSource } from "./AdvertiserSource";

@Entity()
export class AdvertiserReport {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("timestamp")
  reportDate!: Date;

  @Column({ type: "int" })
  clicks!: number;

  @Column()
  fileName!: string;

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
