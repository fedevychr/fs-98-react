import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  timer: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState: INITIAL_STATE,
  reducers: {
    incrementTimer(state) {
      state.timer += 1;
    },
    clearTimer() {
      return INITIAL_STATE;
    },
  },
});

export const { incrementTimer, clearTimer } = timerSlice.actions;

export const timerReducer = timerSlice.reducer;
