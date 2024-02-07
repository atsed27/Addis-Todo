import { CreateError } from '../middleware/Error/error.js';
import Song from '../model/Song.js';

//get All Artist
export const GetAllArtist = async (req, res, next) => {
  try {
    const findSong = await Song.find();

    if (!findSong)
      return next(CreateError(404, 'there is no artist in database'));

    let array = [];
    findSong.map((item) => {
      for (let i in array) {
        if (array[i].album === item.album && array[i].artist === item.artist) {
          console.log('hy');
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
};

//get Album with Artist
export const GetAlbumWithArtist = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const findArtist = await Song.find({
      artist: req.params.id,
    });
    if (findArtist.length <= 0)
      return next(CreateError(404, 'Artist is not found'));
    console.log(findArtist);
    let findAlbum = [];
    findArtist.map((item) =>
      findAlbum.includes(item.album) ? null : findAlbum.push(item.album)
    );
    console.log(findAlbum);
    res.status(200).json(findAlbum);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
