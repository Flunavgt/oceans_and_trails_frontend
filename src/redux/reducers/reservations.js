import { SET_RESERVATION, GET_RESERVATION } from "../actions";

const initialState = {
    reservations: [],
};

export default reservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESERVATION:
            return {
                ...state,
                reservations: action.payload,
            };
        case GET_RESERVATION:
            return {
                ...state,
                reservations: action.payload,
            };
        default:
            return state;
    }
}

