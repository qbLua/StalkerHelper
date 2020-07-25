import React from 'react';
import {NavLink} from "react-router-dom";
import '../../css/Bag_item.css';

const Bag_item = (props) => {
    let value = 0;
        const Minus = () => {
            if (value > 0) {
                value--;
                document.getElementById(`val${props.id}`).textContent = `  ${value}  `;
            } else {
                value = 0;
                document.getElementById(`val${props.id}`).textContent = `  0  `;
            }
        }

        const Plus = () => {
            value++;
            document.getElementById(`val${props.id}`).textContent = `  ${value}  `;
        }
        return(
            <div className='bag_item'>
                <div>
                    <img src={require(`../../img/${props.img}.png`)}></img>
                </div>
                <div className='btn'>
                <button onClick={()=>Minus()}> - </button><span id={`val${props.id}`}>  {value}  </span><button onClick={()=>Plus()}> + </button>
                </div>
            </div>
        );
}

export default Bag_item;