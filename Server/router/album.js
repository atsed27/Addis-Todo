import express from 'express';
import { GetAlbum } from '../controllers/albums.js';

const router = express.Router();

//get All Albums
router.get('/', GetAlbum);

export default router;
