import * as Types from './../constants/actionTypes';

const initialState = {
  listAllComment: [],
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.COMMENT.FETCH_ALL_COMMENT_SUCCESS:
      state = {
        ...state,
        listAllComment: [...action.payload]
      }
      return state
    default:
      return state
  }
}

export default commentReducer
