import { Router } from 'express';
import { authController, emailController, userController } from './controllers';
import { authGuardMW } from './middlewares';

const router = Router();

// AUTH
router.route('/auth').post(authController.auth);

// EMAIL
router
  .route('/email')
  .all(authGuardMW)
  .post(emailController.email);

// USERS
router.route('/user').post(userController.createUser);

export default router;
