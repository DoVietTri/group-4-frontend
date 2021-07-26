import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import Auth from '../../components/auth';
import useStyles from '../forgot-password/styles';
import { handleResetPassword } from '../../store/actions/authAction';
import { useLocation } from 'react-router-dom';

const ResetPassword = (props) => {
  const classes = useStyles();
  const search = useLocation().search;

  const resetPassword = useFormik({
    initialValues: {
      newPassword: '',
      newPassword_confirmation: ''
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required('Required !')
        .min(6, "Must be greater than or equals 6 characters !")
        .max(20, "Must be less than or equals 20 characters !"),
      newPassword_confirmation: Yup.string()
        .required('Required !')
        .min(6, "Must be greater than or equals 6 characters !")
        .max(20, "Must be less than or quals 20 characters !")
        .oneOf([Yup.ref("newPassword")], "Not the same password !")
    }),
    onSubmit: (values) => {
      props.fetchResetPassword({
        email: new URLSearchParams(search).get('email'),
        token: new URLSearchParams(search).get('token')
      }, values);
    }
  });

  return (
    <Auth
      title={"Reset password"}
      avatar={<LockOpenOutlined color="primary" />}
    >
      <form
        className={classes.form}
        noValidate
        onSubmit={resetPassword.handleSubmit}
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          label="New Password"
          name="newPassword"
          autoComplete="newPassword"
          autoFocus
          type="password"
          value={resetPassword.values.newPassword}
          onChange={resetPassword.handleChange}
        />
        {resetPassword.errors.newPassword && resetPassword.touched.newPassword && (
          <small className={classes.require}>{resetPassword.errors.newPassword}</small>
        )}
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          label="Re New Password"
          name="newPassword_confirmation"
          autoComplete="newPassword_confirmation"
          type="password"
          value={resetPassword.values.newPassword_confirmation}
          onChange={resetPassword.handleChange}
        />
         {resetPassword.errors.newPassword_confirmation && resetPassword.touched.newPassword_confirmation && (
          <small className={classes.require}>{resetPassword.errors.newPassword_confirmation}</small>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Confirm
        </Button>
      </form>
    </Auth>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchResetPassword: (params, data) => {
      dispatch(handleResetPassword(params, data));
    }
  }
}

export default connect(null, mapDispatchToProps)(ResetPassword);
