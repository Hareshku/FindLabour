import axiosInstance from './axiosInstance';

export const getChatsApi = async () => {
  const response = await axiosInstance.get('/chats');
  return response.data;
};

export const startChatApi = async (participantId, workPostId) => {
  const response = await axiosInstance.post('/chats/start', { participantId, workPostId });
  return response.data;
};

export const sendMessageApi = async (chatId, content) => {
  const response = await axiosInstance.post(`/chats/${chatId}/message`, { content });
  return response.data;
};
