import express from 'express';
import { register, login } from '../controllers/authController.js';
import { registerValidation, loginValidation } from '../validations/authValidation.js';
import { validateRequest } from '../middleware/validateRequest.js';

const router = express.Router();

router.post('/register', registerValidation, validateRequest, register);
router.post('/login', loginValidation, validateRequest, login);

export default router;
