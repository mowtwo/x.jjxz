import { IndexRouteProps, Route } from 'react-router'
import React from 'react'
import { RouteRaw } from '../routes'

export default function bindRoute(routePropsArray: RouteRaw[], topPath = '') {
  return routePropsArray.map((props) => {
    const { children = [], path, index = false, ...otherProps } = props
    const resolvePath = topPath + (path ?? 'index')
    if (index) {
      const indexRouteProps: IndexRouteProps = {
        index,
        element: otherProps.element,
      }
      return <Route {...indexRouteProps} key={resolvePath}></Route>
    } else {
      return (
        <Route {...otherProps} key={resolvePath} path={path}>
          {children.length > 0 ? bindRoute(children, resolvePath) : ''}
        </Route>
      )
    }
  })
}
