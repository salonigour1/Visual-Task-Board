import React from "react";
import { useGobalData } from "../context";
import UserCard from "./UserCard";
import "./UsersBoard.css";
function UsersBoard() {
  const { users } = useGobalData();

  return (
    <div className="userBoard">
      {users.map((curr) => (
        <UserCard key={curr.id} {...curr} />
      ))}
    </div>
  );
}

export default UsersBoard;
