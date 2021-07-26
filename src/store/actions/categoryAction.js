import * as Types from '../constants/actionTypes';

export const getAll = () => {
  return {
    type: Types.CATEGORY.FETCH_ALL_CATE
  }
}

export const getAllSuccess = (data) => {
  return {
    type: Types.CATEGORY.FETCH_ALL_CATE_SUCCESS,
    payload: data
  }
}

export const addNewCate = (data) => {
  return {
    type: Types.CATEGORY.FETCH_ADD_CATEGORY,
    payload: data
  }
}

export const updateCateById = (cate_id, data) => {
  return {
    type: Types.CATEGORY.FETCH_UPDATE_CATE,
    payload: {
      cate_id: cate_id,
      data: data
    }
  }
}
