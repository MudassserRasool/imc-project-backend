import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// app.use('/api/workouts', workoutRouter);
// app.use('/api/users', userRouter);
// app.use('/api/orders', orderRouter);
// app.use('/api/customers', customerRouter);
// app.use('/api/doctor', doctorRouter);

mongoose
  .connect(
    'mongodb+srv://imc:imc2024@cluster0.k5jgcnw.mongodb.net/?retryWrites=true&w=majority'
  )
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
