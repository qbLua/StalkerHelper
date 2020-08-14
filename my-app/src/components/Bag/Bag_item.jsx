import React from 'react';
import '../../css/Bag_item.css';
import { player } from '../Logics/Logics';

//Рисует ячейку каждого предмета
const Bag_item = (props) => {
    let valElem = React.createRef();
    
        let value = props.save;
        const Minus = (minus) => {
            if (value >= minus) {
                value -= minus;
                //В функцию для изменения количества выбранных предметов передается новое значение
                //и параметры предмета, по которым можно определить, к какой категории он относится
                props.change((+props.id - 1), value, props.params);
                //Если была передана функция для изменения количества боеприпасов,
                //то значит, что этот предмет относится к боеприпасам и его надо считать по-другому
                if (props.fun) {
                    props.fun(player.gun_id);
                }
                valElem.current.textContent = `  ${value}  `;
            }
        }

        const Plus = (plus) => {
            value += plus;
            props.change((+props.id - 1), value, props.params, '+');
            if (props.fun) {
                props.fun(player.gun_id);
            }
            valElem.current.textContent = `  ${value}  `;
        }

        return(
            <div className='bag_item'>
                <div>
                    <img src={require(`../../img/${props.img}.png`)}></img>
                </div>
                <div className='bag_btn'>
                <button onClick={()=>Minus(props.val)}> - </button><span ref={valElem}>{value}</span><button onClick={()=>Plus(props.val)}> + </button>
                </div>
            </div>
        );
}

export default Bag_item;