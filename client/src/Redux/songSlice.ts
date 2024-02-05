import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  song: [];
  loading: boolean;
  error: boolean;
}

const initialState: CounterState = {
  song: [],
  loading: false,
  error: false,
};

const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.song = action.payload;
    },
    fetchFiler(state) {
      state.error = true;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFiler } = songSlice.actions;
export default songSlice.reducer;
