import React from 'react';
import {NavLink} from "react-router-dom";
import '../../css/Bag_item.css';

const Bag_item = (props) => {
    let value = 0;
    let valElem = React.createRef();
        const Minus = () => {
            if (value > 0) {
                value--;
                valElem.current.textContent = `  ${value}  `;
            } else {
                value = 0;
                valElem.current.textContent = `  ${value}  `;
            }
        }

        const Plus = () => {
            value++;
            valElem.current.textContent = `  ${value}  `;
        }
        return(
            <div className='bag_item'>
                <div>
                    <img src={require(`../../img/${props.img}.png`)}></img>
                </div>
                <div className='btn'>
                <button onClick={()=>Minus()}> - </button><span ref={valElem}>  {value}  </span><button onClick={()=>Plus()}> + </button>
                </div>
            </div>
        );
}

export default Bag_item;