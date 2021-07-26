import * as Types from '../constants/actionTypes';

export const getAllUsers = () => {
  return {
    type: Types.USER.FETCH_ALL_USERS
  }
}

export const getAllUsersSuccess = (data) => {
  return {
    type: Types.USER.FETCH_ALL_USERS_SUCCESS,
    payload: data
  }
}

export const addNewUser = (data) => {
  return {
    type: Types.USER.FETCH_ADD_USER,
    payload: data
  }
}

export const updateUserById = (user_id, data) => {
  return {
    type: Types.USER.FETCH_UPDATE_USER,
    payload:{
      user_id: user_id,
      data: data
    }
  }
}

export const handleChangePageUser = (number_page) => {
  return {
    type: Types.USER.FETCH_HANDLE_CHANGE_PAGE_USER,
    payload:number_page
  }
}

export const handleSearchUserByName = (name) => {
  return {
    type: Types.USER.FETCH_SEARCH_USER_BY_NAME,
    payload: name
  }
}

export const handleChangeStatusUser = (userId, data) => {
  return {
    type: Types.USER.FETCH_CHANGE_STATUS,
    payload: {
      userId: userId,
      data: data
    }
  }
}
