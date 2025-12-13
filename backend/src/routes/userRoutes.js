import express from 'express';
import { getProfile, updateProfile, getWorkers, getUserById, getMyApplications } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/workers', getWorkers);
router.get('/my-applications', protect, getMyApplications);
router.route('/profile').get(protect, getProfile).put(protect, updateProfile);
router.get('/:id', getUserById);

export default router;
