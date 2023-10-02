import * as type from "./actionType";
import allData from "../data";
const intialState = {
  boards: JSON.parse(localStorage.getItem("boards")) || allData.boards,
  users: JSON.parse(localStorage.getItem("users")) || allData.users,
  loading: true,
};

const BoardReducer = (state = intialState, action) => {
  switch (action.type) {
    case type.SET_BOARD_DATA:
      return {
        ...state,
        boards: action.payload.boards,
        users: action.payload.users,
        loading: false,
      };
    case type.HANDLE_DRAG_AND_DROP_CARD:
      return { ...state, boards: action.payload };
    case type.HANDLE_ADD_CARD:
      return { ...state, boards: action.payload };
    case type.HANDLE_UPDATE_CARD:
      return { ...state, boards: action.payload };
    case type.HANDLE_DELETE_CARD:
      return { ...state, boards: action.payload };
    case type.HANDLE_DELETE_BOARD:
      return { ...state, boards: action.payload };
    case type.HANDLE_ADD_NEW_BOARD:
      return {
        ...state,
        boards: action.payload.boards,
        users: action.payload.users,
        loading: false,
      };
    case type.HANDLE_ADD_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
export default BoardReducer;
