import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URL } from './config/config.js';
import orderRouter from './routes/order.js';
import router from './routes/user.js';
import workoutRouter from './routes/workout.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/api/workouts', workoutRouter);
// app.use('/api/user', router);
// app.use('/api/orders', orderRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
