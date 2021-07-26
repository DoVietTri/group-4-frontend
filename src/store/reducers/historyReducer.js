import * as Types from '../constants/actionTypes';
let initalState = {
  total_page_history: 0,
  listAllHistoryRequest: []
}

const historyReducer = (state = initalState, action) => {
  switch(action.type) {
    case Types.HISTORY_REQUEST.FETCH_ALL_HISTORY_REQUEST_SUCCESS:
      state = {
        ...state,
        total_page_history: action.payload.total_page,
        listAllHistoryRequest: [...action.payload.list]
      }
      return state;
    default:
      return state; 
  }
}

export default historyReducer;
