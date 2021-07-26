import * as Types from '../constants/actionTypes';

export const listAllComment = (data) => {
  return {
    type: Types.COMMENT.FETCH_ALL_COMMENT,
    payload: data
  }
}

export const listAllCommentSuccess = (data) => {
  return {
    type: Types.COMMENT.FETCH_ALL_COMMENT_SUCCESS,
    payload: data
  }

}

export const listAllCommentFailed = () => {
  return {
    type: Types.COMMENT.FETCH_ALL_COMMENT_FAILED
  }
}

export const addComment = (data) => {
  return {
    type: Types.ACTION_COMMENT.ADD_COMMENT,
    payload: data
  }
}

export const addCommentSuccess = () => {
  return {
    type: Types.ACTION_COMMENT.ADD_COMMENT_SUCCESS,
  }
}

