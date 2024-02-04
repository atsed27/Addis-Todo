import { CreateError } from '../middleware/Error/error.js';
import Song from '../model/Song.js';

//get All song
export const GetAll = async (req, res, next) => {
  try {
    const allSong = await Song.find();
    if (!allSong) return next(CreateError(404, 'There is no song in DataBase'));
    res.status(200).json(allSong);
  } catch (error) {
    console.log(error);
  }
};

//get One song
export const GetOne = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return next(CreateError(404, 'Song is not Found'));
    res.status(200).json(song);
  } catch (error) {
    console.log(error);
  }
};
//create song
export const Create = async (req, res, next) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    res.status(201).json('song is created');
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

//update song
export const Update = async (req, res, next) => {
  try {
    const findSong = await Song.findById(req.params.id);
    if (!findSong) {
      return next(CreateError(404, 'Song not found'));
    }
    const updateSong = await Song.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateSong);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

//delete song
export const Delete = async (req, res, next) => {
  try {
    const findSong = await Song.findById(req.params.id);
    if (!findSong) {
      return next(CreateError(404, 'Song not found'));
    }
    await Song.findByIdAndDelete(req.params.id);
    res.status(200).json('song is deleted successfully');
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
