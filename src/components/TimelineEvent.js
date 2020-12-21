import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {

  return (
     <div className="event-timeline">
        <p>{props.person}</p>
        <p>{props.status}</p>
        <p > <Timestamp time={props.timeStamp}/></p>
      </div>
    );
}

export default TimelineEvent;