import React from 'react';
import {NavLink} from "react-router-dom";
import Bag_item from './Bag_item';
import '../../css/Bag.css';
import Back from '../Back';

const Bag = (props) => {
    let list = props.bag.map((item) => <Bag_item id={item[0]} name={item[1]} img={item[2]} val={item[3]} />)
    return(
        <div className="Bag">
            <Back />
            {list}
        </div>
    );
}

export default Bag;