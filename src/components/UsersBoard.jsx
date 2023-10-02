import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleAddNewBoard, handleAddUser } from '../redux/action';
import { BsPersonCircle } from 'react-icons/bs';
import UserCard from './UserCard';
import './UsersBoard.css';

function UsersBoard() {
  // const colors = ['#c07dfa', '#faa472', '#ea657b', '#8181f3', '#d271d2'];
  const ReturnId = (prefix) => prefix + Math.trunc(Math.random() * 10000000000);
  const [openAddUser, setOpenAddUser] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => ({
    ...state.data,
  }));

  const [nameValue, setNameValue] = useState({
    name: '',
    first_name: '',
    last_name: '',
    id: '',
  });

  const handleChange = (name_value, name) => {
    //name === 'first_name' ? (f_name = name_value) : (l_name = name_value);

    setNameValue({
      ...nameValue,
      [name]: name_value,
      name: nameValue.first_name + ' ' + nameValue.last_name,
    });
  };
  const handleOpenUserBox = () => {
    setOpenAddUser(true);
    // dispatch(handleAddUser);
  };
  const handleCloseUserBox = () => {
    setOpenAddUser(false);
    return;
    //
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!nameValue.first_name && nameValue.last_name) {
    //   console.log('Please enter both name');
    //   return;
    // }
    console.log('object drop here');
    const newUser = {
      name: nameValue.first_name + ' ' + nameValue.last_name,
      id: ReturnId('UID'),
    };
    setNameValue(newUser);
    console.log('object drop here2');
    // dispatch(handleAddUser(newUser));
    dispatch(handleAddNewBoard(newUser));
    console.log('object drop here2.4');
    setOpenAddUser(false);
    setNameValue({
      name: '',
      first_name: '',
      last_name: '',
      id: '',
    });
    console.log('object drop here3');
  };

  return (
    <>
      {/* <div className='userBoard'>
        {users.map((curr) => (
          <UserCard key={curr.id} {...curr} />
        ))}
        <div onClick={handleOpenUserBox} className='add_user_button'>
          <AiOutlinePlus size='20px' />
        </div>
      </div> */}
      <div className='userBoard'>
        <div className='title'>My Board</div>
        <div className='my_function'>
          <div onClick={handleOpenUserBox} className=''>
            <button>Add Users</button>
          </div>

          <div>
            <BsPersonCircle size='30px' color='#8a8b8b' />
          </div>
        </div>
      </div>
      <div
        // className={openAddUser ? "background_user overlay" : "background_user"}
        className={openAddUser ? 'check overlay' : 'check'}
        // className={openAddUser ? 'overlay' : ''}
      >
        <div className={`add_users ${openAddUser ? 'visible' : ''}`}>
          <div className='user_heading'>Add User</div>
          <form>
            <div className='box'>
              <label className='label_name'>
                First Name:
                <input
                  value={nameValue.first_name || ''}
                  className=' name_field'
                  name='first_name'
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                />
              </label>
              <label className='label_name'>
                Last Name:
                <input
                  value={nameValue.last_name || ''}
                  className=' name_field'
                  name='last_name'
                  onChange={(e) => handleChange(e.target.value, e.target.name)}
                />
              </label>
              <div className='buttonContainer_Update'>
                <button
                  type='submit'
                  className='btn'
                  onClick={(e) => handleSubmit(e)}
                >
                  Add
                </button>
                <button className='btn' onClick={handleCloseUserBox}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UsersBoard;
