import React from 'react';
import { Take_location } from '../Take';
import Back from '../Back';
import { Location_stats } from '../Logics/Logics';
import '../../css/Result.css';

const Result = (props) => {
    //Вывод показателя готовности и рекомендаций
    props.locations.map((loc) => Location_stats(loc[9]));
    let result = Take_location(props.location, props.bag);
    let ready = result[0];
    let need = result[1];
    //Создаю массив с рекомендациями
    need = need.reduce((accum, curr) => {
        return (accum + ([['fire', '"Ожог" на '], ['el', '"Электорошок" на '], ['hit', '"Удар" на '], ['tear', '"Разрыв" на '], ['rad', '"Радиация" на '], ['chem', '"Хим. ожог" на '], ['exp', '"Взрыв" на '], ['bul', '"Пулестойкость" на '], ['gun', '"Оружие" на '], ['bag', '']].map((param) => {
                if (curr[0] == param[0]) {
                    return (`${param[1]}${curr[1]}@`);
                }
            })));
        }, '');
    need = need.replace(/\,/g, '').split('@');
    //Добавляю к нему показатель готовности
    let print = ready == 100 ? ['Готовность 100%',''] : [`Готовность ${ready}%`, `Для успешного прохождения локации следует повысить следующие параметры:`];
    return (
        <div>
            <Back />
            <div className='result-container'>
                <h2>{print[0]}</h2>
                <p>{print[1]}</p>
                <div className='params'>
                    {need.map((param) => {
                        return (
                            <div>{param}</div>
                        );
                    })}
                </div>
            </div>
         </div>
    );
} 

export default Result;