import axiosInstance from './axiosInstance';

export const createReviewApi = async (reviewData) => {
  const response = await axiosInstance.post('/reviews', reviewData);
  return response.data;
};

export const getReviewsForUserApi = async (userId) => {
  const response = await axiosInstance.get(`/reviews/user/${userId}`);
  return response.data;
};
