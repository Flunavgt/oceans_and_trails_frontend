import { configureStore } from '@reduxjs/toolkit';
import toursReducer, { getTourData } from './tours/toursSlice';
import reservationsReducer, { getReservations } from './reservations/reservationsSlice';
import userReducer from './user/userSlice';
import { getProfile } from './reducer/registration';
import registration from './reducer/registration';
import user from './reducer/user';

const store = configureStore({
  reducer: {
    tours: toursReducer,
    reservations: reservationsReducer,
    userInfo: userReducer,
    registration,
    user,
  },
});
store.dispatch(getTourData());
store.dispatch(getReservations());
store.dispatch(getProfile());
export default store;
