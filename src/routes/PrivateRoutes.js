import React from 'react';
import { Redirect, Route } from 'react-router';
import getCookie from './../helpers/getCookie';

const PrivateRoutes = ({ component: Component, ...rest }) => {

  //get cookie by name
  const token = getCookie('token');

  return (
    <Route
      {...rest}
      render={props => token ? ( 
        //If token exist
        <Component {...props} />
      ) : (
        //Else
        <Redirect to="/login" />
      ) }
    />
  )
}

export default PrivateRoutes;
