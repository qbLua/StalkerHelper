import React from 'react';
import './Artefacts_select.css'
import Select_item from '../Select_item';
import Artefacts_storage from './Artefacts_storage';

const Artefacts_select = (props) => {
    let as = Artefacts_storage();
    as[1] = as[1].map((value) => <Select_item name={value[0]} img={value[1]} params={as[0]} values={value[2]} slot={`art${props.slot}`} />)
    return (
        <div>
            {as[1]}
        </div>
    );
}

export default Artefacts_select;