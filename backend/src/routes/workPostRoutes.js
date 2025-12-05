import express from 'express';
import {
  createWorkPost,
  getWorkPosts,
  getWorkPostById,
  applyToWorkPost,
  getSuggestedLabors
} from '../controllers/workPostController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getWorkPosts).post(protect, createWorkPost);
router.get('/suggested-labors', getSuggestedLabors);
router.route('/:id').get(getWorkPostById);
router.post('/:id/apply', protect, applyToWorkPost);

export default router;
