import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import orderRouter from './routes/order.js';
import router from './routes/user.js';
import workoutRouter from './routes/workout.js';
const app = express();
app.use(express.json());
app.use(cors());
// ssh -i "foode.pem" ec2-user@ec2-35-78-93-153.ap-northeast-1.compute.amazonaws.com
// scp -i "foode.pem" -r ./ ec2-user@ec2-35-78-93-153.ap-northeast-1.compute.amazonaws.com

app.use('/api/workouts', workoutRouter);
app.use('/api/users', router);
app.use('/api/orders', orderRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to mongodb and running on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log('mong error = ' + err.message);
  });
