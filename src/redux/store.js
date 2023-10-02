// import { createStore, applyMiddleware } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import allData from "../data";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];
const intialState = {};
const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
