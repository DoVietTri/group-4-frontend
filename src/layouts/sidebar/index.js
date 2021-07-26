import React from 'react'
import useStyles from './styles'
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Tooltip } from '@material-ui/core';
import clsx from 'clsx';
import {
  CategoryOutlined,
  AssignmentIndOutlined,
  AddOutlined,
  AccountCircle,
  DomainOutlined,
  SupervisorAccount,
  FolderSpecialOutlined,
  Home
} from '@material-ui/icons'
import { ROLE_DEPARTMENT, ROLE_ADMIN } from '../../constants';


export default function SideBar(props) {
  const classes = useStyles();
  return (
    <Drawer
      className={clsx(classes.nav, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      variant="permanent"
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open
        })
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List className={classes.list}>

        <Tooltip
          title="Home"
          placement="right"
        >
          <ListItem button key="Home" component={NavLink} to="/" activeClassName={classes.active} exact={true} >
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary={<Typography variant="body1">Home</Typography>} />
          </ListItem>
        </Tooltip>

        <Tooltip
          title="Add request"
          placement="right"
        >
          <ListItem button key="addRequest" component={NavLink} to="/requests/create" activeClassName={classes.active} >
            <ListItemIcon><AddOutlined /></ListItemIcon>
            <ListItemText primary={<Typography variant="body1">Add request</Typography>} />
          </ListItem>
        </Tooltip>

        <Tooltip
          title="My requests"
          placement="right"
        >
          <ListItem button key="My requests" component={NavLink} to="/my-request" activeClassName={classes.active} >
            <ListItemIcon><AssignmentIndOutlined /></ListItemIcon>
            <ListItemText primary={<Typography variant="body1">My requests</Typography>} />
          </ListItem>
        </Tooltip>

        {props.user.role_id === ROLE_DEPARTMENT ? (
          <Tooltip
            title="Department requests"
            placement="right"
          >
            <ListItem button key="Department requests" component={NavLink} to="/department-request" activeClassName={classes.active} >
              <ListItemIcon className={classes.icon}><FolderSpecialOutlined /></ListItemIcon>
              <ListItemText primary={<Typography variant="body1">Department requests</Typography>} />
            </ListItem>
          </Tooltip>
        ) : ''}

        {props.user.role_id === ROLE_ADMIN ?
          (<>
            <Tooltip
              title="Admin requests"
              placement="right"
            >
              <ListItem button key="adminRequest" component={NavLink} to="/admin-request" activeClassName={classes.active} >
                <ListItemIcon><SupervisorAccount /></ListItemIcon>
                <ListItemText primary={<Typography variant="body1">Admin requests</Typography>} />
              </ListItem>
            </Tooltip>

            <Tooltip
              title="Category"
              placement="right"
            >
              <ListItem button key="Category" component={NavLink} to="/categories" activeClassName={classes.active} >
                <ListItemIcon><CategoryOutlined /></ListItemIcon>
                <ListItemText primary={<Typography variant="body1">Category</Typography>} />
              </ListItem>
            </Tooltip>

            <Tooltip
              title="Department"
              placement="right"
            >
              <ListItem button key="Department" component={NavLink} to="/departments" activeClassName={classes.active} >
                <ListItemIcon><DomainOutlined /></ListItemIcon>
                <ListItemText primary={<Typography variant="body1">Department</Typography>} />
              </ListItem>
            </Tooltip>

            <Tooltip
              title="User"
              placement="right"
            >
              <ListItem button key="userList" component={NavLink} to="/users" activeClassName={classes.active} >
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary={<Typography variant="body1">Users</Typography>} />
              </ListItem>
            </Tooltip>

          </>) : ''}
      </List>
    </Drawer>
  );
}
