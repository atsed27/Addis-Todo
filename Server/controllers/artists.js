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
    const findArtist = await Song.find({
      artist: req.params.id,
    });
    if (findArtist.length <= 0)
      return next(CreateError(404, 'Artist is not found'));

    let array = [];
    findArtist.map((item) => {
      for (let i in array) {
        if (array[i].album === item.album) {
          return;
        }
      }
      return array.push({ album: item.album });
    });

    res.status(200).json(array);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//get Track Artist
export const GetTrack = async (req, res, next) => {
  try {
    const track = await Song.find({ artist: req.params.id });
    if (!track) return next(CreateError(404, 'user is not found'));
    res.status(200).json(track);
  } catch (error) {
    next(error);
  }
};
