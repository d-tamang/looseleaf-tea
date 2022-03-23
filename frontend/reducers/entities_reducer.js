import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import teasReducer from "./teas_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  teas: teasReducer
});

export default entitiesReducer;