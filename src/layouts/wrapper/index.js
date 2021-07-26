import { CssBaseline } from '@material-ui/core';
import React, { useEffect } from 'react';
import Header from '../header';
import Sidebar from '../sidebar'
import useStyles from './styles';
import { handleGetMe, handleLogout } from '../../store/actions/authAction';
import { showOrHideSidebar } from '../../store/actions/uiAction';
import { connect } from 'react-redux';

const Wrapper = (props) => {
  const classes = useStyles();
  const { fetchGetMe } = props;

  useEffect(() => {
    fetchGetMe();
    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    props.fetchLogout();
  }

  return (
    <div className={classes.root} >
      <CssBaseline />
      <Header
        open={props.isOpenSidebar}
        setOpen={() => props.handleShowOrHideSidebar()}
        user={props.user}
        handleLogout={handleLogout}
      />
      <Sidebar
        open={props.isOpenSidebar}
        user={props.user}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    isOpenSidebar: state.ui.sidebar.isOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchGetMe: () => {
      dispatch(handleGetMe())
    },
    fetchLogout: () => {
      dispatch(handleLogout())
    },
    handleShowOrHideSidebar: () => {
      dispatch(showOrHideSidebar());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
