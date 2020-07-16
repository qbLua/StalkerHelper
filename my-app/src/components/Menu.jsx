import React from 'react';
import './Menu.css'
import {NavLink, Route} from "react-router-dom";
import Character from './Character/Character';

const Menu = () => {
    return(
    <div className="Menu">
        <ul className="Menu-list">
        <li className="Menu-map">
          <NavLink to="/map">Map</NavLink>
        </li>
        <li className="Menu-character"> 
          <NavLink to="/character">Character</NavLink>
        </li>
        <li className="Menu-bag">
          <NavLink to="/bag">Bag</NavLink>
        </li>
      </ul>
    </div>
    );
}

export default Menu;