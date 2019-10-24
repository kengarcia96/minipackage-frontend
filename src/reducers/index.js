import loginReducer from "./login";
import {combineReducers} from "redux";
import bookingReducer from "./booking";


const rootReducer = combineReducers({
  isLogin: loginReducer,
  bookingResource: bookingReducer
});

export default rootReducer;
