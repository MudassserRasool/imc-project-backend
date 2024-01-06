import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URL, PORT } from './config/config.js';
import router from './routes/user.js';
import workoutRouter from './routes/workout.js';
import orderRouter from './routes/order.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/workouts', workoutRouter);
app.use('/api/user', router);
app.use('/api/orders', orderRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`Connected to mongodb and running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('mong error = ' + err.message);
  });

// pnpm run dev
