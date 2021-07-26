import * as Types from '../constants/actionTypes';

export const getAll = () => {
  return {
    type: Types.DEPARTMENT.FETCH_ALL_DEPT
  }
}

export const getAllSuccess = (data) => {
  return {
    type: Types.DEPARTMENT.FETCH_ALL_DEPT_SUCCESS,
    payload: data
  }
}

export const addNewDept = (data) => {
  return {
    type: Types.DEPARTMENT.FETCH_ADD_DEPARTMENT,
    payload: data
  }
}

export const updateDeptById = (dept_id, data) => {
  return {
    type: Types.DEPARTMENT.FETCH_UPDATE_DEPT,
    payload: {
      dept_id: dept_id,
      data: data
    }
  }
}
