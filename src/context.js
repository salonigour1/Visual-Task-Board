import { useContext, useState } from "react";
import React from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [targetCard, setTargetCard] = useState({ boardId: "", cardId: "" });
  const ReturnId = (prefix) => prefix + Math.trunc(Math.random() * 10000000000);
  const [boards, setBoards] = useState([
    {
      bid: ReturnId("BID"),
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
      bid: ReturnId("BID"),
      name: "Beth Angles",
      img: "https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
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
      bid: ReturnId("BID"),
      name: "John Compton",
      img: "https://media.istockphoto.com/id/1277873802/photo/portrait-of-a-mature-man-with-a-little-smile-at-the-camera-right-side-of-the-picture.jpg?b=1&s=170667a&w=0&k=20&c=5C_zLbh5cohuKby821RbHZTP87Ae5CvBmUoPvy1-SbI=",
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
      ],
    },
  ]);
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

  //--------------------------------------------------------------------------

  const handleDragCard = (
    sourceId,
    destinationId,
    sourceIndex,
    destinationIndex,
    draggableId
  ) => {
    let cardInfo = {};
    const newArr = boards
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
    console.log(newArr);
    setBoards(newArr);
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
  //----------------------------------------------------------
  const handleAddNewBoard = (name, img) => {
    const newBoardInfo = {
      bid: ReturnId("BRD"),
      name: name,
      img: img,
      cards: [],
    };
    const tempArr = [...boards];
    tempArr.splice(1, 0, newBoardInfo);
    setBoards(tempArr);
  };
  //----------------------------------------------
  const handleDeleteBoard = (bid) => {
    const newArr = boards.filter((curr) => curr.bid !== bid);
    setBoards(newArr);
  };
  return (
    <AppContext.Provider
      value={{
        loading,
        boards,
        ReturnId,
        handleDelete,
        handleUpdateCard,
        handleDeleteBoard,
        handleAddCard,
        // handleDragEnd,
        // handleDragEnter,
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
