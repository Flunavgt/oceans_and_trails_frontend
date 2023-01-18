import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://oceans-api.onrender.com/api/v1/users/';

export const getProfile = createAsyncThunk('users/getProfile', async () => {
  if (!localStorage.getItem('token')) {

  } else {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });

    const data = response.json();
    return data;
  }
});

const initialState = {
  user: [],
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getProfile.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export default userSlice.reducer;
