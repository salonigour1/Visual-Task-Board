// root-reducer is used to combine more than one reducers.

import { combineReducers } from "redux";
import BoardReducer from "./reducer";

const rootReducer = combineReducers({ data: BoardReducer });
export default rootReducer;
