import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import teasReducer from "./teas_reducer";
import cartItemsReducer from "./cart_items_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  teas: teasReducer,
  cartItems: cartItemsReducer
});

export default entitiesReducer;