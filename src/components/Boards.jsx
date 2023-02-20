import React, { useEffect, useState } from "react";
import { useGobalData } from "../context";
import { IoIosAdd } from "react-icons/io";
import "./Boards.css";
import Card from "./Card";
import { FiMoreVertical } from "react-icons/fi";
function Boards({ bid, name, cards, setOpen, open }) {
  const { boards } = useGobalData();
  console.log(open.state);
  return (
    <>
      <div className="">
        <div className="board_header">
          <div className="subheading">
            {name}&nbsp;&nbsp;&nbsp;{cards.length}
          </div>
          <div>
            <FiMoreVertical size="25px" />
          </div>
        </div>
        <div className={cards.length <= 3 ? "boards" : "boards_overflow"}>
          {cards.map((curr) => (
            <Card key={curr.cid} cid={curr.cid} />
          ))}
        </div>

        <div className="add_section">
          <div
            className="add_btn"
            onClick={() => setOpen({ state: true, boardId: bid })}
          >
            <IoIosAdd size="25px" /> <span>Add Card</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boards;
