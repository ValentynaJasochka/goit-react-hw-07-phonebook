import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './constants';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    handleFilter(state, action) {
      // state.filter = action.payload;

      state.filter = action.payload;
      // console.log(`Slise ${state.filter}`);
    },
  },
});

export const { handleFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
