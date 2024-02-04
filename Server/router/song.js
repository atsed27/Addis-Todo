import express from 'express';
import {
  Create,
  Delete,
  GetAll,
  GetOne,
  Update,
} from '../controllers/songs.js';

const router = express.Router();

//get All song
router.get('/', GetAll);

//get One song
router.get('/:id', GetOne);
//create song router
router.post('/create', Create);

//update song router
router.put('/update/:id', Update);

//delete song router
router.delete('/delete/:id', Delete);
export default router;
