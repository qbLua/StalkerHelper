import React from 'react';
import ReactDOM from 'react-dom';
import Note_list from './Note_list';
import { rerenderTree } from '../..';

function addNote (title, text, add, context) {
    let date = new Date().toLocaleDateString();
   // add.bind(context);
    title.current.value = title.current.value == ''?title.current.value = 'Unnamed':title.current.value;
    text.current.value = text.current.value == ''?text.current.value = 'Empty note':text.current.value;
    add([title.current.value, date, text.current.value]);
    rerenderTree();
    title.current.value = '';
    text.current.value = '';
}

export default addNote;