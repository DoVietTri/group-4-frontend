import React from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';
import { Avatar, Button, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from "@material-ui/icons";
import GoogleLogin from 'react-google-login';
import * as Yup from "yup";
import { useFormik } from "formik";
import { handleLogin, handleLoginWithGoogle } from './../../store/actions/authAction';
import Toast from '../../components/toast';
import Auth from '../../components/auth';
import iconLoginWithGoogle from '../../assets/images/icon-login-with-google.png';
import { GOOGLE_CLIENT_ID } from '../../constants/config';
import { Link } from 'react-router-dom';

const Login = (props) => {

  const classes = useStyles();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required !").email("Not format email !"),
      password: Yup.string()
        .required("Required !")
        .min(6, "Password greater than or equals 6 character !")
        .max(20, "Password less than or equals 20 character !"),
    }),
    onSubmit: (values) => {
      props.handleSubmitLogin(values);
    }
  });

  const responseLoginWithGoogle = (res) => {
    props.fetchLoginWithGoogle({ access_token: res.accessToken });
  }

  return (
    <Auth
      title={"Login"}
      avatar={<LockOutlined color="primary" />}
    >
      <form
        className={classes.form}
        noValidate
        onSubmit={loginFormik.handleSubmit}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={loginFormik.values.email}
          onChange={loginFormik.handleChange}
          autoFocus
        />
        {loginFormik.errors.email && loginFormik.touched.email && (
          <small className={classes.require}>{loginFormik.errors.email}</small>
        )}

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={loginFormik.values.password}
          onChange={loginFormik.handleChange}
        />
        {loginFormik.errors.password && loginFormik.touched.password && (
          <small className={classes.require}>{loginFormik.errors.password}</small>
        )}
        <Link
          to="/forgot-password"
          target="_blank"
          className={classes.forgotPassword}
        >
          <Typography
            variant="caption"
            color="primary"
          >
            Forgot password ?
          </Typography>
        </Link>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={loginFormik.onSubmit}
        >
          Sign In
        </Button>
      </form>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        onSuccess={responseLoginWithGoogle}
        onFailure={responseLoginWithGoogle}
        render={renderProps => (
          <Button
            onClick={renderProps.onClick}
            variant="contained"
            className={classes.btnLoginWithGoogle}
            color="secondary"
            disabled={renderProps.disabled}
            startIcon={<Avatar className={classes.iconGoogle} src={iconLoginWithGoogle} />}
          >
            Sign in with Google
          </Button>
        )}
        cookiePolicy={'single_host_origin'}
      />
      <Toast />
    </Auth>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmitLogin: (data) => {
      dispatch(handleLogin(data))
    },
    fetchLoginWithGoogle: (data) => {
      dispatch(handleLoginWithGoogle(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
