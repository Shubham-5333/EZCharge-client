import express from 'express';
import dotenv from 'dotenv';
import connectDB from './frameworks/database/MongoDB';
import authRoutes from './frameworks/routes/authRoutes';
import passport from 'passport';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(passport.initialize());
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
