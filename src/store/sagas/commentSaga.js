import { call, put } from 'redux-saga/effects';
import commentService from '../../services/commentService';
import { listAllCommentSuccess } from '../actions/commentAction';
import { showToast } from '../actions/uiAction';

export function* getListAllComment(data) {
  try {
    let response = yield call(commentService.getAll, data.payload);
    if (response.status === 200) {
      yield put(listAllCommentSuccess(response.data.comments))
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại !' }));
  }
}

export function* handleAddComment(data) {
  try {
    let response = yield call(commentService.addComment, data.payload);
    if (response.status === 200) {
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
      let res = yield call(commentService.getAll, data.payload.request_id);
      if (res.status === 200) {
        yield put(listAllCommentSuccess(res.data.comments))
      }
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}
