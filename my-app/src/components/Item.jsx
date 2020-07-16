import React from 'react';
import {NavLink} from "react-router-dom";

const Item = (props) => {
    return(
        <div className="Item">
            <div className="Item-img">
                <img src={require(`../img/${props.img}.png`)}></img>
            </div>
            <div className="Item-btn">
                <NavLink to={`/${props.btn}`}>Select</NavLink>
            </div>
        </div>
    );
}

export default Item;