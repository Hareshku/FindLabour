import axiosInstance from './axiosInstance';

export const loginApi = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response.data;
};

export const registerApi = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData);
  return response.data;
};

export const getProfileApi = async () => {
  const response = await axiosInstance.get('/users/profile');
  return response.data;
};

export const updateProfileApi = async (userData) => {
  const response = await axiosInstance.put('/users/profile', userData);
  return response.data;
};
