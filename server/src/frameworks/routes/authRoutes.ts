import express from 'express';
import { AuthController } from '../../adapters/controllers/authController';
import { UserRepo } from '../../adapters/repositories/UserRepository';
// import passport from 'passport';

const userRepo = new UserRepo()
const controller = new AuthController(userRepo)
const router = express.Router();

router.post('/signup', controller.onCreateUser);
router.post('/signin', controller.onFindUser);
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
//   res.redirect('/');
// });

export default router;
