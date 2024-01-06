// import cors from 'cors';
// import express from 'express';
// import mongoose from 'mongoose';
// import { MONGO_URL } from './config/config.js';
const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URL } = require('./config/config.js');
// import router from './routes/user.js';
// import workoutRouter from './routes/workout.js';
// import orderRouter from './routes/order.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// app.use(cors());

// app.use('/api/workouts', workoutRouter);
// app.use('/api/user', router);
// app.use('/api/orders', orderRouter);
app.use('/api', async (req, res) => {
  console.log('sadsa')
});

mongoose
  .connect('mongodb://mern2022:mern2022@ac-1vocr4t-shard-00-00.43aaypx.mongodb.net:27017,ac-1vocr4t-shard-00-01.43aaypx.mongodb.net:27017,ac-1vocr4t-shard-00-02.43aaypx.mongodb.net:27017/?ssl=true&replicaSet=atlas-x4e2nh-shard-0&authSource=admin&retryWrites=true&w=majority')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to mongodb and running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('mong error = ' + err.message);
  });

// pnpm run dev
