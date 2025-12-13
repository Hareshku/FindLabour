import axiosInstance from './axiosInstance';

export const getWorkersApi = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const response = await axiosInstance.get(`/users/workers?${params}`);
  return response.data;
};

export const getUserByIdApi = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data;
};

export const getMyApplicationsApi = async () => {
  const response = await axiosInstance.get('/users/my-applications');
  return response.data;
};
