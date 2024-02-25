'use strict';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import ambulanceRouter from './routes/ambulance.js';
import customerRouter from './routes/coustomer.js';
import doctorRouter from './routes/doctor.js';
import orderRouter from './routes/order.js';
import overviewRouter from './routes/overview.js';
import userRouter from './routes/user.js';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});
const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/customers', customerRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/ambulance', ambulanceRouter);
app.use('/api/overview', overviewRouter);

// const environment = process.env.NODE_ENV;
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      app.listen(port, () => {
        console.log(
          `Connected to mongodb and running on port ${port} and environment is development`
        );
      });
    })
    .catch((err) => {
      console.log('mong error = ' + err.message);
    });
} else {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      server.listen(port, () => {
        console.log(
          `Server running on port ${port} and environment is production`
        );
      });
    })
    .catch((err) => {
      console.log('mong error = ' + err.message);
    });
}
