import React from 'react'
import HomeLayout from '../layouts/Home'
import AboutView from '../views/About'
import HomeView from '../views/Home'

export interface RouteRaw {
  path: string
  element?: React.ReactElement
  index?: boolean
  children?: RouteRaw[]
}

export default [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: '/about',
        element: <AboutView />,
      },
    ],
  },
] as RouteRaw[]
