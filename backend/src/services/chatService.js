import Chat from '../models/Chat.js';

export const getOrCreateChat = async (userId1, userId2, workPostId) => {
  let chat = await Chat.findOne({
    participants: { $all: [userId1, userId2] },
    workPost: workPostId,
  });

  if (!chat) {
    chat = new Chat({
      participants: [userId1, userId2],
      workPost: workPostId,
      messages: [],
    });
    await chat.save();
  }

  return chat;
};

export const sendMessage = async (chatId, senderId, content) => {
  const chat = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { messages: { sender: senderId, content } },
      lastMessage: new Date(),
    },
    { new: true }
  );
  return chat;
};

export const getUserChats = async (userId) => {
  return await Chat.find({ participants: userId })
    .populate('participants', 'username profileImage')
    .populate('workPost', 'title')
    .sort({ lastMessage: -1 });
};
