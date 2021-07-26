import React from 'react'
import { Route } from 'react-router'

const PublicRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (<Component {...props} />)}
    />
  )
}

export default PublicRoutes
