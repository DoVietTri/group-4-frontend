import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { VpnKey } from '@material-ui/icons';
import useStyles from './styles';
import Auth from '../../components/auth';
import Toast from '../../components/toast';
import { handleForgotPassword } from '../../store/actions/authAction';

const ForgotPassword = (props) => {
  const classes = useStyles();
  const forgotPassword = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required !").email("Not format email !")
    }),
    onSubmit: (values) => {
      props.fetchForgotPassword(values);
    }
  })
  return (
    <Auth
      title={"Forgot password"}
      avatar={<VpnKey color="primary" />}
    >
      <form
        className={classes.form}
        noValidate
        onSubmit={forgotPassword.handleSubmit}
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          required
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={forgotPassword.values.email}
          onChange={forgotPassword.handleChange}
        />
        {forgotPassword.errors.email && forgotPassword.touched.email && (
          <small className={classes.require}>{forgotPassword.errors.email}</small>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Send Mail
        </Button>
      </form>
      <Toast />
    </Auth>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchForgotPassword: (data) => {
      dispatch(handleForgotPassword(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(ForgotPassword);
