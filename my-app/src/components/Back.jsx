import React from 'react';
import '../css/Back.css';
import { NavLink } from 'react-router-dom';

const Back = () => {
    let back = () => {
        window.history.back();
    }
    return (
        <div className="back">
            <img onClick={back} src={require(`../img/back2.png`)}></img>
        </div>
    );
}

export default Back;