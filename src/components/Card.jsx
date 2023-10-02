import React, { useState } from 'react';
import './Card.css';
import moment from 'moment';

import { Draggable } from 'react-beautiful-dnd';
function Card({
  bid,
  cid,
  subject,
  description,
  timeStamp,
  urgency,
  intialOfName,
  color,
  index,
  id,
}) {
  var timePassed = moment(moment().startOf('hour').format(timeStamp)).fromNow();
  

  const getUrgency = (urgency) => {
   
    if (urgency.toLowerCase() === 'low') return 'green';
    else if (urgency.toLowerCase() === 'medium') return 'orange';
    else if (urgency.toLowerCase() === 'high') return 'red';
    else return 'green';
  };
  const getDescription = (desc) => {
    
    return desc.length > 70 ? desc.substring(0, 70) + '....' : desc;
  };
  return (
    <Draggable draggableId={String(cid)} index={index}>
      {(provided, snapshot) => (
        <div
          className='card'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <div className='card_heading'>{subject}</div>
            <div className='card_desc'>{getDescription(description)}</div>
          </div>
          <div className='card_footer '>
            <div className='username_icon' style={{ backgroundColor: color }}>
              {intialOfName}
            </div>
            <div className='flex'>
              <div
                className='urgency'
                style={{ backgroundColor: getUrgency(urgency) }}
              ></div>
              <div className='timestamp'>{timePassed}</div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
