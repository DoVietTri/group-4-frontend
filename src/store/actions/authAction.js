import * as Types from '../constants/actionTypes';

export const handleLogin = (data) => {
  return {
    type: Types.LOGIN.HANDLE_LOGIN,
    payload: data
  }
}

export const handleLoginWithGoogle = (data) => {
  return {
    type: Types.LOGIN.HANDLE_LOGIN_WITH_GOOGLE,
    payload: data
  }
}

export const handleLoginSuccess = (data) => {
  return {
    type: Types.LOGIN.HANDLE_LOGIN_SUCCESS,
    payload: data
  }
}

export const handleLoginFailed = () => {
  return {
    type: Types.LOGIN.HANDLE_LOGIN_FAILED
  }
}

export const handleGetMe = () => {
  return {
    type: Types.ME.GET_ME
  }
}

export const handleGetMeSuccess = (data) => {
  return {
    type: Types.ME.GET_ME_SUCCESS,
    payload: data
  }
}

export const handleLogout = () => {
  return {
    type: Types.LOGOUT.FETCH_LOGOUT
  }
}

export const handleForgotPassword = (data) => {
  return {
    type: Types.FORGOT.FETCH_FORGOT_PASSWORD,
    payload: data
  }
}

export const handleResetPassword = (params, data) => {
  return {
    type: Types.RESET.FETCH_RESET_PASSWORD,
    payload: {
      params: params,
      data: data
    }
  }
}
