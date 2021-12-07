import { EntityModel } from "@midwayjs/orm";
import { Column, CreateDateColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import IImage from "../../types/Image";
import Goods from "./Goods";

@EntityModel()
export default class Image implements IImage {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  src: string
  @CreateDateColumn()
  createDate: Date
  @ManyToOne(() => Goods, goods => goods.images)
  goods: Goods
}