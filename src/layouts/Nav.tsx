import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router'
import style from './Home.module.scss'
import { Type } from '../types/Goods'

export default function HomeLayoutNav() {
  const [query, setQuery] = useSearchParams()
  return (
    <nav className={style.nav}>
      <ul>
        <Link
          to="/?t=all"
          className={
            query.get('t') === 'all' || !query.get('t') ? style.active : ''
          }
        >
          <li>全部</li>
        </Link>
        <Link
          to="/?t=idle"
          className={query.get('t') === Type.idle ? style.active : ''}
        >
          <li>闲置</li>
        </Link>
        <Link
          to="/?t=sublease"
          className={query.get('t') === Type.sublease ? style.active : ''}
        >
          <li>转租</li>
        </Link>
        <Link
          to="/?t=spell"
          className={query.get('t') === Type.spell ? style.active : ''}
        >
          <li>拼单</li>
        </Link>
      </ul>
    </nav>
  )
}
