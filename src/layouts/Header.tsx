import React from 'react'
import style from './Home.module.scss'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import HomeLayoutNav from './Nav'
import HomeLayoutSearch from './Search'

export default function HomeLayoutHeader() {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <HomeLayoutNav />
        <div className={style.right}>
          <HomeLayoutSearch />
        </div>
      </div>
    </div>
  )
}
