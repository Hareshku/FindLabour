import express from 'express';
import { getOrCreateChat, sendMessage, getUserChats } from '../controllers/chatController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getUserChats);
router.post('/start', protect, getOrCreateChat);
router.post('/:chatId/message', protect, sendMessage);

export default router;
