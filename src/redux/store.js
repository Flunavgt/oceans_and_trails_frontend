import { configureStore } from '@reduxjs/toolkit';
import toursReducer, { getTourData } from './tours/toursSlice';
import reservationsReducer, {
  getReservations,
} from "./reservations/reservationsSlice";
import registration from "./reducers/registration";
import user from "./reducers/user";

const store = configureStore({
  reducer: {
    tours: toursReducer,
    reservations: reservationsReducer,
    registration,
    user,
  },
});
store.dispatch(getTourData());
store.dispatch(getReservations());
export default store;
