export interface IIdetify {
  id: number
}

export interface ICreateDate {
  createDate: Date
}

export interface IUpdateDate {
  updateDate: Date
}

export type IFixDate = ICreateDate & IUpdateDate