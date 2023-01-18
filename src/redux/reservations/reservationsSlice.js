import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://oceans-api.onrender.com/api/v1/users';
const childUrl = 'reservations';

const user_id = localStorage.getItem('user_id');

export const getReservations = createAsyncThunk(
  'reservations/getReservations',
  async () => {
    const response = await fetch(`${apiUrl}/${user_id}/${childUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  },
);

export const postReservation = createAsyncThunk(
  'reservations/postReservation',
  async (reservation) => {
    const response = await fetch(`${apiUrl}/${user_id}/${childUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({ reservation }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((json) => Promise.reject(json));
    });
    return response;
  },
);

export const deleteReservation = createAsyncThunk( 
  'reservations/deleteReservation',
  async (id) => {
    const response = await fetch(`${apiUrl}/${user_id}/${childUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((json) => Promise.reject(json));
    });
    return response;
  },
);


const initialState = {
  reservation: [],
  status: '',
  error: null,
};

export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.reservation = state.reservation.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.fulfilled, (state, action) => {
        state.reservation = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getReservations.pending, (state) => {
        state.status = 'loading';
      });

    builder
      .addCase(postReservation.fulfilled, (state, action) => {
        state.reservation = action.payload;
        state.status = 'succeeded';
      })
      .addCase(postReservation.pending, (state) => {
        state.status = 'loading';
      });

    builder
      .addCase(deleteReservation.fulfilled, (state, action) => {
        state.reservation = state.reservation.filter(
          (item) => item.id !== action.payload,
        );
        
        state.status = 'succeeded';
      })
      .addCase(deleteReservation.pending, (state) => {
        state.status = 'loading';
      });

    // builder
    //     .removeCase(getReservations.fulfilled, (state, action) => {
    //       state.reservation = action.payload;
    //       state.status = "succeeded";
    //     })
    //     .removeCase(getReservations.pending, (state) => {
    //       state.status = "loading";
    //     });
  },
});
export const { removeItem } = reservationsSlice.actions;
export default reservationsSlice.reducer;
