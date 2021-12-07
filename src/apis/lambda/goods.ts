import IGoods, { Type } from "../../types/Goods"
import dayjs from "dayjs"

const goodsTypes: Type[] = [
  Type.idle,
  Type.spell,
  Type.sublease
]

export default async () => {
  return Array<IGoods>(20).fill(null).map((_, i) => {
    const dt = dayjs('2000-11-02').add(Math.floor(Math.random() * 20), 'y').toDate()
    return {
      id: i,
      title: '测试条目-' + i,
      content: Array(10).fill('测试信息一大堆').join(','),
      type: goodsTypes[Math.floor(Math.random() * 3)],
      saled: Math.random() > 0.8,
      createDate: dt,
      user: {
        nickname: 'Mowtwo',
        phone: '13000000000'
      },
      images: [
        {
          id: i,
          src: 'https://jjxz-1257171806.cos.ap-shanghai.myqcloud.com/QQ%25E5%25A4%25B4%25E5%2583%258F.jpg',
          createDate: dt,
        }
      ],
    } as IGoods
  }).sort((a, b) => {
    return b.createDate.valueOf() - a.createDate.valueOf()
  })
}