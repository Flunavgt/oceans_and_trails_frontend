import { configureStore } from '@reduxjs/toolkit';
import toursReducer, { getTourData } from './tours/toursSlice';
import registration from "./reducer/registration";
import user from "./reducer/user";

const store = configureStore({
  reducer: {
    tours: toursReducer,
    registration,
    user
  },
});
store.dispatch(getTourData());
export default store;
