import React, { useState } from "react";
import "./Card.css";
import moment from "moment";
import { useGobalData } from "../context";
import { Draggable } from "react-beautiful-dnd";
function Card({ id, index, cid, subject, description, timeStamp, urgency }) {
  const { handleDragEnd, handleDragEnter } = useGobalData();
  return (
    <Draggable draggableId={String(cid)} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          // onDragEnd={(e) => handleDragEnd(e, id, cid)}
          // onDragEnter={(e) => handleDragEnter(e, id, cid)}
        >
          <div className="card_heading">{subject}</div>
          <div className="card_desc">{description}</div>
          <div className="card_desc">{id}</div>
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
