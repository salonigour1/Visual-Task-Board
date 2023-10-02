import logo from './logo.svg';
import './App.css';
import Boards from './components/Boards';

import { useEffect, useState } from 'react';
import Form from './components/Form';
import moment from 'moment';
import UpdateForm from './components/UpdateForm';
import UsersBoard from './components/UsersBoard';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleDragCard, setBoardData } from './redux/action';
import allData from './data';
function App() {
  const dispatch = useDispatch();
  const { boards } = useSelector((state) => ({
    ...state.data,
  }));
  console.log(boards);
  const [open, setOpen] = useState({ state: false, boardId: '' });
  const [openEditable, setOpenEditable] = useState({
    state: false,
    boardId: '',
    cardId: '',
  });
  useEffect(() => {
    // dispatch(setBoardData());
  }, []);
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(result);
    console.log(destination, source, draggableId);
    if (!destination) return;
    dispatch(
      handleDragCard(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
  return (
    <div className='parent_container'>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className=''>
          <Form open={open} setOpen={setOpen} />
          <UpdateForm
            openEditable={openEditable}
            setOpenEditable={setOpenEditable}
          />
          <UsersBoard />

          <div className='board_container '>
            {boards.map((curr) => (
              <Boards
                key={curr.bid}
                {...curr}
                setOpen={setOpen}
                open={open}
                openEditable={openEditable}
                setOpenEditable={setOpenEditable}
              />
            ))}
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
