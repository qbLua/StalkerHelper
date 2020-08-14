import React from 'react';
import Select_item from './Select_item';
import Back from '../Back';

const Select_list = (props) => {
    /*
    На основание полученных пропсов, эта компонента может нарисовать 7 разных страниц:
    1 - страница выбора предмета для слота с оружием, 2 - для слота с костюмами,
    3-7 - для слотов с артефактами (каждая страница отвечает за свой слот, всего слотов артефактов 5)
    item отвечает за название "отдела" в хранилище, где хранятся необходимые данные
    list это массив из двух элементов:
        0. названия характеристик предмета
        1. данные предмета
            0. название предмета
            1. изображение предмета
            2. характеристики предмета
    */
    let item = [`${props.item}`];
    let list = [props[`${item}`][0], props[`${item}`][1]];
    list[1] = list[1].map((value) => <Select_item id={value[3]} name={value[0]} img={value[1]} params={list[0]} values={value[2]} slot={props.slot} fun={props.fun} />)
    return (
        <div>
            <Back />
            {list[1]}
        </div>
    );
}

export default Select_list;