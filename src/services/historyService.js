import axiosClient from './axiosClient';

const historyService = {
  getAllHistoryRequest: (params) => {
    let url = '/v1/history-request';
    return axiosClient.get(url, { params: params });
  }
}

export default historyService;
