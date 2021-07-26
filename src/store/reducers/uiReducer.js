import * as Types from '../constants/actionTypes';

let initialState = {
  toast: {
    isOpenToast: false,
    typeToast: '',
    message: ''
  },
  sidebar: {
    isOpen: true
  }
}

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case Types.UI.HANDLE_SHOW_TOAST:
      state = {
        ...state,
        toast: {
          isOpenToast: true,
          typeToast: action.payload.typeToast,
          message: action.payload.message
        }
      }
      return state;
    case Types.UI.HANDLE_HIDE_TOAST:
      state = {
        ...state,
        toast: {
          isOpenToast: false,
          typeToast: '',
          message: ''
        }
      }
      return state;
    case Types.UI.HANLDE_SHOW_OR_HIDE_SIDEBAR:
      state = {
        ...state,
        sidebar: {
          isOpen: !state.sidebar.isOpen
        }
      }
      return state;
    default:
      return state;
  }
}

export default uiReducer;
