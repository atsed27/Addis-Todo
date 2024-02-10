import { SagaIterator } from '@redux-saga/core';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchAlbumDetailStart,
  fetchAlbumFiler,
  fetchAlbumSuccess,
  fetchArtistAlbumStart,
  fetchArtistFiler,
  fetchArtistSongStart,
  fetchArtistSongSuccess,
  fetchArtistSuccess,
  fetchFiler,
  fetchGenreStart,
  fetchGenreSuccess,
  fetchSuccess,
  fetchUpdateStart,
} from './songSlice';

function* fetchStartAsync(): SagaIterator {
  const songs = yield call(() => axios.get('http://localhost:5000/api/song/'));
  //const format = yield songs.json();
  yield put(fetchSuccess(songs?.data));
}

function* fetchAlbumSync(): SagaIterator {
  try {
    const Album = yield call(() =>
      axios.get('http://localhost:5000/api/albums/')
    );
    yield put(fetchAlbumSuccess(Album?.data));
  } catch (error) {
    console.log(error);
    yield put(fetchAlbumFiler());
  }
}
function* fetchArtistSync(): SagaIterator {
  try {
    const artist = yield call(() =>
      axios.get('http://localhost:5000/api/artist/')
    );

    yield put(fetchArtistSuccess(artist?.data));
  } catch (error) {
    console.log(error);
    yield put(fetchArtistFiler());
  }
}

function* fetchAlbumDetailSync(
  action: ReturnType<typeof fetchAlbumDetailStart>
): SagaIterator {
  try {
    console.log(action.payload);
    const track = yield call(() =>
      axios.get(`http://localhost:5000/api/albums/${action.payload}`)
    );
    yield put(fetchSuccess(track?.data));
  } catch (error) {
    console.log(error);
    yield put(fetchFiler());
  }
}
function* fetchUpdateSync(
  action: ReturnType<typeof fetchUpdateStart>
): SagaIterator {
  try {
    yield call(() =>
      axios.put(`http://localhost:5000/api/song/update/${action.payload._id}`, {
        title: action.payload.title,
        artist: action.payload.artist,
        album: action.payload.album,
        genre: action.payload.genre,
      })
    );
  } catch (error) {
    console.log(error);
    fetchFiler();
  }
}

function* fetchArtistSongSync(
  action: ReturnType<typeof fetchArtistSongStart>
): SagaIterator {
  try {
    console.log(action.payload);
    const song = yield call(() =>
      axios.get(`http://localhost:5000/api/artist/${action.payload}`)
    );
    console.log(song);
    yield put(fetchArtistSongSuccess(song.data));
  } catch (error) {
    console.log(error);
    fetchFiler();
  }
}

function* fetchArtistAlbumSync(
  action: ReturnType<typeof fetchArtistAlbumStart>
): SagaIterator {
  try {
    const album = yield call(() =>
      axios.get(`http://localhost:5000/api/artist/album/${action.payload}`)
    );
    yield put(fetchAlbumSuccess(album.data));
  } catch (error) {
    fetchFiler();
  }
}

function* fetchGenreSync(
  action: ReturnType<typeof fetchGenreStart>
): SagaIterator {
  try {
    console.log(action);
    const song = yield call(() =>
      axios.get(`http://localhost:5000/api/genre/get?genre=${action.payload}`)
    );
    yield put(fetchGenreSuccess(song.data));
  } catch (error) {
    fetchFiler();
  }
}
export default function* rootSaga(): SagaIterator {
  yield takeLatest('song/fetchStart', fetchStartAsync);
  yield takeLatest('song/fetchAlbumStart', fetchAlbumSync);
  yield takeLatest('song/fetchArtistStart', fetchArtistSync);
  yield takeLatest('song/fetchAlbumDetailStart', fetchAlbumDetailSync);

  //update song
  yield takeLatest('song/fetchUpdateStart', fetchUpdateSync);

  //get each artist Song
  yield takeLatest('song/fetchArtistSongStart', fetchArtistSongSync);

  //get each artist Album
  yield takeLatest('song/fetchArtistAlbumStart', fetchArtistAlbumSync);

  //get By Genre
  yield takeLatest('song/fetchGenreStart', fetchGenreSync);
}
