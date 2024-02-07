import express from 'express';
import { GetAlbum, GetAlbumDetail } from '../controllers/albums.js';

const router = express.Router();

//get All Albums
router.get('/', GetAlbum);

//get one Album
router.get('/:id', GetAlbumDetail);
export default router;
