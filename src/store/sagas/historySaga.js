import { call, put } from 'redux-saga/effects';
import { listAllHistoryRequestSuccess } from '../actions/historyAction';
import historyService from '../../services/historyService';
import { HISTORY_PER_PAGE } from '../../constants/';
import { showToast } from '../actions/uiAction';

export function* getListAllHistoryRequest() {
  try {
    let response = yield call(historyService.getAllHistoryRequest, { per_page: HISTORY_PER_PAGE });
    if (response.status === 200) {
      yield put(listAllHistoryRequestSuccess({ list: response.data.data, total_page: response.data.last_page }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }))
  }
}

export function* handleChangePageHistory(data) {
  try {
    let response = yield call(historyService.getAllHistoryRequest, { per_page: HISTORY_PER_PAGE, ...data.payload });
    if (response.status === 200) {
      yield put(listAllHistoryRequestSuccess({ list: response.data.data, total_page: response.data.last_page }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }))
  }
}
