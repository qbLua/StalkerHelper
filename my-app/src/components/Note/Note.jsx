import React from 'react';
import  '../../css/Note.css';

const Note = (props) => {
  return (
    <div className="note-item">
        <h3>{props.title}</h3>
        <p className="date">{props.date}</p>
        <p>{props.text}</p>
    </div>
  );
}

export default Note;