import express from 'express';
import {
  createWorkPost,
  getWorkPosts,
  getWorkPostById,
  applyToWorkPost,
  getSuggestedLabors,
  getMyPosts,
  updatePostStatus,
  updateApplicantStatus
} from '../controllers/workPostController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getWorkPosts).post(protect, createWorkPost);
router.get('/suggested-labors', getSuggestedLabors);
router.get('/my-posts', protect, getMyPosts);
router.route('/:id').get(getWorkPostById);
router.post('/:id/apply', protect, applyToWorkPost);
router.patch('/:id/status', protect, updatePostStatus);
router.patch('/:id/applicant', protect, updateApplicantStatus);

export default router;
