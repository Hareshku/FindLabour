import * as chatService from '../services/chatService.js';

export const getOrCreateChat = async (req, res) => {
  try {
    const chat = await chatService.getOrCreateChat(
      req.user._id,
      req.body.participantId,
      req.body.workPostId
    );
    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const chat = await chatService.sendMessage(req.params.chatId, req.user._id, req.body.content);
    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserChats = async (req, res) => {
  try {
    const chats = await chatService.getUserChats(req.user._id);
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
