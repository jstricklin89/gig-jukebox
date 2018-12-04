import { TEST, LOGIN } from "../actions/types";

export const test = () => {
  return {
    type: TEST
  };
};

export const login = data => {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: data.username,
          password: data.password
        }
      })
    })
      .then(r => r.json())
      .then(r => {
        dispatch({
          type: LOGIN,
          payload: {
            id_token: r.jwt,
            id: r.user.id,
            typeof: r.user.typeof,
            username: r.user.username
          }
        });
      });
  };
};
