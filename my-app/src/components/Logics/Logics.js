import React, { Component }  from 'react';
import Result from '../Result/Result';

export const Location_stats = (stats) => {
    locations[`i${stats[0]}`] = {};
    locations[`i${stats[0]}`].bul = stats[1];
    locations[`i${stats[0]}`].gun = stats[1];
    locations[`i${stats[0]}`].fire = stats[2][0];
    locations[`i${stats[0]}`].el = stats[2][1];
    locations[`i${stats[0]}`].chem = stats[2][2];
    locations[`i${stats[0]}`].exp = stats[2][3];
    locations[`i${stats[0]}`].tear = stats[3][0];
    locations[`i${stats[0]}`].hit = stats[3][1];
    locations[`i${stats[0]}`].rad = stats[4];
}
//[9, group_power, [fire, el, chem, exp], [tear, hit], rad]];
//['Ожог', 'Электорошок', 'Удар', 'Разрыв', 'Радиация', 'Хим. ожог', 'Взрыв', 'Пулестойкость', 'Стоимость']
export let locations = {}
export let player = {
set_null: () => {  
    player.gun = 0;
    ['fire', 'el', 'hit', 'tear', 'rad', 'chem', 'exp', 'bul'].map((param) => {
        ['', 'suit_', 'art1_', 'art2_', 'art3_', 'art4_', 'art5_'].map((part) => player[`${part}${param}`] = 0)
    })
}
};


export const Player_stats = (item, stats) => {
    if (item == 'gun') {
        player.gun = stats[stats.length - 1];
    } else if (item == 'suit') {
        player.suit_fire = +(stats[0]).match(/\d*/)[0];
        player.suit_el = +(stats[1]).match(/\d*/)[0];
        player.suit_hit = +(stats[2]).match(/\d*/)[0];
        player.suit_tear = +(stats[3]).match(/\d*/)[0];
        player.suit_rad = +(stats[4]).match(/\d*/)[0];
        player.suit_chem = +(stats[5]).match(/\d*/)[0];
        player.suit_exp = +(stats[6]).match(/\d*/)[0];
        player.suit_bul = +(stats[7]).match(/\d*/)[0];
    } else if (item == 'art1') {
        let i = 0;
        [[2, 'hit'], [3, 'tear'], [4, 'bul'], [5, 'el'], [7, 'fire'], [8, 'chem'], [9, 'rad']].map((param) => {
            player[`art1_${param[1]}`] = 0;
            return(i++, (stats[param[0]] == '')?0:(player[`art1_${param[1]}`] = +(stats[param[0]]).match(/\d+/)[0]));
        })
    } else if (item == 'art2') {
        let i = 0;
        [[2, 'hit'], [3, 'tear'], [4, 'bul'], [5, 'el'], [7, 'fire'], [8, 'chem'], [9, 'rad']].map((param) => {
            player[`art2_${param[1]}`] = 0;
            return(i++, (stats[param[0]] == '')?0:(player[`art2_${param[1]}`] = +(stats[param[0]]).match(/\d+/)[0]));
        })
    } else if (item == 'art3') {
        let i = 0;
        [[2, 'hit'], [3, 'tear'], [4, 'bul'], [5, 'el'], [7, 'fire'], [8, 'chem'], [9, 'rad']].map((param) => {
            player[`art3_${param[1]}`] = 0;
            return(i++, (stats[param[0]] == '')?0:(player[`art3_${param[1]}`] = +(stats[param[0]]).match(/\d+/)[0]));
        })
    } else if (item == 'art4') {
        let i = 0;
        [[2, 'hit'], [3, 'tear'], [4, 'bul'], [5, 'el'], [7, 'fire'], [8, 'chem'], [9, 'rad']].map((param) => {
            player[`art4_${param[1]}`] = 0;
            return(i++, (stats[param[0]] == '')?0:(player[`art4_${param[1]}`] = +(stats[param[0]]).match(/\d+/)[0]));
        })
    } else if (item == 'art5') {
        let i = 0;
        [[2, 'hit'], [3, 'tear'], [4, 'bul'], [5, 'el'], [7, 'fire'], [8, 'chem'], [9, 'rad']].map((param) => {
            player[`art5_${param[1]}`] = 0;
            return(i++, (stats[param[0]] == '')?0:(player[`art5_${param[1]}`] = +(stats[param[0]]).match(/\d+/)[0]));
        })
    }

    ['fire', 'el', 'hit', 'tear', 'rad', 'chem', 'exp', 'bul'].map((param) => {
        ['suit_', 'art1_', 'art2_', 'art3_', 'art4_', 'art5_'].map((player[`${param}`]=0, (part) => player[`${param}`] += player[`${part}${param}`]))
    });
}

export const Compare = (player, location) => {

    //нужно узнать какие показатели следует брать во внимание в этой локации
    //сравнить
    //узнать сколько и чего не хватает
    //посчитать индекс готовности
    //дать советы
    //проверка на пустоту параметра

    let need = [];

    let location_score = [['fire', 1], ['el', 1], ['hit', 2], ['tear', 3], ['rad', 7], ['chem', 1], ['exp', 3], ['bul', 4], ['gun', 4]].reduce((accum, param) => {
        return (accum + location[param[0]]*param[1]);
    }, 0);
    let player_score = [['fire', 1], ['el', 1], ['hit', 2], ['tear', 3], ['rad', 7], ['chem', 1], ['exp', 3], ['bul', 4], ['gun', 4]].reduce((accum, param) => {
        if (player[param[0]] >= location[param[0]]) {
            return (accum + location[param[0]]*param[1]);
        }
        need[need.length] = [param[0], location[param[0]] - player[param[0]]];
        return (accum + player[param[0]]*param[1]);
    }, 0);

    let ready = Math.ceil(player_score/location_score*100);
    let print = [ready, need]
    return print;
}