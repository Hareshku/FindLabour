import axiosInstance from './axiosInstance';

export const getWorkPostsApi = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const response = await axiosInstance.get(`/work-posts?${params}`);
  return response.data;
};

export const getWorkPostByIdApi = async (id) => {
  const response = await axiosInstance.get(`/work-posts/${id}`);
  return response.data;
};

export const createWorkPostApi = async (postData) => {
  const response = await axiosInstance.post('/work-posts', postData);
  return response.data;
};

export const applyToWorkPostApi = async (postId, message) => {
  const response = await axiosInstance.post(`/work-posts/${postId}/apply`, { message });
  return response.data;
};

export const getSuggestedLaborsApi = async (workType) => {
  const response = await axiosInstance.get(`/work-posts/suggested-labors?workType=${workType}`);
  return response.data;
};

export const getMyPostsApi = async () => {
  const response = await axiosInstance.get('/work-posts/my-posts');
  return response.data;
};

export const updateWorkPostStatusApi = async (postId, status) => {
  const response = await axiosInstance.patch(`/work-posts/${postId}/status`, { status });
  return response.data;
};
