import { Router } from 'express';
import { celebrate } from 'celebrate';
import { resetPassword, requestResetEmail, registerUser, loginUser, logoutUser, refreshUserSession } from '../controllers/authController.js';
import { resetPasswordSchema, requestResetEmailSchema, registerUserSchema, loginUserSchema } from '../validations/authValidation.js';

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUserSchema), loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);
router.post('/auth/request-reset-email', celebrate(requestResetEmailSchema), requestResetEmail);
router.post('/auth/reset-password', celebrate(resetPasswordSchema), resetPassword);
export default router;
