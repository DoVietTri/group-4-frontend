import * as Types from './../constants/actionTypes';

export const listAllHistoryRequest = () => {
  return {
    type: Types.HISTORY_REQUEST.FETCH_ALL_HISTORY_REQUEST
  }
}

export const listAllHistoryRequestSuccess = (data) => {
  return {
    type: Types.HISTORY_REQUEST.FETCH_ALL_HISTORY_REQUEST_SUCCESS,
    payload: data
  }
}

export const handleChangePageHistory = (number_page) => {
  return {
    type: Types.HISTORY_REQUEST.FETCH_HANDLE_CHANGE_PAGE_HISTORY,
    payload: number_page
  }
}
