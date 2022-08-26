import axios, { AxiosResponse } from 'axios'

const Axios = axios.create({
  baseURL: process.env.API_SERVER_URL || process.env.apiServerUrl,
});

axios.defaults.headers.common['Content-Type'] = 'application/json';

// eslint-disable-next-line func-names
Axios.prototype.setAuthorization = function (token: String): void {
  if (token) {
    this.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    this.defaults.headers.common.Authorization = null;
    delete this.defaults.headers.common.Authorization;
  }
};

// Interceptors
Axios.interceptors.response.use((response: AxiosResponse) => response,
  (error) => {
    const statusCode = error.response?.status;
    if (statusCode === 401) {
      alert('Session expired, login');
    }

    return Promise.reject(error);
  });

// eslint-disable-next-line func-names
Axios.prototype.deleteAuthorization = function (): void {
  this.setAuthorization(null);
};

export default Axios;
