import React from 'react';
import '../css/Menu.css'
import { NavLink, Route } from "react-router-dom";

const Menu = () => {
  return (
    <div className="Menu">
      <ul className="Menu-list">
      <NavLink to="/map">
        <li>Локации</li>
      </NavLink>
      <NavLink to="/character">
        <li>Персонаж</li>
      </NavLink>
      <NavLink to="/bag">
        <li>Сумка</li>
      </NavLink>
      <NavLink to="/note">  
        <li>Записи</li>
      </NavLink>
      </ul>
    </div>
  );
}

export default Menu;