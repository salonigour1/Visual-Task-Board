import React from 'react';
import './UserCard.css';
import { IoIosAdd } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { handleAddNewBoard } from '../redux/action';
function UserCard({ id, name, color }) {
  const dispatch = useDispatch();
  const handleAddBoard = () => {
    dispatch(handleAddNewBoard(id, name, color));
  };
  const intialsName = (name) => {
    return name.charAt(0).toUpperCase();
  };
  return (
    <div className='userCard' onClick={handleAddBoard}>
      <div className='name_icon' style={{ backgroundColor: color }}>
        {intialsName(name)}
      </div>
      <div className='userName'>{name}</div>
      <IoIosAdd size='20px' />
    </div>
  );
}

export default UserCard;
