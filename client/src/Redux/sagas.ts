import { SagaIterator } from '@redux-saga/core';
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchSuccess } from './songSlice';

function* fetchStartAsync(): SagaIterator {
  const songs = yield call(() => axios.get('http://localhost:4000/api/song/'));
  //const format = yield songs.json();
  yield put(fetchSuccess(songs?.data));
}

export default function* rootSaga(): SagaIterator {
  yield takeLatest('song/fetchStart', fetchStartAsync);
}
