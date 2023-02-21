import { useContext, useState } from "react";
import React from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [targetCard, setTargetCard] = useState({ boardId: "", cardId: "" });
  const ReturnId = (prefix) => prefix + Math.trunc(Math.random() * 10000000000);
  const [boards, setBoards] = useState([
    {
      bid: ReturnId("BRD"),
      name: "No Assigned To",
      cards: [
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
      ],
    },
    {
      bid: ReturnId("BRD"),
      name: "Beth Angles",
      cards: [
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
      ],
    },
    {
      bid: ReturnId("BRD"),
      name: "John Compton",
      cards: [
        {
          cid: ReturnId("TASK"),
          subject: "saloni",
          description: "fine ass",
          timeStamp: "23/04/2021",
          urgency: "Low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
        {
          cid: ReturnId("TASK"),
          subject: "",
          description: "",
          timeStamp: "",
          urgency: "Low",
        },
      ],
    },
    {
      bid: ReturnId("BRD"),
      name: "Erica Stevenson",
      cards: [
        { cid: ReturnId("TASK") },
        { cid: ReturnId("TASK") },
        { cid: ReturnId("TASK") },
      ],
    },
  ]);

  //--------------------------------------------------------
  const handleDragEnd = (bid, cid) => {
    console.log("handleDragEnd", bid, cid);
    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    t_boardIndex = boards.findIndex((curr) => curr.bid === targetCard.boardId);

    if (t_boardIndex < 0) return;
    t_cardIndex = boards[t_boardIndex].cards?.findIndex(
      (curr) => curr.cid === targetCard.cardId
    );

    if (t_cardIndex < 0) return;
    s_boardIndex = boards.findIndex((curr) => curr.bid === bid);

    if (s_boardIndex < 0) return;
    s_cardIndex = boards[s_boardIndex].cards?.findIndex(
      (curr) => curr.cid === cid
    );
    if (s_cardIndex < 0) return;
    console.log(bid, cid, targetCard.boardId, targetCard.cardId);
    console.log(s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex);
    const tempBoard = [...boards];
    const tempCard = tempBoard[s_boardIndex].cards[s_cardIndex];
    tempBoard[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoard[t_boardIndex].cards.splice(t_cardIndex, 0, tempCard);
    setBoards(tempBoard);
  };

  //--------------------------------------------------------
  const handleDragEnter = (bid, cid) => {
    setTargetCard({ boardId: bid, cardId: cid });
    console.log("handleDragEnter", bid, cid);
  };
  //-----------------------------------------------------
  const handleAddCard = (bid, cardInfo) => {
    console.log(bid, cardInfo);
    const newArr = boards.map((curr) => {
      if (curr.bid === bid) {
        const newCards = [...curr.cards, cardInfo];
        return { ...curr, cards: newCards };
      } else {
        return curr;
      }
    });
    console.log(newArr);
    setBoards(newArr);
  };

  //-------------------------------------------------------
  const handleUpdateCard = (bid, cid, newInfo) => {
    const newUpdateArray = boards.map((curr) => {
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
    setBoards(newUpdateArray);
  };
  //---------------------------------------------------------------------
  const handleDelete = (bid, cid) => {
    console.log(bid, cid);
    const newArray = boards.map((curr) => {
      if (bid === curr.bid) {
        const newCards = curr.cards.filter((curr) => curr.cid !== cid);
        return { ...curr, cards: newCards };
      } else {
        return curr;
      }
    });
    setBoards(newArray);
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        boards,
        ReturnId,
        handleDelete,
        handleUpdateCard,
        handleAddCard,
        handleDragEnd,
        handleDragEnter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGobalData = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
