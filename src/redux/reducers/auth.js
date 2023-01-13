import { AUTHENTICATED, NOT_AUTHENTICATED } from "../actions";

const initialState = {
    isAuthenticated: false,
    currentUser : {},
    loggingIn: false,
};

export default authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true,
                currentUser: action.payload,
                loggingIn: false,
            };
        case NOT_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: {},
                loggingIn: false,
            };
        default:
            return state;
    }
}