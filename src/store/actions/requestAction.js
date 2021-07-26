import * as Types from '../constants/actionTypes';

export const listAllRequest = () => {
  return {
    type: Types.LIST_REQUEST.FETCH_ALL_REQUEST
  }
}

export const listAllRequestSuccess = (data) => {
  return {
    type: Types.LIST_REQUEST.FETCH_ALL_REQUEST_SUCCESS,
    payload: data
  }
}

export const listAllRequestFailed = () => {
  return {
    type: Types.LIST_REQUEST.FETCH_ALL_REQUEST_FAILED
  }
}

export const filterOptions = () => {
  return {
    type: Types.LIST_REQUEST.FETCH_FILTER_OPTIONS
  }
}

export const filterOptionsSuccess = (data) => {
  return {
    type: Types.LIST_REQUEST.FETCH_FILTER_OPTIONS_SUCCESS,
    payload: data
  }
}

export const handleFilter = (data) => {
  return {
    type: Types.LIST_REQUEST.FETCH_HANDLE_FILTER,
    payload: data
  }
}

export const handleChangePage = (number_page) => {
  return {
    type: Types.LIST_REQUEST.FETCH_HANDLE_CHANGE_PAGE,
    payload: number_page
  }
}

export const requestDetail = (id) => {
  return {
    type: Types.REQUEST.FETCH_REQUEST_DETAIL,
    payload: id
  }
}

export const requestDetailSuccess = (data) => {
  return {
    type: Types.REQUEST.FETCH_REQUEST_DETAIL_SUCCESS,
    payload: data
  }
}

export const requestDetailFailed = () => {
  return {
    type: Types.REQUEST.FETCH_REQUEST_DETAIL_FAILED,
  }
}

export const addNewRequest = (data) => {
  return {
    type: Types.ACTION_REQUEST.ADD_NEW_REQUEST,
    payload: data
  }
}

export const addNewRequestSuccess = () => {
  return {
    type: Types.ACTION_REQUEST.ADD_NEW_REQUEST_SUCCESS,
  }
}

export const updateRequest = (requestId, data) => {
  return {
    type: Types.ACTION_REQUEST.UPDATE_REQUEST,
    payload: {
      requestId: requestId,
      data: data
    }
  }
}

export const listMyRequest = () => {
  return {
    type: Types.MY_REQUEST.FETCH_ALL_MY_REQUEST
  }
}

export const listMyRequestSuccess = (data) => {
  return {
    type: Types.MY_REQUEST.FETCH_ALL_MY_REQUEST_SUCCESS,
    payload: data
  }
}

export const listMyRequestFailed = () => {
  return {
    type: Types.MY_REQUEST.FETCH_ALL_MY_REQUEST_FAILED
  }
}

export const listDepartmentRequest = () => {
  return {
    type: Types.DEPARTMENT_REQUEST.FETCH_ALL_DEPARTMENT_REQUEST
  }
}

export const listDepartmentRequestSuccess = (data) => {
  return {
    type: Types.DEPARTMENT_REQUEST.FETCH_ALL_DEPARTMENT_REQUEST_SUCCESS,
    payload: data
  }
}

export const adminRequest = (data) => {
  return {
    type: Types.REQUEST.FETCH_ADMIN_REQUEST,
    payload: data
  }
}

export const listDepartmentRequestFailed = () => {
  return {
    type: Types.DEPARTMENT_REQUEST.FETCH_ALL_DEPARTMENT_REQUEST_FAILED
  }
}

export const adminRequestSuccess = (data) => {
  return {
    type: Types.REQUEST.FETCH_ADMIN_REQUEST_SUCCESS,
    payload: data
  }
}

export const deleteRequest = (requestId) => {
  return {
    type: Types.REQUEST.FETCH_DELETE_REQUEST,
    payload: requestId
  }
}

export const approveRequest = (requestId) => {
  return {
    type: Types.REQUEST.FETCH_APPROVE_REQUEST,
    payload: requestId
  }
}

export const rejectRequest = (requestId) => {
  return {
    type: Types.REQUEST.FETCH_REJECT_REQUEST,
    payload: requestId
  }
}

export const updateRequestByAdmin = (requestId, data) => {
  return {
    type: Types.REQUEST.FETCH_UPDATE_REQUEST_BY_ADMIN,
    payload: {
      requestId: requestId,
      data: data
    }
  }
}
