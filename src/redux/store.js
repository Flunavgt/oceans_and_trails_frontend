import { configureStore } from '@reduxjs/toolkit';
import toursReducer, { getTourData } from './tours/toursSlice';
import reservationsReducer, { getReservations } from './reservations/reservationsSlice';
import registration from './reducer/registration';
import user from './reducer/user';

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
