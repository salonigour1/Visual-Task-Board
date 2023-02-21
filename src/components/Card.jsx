import React, { useState } from "react";
import "./Card.css";
import moment from "moment";
import { useGobalData } from "../context";
function Card({ bid, cid, subject, description, timeStamp, urgency }) {
  const { handleDragEnd, handleDragEnter } = useGobalData();
  return (
    <div
      className="card"
      draggable
      onDragEnd={() => handleDragEnd(bid, cid)}
      onDragEnter={() => handleDragEnter(bid, cid)}
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
  );
}

export default Card;
