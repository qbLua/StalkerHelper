import React from 'react';
import '../css_components/Character.css'
import Gun from './Gun/Gun';
import Suit from './Suit/Suit';
import Artefacts from './Artefacts/Artefacts';

const Character = () => {
    return(
        <div className="Character">
            <Gun />
            <Suit />
            <Artefacts />
        </div>
    );
}

export default Character;