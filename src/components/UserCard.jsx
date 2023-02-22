import React from "react";
import "./UserCard.css";
import { IoIosAdd } from "react-icons/io";
import { useGobalData } from "../context";
function UserCard({ id, name, img }) {
  const { handleAddNewBoard } = useGobalData();
  return (
    <div className="userCard" onClick={() => handleAddNewBoard(name, img)}>
      <img src={img} alt={name.substring(0, 1)} className="userImg" />
      <div className="userName">{name}</div>
      <IoIosAdd size="20px" />
    </div>
  );
}

export default UserCard;
