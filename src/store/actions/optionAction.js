import * as Types from '../constants/actionTypes';

export const fetchAllOptionStatus = () => {
  return {
    type: Types.OPTION.FETCH_ALL_STATUS
  }
}

export const fetchAllOptionStatusSuccess = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_STATUS_SUCCESS,
    payload: data
  }
}

export const fetchAllOptionCategory = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_CATEGORY,
    payload: data
  }
}

export const fetchCategoryAfterHandleChangeAssign = (data) => {
  return {
    type: Types.OPTION.FETCH_CATEGORY_AFTER_CHANGE_ASSIGN,
    payload: data
  }
}

export const fetchAssignAfterHandleChangeCategory = (data) => {
  return {
    type: Types.OPTION.FETCH_ASSGIN_AFTER_CHANGE_CATEGORY,
    payload: data
  }
}

export const fetchAllOptionCategorySuccess = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_CATEGORY_SUCCESS,
    payload: data
  }
}

export const fetchAllOptionAdmin = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_ADMIN,
    payload: data
  }
}

export const fetchAllOptionAdminSuccess = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_ADMIN_SUCCESS,
    payload: data
  }
}

export const fetchAllOptionPriority = () => {
  return {
    type: Types.OPTION.FETCH_ALL_PRIORITY
  }
}

export const fetchAllOptionPrioritySuccess = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_PRIORITY_SUCCESS,
    payload: data
  }
}

export const fetchAllOptionUser = () => {
  return {
    type: Types.OPTION.FETCH_ALL_USER
  }
}

export const fetchAllOptionUserSuccess = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_USER_SUCCESS,
    payload: data
  }
}

export const fetchAllOptionDepartment = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_DEPARTMENT,
    payload: data
  }
}

export const fetchAllOptionDepartmentSuccess = (data) => {
  return {
    type: Types.OPTION.FETCH_ALL_DEPARTMENT_SUCCESS,
    payload: data
  }
}
