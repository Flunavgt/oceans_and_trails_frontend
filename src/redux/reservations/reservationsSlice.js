import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://oceans-api.onrender.com/api/v1/users/1/reservations';

export const getReservations = createAsyncThunk(
    "reservations/getReservations",
    async () => {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: localStorage.getItem('token'),
            },
        });
        if (!response.ok) {
            const data = await response.json();
            return data;
        }
    }
);

const initialState = {
    reservation: [],
    status: "",
    error: null,
};


// const reservationsSlice = createSlice({
//     name: "reservations",
//     initialState,
//     reducers: {},
//     extraReducers(builder) {
//         builder
//             .addCase(getReservations.pending, (state) => {
//                 state.status = "loading";
//             })
//             .addCase(getReservations.fulfilled, (state, action) => {
//                 state.status = "succeeded";
//                 state.reservations = state.reservations.concat(action.payload);
//             })
//             .addCase(getReservations.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message;
//             });
//     }
// });

export const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getReservations.fulfilled, (state, action) => {
          state.data = action.payload;
          state.status = 'succeeded';
        })
        .addCase(getReservations.pending, (state) => {
          state.status = 'loading';
        });
    },
  });

export default reservationsSlice.reducer;
