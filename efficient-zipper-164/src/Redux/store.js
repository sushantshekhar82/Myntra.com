import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./products/reducer";
import { userReducer } from "./register/reducer";
import { userloginReducer } from "./login/reducer";
// import { authReducer } from "./Authentication/auth.reducer";
const rootReducer = combineReducers({
  product: productReducer,
  user:userReducer,
  loginUser:userloginReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
