import express from 'express';
import { GetByGenre } from '../controllers/genre.js';

const router = express.Router();

router.get('/get', GetByGenre);

export default router;
