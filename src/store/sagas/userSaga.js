import { call, put } from '@redux-saga/core/effects';
import userService from '../../services/userService';
import { showToast } from '../actions/uiAction';
import { getAllUsersSuccess } from '../actions/userAction';
import { STATUS_ADMIN_ACTIVE, STATUS_ADMIN_INACTIVE } from '../../constants';

export function* handleGetAllUser() {
  try {
    let response = yield call(userService.getAll);
    if (response.status === 200) {
      yield put(getAllUsersSuccess({ list: [...response.data.data], total_page: response.data.last_page }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleAddNewUser(data) {
  try {
    let response = yield call(userService.addNew, data.payload);
    if (response.status === 200) {
      let resAllUser = yield call(userService.getAll);
      if (resAllUser.status === 200) {
        yield put(getAllUsersSuccess({ list: [...resAllUser.data.data], total_page: resAllUser.data.last_page }));
      }
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: JSON.stringify(error.response.data.message) }));
  }
}

export function* handleUpdateUserById(data) {
  try {
    let response = yield call(userService.updateById, data.payload.user_id, data.payload.data);
    if (response.status === 200) {
      let resAllUser = yield call(userService.getAll);
      if (resAllUser.status === 200) {
        yield put(getAllUsersSuccess({ list: [...resAllUser.data.data], total_page: resAllUser.data.last_page }));
      }
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: JSON.stringify(error.response.data.message) }));
  }
}

export function* handleChangePageUser(data) {
  try {
    if (data.payload.search !== '') {
      let response = yield call(userService.searchByName, { ...data.payload });
      if (response.status === 200) {
        yield put(getAllUsersSuccess({ list: response.data.data, total_page: response.data.last_page }));
      }
    } else {
      let response = yield call(userService.getAll, { ...data.payload });
      if (response.status === 200) {
        yield put(getAllUsersSuccess({ list: response.data.data, total_page: response.data.last_page }));
      }
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleSearchUserByName(data) {
  try {
    let response = yield call(userService.searchByName, { ...data.payload });
   
    if (response.status === 200) {
      yield put(getAllUsersSuccess({ list: [...response.data.data], total_page: response.data.last_page }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleChangeStatusUser(data) {
  try {
    let params;
    if (data.payload.data.status === STATUS_ADMIN_ACTIVE) {
      params = {
        status: STATUS_ADMIN_INACTIVE
      }
    }
    if (data.payload.data.status === STATUS_ADMIN_INACTIVE) {
      params = {
        status: STATUS_ADMIN_ACTIVE
      }
    }
    let response = yield call(userService.changeStatusUser, data.payload.userId, params);

    if (response.status === 200) {
      let resAllUser = yield call(userService.getAll);
      if (resAllUser.status === 200) {
        yield put(getAllUsersSuccess({ list: [...resAllUser.data.data], total_page: resAllUser.data.last_page }));
      }
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}
