import logo from "./logo.svg";
import "./App.css";
import Boards from "./components/Boards";
import { useGobalData } from "./context";
import { useState } from "react";
import Form from "./components/Form";
import moment from "moment";
function App() {
  const { boards } = useGobalData();
  const [open, setOpen] = useState({ state: false, boardId: "" });

  return (
    <div className="App">
      <Form open={open} setOpen={setOpen} />
      <div className="board_container ">
        {boards.map((curr) => (
          <Boards key={curr.bid} {...curr} setOpen={setOpen} open={open} />
        ))}
      </div>
    </div>
  );
}

export default App;
