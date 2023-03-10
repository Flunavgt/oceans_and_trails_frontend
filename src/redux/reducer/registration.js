import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const postSignUp = createAsyncThunk('users/signup', async (user) => {
  await fetch('https://oceans-api.onrender.com/api/v1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  }).then((res) => {
    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization'));
      // localStorage.setItem('user', JSON.stringify(user));
      return res.json();
    }
    throw new Error(res);
  });
});

export const postSignIn = createAsyncThunk('users/signin', async (user) => {
  await fetch('https://oceans-api.onrender.com/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  }).then((res) => {
    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization'));
    }
    return res.text().then((text) => Promise.reject(text));
  });
});

export const getProfile = createAsyncThunk('users/profile', async () => {
  const token = localStorage.getItem('token');
  await fetch('https://oceans-api.onrender.com/api/v1/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((res) => {
    if (res.ok) {
      const user = res.json();
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    }
    return res.json().then((json) => Promise.reject(json));
  });
});

export const deleteSession = createAsyncThunk('users/signout', async () => {
  const token = localStorage.getItem('token');
  localStorage.removeItem('token');

  await fetch('https://oceans-api.onrender.com/api/v1/logout', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((json) => Promise.reject(json));
  });
});

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postSignIn.fulfilled, (state, action) => action.payload);
    builder.addCase(getProfile.fulfilled, (state, action) => action.payload);
  },
});

export default reservationSlice.reducer;
