import React from 'react';
import {NavLink} from "react-router-dom";
import Bag_item from './Bag_item';
import '../../css/Bag.css';
import Back from '../Back';

const Bag = (props) => {
    //Компонента рабтает так же как и Select_item.jsx, но рисует список предметов
    let list = props.bag.map((item) => {
        return <Bag_item id={item[0]} name={item[1]} img={item[2]} val={+item[3]} save={+props.save[+item[0]-1][1]} change={props.change} params={item[4]} fun={props.fun} />
    });
    return(
        <div className="Bag">
            <Back />
            {list}
        </div>
    );
}

export default Bag;