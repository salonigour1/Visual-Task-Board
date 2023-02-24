import { useContext, useState, useEffect } from "react";
import React from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [targetCard, setTargetCard] = useState({ boardId: "", cardId: "" });
  const ReturnId = (prefix) => prefix + Math.trunc(Math.random() * 10000000000);
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetchBoard();
  }, []);
  const fetchBoard = async () => {
    const response = await fetch("http://localhost:5000/boards");
    const data = await response.json();
    setBoards(data);
    console.log(data);
  };
  const [users, setUsers] = useState([
    {
      id: ReturnId("UID"),
      name: "Saloni",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: ReturnId("UID"),
      name: "Aashi",
      img: "https://media.istockphoto.com/id/1277873802/photo/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-of-the-picture.jpg?b=1&s=170667a&w=0&k=20&c=5C_zLbh5cohuKby821RbHZTP87Ae5CvBmUoPvy1-SbI=",
    },
    {
      id: ReturnId("UID"),
      name: "Nikki",
      img: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
    },
    {
      id: ReturnId("UID"),
      name: "Jarvis",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: ReturnId("UID"),
      name: "Jenny",
      img: "https://images.unsplash.com/photo-1617550541923-d244ae0035b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGdpcmwlMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      id: ReturnId("UID"),
      name: "Chrish",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: ReturnId("UID"),
      name: "Patrick",
      img: "https://i.pinimg.com/736x/c8/ff/88/c8ff88ba5d7c2844bfbeaaa0837d1de5.jpg",
    },
  ]);

  //--------------------------------------------------------
  const handleDragEnd = (e, id, cid) => {
    e.preventDefault();
    console.log("handleDragEnd", id, cid);

    let s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex;
    s_boardIndex = boards.findIndex((curr) => curr.id === id);
    if (s_boardIndex < 0) return;

    s_cardIndex = boards[s_boardIndex].cards?.findIndex(
      (curr) => curr.cid === cid
    );
    if (s_cardIndex < 0) return;

    //.................................
    t_boardIndex = boards.findIndex((curr) => curr.id === targetCard.boardId);
    if (t_boardIndex < 0) return;
    //.................................

    t_cardIndex = boards[t_boardIndex].cards?.findIndex(
      (curr) => curr.cid === targetCard.cardId
    );

    if (t_cardIndex < 0) return;

    //..................................

    console.log(id, cid, targetCard.boardId, targetCard.cardId);
    console.log(s_boardIndex, s_cardIndex, t_boardIndex, t_cardIndex);
    const tempBoard = [...boards];
    const tempCard = tempBoard[s_boardIndex].cards[s_cardIndex];
    tempBoard[s_boardIndex].cards.splice(s_cardIndex, 1);
    tempBoard[t_boardIndex].cards.splice(t_cardIndex, 0, tempCard);
    setBoards(tempBoard);
    setTargetCard({ boardId: "", cardId: "" });
  };

  //--------------------------------------------------------
  const handleDragEnter = (e, id, cid) => {
    e.preventDefault();
    setTargetCard({ boardId: id, cardId: cid });
    console.log("handleDragEnter", id, cid);
  };
  //-----------------------------------------------------
  const handleAddCard = async (id, cardInfo) => {
    console.log(id, cardInfo);

    const updatedBoard = boards
      .map((curr) => {
        if (curr.id === id) {
          const newCards = [...curr.cards, cardInfo];
          return { ...curr, cards: newCards };
        } else return curr;
      })
      .filter((curr) => curr.id === id)[0];
    console.log(updatedBoard);

    const response = await fetch(`http://localhost:5000/boards/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBoard),
    });
    const data = await response.json();
    setBoards(boards.map((curr) => (curr.id === id ? data : curr)));
  };

  //-------------------------------------------------------
  const handleUpdateCard = async (id, cid, newInfo) => {
    const updatedBoard = boards
      .map((curr) => {
        if (id === curr.id) {
          const newCards = curr.cards.map((curr) => {
            if (curr.cid === cid) {
              return newInfo;
            } else return curr;
          });
          return { ...curr, cards: newCards };
        } else {
          return curr;
        }
      })
      .filter((curr) => curr.id === id)[0];
    console.log(updatedBoard);
    const response = await fetch(`http://localhost:5000/boards/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBoard),
    });
    const data = await response.json();
    setBoards(boards.map((curr) => (curr.id === id ? data : curr)));

    // setBoards(newUpdateArray);
  };
  //---------------------------------------------------------------------
  const handleDeleteCard = async (id, cid) => {
    console.log(id, cid);
    const updatedBoard = boards
      .map((curr) => {
        if (id === curr.id) {
          const newCards = curr.cards.filter((curr) => curr.cid !== cid);
          return { ...curr, cards: newCards };
        } else {
          return curr;
        }
      })
      .filter((curr) => curr.id === id)[0];
    console.log(updatedBoard);
    const response = await fetch(`http://localhost:5000/boards/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBoard),
    });
    const data = await response.json();
    setBoards(boards.map((curr) => (curr.id === id ? data : curr)));
  };
  //----------------------------------------------------------
  const handleAddNewBoard = async (name, img) => {
    const newBoardInfo = {
      name: name,
      img: img,
      cards: [],
    };
    const response = await fetch(`http://localhost:5000/boards`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBoardInfo),
    });

    const data = await response.json();
    const tempArr = [...boards];
    tempArr.splice(1, 0, data);
    setBoards(tempArr);
    // const [unassigned, ...otherBoards] = boards;
    // console.log(unassigned, otherBoards);
  };
  //----------------------------------------------
  const handleDeleteBoard = async (id) => {
    if (window.confirm("Are you sure you want to delete the board?")) {
      const response = await fetch(`http://localhost:5000/boards/${id}`, {
        method: "DELETE",
      });
      const newArr = boards.filter((curr) => curr.id !== id);
      setBoards(newArr);
    }
  };
  //--------------------------------------------
  const handleDragCard = async (
    droppableIdStart,
    droppableIdEnd,
    draggableIndexStart,
    draggableIndexEnd,
    draggableId
  ) => {
    const cardInfo = boards.filter(
      (curr) => curr.id === Number(droppableIdStart)
    )[0].cards[draggableIndexStart];
    console.log(cardInfo);
    const abc = [
      ...boards.filter((curr) => curr.id === Number(droppableIdEnd))[0].cards,
    ];
    console.log(abc.splice(draggableIndexEnd, 0, cardInfo));
    console.log(abc);
    const updatedBoardInfo = boards
      .map((curr) =>
        curr.id === Number(droppableIdEnd) ? { ...curr, cards: abc } : curr
      )
      .filter((curr) => curr.id === Number(droppableIdEnd))[0];
    console.log(updatedBoardInfo);
    const response = await fetch(
      `http://localhost:5000/boards/${Number(droppableIdEnd)}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBoardInfo),
      }
    );
    const data = await response.json();
    console.log(data);
    setBoards(
      boards.map((curr) => (curr.id === Number(droppableIdEnd) ? data : curr))
    );
    console.log(boards);
    handleDeleteCard(Number(droppableIdStart), draggableId);
    // const sortedTargetBoard = boards.map((curr) => {
    //   if (curr.id === Number(droppableIdEnd)) {
    //     const temp = curr.cards;
    //     console.log(temp.);
    //     // console.log(curr.cards.splice(draggableIndexEnd, 0, curr));
    //     return curr;
    //   } else {
    //     return curr;
    //   }
    // });
    // console.log(sortedTargetBoard);
    //
    console.log(
      droppableIdStart,
      droppableIdEnd,
      draggableIndexStart,
      draggableIndexEnd,
      draggableId
    );
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        boards,
        ReturnId,
        handleDeleteCard,
        handleUpdateCard,
        handleDeleteBoard,
        handleAddCard,
        handleDragEnd,
        handleDragEnter,
        users,
        setUsers,
        handleAddNewBoard,
        handleDragCard,
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
