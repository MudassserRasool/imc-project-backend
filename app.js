import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import orderRouter from './routes/order.js';
import router from './routes/user.js';
import workoutRouter from './routes/workout.js';
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
mongoose.connect(
  'mongodb://mern2022:mern2022@ac-1vocr4t-shard-00-00.43aaypx.mongodb.net:27017,ac-1vocr4t-shard-00-01.43aaypx.mongodb.net:27017,ac-1vocr4t-shard-00-02.43aaypx.mongodb.net:27017/?ssl=true&replicaSet=atlas-x4e2nh-shard-0&authSource=admin&retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use('/api/workouts', workoutRouter);
app.use('/api/users', router);
app.use('/api/orders', orderRouter);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
