import { EntityModel } from "@midwayjs/orm";
import { Column, CreateDateColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import IGoods, { Type } from "../../types/Goods";
import Image from "./Image";
import User from "./User";

@EntityModel()
export default class Goods implements IGoods {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  title: string
  @Column()
  content: string
  @Column({ type: 'enum', enum: Type })
  type: Type
  @Column({ default: false })
  saled?: boolean
  @Column()
  price: number
  @CreateDateColumn()
  createDate: Date
  @OneToMany(() => Image, img => img.goods)
  images: Image[]
  @ManyToOne(() => User, user => user.goodses)
  user: User
}