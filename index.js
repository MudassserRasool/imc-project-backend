'use strict';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { app, connectDb } from './config/mongoDb.js';
import ambulanceRouter from './routes/ambulance.js';
import customerRouter from './routes/coustomer.js';
import doctorRouter from './routes/doctor.js';
import orderRouter from './routes/order.js';
import overviewRouter from './routes/overview.js';
import userRouter from './routes/user.js';

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
const port = process.env.PORT || 3000;

connectDb();
