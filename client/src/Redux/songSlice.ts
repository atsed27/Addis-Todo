import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Album, Artist, Song } from '../types/Task';

interface CounterStates {
  song: Song[];
  album: Album[];
  artist: Artist[];
  loading: boolean;
  error: boolean;
}

const initialState: CounterStates = {
  song: [],
  album: [],
  artist: [],
  loading: false,
  error: false,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
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
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFiler,
  fetchArtistSongStart,
  fetchArtistSongSuccess,
  fetchUpdateStart,
  fetchAlbumFiler,
  fetchAlbumSuccess,
  fetchAlbumStart,
  fetchAlbumDetailStart,
  fetchArtistFiler,
  fetchArtistStart,
  fetchArtistSuccess,
} = songSlice.actions;
export default songSlice.reducer;
