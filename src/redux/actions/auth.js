import { AUTHENTICATED, NOT_AUTHENTICATED} from ".";

const setToken = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < thirtyMinutes) {
      return localStorage.getItem("token");
    }
}

export const signupUser = (credentials) => {
    return (dispatch) => {
        return fetch("https://oceans-api.onrender.com/api/v1/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: credentials }),
        }).then((response) => {
            if (response.ok) {
                return response.json().then((user) => {
                    setToken(user.token);
                    dispatch({ type: AUTHENTICATED });
                });
            } else {
                return response.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
        }
}

export const loginUser = (credentials) => {
    return (dispatch) => {
        return fetch("https://oceans-api.onrender.com/api/v1/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: credentials }),
        }).then((response) => {
            if (response.ok) {
                setToken(response.headers.get("Authorization"));
                return response.json().then((userJson) => {
                    dispatch({ type: AUTHENTICATED, payload: userJson });

                }
                );
            } else {
                return response.json().then((errors) => {
                    dispatch({ type: NOT_AUTHENTICATED });
                    return Promise.reject(errors);
                });
            }
        });
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        return fetch("https://oceans-api.onrender.com/api/v1/logout", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: getToken(),
            },
        }).then((response) => {
            if (response.ok) {
                return dispatch({ type: NOT_AUTHENTICATED });
              } else {
                return response.json().then((errors) => {
                  dispatch({ type: NOT_AUTHENTICATED });
                  return Promise.reject(errors);
                });
              }

        });
    }
 }