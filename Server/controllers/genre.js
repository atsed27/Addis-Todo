import { CreateError } from '../middleware/Error/error.js';
import Song from '../model/Song.js';

//get by genre;
export const GetByGenre = async (req, res, next) => {
  try {
    const { genre } = req.query;
    if (genre === 'AllGenre' || genre === 'All') {
      const findSong = await Song.find();
      return res.status(200).json(findSong);
    }
    const findSong = await Song.find({ genre: genre });
    if (!findSong) return next(CreateError(404, 'genre is not found'));
    res.status(200).json(findSong);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
