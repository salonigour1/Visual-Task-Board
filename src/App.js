import logo from "./logo.svg";
import "./App.css";
import Boards from "./components/Boards";
import { useGobalData } from "./context";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import moment from "moment";
import UpdateForm from "./components/UpdateForm";
import UsersBoard from "./components/UsersBoard";
import { DragDropContext } from "react-beautiful-dnd";
function App() {
  const { boards, handleDragCard } = useGobalData();

  const [open, setOpen] = useState({ state: false, boardId: "" });
  const [openEditable, setOpenEditable] = useState({
    state: false,
    boardId: "",
    cardId: "",
  });
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(result);
    console.log(
      "destination",
      destination,
      "source",
      source,
      "draggableId",
      draggableId
    );
    if (!destination) {
      return;
    }
    handleDragCard(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    );
    console.log(
      typeof source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Form open={open} setOpen={setOpen} />
        <UpdateForm
          openEditable={openEditable}
          setOpenEditable={setOpenEditable}
        />
        <UsersBoard />
        <div className="board_container ">
          {boards.map((curr) => (
            <Boards
              key={curr.id}
              {...curr}
              setOpen={setOpen}
              open={open}
              openEditable={openEditable}
              setOpenEditable={setOpenEditable}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
