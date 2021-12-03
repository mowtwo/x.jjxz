import React from 'react'
import style from './App.module.scss'
import { Routes } from 'react-router'
import routes from './routes'
import bindRoute from './utils/bindRoute'

function App() {
  return (
    <div className={style.app}>
      <Routes>{bindRoute(routes)}</Routes>
    </div>
  )
}

export default App
