import { call, put } from 'redux-saga/effects';
import requestService from './../../services/requestService';
import commentService from '../../services/commentService';
import { listAllRequestSuccess, filterOptionsSuccess, requestDetailSuccess, listMyRequestSuccess, listDepartmentRequestSuccess, adminRequestSuccess } from './../actions/requestAction';
import { listAllCommentSuccess } from '../actions/commentAction';
import { showToast } from '../actions/uiAction';
import history from '../../history';
import { LIST_REQUEST_PER_PAGE } from '../../constants';

/**
 * Get all request of all user in home
 */
export function* getListAllRequest() {
  try {
    let response = yield call(requestService.getAll);
    if (response.status === 200) {
      yield put(listAllRequestSuccess({ list: response.data.data, total_page: response.data.last_page }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

/**
 * get all filter options (category, status, author,...)
 */
export function* getFilterOptions() {
  try {
    let response = yield call(requestService.getAllFilterOptions);
    if (response.status === 200) {
      yield put(filterOptionsSuccess(response.data.original.data));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

/**
 * handle click filter
 * @param {json} data 
 */
export function* handleFilter(data) {
  try {
    let response = yield call(requestService.getAllRequestAfterHandle, data.payload);
    if (response.status === 200) {
      yield put(listAllRequestSuccess({ list: response.data.data, total_page: response.data.last_page }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

/**
 * handle change page
 * @param {json} data 
 */
export function* handleChangePage(data) {
  try {
    let response = yield call(requestService.getAllRequestAfterHandle, { ...data.payload });
    if (response.status === 200) {
      yield put(listAllRequestSuccess({ list: response.data.data, total_page: response.data.last_page }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* getRequestDetail(data) {
  try {
    let response = yield call(requestService.getRequestDetail, data.payload);
    if (response.status === 200) {
      yield put(requestDetailSuccess(response.data[0]));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

/**
 * handle add new request
 * @param {json} data 
 */
export function* handleAddNewRequest(data) {
  try {
    let response = yield call(requestService.addNewRequest, data.payload);
    if (response.status === 200) {
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
      history.push('/');
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: 'Có lỗi xảy ra, vui lòng thử lại <3' }));
  }
}

export function* handleUpdateRequest(data) {
  try {
    let response = yield call(requestService.updateRequest, data.payload.requestId, data.payload.data);
    if (response.status === 200) {
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
      history.goBack();
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* getListMyRequest() {
  try {
    let response = yield call(requestService.getMyRequest);
    if (response.status === 200) {
      yield put(listMyRequestSuccess({ list: response.data.data, total_page: response.data.last_page }))
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* getListDepartmentRequest() {
  try {
    let response = yield call(requestService.getDepartmentRequest);
    if (response.status === 200) {
      yield put(listDepartmentRequestSuccess({ list: response.data.data, total_page: response.data.last_page }))
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* getAdminRequest(data) {
  try {
    let response = yield call(requestService.getAdminRequest, { per_page: LIST_REQUEST_PER_PAGE, page: data.payload.page });
    if (response.status === 200) {
      yield put(adminRequestSuccess({ list: response.data.data, total_page: response.data.last_page }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleDeleteRequest(data) {
  try {
    let response = yield call(requestService.deleteRequestById, data.payload);
    if (response.status === 200) {
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
      history.goBack();
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleApproveRequest(data) {
  try {
    let response = yield call(requestService.approveRequest, data.payload);
    if (response.status === 200) {

      let resRequestDetail = yield call(requestService.getRequestDetail, data.payload);
      if (resRequestDetail.status === 200) {
        yield put(requestDetailSuccess(resRequestDetail.data[0]));
      }

      let resComment = yield call(commentService.getAll, data.payload);
      if (resComment.status === 200) {
        yield put(listAllCommentSuccess(resComment.data.comments));
      }

      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleRejectRequest(data) {
  try {
    let response = yield call(requestService.rejectRequest, data.payload);
    if (response.status === 200) {

      let resRequestDetail = yield call(requestService.getRequestDetail, data.payload);
      if (resRequestDetail.status === 200) {
        yield put(requestDetailSuccess(resRequestDetail.data[0]));
      }

      let resComment = yield call(commentService.getAll, data.payload);
      if (resComment.status === 200) {
        yield put(listAllCommentSuccess(resComment.data.comments));
      }
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}

export function* handleUpdateRequestByAdmin(data) {
  try {
    let response = yield call(requestService.updateRequestByAdmin, data.payload.requestId, data.payload.data);
    if (response.status === 200) {
      let resRequestDetail = yield call(requestService.getRequestDetail, data.payload.requestId);
      if (resRequestDetail.status === 200) {
        yield put(requestDetailSuccess(resRequestDetail.data[0]));
      }
      
      let resComment = yield call(commentService.getAll, data.payload.requestId);
      if (resComment.status === 200) {
        yield put(listAllCommentSuccess(resComment.data.comments));
      }
      yield put(showToast({ typeToast: 'success', message: response.data.message }));
    }
  } catch (error) {
    yield put(showToast({ typeToast: 'error', message: error.response.data.message }));
  }
}
