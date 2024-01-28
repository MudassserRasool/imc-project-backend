import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});
// app.use('/api/workouts', workoutRouter);
// app.use('/api/users', router);
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
