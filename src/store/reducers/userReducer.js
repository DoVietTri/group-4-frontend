import * as Types from '../constants/actionTypes';

let initialState = {
  listAll: [],
  total_page_user: 0
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case Types.USER.FETCH_ALL_USERS_SUCCESS:
      state = {
        ...state,
        listAll: [...action.payload.list],
        total_page_user: action.payload.total_page
      }
      return state;
    default:
      return state;
  }
}

export default userReducer;
