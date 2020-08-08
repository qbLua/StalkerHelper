import React from 'react';
import '../css/Menu.css'
import { NavLink, Route } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="Menu-list">
        <li>
          <NavLink to="/map">Локации</NavLink>
        </li>
        <li>
          <NavLink to="/character">Персонаж</NavLink>
        </li>
        <li>
          <NavLink to="/bag">Сумка</NavLink>
        </li>
        <li>
          <NavLink to="/note">Записи</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;