import { call, put } from '@redux-saga/core/effects';
import history from '../../history';
import authService from './../../services/authService';
import { handleLoginSuccess, handleGetMeSuccess } from './../actions/authAction';
import { showToast } from '../actions/uiAction';

export function* handleLogin(data) {
  try {
    let response = yield call(authService.login, data.payload);
    if (response.status === 200) {
      yield put(showToast({ typeToast: 'success', message: 'Đăng nhập thành công !' }));
      //Store cookie
      document.cookie = `token=${response.data.token};path=/`;

      let me = yield call(authService.getMe);

      if (me.status === 200) {
        yield put(handleLoginSuccess({ ...me.data }));
      }

      history.push('/');
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleLoginGoogle(data) {
  try {
    let response = yield call(authService.loginWithGoogle, data.payload);
    if (response.status === 200) {
      yield put(showToast({ typeToast: 'success', message: 'Đăng nhập thành công !' }));
      //Store cookie
      document.cookie = `token=${response.data.token};path=/`;

      let me = yield call(authService.getMe);

      if (me.status === 200) {
        yield put(handleLoginSuccess({ ...me.data }));
      }

      history.push('/');
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleGetMe() {
  try {
    let response = yield call(authService.getMe);
    if (response.status === 200) {
      yield put(handleGetMeSuccess(response.data));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleLogout() {
  try {
    let response = yield authService.logout();
    if (response.status === 200) {
      document.cookie = 'token=;path=/';
      history.push('/login');
      yield put(showToast({ typeToast: 'success', message: 'Đăng xuất thành công <3' }))
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }))
  }
}

export function* handleForgotPassword(data) {
  try {
    let response = yield call(authService.forgotPassword, data.payload);
    if (response.status === 200) {
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: JSON.stringify(error.response.data.message) }));
  }
}

export function* handleResetPassword(data) {
  try {
    let response = yield call(authService.resetPassword, data.payload.params, data.payload.data);
    if (response.status === 200) {
      history.push('/login');
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}
