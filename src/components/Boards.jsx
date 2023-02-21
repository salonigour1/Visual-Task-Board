import React, { useEffect, useState } from "react";
import { useGobalData } from "../context";
import { IoIosAdd } from "react-icons/io";
import "./Boards.css";
import Card from "./Card";
import { FiMoreVertical } from "react-icons/fi";
function Boards({
  bid,
  name,
  cards,
  setOpen,
  open,
  openEditable,
  setOpenEditable,
}) {
  const { boards } = useGobalData();
  // console.log(openEditable);
  const handleIt = () => {
    console.log("klsjdl");
  };
  const handleNa = () => {
    console.log("handleNa");
  };
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
            <div
              onClick={() =>
                setOpenEditable({ state: true, boardId: bid, cardId: curr.cid })
              }
              key={curr.cid}
            >
              <Card onClick={handleNa} key={curr.cid} cid={curr.cid} />
            </div>
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
