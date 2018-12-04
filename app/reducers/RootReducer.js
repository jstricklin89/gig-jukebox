import { combineReducers } from "redux";
import jukeboxListReducer from "./JukeboxListReducer";
import {
  TEST,
  LOGIN,
  FETCH_SONG_LISTS,
  FETCH_JUKEBOX_LISTS
} from "../actions/types";

const INITIAL_STATE = {
  username: "",
  error: "",
  id: "",
  id_token: "",
  typeof: "",
  sl: [],
  jl: {},
  signupView: false
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_SONG_LISTS:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_JUKEBOX_LISTS:
      return {
        ...state,
        ...action.payload
      };
    case TEST:
      return {
        ...state,
        test: true
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
  jls: jukeboxListReducer
});

export default rootReducer;
