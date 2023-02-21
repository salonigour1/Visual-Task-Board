import logo from "./logo.svg";
import "./App.css";
import Boards from "./components/Boards";
import { useGobalData } from "./context";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import moment from "moment";
import UpdateForm from "./components/UpdateForm";
function App() {
  const { boards } = useGobalData();
  const [open, setOpen] = useState({ state: false, boardId: "" });
  const [openEditable, setOpenEditable] = useState({
    state: false,
    boardId: "",
    cardId: "",
  });

  return (
    <div className="App">
      <Form open={open} setOpen={setOpen} />
      <UpdateForm
        openEditable={openEditable}
        setOpenEditable={setOpenEditable}
      />
      <div className="board_container ">
        {boards.map((curr) => (
          <Boards
            key={curr.bid}
            {...curr}
            setOpen={setOpen}
            open={open}
            openEditable={openEditable}
            setOpenEditable={setOpenEditable}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
