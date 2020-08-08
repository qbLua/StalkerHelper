import React from 'react';
import Location from './Location';
import Back from '../Back';

const Select_location = (props) => {
    let list = props.locations.map((location) => <Location name={location[0]} img={location[1]} lvl={location[2]} color={location[3]} groups={location[4]} mutants={location[5]} anomalies={location[6]} radiation={location[7]} desc={location[8]} stats={location[9]} />);
    return (
        <div className="container">
            <Back />
            {list}
        </div>
    );
}

export default Select_location;