import * as Types from './../constants/actionTypes';
let initialState = {
  user: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN.HANDLE_LOGIN_SUCCESS:
      state = {
        ...state,
        user: { ...action.payload }
      }
      return state;
    case Types.ME.GET_ME_SUCCESS:
      state = {
        ...state,
        user: { ...action.payload }
      }
      return state;
    default:
      return state;
  }
}

export default authReducer;
