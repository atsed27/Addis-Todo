import express from 'express';
import { GetAlbumWithArtist, GetAllArtist } from '../controllers/artists.js';

const router = express.Router();

router.get('/', GetAllArtist);

//get album in artist
router.get('/album/:id', GetAlbumWithArtist);
export default router;
