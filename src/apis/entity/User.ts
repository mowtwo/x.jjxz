import { EntityModel } from "@midwayjs/orm";
import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import IUser from "../../types/User";
import Goods from "./Goods";

@EntityModel()
export default class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  nickname: string
  @Column()
  qq?: string
  @Column()
  wechat?: string
  @Column()
  phone: string
  @CreateDateColumn()
  createDate: Date
  @UpdateDateColumn()
  updateDate: Date

  @OneToMany(() => Goods, goods => goods.user)
  goodses: Goods[]
}