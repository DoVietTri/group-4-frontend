import * as Types from '../constants/actionTypes';

let initialState = {
  listAllDept: []
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.DEPARTMENT.FETCH_ALL_DEPT_SUCCESS:
      state = {
        ...state,
        listAllDept: [...action.payload]
      }
      return state;
    default:
      return state;
  }
}

export default departmentReducer
