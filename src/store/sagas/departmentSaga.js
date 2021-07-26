import { call, put } from '@redux-saga/core/effects';
import departmentService from '../../services/departmentService';
import { showToast } from '../actions/uiAction';
import { getAllSuccess } from '../actions/departmentAction';

export function* handleGetAllDepartments() {
  try {
    let response = yield call(departmentService.getAll);
    if (response.status === 200) {
      yield put(getAllSuccess([...response.data]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* handleAddNewDepartment(data) {
  try {
    let response = yield call(departmentService.addNew, data.payload);
    if (response.status === 200) {
      let resAllDept = yield call(departmentService.getAll);
      if (resAllDept.status === 200) {
        yield put(getAllSuccess([...resAllDept.data]));
      }
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: JSON.stringify(error.response.data.message) }));
  }
}

export function* handleUpdateDeptById(data) {
  try {
    let response = yield call(departmentService.updateById, data.payload.dept_id, data.payload.data);
    if (response.status === 200) {
      let resAllDept = yield call(departmentService.getAll);
      if (resAllDept.status === 200) {
        yield put(getAllSuccess([...resAllDept.data]));
      }
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: JSON.stringify(error.response.data.message) }));
  }
}
