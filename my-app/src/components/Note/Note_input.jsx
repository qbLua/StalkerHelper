import React from 'react';
import '../../css/Note_input.css';
import addNote from './Add_note';

const Note_input = (props) => {
    let title = React.createRef()
    let text = React.createRef()
    return (
            <div className="note-form">
                <div>
                <input ref={title} type="text" placeholder="Заголовок"></input>
                </div>
                <div>
                <textarea ref={text} placeholder="Содержание"></textarea>
                </div>
                <div>
                <button onClick={(() => addNote(title, text, props.add, props.context))}>Отправить</button>
                </div>
            </div>
    );
}

export default Note_input;