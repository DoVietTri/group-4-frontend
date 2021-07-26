import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import history from './history';
import theme from './configs/theme';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import Home from './pages/home';
import Login from './pages/login';
import RequestDetail from './pages/requests/detail';
import CreateRequest from './pages/requests/create';
import ListCategory from './pages/categories';
import UpdateRequest from './pages/requests/update';
import MyRequest from './pages/my-request';
import DepartmentRequest from './pages/department-request'
import AdminRequest from './pages/admin-request';
import ListDepartment from './pages/departments'
import ListUser from './pages/users';
import ForgotPassword from './pages/forgot-password';
import ResetPassword from './pages/reset-password';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Switch>
          <PrivateRoutes exact path="/" component={Home} />
          <PublicRoutes path="/login" component={Login} />
          <PrivateRoutes exact path="/requests/create" component={CreateRequest} />
          <PrivateRoutes exact path="/requests/:id" component={RequestDetail} />
          <PrivateRoutes exact path="/categories" component={ListCategory} />
          <PrivateRoutes exact path="/requests/update/:id" component={UpdateRequest} />
          <PrivateRoutes exact path="/my-request" component={MyRequest} />
          <PrivateRoutes exact path="/department-request" component={DepartmentRequest} />
          <PrivateRoutes exact path="/admin-request" component={AdminRequest} />
          <PrivateRoutes exact path="/departments" component={ListDepartment} />
          <PrivateRoutes exact path="/my-request" component={MyRequest}  />
          <PrivateRoutes exact path="/users" component={ListUser} />
          <PublicRoutes exact path="/forgot-password" component={ForgotPassword} />
          <PublicRoutes exact path="/reset-password" component={ResetPassword} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}


export default App;
