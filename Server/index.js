import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//our path
import songRouter from './router/song.js';
import artistRouter from './router/artist.js';
import albumRouter from './router/album.js';

const app = express();

//dotenv config
dotenv.config();

// mongo db connection
const connect = () => {
  mongoose
    .connect(process.env.DataBase)
    .then(() => {
      console.log('mongo db is connect');
    })
    .catch((error) => {
      throw error;
    });
};

//Basic on  express
app.use(express.json());

//our Router
app.use('/api/song', songRouter);
app.use('/api/artist', artistRouter);
app.use('/api/albums', albumRouter);

//Error handling
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message =
    err.message || "something wrong! their don't no servers this error ";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

//Listen to server
const port = process.env.Port || 5000;
app.listen(port, () => {
  connect();
  console.log('port is connect at ' + port);
});
