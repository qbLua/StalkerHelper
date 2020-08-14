import React from 'react';
import '../../css/Select_item.css';
import Take, { Save_caliber } from '../Take';

const Select_item = (props) => {
  /*
  Компонента отвечает за отрисовку отдельного предмета
  ("карточка" комбинезона «Монолита», артефакта "Бенгальский огонь" и тп)
  При нажатии на кнопку выбора этого предмета, вызывается функция Take()
  В нее каждый раз передаются одни и те же параметры (названия одинаковые, содержание зависит от предмета)
  Но в случае с артефактами и костюмами последние два параметра (props.fun, props.id) имеют значения undefined
  Потому как эти свойства нужны только при выборе оружия
  А именно для того, чтобы знать, какой калибр у этого оружи и какие боеприпасы ему подойдут
  props.id - id оружия
  props.fun - функция для сохранения номеров подходящих калибров
  */
  let i = -1;
  const params = (props.params).map((param) => (i++, (props.values[i] == '' ? <span className="select_hide"></span> : <tr><td className="select_table_space"></td><td>{param}</td><td className="select_table_space"></td><td className="select_table_space"></td><td>{props.values[i]}</td></tr>)));
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
        <button onClick={()=>Take(`${props.slot}_img`, props.img, props.slot, props.values, props.fun, props.id)}>Взять</button>
      </div>
    </div>
    );
}

export default Select_item;