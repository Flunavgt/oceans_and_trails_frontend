import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './auth';

export default combineReducers({
    // Add reducers here
    auth: authReducer
});
