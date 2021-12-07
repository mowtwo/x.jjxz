import { ICreateDate, IIdetify } from "./common";
import IImage from "./Image";
import IUser from "./User";

export default interface IGoods extends IIdetify, ICreateDate {
  title: string
  content: string
  type: Type
  saled?: boolean
  images: IImage[]
  user: IUser
  price: number
}

export enum Type {
  idle = 'idle',
  sublease = 'sublease',
  spell = 'spell'
}