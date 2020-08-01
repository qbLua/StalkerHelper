import React from 'react';
import '../css/Menu.css'
import { NavLink, Route } from "react-router-dom";


const Menu = () => {
  return (
    <div className="Menu">
      <ul className="Menu-list">
        <li className="Menu-map">
          <NavLink to="/map">Локации</NavLink>
        </li>
        <li className="Menu-character">
          <NavLink to="/character">Персонаж</NavLink>
        </li>
        <li className="Menu-bag">
          <NavLink to="/bag">Сумка</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;