import axiosClient from './axiosClient';

const userService = {
  getAll: (params) => {
    let url = '/v1/users';
    return axiosClient.get(url, { params: params });
  },
  addNew: (data) => {
    let url = '/v1/users/create-user';
    return axiosClient.post(url, data);
  },
  updateById: (id, data) => {
    let url = `/v1/users/update/${id}`;
    return axiosClient.post(url, data);
  },
  searchByName: (params) => {
    let url = '/v1/users/search-user';
    return axiosClient.get(url, { params: params });
  },
  changeStatusUser: (userId, data) => {
    let url = `/v1/users/status/${userId}`;
    return axiosClient.post(url, data);
  }
}

export default userService;
