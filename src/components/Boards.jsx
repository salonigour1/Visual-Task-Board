import React, { useEffect, useState } from 'react';

import { IoIosAdd } from 'react-icons/io';
import './Boards.css';
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
import { FiMoreVertical } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { handleDeleteBoard } from '../redux/action';
function Boards({
  bid,

  name,
  color,
  cards,
  setOpen,
  open,
  openEditable,
  setOpenEditable,
}) {
  const dispatch = useDispatch();

  // var str = 'Saloni';

  const intialsName = (name) => {
    if (name === 'No Assigned To') {
      return 'UA';
    }

    const nameArr = name.split(' ');
    if (nameArr) {
    }
    let result = '';
    nameArr.map((curr) => {
      result = result + curr.charAt(0);
      return 1;
    });
    return result.toUpperCase();
  };

  const [showDelete, setDelete] = useState(false);
  const deleteBoard = (boardID) => {
    dispatch(handleDeleteBoard(bid));
  };

  return (
    <>
      <div className='board'>
        <div className='bg_board'>
          <div className='board_header'>
            <div className='r_header'>
              <div className='username_icon' style={{ backgroundColor: color }}>
                {intialsName(name)}
              </div>
              <div className='subheading'>{name}</div>
            </div>

            <div className='r_header'>
              <div>{cards.length}</div>
              <FiMoreVertical
                size='25px'
                onClick={() => {
                  return setDelete(!showDelete);
                }}
              />
            </div>
            <div
              className={`delete_board ${
                showDelete ? 'visible_deleteBoard' : ''
              }`}
              onClick={() => deleteBoard(bid)}
            >
              Delete Board
            </div>
          </div>
          <Droppable droppableId={String(bid)}>
            {(provided, snapshot) => (
              <div
                className='boards'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map((curr, index) => (
                  <div
                    onClick={() =>
                      setOpenEditable({
                        state: true,
                        boardId: bid,
                        cardId: curr.cid,
                      })
                    }
                    key={curr.cid}
                  >
                    <Card
                      key={curr.cid}
                      {...curr}
                      id={bid}
                      color={color}
                      index={index}
                      intialOfName={intialsName(name)}
                    />
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div
            className='btn_add_card'
            onClick={() => setOpen({ state: true, boardId: bid })}
          >
            <IoIosAdd size='25px' /> <span>Add Card</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Boards;
