import axiosClient from "./axiosClient";

const requestService = {
  getAll: () => {
    let url = '/v1/request/list-request';
    return axiosClient.get(url);
  },
  getAllFilterOptions: () => {
    let url = '/v1/request/filter';
    return axiosClient.get(url);
  },
  getAllRequestAfterHandle: (params) => {
    let url = '/v1/request/list-request';
    return axiosClient.get(url, { params: params });
  },
  getRequestDetail: (params) => {
    let url = `v1/request/detail/${params}`;
    return axiosClient.get(url);
  },
  addNewRequest: (data) => {
    let url = '/v1/request/store';
    return axiosClient.post(url, data);
  },
  updateRequest: (requestId, data) => {
    let url = `/v1/request/update/${requestId}`;
    return axiosClient.post(url, data);
  },
  getMyRequest: () => {
    let url = '/v1/request/my-request';
    return axiosClient.get(url);
  },
  getDepartmentRequest:()=>{
    let url='v1/request/department-request';
    return axiosClient.get(url);
  },
  getAdminRequest: (params) => {
    let url = '/v1/admin/request';
    return axiosClient.get(url, { params: params });
  },
  deleteRequestById: (requestId) => {
    let url = `/v1/request/destroy/${requestId}`;
    return axiosClient.post(url);
  },
  approveRequest: (requestId) => {
    let url = `/v1/request/approve/${requestId}`;
    return axiosClient.post(url);
  },
  rejectRequest: (requestId) => {
    let url = `/v1/request/reject/${requestId}`;
    return axiosClient.post(url);
  },
  updateRequestByAdmin: (requestId, data) => {
    let url = `/v1/admin/request/update/${requestId}`;
    return axiosClient.post(url, data);
  },
}

export default requestService;
