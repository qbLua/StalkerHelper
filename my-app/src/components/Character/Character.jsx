import React from 'react';
import '../../css/Character.css'
import Item from './Item';
import Store_character from './Store_character';
import Back from '../Back';
/*
Разметка экрана персонажа
Контекст нужен для того, чтобы изменять изображения ячеек после их выбора предмета
*/
const Character = (props) => {
  return(
      <Store_character.Consumer>
        {
          (value) => {
            return (
            <div className="Character">
              <Back />
              <div className="Character_gun">
                  <Item img={value.gun_img} btn="character/gun_select" />
              </div>
              <div className="Character_suit">
                  <Item img={value.suit_img} btn="character/suit_select" />
              </div>
              <div className="Character_artefacts">
                  <div className="artefact_1">
                  <Item img={value.art1_img} btn="character/artefacts_select/1" />
                  </div>
                  <div className="artefact_2">
                  <Item img={value.art2_img} btn="character/artefacts_select/2" />
                  </div>
                  <div className="artefact_3">
                  <Item img={value.art3_img} btn="character/artefacts_select/3" />
                  </div>
                  <div className="artefact_4">
                  <Item img={value.art4_img} btn="character/artefacts_select/4" />
                  </div>
                  <div className="artefact_5">
                  <Item img={value.art5_img} btn="character/artefacts_select/5" />
                  </div>      
              </div>     
            </div>
            );
          }
        }
      </Store_character.Consumer>
     
  );
}
export default Character;