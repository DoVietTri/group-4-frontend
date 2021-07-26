import { takeEvery, takeLatest } from 'redux-saga/effects';
import * as Types from './../constants/actionTypes';
import { getListAllRequest, getFilterOptions, handleFilter, handleChangePage, 
  getRequestDetail, handleAddNewRequest, handleUpdateRequest, getListMyRequest, 
  getListDepartmentRequest, getAdminRequest, handleDeleteRequest, handleApproveRequest, 
  handleRejectRequest, handleUpdateRequestByAdmin } from './requestSaga';
import { getListAllHistoryRequest, handleChangePageHistory } from './historySaga';
import { handleLogin, handleGetMe, handleLogout, handleLoginGoogle, handleForgotPassword, handleResetPassword } from './authSaga';
import { getAllStatus, getAllCategory, getAllAdmin, getAllPriority, getAllUser, 
  getAllCategoryAfterChangeAssign, getAllAssignAfterChangeCategory, getAllDepartment
} from './optionSaga';
import { handleGetAllCategories, handleAddNewCategory, handleUpdateCateById } from './categorySaga';
import { getListAllComment, handleAddComment} from './commentSaga'
import { handleAddNewDepartment, handleGetAllDepartments, handleUpdateDeptById } from './departmentSaga';
import { handleGetAllUser, handleUpdateUserById, handleChangePageUser, handleAddNewUser, handleSearchUserByName, handleChangeStatusUser } from './userSaga';

/**
 * Start
 */
function* rootSaga() {
  yield takeEvery(Types.LIST_REQUEST.FETCH_ALL_REQUEST, getListAllRequest);
  yield takeEvery(Types.LIST_REQUEST.FETCH_FILTER_OPTIONS, getFilterOptions);
  yield takeEvery(Types.LIST_REQUEST.FETCH_HANDLE_FILTER, handleFilter);
  yield takeLatest(Types.LIST_REQUEST.FETCH_HANDLE_CHANGE_PAGE, handleChangePage);
  yield takeEvery(Types.HISTORY_REQUEST.FETCH_ALL_HISTORY_REQUEST, getListAllHistoryRequest);
  yield takeEvery(Types.HISTORY_REQUEST.FETCH_HANDLE_CHANGE_PAGE_HISTORY, handleChangePageHistory);
  yield takeLatest(Types.LOGIN.HANDLE_LOGIN, handleLogin);
  yield takeEvery(Types.REQUEST.FETCH_REQUEST_DETAIL, getRequestDetail);
  yield takeEvery(Types.ME.GET_ME, handleGetMe);
  yield takeEvery(Types.OPTION.FETCH_ALL_STATUS, getAllStatus);
  yield takeEvery(Types.OPTION.FETCH_ALL_CATEGORY, getAllCategory);
  yield takeEvery(Types.OPTION.FETCH_ALL_ADMIN, getAllAdmin);
  yield takeEvery(Types.OPTION.FETCH_ALL_PRIORITY, getAllPriority);
  yield takeEvery(Types.OPTION.FETCH_ALL_USER, getAllUser);
  yield takeEvery(Types.ACTION_REQUEST.ADD_NEW_REQUEST, handleAddNewRequest);
  yield takeEvery(Types.LOGOUT.FETCH_LOGOUT, handleLogout);
  yield takeEvery(Types.CATEGORY.FETCH_ALL_CATE, handleGetAllCategories);
  yield takeEvery(Types.ACTION_REQUEST.UPDATE_REQUEST, handleUpdateRequest);
  yield takeEvery(Types.REQUEST.FETCH_REQUEST_DETAIL, getRequestDetail);
  yield takeEvery(Types.COMMENT.FETCH_ALL_COMMENT, getListAllComment);
  yield takeEvery(Types.ACTION_COMMENT.ADD_COMMENT,handleAddComment);
  yield takeEvery(Types.CATEGORY.FETCH_ADD_CATEGORY, handleAddNewCategory);
  yield takeEvery(Types.MY_REQUEST.FETCH_ALL_MY_REQUEST, getListMyRequest);
  yield takeEvery(Types.CATEGORY.FETCH_UPDATE_CATE, handleUpdateCateById);
  yield takeEvery(Types.DEPARTMENT_REQUEST.FETCH_ALL_DEPARTMENT_REQUEST,getListDepartmentRequest);
  yield takeEvery(Types.REQUEST.FETCH_ADMIN_REQUEST, getAdminRequest);
  yield takeEvery(Types.OPTION.FETCH_CATEGORY_AFTER_CHANGE_ASSIGN, getAllCategoryAfterChangeAssign);
  yield takeEvery(Types.OPTION.FETCH_ASSGIN_AFTER_CHANGE_CATEGORY, getAllAssignAfterChangeCategory);
  yield takeEvery(Types.DEPARTMENT.FETCH_ALL_DEPT, handleGetAllDepartments);
  yield takeEvery(Types.DEPARTMENT.FETCH_ADD_DEPARTMENT, handleAddNewDepartment);
  yield takeEvery(Types.DEPARTMENT.FETCH_UPDATE_DEPT, handleUpdateDeptById);
  yield takeEvery(Types.REQUEST.FETCH_DELETE_REQUEST, handleDeleteRequest);
  yield takeEvery(Types.REQUEST.FETCH_APPROVE_REQUEST, handleApproveRequest);
  yield takeEvery(Types.REQUEST.FETCH_REJECT_REQUEST, handleRejectRequest);
  yield takeEvery(Types.REQUEST.FETCH_UPDATE_REQUEST_BY_ADMIN, handleUpdateRequestByAdmin);
  yield takeEvery(Types.LOGIN.HANDLE_LOGIN_WITH_GOOGLE, handleLoginGoogle);
  yield takeEvery(Types.USER.FETCH_ALL_USERS, handleGetAllUser);
  yield takeEvery(Types.USER.FETCH_UPDATE_USER, handleUpdateUserById);
  yield takeEvery(Types.OPTION.FETCH_ALL_DEPARTMENT, getAllDepartment);
  yield takeEvery(Types.USER.FETCH_HANDLE_CHANGE_PAGE_USER, handleChangePageUser);
  yield takeEvery(Types.USER.FETCH_ADD_USER, handleAddNewUser);
  yield takeEvery(Types.USER.FETCH_SEARCH_USER_BY_NAME, handleSearchUserByName);
  yield takeEvery(Types.USER.FETCH_CHANGE_STATUS, handleChangeStatusUser);
  yield takeEvery(Types.FORGOT.FETCH_FORGOT_PASSWORD, handleForgotPassword);
  yield takeEvery(Types.RESET.FETCH_RESET_PASSWORD, handleResetPassword);
}

export default rootSaga;
