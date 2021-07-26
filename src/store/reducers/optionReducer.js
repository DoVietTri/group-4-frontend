import * as Types from '../constants/actionTypes';

let initialState = {
  statuses: [],
  categories: [],
  admins: [],
  priorities: [],
  users: [],
  departments: [],
}

const optionReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.OPTION.FETCH_ALL_STATUS_SUCCESS:
      state = {
        ...state,
        statuses: [...action.payload]
      }
      return state;
    case Types.OPTION.FETCH_ALL_CATEGORY_SUCCESS:
      state = {
        ...state,
        categories: [...action.payload]
      }
      return state;
    case Types.OPTION.FETCH_ALL_ADMIN_SUCCESS:
      state = {
        ...state,
        admins: [...action.payload]
      }
      return state;
    case Types.OPTION.FETCH_ALL_PRIORITY_SUCCESS:
      state = {
        ...state,
        priorities: [...action.payload]
      }
      return state;
    case Types.OPTION.FETCH_ALL_USER_SUCCESS:
      state = {
        ...state,
        users: [...action.payload]
      }
      return state;
    case Types.OPTION.FETCH_ALL_DEPARTMENT_SUCCESS:
      state = {
        ...state,
        departments: [...action.payload]
      }
      return state;
    default:
      return state;
  }
}

export default optionReducer;
