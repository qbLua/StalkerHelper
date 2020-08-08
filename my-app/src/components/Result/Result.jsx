import React from 'react';
import { Take_location } from '../Take';
import Back from '../Back';
import { Location_stats } from '../Logics/Logics';
import '../../css/Result.css';

const Result = (props) => {
    props.locations.map((loc) => Location_stats(loc[9]))
    let result = Take_location(props.location);
    let ready = result[0];
    let need = result[1];
    need = need.reduce((accum, curr) => {
        return (accum + ([['fire', 'Ожог'], ['el', 'Электорошок'], ['hit', 'Удар'], ['tear', 'Разрыв'], ['rad', 'Радиация'], ['chem', 'Хим. ожог'], ['exp', 'Взрыв'], ['bul', 'Пулестойкость'], ['gun', 'Оружие']].map((param) => {
                if (curr[0] == param[0]) {
                    return (`"${param[1]}" на ${curr[1]}%`);
                }
            })));
        }, '');
    need = need.replace(/\,/g, '').split('%').join('%$').split('$');
    let print = [`Готовность ${ready}%`, `Для успешного прохождения локации следует повысить следующие параметры:`];
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