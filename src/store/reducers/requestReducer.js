import * as Types from './../constants/actionTypes';
const initialState = {
  total_page_request: 0,
  listAllRequest: [],
  filterOptions: {},
  requestDetail: {},
  listMyRequest: [],
  total_page_my_request: 0,
  listDepartmentRequest: [],
  total_page_department_request: 0,
  listAdminRequest: [],
  total_page_admin_request: 0,
}

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LIST_REQUEST.FETCH_ALL_REQUEST_SUCCESS:
      state = {
        ...state,
        listAllRequest: [...action.payload.list],
        total_page_request: action.payload.total_page
      }
      return state;
    case Types.LIST_REQUEST.FETCH_FILTER_OPTIONS_SUCCESS:
      state = {
        ...state,
        filterOptions: { ...action.payload }
      }
      return state;
    case Types.REQUEST.FETCH_REQUEST_DETAIL_SUCCESS:
      state = {
        ...state,
        requestDetail: { ...action.payload }
      }
      return state;
    case Types.MY_REQUEST.FETCH_ALL_MY_REQUEST_SUCCESS:
      state = {
        ...state,
        listMyRequest: [...action.payload.list],
        total_page_my_request: action.payload.total_page
      }
      return state
    case Types.DEPARTMENT_REQUEST.FETCH_ALL_DEPARTMENT_REQUEST_SUCCESS:
      state = {
        ...state,
        listDepartmentRequest: [...action.payload.list],
        total_page_department_request: action.payload.total_page
      }
      return state;
    case Types.REQUEST.FETCH_ADMIN_REQUEST_SUCCESS:
      state = {
        ...state,
        listAdminRequest: [...action.payload.list],
        total_page_admin_request: action.payload.total_page
      }
      return state;
    default:
      return state;
  }
}

export default requestReducer;
