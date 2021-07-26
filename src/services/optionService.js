import axiosClient from "./axiosClient";

const optionService = {
  getAllOptionStatus: () => {
    let url = '/v1/statuses';
    return axiosClient.get(url);
  },
  getAllOptionCategory: (params) => {
    let url = '/v1/categories';
    return axiosClient.get(url, { params: params });
  },
  getAllOptionAdmin: (params) => {
    let url = '/v1/users/find-user/1';
    return axiosClient.get(url, { params: params });
  },
  getAllOptionUser: () => {
    let url = '/v1/users';
    return axiosClient.get(url);
  },
  getAllOptionPriority: () => {
    let url = '/v1/priorities';
    return axiosClient.get(url);
  },
  getAllOptionDepartment: (params) => {
    let url = '/v1/department';
    return axiosClient.get(url, { params: params });
  }
}

export default optionService;
