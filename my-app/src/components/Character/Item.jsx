import React from 'react';
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return(
        <div className="Item">
            <div className="Item-img">
                <NavLink to={`/${props.btn}`}>
                     <img src={require(`../../img/${props.img}.png`)}></img>
                </NavLink>
            </div>
            <div className="Item-btn">
                <NavLink to={`/${props.btn}`}>Выбрать</NavLink>
            </div>
        </div>
    );
}

export default Item;