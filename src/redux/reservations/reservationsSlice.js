import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiReservationData = "http://oceans-api.onrender.com/api/v1/users/1/reservations";

export const getReservationData = createAsyncThunk(
    "reservations/getReservationData",
    async () => {
        const response = await fetch(apiReservationData);
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const initialState = {
    reservation: [
        {
            id: 1,
            user_id: 1,
            tour_id: 1,
            startDate: "2021-05-01",
            endDate: "2021-05-05",
        }
    ],
    status: "",
  };

export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getReservationData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getReservationData.fulfilled, (state, action) => {
                state.status = "success";
                state.reservation = action.payload;
            })
            .addCase(getReservationData.rejected, (state) => {
                state.status = "failed";
            });
    }

});

export default reservationsSlice.reducer;

    
