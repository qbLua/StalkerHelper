import React from 'react';
import '../css_components/Menu.css'

const Menu = () => {
    return(
    <div className="Menu">
        <ul className="Menu-list">
        <li className="Menu-map">
          <a href="#">Map</a>
        </li>
        <li className="Menu-character"> 
          <a href="#">Character</a>
        </li>
        <li className="Menu-bag">
          <a href="#">Bag</a>
        </li>
      </ul>
    </div>
    );
}

export default Menu;