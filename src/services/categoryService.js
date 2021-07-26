import axiosClient from './axiosClient';

const categoryService = {
  getAll: () => {
    let url = '/v1/categories';
    return axiosClient.get(url);
  },
  addNew: (data) => {
    let url = '/v1/categories/store';
    return axiosClient.post(url, data);
  },
  getById: (id) => {
    let url = `/v1/categories/detail/${id}`;
    return axiosClient.get(url);
  },
  updateById: (id, data) => {
    let url = `/v1/categories/update/${id}`;
    return axiosClient.post(url, data);
  },
}

export default categoryService;
