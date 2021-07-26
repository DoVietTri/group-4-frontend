import * as Types from '../constants/actionTypes';

let initialState = {
  listAll: []
};

const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case Types.CATEGORY.FETCH_ALL_CATE_SUCCESS:
      state = {
        ...state,
        listAll: [...action.payload]
      }
      return state;
    default:
      return state;
  }
}

export default categoryReducer;
