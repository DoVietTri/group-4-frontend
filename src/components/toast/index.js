import React from 'react';
import { connect } from 'react-redux';
import { Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { hideToast } from '../../store/actions/uiAction';
import hasJSONStructure from '../../helpers/hasJSONStructure';

const Toast = (props) => {

  const showMessage = (message) => {
    if (hasJSONStructure(message)) {
      let arr = [];
      let jsonContent = JSON.parse(message);

      for (let key in jsonContent) {
        arr = [...arr, <Typography variant="body2" key={key} >{`${key}: ${jsonContent[key]}`}</Typography>]
      }
      return arr;
    } else {
      return message;
    }
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={props.isOpenToast}
      onClose={() => props.handleCloseToast()}
      autoHideDuration={5000}
    >
      <Alert
        onClose={() => props.handleCloseToast()}
        elevation={6}
        variant="filled"
        severity={props.typeToast ? props.typeToast : 'success'}
      >
        {showMessage(props.message)}
      </Alert>
    </Snackbar>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isOpenToast: state.ui.toast.isOpenToast,
    typeToast: state.ui.toast.typeToast,
    message: state.ui.toast.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleCloseToast: () => {
      dispatch(hideToast());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
