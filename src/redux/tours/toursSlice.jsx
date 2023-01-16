import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const ApiData = "https://oceans-api.onrender.com/api/v1/tours";

export const getTourData = createAsyncThunk(
  "tours/getTours",
  async () => {
    const response = await fetch(ApiData);
    const data = await response.json();
    // console.log(data);
    return data;
  }
);

const initialState = {
  tour: [],
  status: "",
};

export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTourData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tour = action.payload;
    });
  },
});

export default toursSlice.reducer;