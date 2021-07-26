import axiosClient from "./axiosClient";

const commentService = {
  getAll: (params) => {
    let url = `/v1/comment/${params}`;
    return axiosClient.get(url);
  },
  addComment: (data) => {
    let url = '/v1/comment';
    return axiosClient.post(url, data);
  }
}

export default commentService;
