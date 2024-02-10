import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Album, Artist, Song } from '../types/Task';

interface CounterStates {
  song: Song[];
  album: Album[];
  artist: Artist[];
  loading: boolean;
  error: boolean;
  play: boolean;
}

const initialState: CounterStates = {
  song: [],
  album: [],
  artist: [],
  loading: false,
  error: false,
  play: false,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    playSong(state, action: PayloadAction<boolean>) {
      state.play = action.payload;
    },
    PauseSong(state, action: PayloadAction<boolean>) {
      state.play = action.payload;
    },

    fetchStart(state) {
      state.error = true;
      state.loading = false;
    },
    fetchSuccess: (state, action: PayloadAction<Song[]>) => {
      state.loading = false;
      state.song = action.payload;
    },
    fetchFiler(state) {
      state.loading = false;
      state.error = true;
    },

    fetchUpdateStart(state, action: PayloadAction<Song>) {
      state.loading = true;
    },
    fetchAlbumStart: (state) => {
      state.loading = true;
    },
    fetchAlbumSuccess: (state, action: PayloadAction<Song[]>) => {
      state.loading = false;
      state.album = action.payload;
    },
    fetchAlbumFiler(state) {
      state.error = true;
      state.loading = false;
    },
    fetchAlbumDetailStart(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchArtistSongStart(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchArtistSongSuccess(state, action: PayloadAction<Song[]>) {
      state.loading = false;
      state.song = action.payload;
    },
    fetchArtistAlbumStart(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchArtistStart(state) {
      state.loading = true;
    },
    fetchArtistSuccess: (state, action: PayloadAction<Artist[]>) => {
      state.loading = false;
      state.artist = action.payload;
    },
    fetchArtistFiler(state) {
      state.error = true;
      state.loading = false;
    },

    fetchGenreStart(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    fetchGenreSuccess(state, action: PayloadAction<Song[]>) {
      state.loading = true;
      state.song = action.payload;
    },
  },
});

export const {
  playSong,
  PauseSong,
  fetchStart,
  fetchSuccess,
  fetchFiler,
  fetchArtistSongStart,
  fetchArtistSongSuccess,
  fetchArtistAlbumStart,
  fetchUpdateStart,
  fetchAlbumFiler,
  fetchAlbumSuccess,
  fetchAlbumStart,
  fetchAlbumDetailStart,
  fetchArtistFiler,
  fetchArtistStart,
  fetchArtistSuccess,
  fetchGenreStart,
  fetchGenreSuccess,
} = songSlice.actions;
export default songSlice.reducer;
