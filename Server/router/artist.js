import express from 'express';
import {
  GetAlbumWithArtist,
  GetAllArtist,
  GetTrack,
} from '../controllers/artists.js';

const router = express.Router();

router.get('/', GetAllArtist);

//get album in artist
router.get('/album/:id', GetAlbumWithArtist);

//getTrack
router.get('/:id', GetTrack);

export default router;
