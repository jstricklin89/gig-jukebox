import { combineReducers } from "redux";
import jukeboxListReducer from "./JukeboxListReducer";
import { TEST, LOGIN } from "../actions/types";

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
