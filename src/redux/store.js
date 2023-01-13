import { configureStore } from '@reduxjs/toolkit';
import toursReducer, { getTourData } from './tours/toursSlice';
// import combineReducer from './reducers/index';

const store = configureStore({
  reducer: {
    tours: toursReducer,
  },
});
store.dispatch(getTourData());
export default store;
