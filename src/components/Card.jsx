import React, { useState } from "react";
import "./Card.css";
import moment from "moment";
import { useGobalData } from "../context";
import { Draggable } from "react-beautiful-dnd";
function Card({
  bid,
  cid,
  subject,
  description,
  timeStamp,
  urgency,
  index,
  id,
}) {
  const { handleDragEnd, handleDragEnter } = useGobalData();

  return (
    <Draggable draggableId={String(cid)} index={index}>
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card_heading">{subject}</div>
          <div className="card_desc">{description}</div>
          <div className="card_desc">{bid}</div>
          <div>
            <div>
              <img />
            </div>
            <div>{cid}</div>
            <div>{moment().startOf("day").fromNow()}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
