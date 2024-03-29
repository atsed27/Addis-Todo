import { CreateError } from '../middleware/Error/error.js';
import Song from '../model/Song.js';

//get All Album

export const GetAlbum = async (req, res, next) => {
  try {
    try {
      const findSong = await Song.find();

      if (!findSong)
        return next(CreateError(404, 'there is no album in database'));
      let array = [];
      findSong.map((item) => {
        for (let i in array) {
          if (
            array[i].album === item.album &&
            array[i].artist === item.artist
          ) {
            return;
          }
        }
        return array.push({ artist: item.artist, album: item.album });
      });

      res.status(200).json(array);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  } catch (error) {
    console.log(error);
  }
};

//get Detail album
export const GetAlbumDetail = async (req, res, next) => {
  try {
    const track = await Song.find({ album: req.params.id });
    res.status(200).json(track);
  } catch (error) {
    console.log(error);
  }
};
