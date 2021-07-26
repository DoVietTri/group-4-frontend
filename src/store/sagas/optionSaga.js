import { call, put } from 'redux-saga/effects';
import optionService from '../../services/optionService';
import { fetchAllOptionStatusSuccess, fetchAllOptionCategorySuccess, fetchAllOptionAdminSuccess, 
  fetchAllOptionPrioritySuccess, fetchAllOptionUserSuccess, fetchAllOptionDepartmentSuccess
} from '../actions/optionAction';
import { showToast } from '../actions/uiAction';

export function* getAllStatus() {
  try {
    let response = yield call(optionService.getAllOptionStatus);
    if (response.status === 200) {
      yield put(fetchAllOptionStatusSuccess([...response.data]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* getAllCategory(data) {
  try {
    let response = yield call(optionService.getAllOptionCategory, data.payload);
    if (response.status === 200) {
      yield put(fetchAllOptionCategorySuccess([...response.data]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* getAllCategoryAfterChangeAssign(data) {
  try {
    let response = yield call(optionService.getAllOptionCategory);
    if (response.status === 200) {
      if (data.payload.assign_id === "") {
        yield put(fetchAllOptionCategorySuccess([...response.data]));
      } else {
        let newCate = response.data.filter(cate => cate.assign.id === data.payload.assign_id);
        yield put(fetchAllOptionCategorySuccess([...newCate]));
      }
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* getAllAdmin(data) {
  try {
    let response = yield call(optionService.getAllOptionAdmin, data.payload);

    if (response.status === 200) {
      yield put(fetchAllOptionAdminSuccess([...response.data]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* getAllAssignAfterChangeCategory(data) {
  try {
    let response = yield call(optionService.getAllOptionAdmin);

    if (response.status === 200) {
      if (data.payload.assign_id === "") {
        yield put(fetchAllOptionAdminSuccess([...response.data]));
      } else {
        let newAdmin = response.data.filter(admin => admin.id === data.payload.assign_id);
        yield put(fetchAllOptionAdminSuccess([...newAdmin]));
      }
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* getAllPriority() {
  try {
    let response = yield call(optionService.getAllOptionPriority);
    if (response.status === 200) {
      yield put(fetchAllOptionPrioritySuccess([...response.data]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* getAllUser() {
  try {
    let response = yield call(optionService.getAllOptionUser);
    if (response.status === 200) {
      yield put(fetchAllOptionUserSuccess([...response.data.data]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* getAllDepartment(data) {
  try {
    let response = yield call(optionService.getAllOptionDepartment, data.payload);
    if (response.status === 200) {
      yield put(fetchAllOptionDepartmentSuccess([...response.data]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}
