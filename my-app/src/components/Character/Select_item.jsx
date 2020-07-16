import React from 'react';
import './Select_item.css'

const Select_item = (props) => {
  let i = -1;
  const params = (props.params).map((param) => (i++, <tr><td>{param}</td><td>{props.values[i]}</td></tr>));
  

  return (
    <div className="select_item">
      <div className="select_item_name">
        {props.name}
      </div>
      <div className="select_item_grid">
        <div className="select_item_img">
          <img src={require(`../../img/${props.img}.png`)}></img>
        </div>
        <div className="select_item_desc">
          <table>
              {params}
          </table>
        </div>
      </div>
      <div className="select_item_btn">
        <button>Take this</button>
      </div>
    </div>
    );
}

export default Select_item;