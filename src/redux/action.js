import allData from '../data';
import * as type from './actionType';

const colors = ['#c07dfa', '#faa472', '#ea657b', '#8181f3', '#d271d2'];

export function setBoardData() {
  return function (dispatch, getState) {
    localStorage.setItem('boards', JSON.stringify(allData.boards));
    localStorage.setItem('users', JSON.stringify(allData.users));
    dispatch({
      type: type.SET_BOARD_DATA,
      payload: {
        boards: JSON.parse(localStorage.getItem('boards')) || [],
        users: JSON.parse(localStorage.getItem('users')) || [],
      },
    });
  };
}
export function handleAddUser(newUser) {
  return function (dispatch, getState) {
    const {
      data: { users },
    } = getState();
    localStorage.setItem('users', JSON.stringify(users));
    const usersArr = JSON.parse(localStorage.getItem('users')) || [];
    const newInfo = {
      ...newUser,
      color: colors[Math.trunc(Math.random() * colors.length)],
    };
    dispatch({
      type: type.HANDLE_ADD_USER,
      payload: [...usersArr, newInfo],
    });

    localStorage.setItem('users', JSON.stringify([...users, newInfo]));
    // handleAddNewBoard(newInfo.id, newInfo.name, newInfo.color);
  };
}

export function handleDeleteBoard(bid) {
  return function (dispatch, getState) {
    const {
      data: { boards },
    } = getState();
    localStorage.setItem('boards', JSON.stringify(boards));
    const boardsArr = JSON.parse(localStorage.getItem('boards')) || [];
    const updatedBoard = boardsArr.filter((curr) => curr.bid !== bid);
    dispatch({
      type: type.HANDLE_DELETE_BOARD,
      payload: updatedBoard,
    });
    localStorage.setItem('boards', JSON.stringify(updatedBoard));
  };
}
export function handleAddCard(bid, cardInfo) {
  return function (dispatch, getState) {
    const {
      data: { boards },
    } = getState();
    localStorage.setItem('boards', JSON.stringify(boards));
    const boardsArr = JSON.parse(localStorage.getItem('boards')) || [];

    const newArr = boardsArr.map((curr) => {
      if (curr.bid === bid) {
        const newCards = [...curr.cards, cardInfo];
        return { ...curr, cards: newCards };
      } else {
        return curr;
      }
    });
    dispatch({
      type: type.HANDLE_ADD_CARD,
      payload: newArr,
    });
    localStorage.setItem('boards', JSON.stringify(newArr));
  };
}

export function handleUpdateCard(bid, cid, newInfo) {
  return function (dispatch, getState) {
    const {
      data: { boards },
    } = getState();
    localStorage.setItem('boards', JSON.stringify(boards));
    const boardsArr = JSON.parse(localStorage.getItem('boards')) || [];
    const newUpdateArray = boardsArr.map((curr) => {
      if (bid === curr.bid) {
        const newCards = curr.cards.map((curr) => {
          if (curr.cid === cid) {
            return newInfo;
          } else return curr;
        });
        return { ...curr, cards: newCards };
      } else {
        return curr;
      }
    });
    dispatch({
      type: type.HANDLE_UPDATE_CARD,
      payload: newUpdateArray,
    });
    localStorage.setItem('boards', JSON.stringify(newUpdateArray));
  };
}

export function handleDeleteCard(bid, cid) {
  return function (dispatch, getState) {
    const {
      data: { boards },
    } = getState();
    localStorage.setItem('boards', JSON.stringify(boards));
    const boardsArr = JSON.parse(localStorage.getItem('boards')) || [];
    const newArray = boardsArr.map((curr) => {
      if (bid === curr.bid) {
        const newCards = curr.cards.filter((curr) => curr.cid !== cid);
        return { ...curr, cards: newCards };
      } else {
        return curr;
      }
    });
    dispatch({
      type: type.HANDLE_DELETE_CARD,
      payload: newArray,
    });
    localStorage.setItem('boards', JSON.stringify(newArray));
  };
}
export function handleDragCard(
  sourceId,
  destinationId,
  sourceIndex,
  destinationIndex,
  draggableId
) {
  return function (dispatch, getState) {
    const {
      data: { boards },
    } = getState();
    localStorage.setItem('boards', JSON.stringify(boards));
    const boardsArr = JSON.parse(localStorage.getItem('boards')) || [];
    let cardInfo = {};
    const newArr = boardsArr
      .map((curr) => {
        if (curr.bid !== sourceId) {
          return curr;
        } else {
          const cardArr = [...curr.cards];
          cardInfo = cardArr.splice(sourceIndex, 1)[0];
          return { ...curr, cards: cardArr };
        }
      })
      .map((curr) => {
        if (curr.bid !== destinationId) {
          return curr;
        } else {
          const cardArr = [...curr.cards];
          cardArr.splice(destinationIndex, 0, cardInfo);
          return { ...curr, cards: cardArr };
        }
      });
    dispatch({ type: type.HANDLE_DRAG_AND_DROP_CARD, payload: newArr });
    localStorage.setItem('boards', JSON.stringify(newArr));
  };
}
export function handleAddNewBoard(userInfo) {
  return function (dispatch, getState) {
    const {
      data: { boards, users },
    } = getState();
    localStorage.setItem('boards', JSON.stringify(boards));
    localStorage.setItem('users', JSON.stringify(users));

    const boardsArr = JSON.parse(localStorage.getItem('boards')) || [];
    const usersArr = JSON.parse(localStorage.getItem('users')) || [];
    const newUserInfoComplete = {
      ...userInfo,
      color: colors[Math.trunc(Math.random() * colors.length)],
    };

    const newBoardInfoComplete = {
      bid: 'BRD' + Math.trunc(Math.random() * 10000000000),
      name: newUserInfoComplete.name,
      color: newUserInfoComplete.color,
      cards: [],
    };

    const updatedBoardArr = [...boardsArr];
    const updatedUserArr = [...usersArr, newUserInfoComplete];

    updatedBoardArr.splice(1, 0, newBoardInfoComplete);

    dispatch({
      type: type.HANDLE_ADD_NEW_BOARD,
      payload: { boards: updatedBoardArr, users: updatedUserArr },
    });
    localStorage.setItem('boards', JSON.stringify(updatedBoardArr));
    localStorage.setItem('users', JSON.stringify(updatedUserArr));
  };
}
