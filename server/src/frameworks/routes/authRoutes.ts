import express from 'express';
import { SignUp, SignIn } from '../../adapters/controllers/authController';
import passport from 'passport';

const router = express.Router();

router.post('//signup', SignUp);
router.post('/signin', SignIn);
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
//   res.redirect('/');
// });

export default router;
