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
  const { boards, handleDeleteBoard } = useGobalData();
  // console.log(openEditable);
  const handleIt = () => {
    console.log("klsjdl");
  };
  const handleNa = () => {
    console.log("handleNa");
  };
  const [showDelete, setDelete] = useState(false);
  return (
    <>
      <div className="board">
        <div className="board_header">
          <div className="subheading">
            {name}&nbsp;&nbsp;&nbsp;{cards.length} {bid}
          </div>
          {/* <div>
            <details>
              <summary>
                <FiMoreVertical
                  size="25px"
                  onClick={() => setDelete(!showDelete)}
                />
              </summary>
              <div className="delete_board visible_deleteBoard">
                Delete Board
              </div>
            </details>
          </div> */}
          <div>
            <FiMoreVertical
              size="25px"
              onClick={() => setDelete(!showDelete)}
            />
          </div>
          <div
            className={`delete_board ${
              showDelete ? "visible_deleteBoard" : ""
            }`}
            onClick={() => handleDeleteBoard(bid)}
          >
            Delete Board
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
              <Card onClick={handleNa} key={curr.cid} {...curr} bid={bid} />
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
