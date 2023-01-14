import { SET_RESERVATION , GET_RESERVATION} from ".";

export const setReservation = (reservation) => {
    return (dispatch) => {
        return fetch("https://oceans-api.onrender.com/api/v1/users/1/reservations", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ reservation: reservation }),
        }).then((response) => {
            if (response.ok) {
                return response.json().then((reservationJson) => {
                    dispatch({ type: SET_RESERVATION, payload: reservationJson });
                });
            } else {
                return response.json().then((errors) => {
                    return Promise.reject(errors);
                });
            }
        });
    }
}

export const getReservation = (reservation) => {
    return (dispatch) => {
        return fetch("https://oceans-api.onrender.com/api/v1/users/1/reservations", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ reservation: reservation }),
        }).then((response) => {
            if (response.ok) {
                return response.json().then((reservationJson) => {
                    dispatch({ type: GET_RESERVATION, payload: reservationJson });
                });
            } else {
                return response.json().then((errors) => {
                    return Promise.reject(errors);
                });
            }
        });
    }
}
