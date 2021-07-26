import * as Types from '../constants/actionTypes';

export const showToast = (data) => {
  return {
    type: Types.UI.HANDLE_SHOW_TOAST,
    payload: data
  }
}

export const hideToast = () => {
  return {
    type: Types.UI.HANDLE_HIDE_TOAST
  }
}

export const showOrHideSidebar = () => {
  return {
    type: Types.UI.HANLDE_SHOW_OR_HIDE_SIDEBAR
  }
}
