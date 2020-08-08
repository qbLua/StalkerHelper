import React from 'react';
import Note from './Note';
import Note_input from './Note_input';
import Back from '../Back';

const Note_list = (props) => {
    let list = props.notes.map((note) => <Note title={note[0]} date={note[1]} text={note[2]} />)
    return (
        <div>
            <Back />
            <Note_input add={props.add} context={props.context} />
            {list}
        </div>
    );
}

export default Note_list;