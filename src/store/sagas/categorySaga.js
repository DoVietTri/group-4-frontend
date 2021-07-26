import { call, put } from '@redux-saga/core/effects';
import categoryService from '../../services/categoryService';
import { showToast } from '../actions/uiAction';
import { getAllSuccess } from '../actions/categoryAction';

export function* handleGetAllCategories() {
  try {
    let response = yield call(categoryService.getAll);
    if (response.status === 200) {
      yield put(getAllSuccess([...response.data]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* handleAddNewCategory(data) {
  try {
    let response = yield call(categoryService.addNew, data.payload);
    if (response.status === 200) {
      let resAllCate = yield call(categoryService.getAll);
      if (resAllCate.status === 200) {
        yield put(getAllSuccess([...resAllCate.data]));
      }
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleUpdateCateById(data) {
  try {
    let response = yield call(categoryService.updateById, data.payload.cate_id, data.payload.data);
    if (response.status === 200) {
      let resAllCate = yield call(categoryService.getAll);
      if (resAllCate.status === 200) {
        yield put(getAllSuccess([...resAllCate.data]));
      }
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}
