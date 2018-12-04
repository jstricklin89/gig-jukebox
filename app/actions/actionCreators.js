import {
  TEST,
  LOGIN,
  FETCH_SONG_LISTS,
  FETCH_JUKEBOX_LISTS
} from "../actions/types";
import { store } from "../ConfigureStore";

export const test = () => {
  return {
    type: TEST
  };
};

export const login = data => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
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
      })
      .then(res => {
        fetchSongLists();
      }) //is this wrong?
      .then(res => {
        fetchJukeboxLists();
      });
  };
};

export const fetchSongLists = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/song_lists", {
      headers: {
        Authorization: "Bearer " + store.getState().id_token
      }
    })
      .then(r => r.json())
      .then(slists => {
        console.log(slists);
        let sl = slists.find(sl => sl.user_id === store.getState().id);
        dispatch({
          type: FETCH_SONG_LISTS,
          payload: {
            sl: sl.songs
          }
        });
      });
  };
};

export const fetchJukeboxLists = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/jukebox_lists", {
      headers: {
        Authorization: "Bearer " + store.getState().id_token
      }
    })
      .then(r => r.json())
      .then(jlists => {
        console.log(jlists);
        let jl = jlists.find(jl => jl.user_id === store.getState().user);
        dispatch({
          type: FETCH_JUKEBOX_LISTS,
          payload: {
            jls: jl.songs, //this is my jls we had in seperate reducer, i think?
            jl
          }
        });
      });
  };
};
