import { configureStore } from '@reduxjs/toolkit';
import toursReducer, { getTourData } from './tours/toursSlice';
import reservationsReducer, {
  getReservations,
} from "./reservations/reservationsSlice";

const store = configureStore({
  reducer: {
    tours: toursReducer,
    reservations: reservationsReducer,
  },
});
store.dispatch(getTourData());
store.dispatch(getReservations());
export default store;
