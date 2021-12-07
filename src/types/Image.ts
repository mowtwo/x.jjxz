import { ICreateDate, IIdetify } from "./common";
import IGoods from "./Goods";

export default interface IImage extends IIdetify, ICreateDate {
  src: string
  goods: IGoods
}