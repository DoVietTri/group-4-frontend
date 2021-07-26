import axiosClient from './axiosClient';

const departmentService = {
  getAll: () => {
    let url = '/v1/department';
    return axiosClient.get(url);
  },
  addNew: (data) => {
    let url = '/v1/department/store';
    return axiosClient.post(url, data);
  },
  updateById: (id, data) => {
    let url = `/v1/department/update/${id}`;
    return axiosClient.post(url, data);
  },
}

export default departmentService;
