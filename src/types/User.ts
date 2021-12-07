import { IFixDate, IIdetify } from "./common";

export default interface IUser extends IIdetify, IFixDate {
  nickname: string
  qq?: string
  wechat?: string
  phone: string
}