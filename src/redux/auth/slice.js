import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlPendinglAuth = state => {
  state.error = null;
};

const handleFulfieldlAuth = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleRejectedlAuth = (state, action) => {
  state.error = action.payload;
  state.isLoggedIn = false;
};

const handleFulfieldlLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleFulfieldlRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlPendinglAuth)
      .addCase(register.fulfilled, handleFulfieldlAuth)
      .addCase(register.rejected, handleRejectedlAuth)
      .addCase(logIn.fulfilled, handleFulfieldlAuth)
      .addCase(logIn.rejected, handleRejectedlAuth)
      .addCase(logOut.fulfilled, handleFulfieldlLogOut)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, handleFulfieldlRefresh);
  },
});

export const authReducer = authSlice.reducer;
