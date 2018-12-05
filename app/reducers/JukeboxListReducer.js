import { combineReducers } from "redux";
import { FETCH_JUKEBOX_LISTS } from "../actions/types";

const INITIAL_STATE = [];

const jukeboxListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JUKEBOX_LISTS:
      return action.payload.jls;
    default:
      return state;
  }
};

export default jukeboxListReducer;
