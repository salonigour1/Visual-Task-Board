import React, { useState } from 'react';
import './Form.css';
import { RxCross1 } from 'react-icons/rx';
import moment from 'moment';
import { MdDateRange } from 'react-icons/md';
import { HiSortDescending } from 'react-icons/hi';
import { TfiText } from 'react-icons/tfi';
import { useDispatch } from 'react-redux';
import { handleAddCard } from '../redux/action';
function Form({ open, setOpen }) {
  const ReturnId = (prefix) => prefix + Math.trunc(Math.random() * 10000000000);

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    cid: '',
    subject: '',
    description: '',
    timeStamp: '',
    urgency: '',
  });
  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
      timeStamp: moment().format('YYYY-MM-D'),
      cid: ReturnId('TASK'),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddCard(open.boardId, values));
    setValues({
      cid: '',
      subject: '',
      description: '',
      timeStamp: '',
      urgency: '',
    });
    setOpen({ state: false, boardId: '' });
  };
  return (
    <div className={open.state ? 'check overlay' : 'check'}>
      <div className={`add_form ${open.state ? 'visible' : ''}`}>
        <div className='heading'>Create New Task</div>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <div className='cross'>
            <RxCross1
              size='25px'
              onClick={() => setOpen({ state: false, boardId: '' })}
            />
          </div>
          <div>
            <TfiText size='20px' />
            &nbsp;<label>Title</label>
            <br></br>
            <input
              value={values.subject || ''}
              name='subject'
              type='text'
              className='titleField'
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <HiSortDescending />
            &nbsp;<label>Description:</label>
            <br />
            <textarea
              value={values.description}
              name='description'
              className='descField'
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
          <div className='bottomContainer'>
            <div>
              <label>Urgency:</label>

              <select
                value={values.urgency}
                name='urgency'
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div>
              <MdDateRange />
              &nbsp;<label>Date</label>
              <span className='date'>
                {/* {moment().subtract(10, 'days').calendar()} */}
                {moment().format('YYYY-MM-D')}
              </span>
            </div>
          </div>
          <div className='buttonContainer_Update'>
            <button className='add_btn' type='submit'>
              Add Card
            </button>
            <button
              className='add_btn'
              onClick={() => setOpen({ state: false, boardId: '' })}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
