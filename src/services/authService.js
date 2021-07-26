import axiosClient from "./axiosClient";

const authService = {
  login: (data) => {
    let url = '/user/login';
    return axiosClient.post(url, data);
  },
  getMe: () => {
    let url = '/user/me';
    return axiosClient.get(url);
  },
  logout: () => {
    let url = '/user/logout';
    return axiosClient.get(url);
  },
  loginWithGoogle: (params) => {
    let url = '/v1/login/google/callback';
    return axiosClient.get(url, { params: params });
  },
  forgotPassword: (data) => {
    let url = '/v1/forgot-password';
    return axiosClient.post(url, data);
  },
  resetPassword: (params, data) => {
    let url = `/v1/reset-password?email=${params.email}&token=${params.token}`;
    return axiosClient.post(url, data);
  }
}

export default authService;
