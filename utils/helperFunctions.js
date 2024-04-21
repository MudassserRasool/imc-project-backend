import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});
const handelDbError = (error) => {
  if (
    error.message ===
    'querySrv ETIMEOUT _mongodb._tcp.cluster0.k5jgcnw.mongodb.net'
  ) {
    console.log('MongoDB connection refused due to internet issue');
  } else {
    console.log('mong error = ' + error.message);
  }
};

export { app, handelDbError, server };
