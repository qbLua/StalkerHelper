import React from 'react';
import {NavLink} from "react-router-dom";
import Bag_item from './Bag_item';
import '../../css/Bag.css';

const Bag = (props) => {
    const item1 = ['1', 'Антирадиационные препараты', 'antiradX', '0'];
    const item2 = ['2', 'Аптечка', 'apte4ka', '0'];
    const item3 = ['3', 'Армейская аптечка', 'apte4ka-army', '0'];
    const item4 = ['4', 'Научная аптечка', 'apte4ka-scient', '0'];
    const item5 = ['5', 'Бинт', 'bint', '0'];
    const item6 = ['6', 'Энергитический напиток "NonStop"', 'nonstop', '0'];
    const item7 = ['7', 'Тушёнка "Радость туриста"', 'tushenka', '0'];
    const item8 = ['8', 'Колбаса "Практическая"', 'kolbasa', '0'];
    const item9 = ['9', 'Хлеб', 'hleb', '0'];
    const item10 = ['10', 'Аккумулятор', 'Иконка_аккумулятора', '0'];
    const item11 = ['11', '12x70 дробь', 'Иконка_Дробь', '0'];
    const item12 = ['12', '12x76 жекан', 'Иконка_Жекан', '0'];
    const item13 = ['13', '12x76 дротик', 'Иконка_Дротик', '0'];
    const item14 = ['14', '5,45x39 мм', 'Иконка_5,45', '0'];
    const item15 = ['15', '5,56x45 мм AP', 'Иконка_5,56AP', '0'];
    const item16 = ['16', 'Граната ВОГ-25', 'Граната_ВОГ-25(ico)', '0'];
    const item17 = ['17', 'Граната ВОГ-25P', 'ВОГ-25Р(ico)', '0'];
    const item18 = ['18', 'Граната ВОГ-25P', 'ВОГ-25Р(ico)', '0'];
   // const item1 = ['id', 'name', 'img', 'val'];

    return(
        <div className="Bag">
            <Bag_item id={item1[0]} name={item1[1]} img={item1[2]} val={item1[3]} />
            <Bag_item id={item2[0]} name={item2[1]} img={item2[2]} val={item2[3]} />
            <Bag_item id={item3[0]} name={item3[1]} img={item3[2]} val={item3[3]} />
            <Bag_item id={item4[0]} name={item4[1]} img={item4[2]} val={item4[3]} />
            <Bag_item id={item5[0]} name={item5[1]} img={item5[2]} val={item5[3]} />
            <Bag_item id={item6[0]} name={item6[1]} img={item6[2]} val={item6[3]} />
            <Bag_item id={item7[0]} name={item7[1]} img={item7[2]} val={item7[3]} />
            <Bag_item id={item8[0]} name={item8[1]} img={item8[2]} val={item8[3]} />
            <Bag_item id={item9[0]} name={item9[1]} img={item9[2]} val={item9[3]} />
            <Bag_item id={item10[0]} name={item10[1]} img={item10[2]} val={item10[3]} />
            <Bag_item id={item11[0]} name={item11[1]} img={item11[2]} val={item11[3]} />
            <Bag_item id={item12[0]} name={item12[1]} img={item12[2]} val={item12[3]} />
            <Bag_item id={item13[0]} name={item13[1]} img={item13[2]} val={item13[3]} />
            <Bag_item id={item14[0]} name={item14[1]} img={item14[2]} val={item14[3]} />
            <Bag_item id={item15[0]} name={item15[1]} img={item15[2]} val={item15[3]} />
            <Bag_item id={item16[0]} name={item16[1]} img={item16[2]} val={item16[3]} />
            <Bag_item id={item17[0]} name={item17[1]} img={item17[2]} val={item17[3]} />
            <Bag_item id={item18[0]} name={item18[1]} img={item18[2]} val={item18[3]} />
        </div>

    );
}

export default Bag;