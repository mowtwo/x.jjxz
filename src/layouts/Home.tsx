import React, { PropsWithChildren } from 'react'
import { Outlet, useOutlet } from 'react-router'
import HomeLayoutHeader from './Header'
import style from './Home.module.scss'

export interface HomeLayoutProps {}

export default function HomeLayout(props: PropsWithChildren<HomeLayoutProps>) {
  return (
    <div className={style.home}>
      <HomeLayoutHeader />
      <Outlet></Outlet>
    </div>
  )
}
