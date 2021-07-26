import { combineReducers } from 'redux';
import authReducer from './authReducer';
import uiReducer from './uiReducer';
import requestReducer from './requestReducer';
import historyReducer from './historyReducer';
import optionReducer from './optionReducer';
import categoryReducer from './categoryReducer';
import commentReducer from './commentReducer';
import departmentReducer from './departmentReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  request: requestReducer,
  history: historyReducer,
  auth: authReducer,
  ui: uiReducer,
  option: optionReducer,
  category: categoryReducer,
  comment: commentReducer,
  department: departmentReducer,
  user: userReducer
});

export default rootReducer;
