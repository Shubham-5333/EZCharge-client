import express from 'express';
import dotenv from 'dotenv';
import connectDB from './frameworks/database/MongoDB';
import authRoutes from './frameworks/routes/authRoutes';
import { errorHandler } from './frameworks/middleware/errorHandler';
import { authMiddleware } from './frameworks/middleware/authMiddleware';
import passport from 'passport';
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors({
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

connectDB();

app.use(express.json());
app.use(passport.initialize());
app.use('/api', authRoutes);
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});
app.use(errorHandler);


app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
