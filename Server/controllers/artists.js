import { CreateError } from '../middleware/Error/error.js';
import Song from '../model/Song.js';

//get All Artist
export const GetAllArtist = async (req, res, next) => {
  try {
    const findSong = await Song.find();

    if (!findSong)
      return next(CreateError(404, 'there is no artist in database'));

    let array = [];
    for (let i in findSong) {
      const length = async () => {
        const track = await Song.find({ album: findSong[i].album });
        return track;
      };
      let x = await length();

      array.push({
        artist: findSong[i].artist,
        album: findSong[i].album,
        totalSong: x.length,
      });
    }
    const lastArray = [];
    array.map((item) => {
      for (let i in lastArray) {
        if (
          lastArray[i].album === item.album &&
          lastArray[i].artist === item.artist
        ) {
          return;
        }
      }
      return lastArray.push({ ...item });
    });

    const Album = [];
    lastArray.map((item, i) => {
      for (let i in Album) {
        if (lastArray[i].artist === item.artist) {
          Album[i].totalSong = Album[i].totalSong + item.totalSong;
          Album[i].totalAlbum = Album[i].totalAlbum + 1;
          return Album[i].totalSong, Album[i].totalAlbum;
        }
      }
      return Album.push({
        artist: item.artist,
        totalAlbum: 1,
        totalSong: item.totalSong,
      });
    });
    res.status(200).json(Album);
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
