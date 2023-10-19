import { createSlice } from '@reduxjs/toolkit';

export const filterInitialState = null;

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setQueryFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQueryFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
