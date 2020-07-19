import React from 'react';
import Select_item from '../Select_item';

const Suit_select = () => {
    const params = ['Ожог', 'Электорошок', 'Удар', 'Разрыв', 'Радиация', 'Хим. ожог', 'Взрыв', 'Пулестойкость', 'Стоимость'];
    const values_1 = ['30%', '15%', '20%', '10%', '10%', '15%', '20%', '20%', '5000 RU'];
    const values_2 = ['10%', '10%', '10%', '15%', '0%', '10%', '10%', '15%', '3000 RU'];
    const values_3 = ['30%', '30%', '20%', '40%', '30%', '30%', '40%', '45%', '12000 RU'];
    const values_4 = ['60%', '70%', '80%', '70%', '70%', '50%', '70%', '55%', '40000 RU'];
    const values_5 = ['10%', '10%', '10%', '10%', '10%', '10%', '10%', '10%', '1000 RU'];
    const values_6 = ['30%', '50%', '50%', '30%', '50%', '50%', '25%', '30%', '10000 RU'];
    const values_7 = ['50%', '50%', '50%', '40%', '50%', '50%', '30%', '30%', '15000 RU'];
    const values_8 = ['50%', '60%', '50%', '40%', '50%', '50%', '40%', '40%', '10000 RU'];
    const values_9 = ['80%', '90%', '50%', '50%', '90%', '70%', '50%', '40%', '30000 RU'];
    const values_10 = ['50%', '50%', '60%', '50%', '50%', '50%', '45%', '40%', '12500 RU'];
    const values_11 = ['90%', '90%', '50%', '50%', '90%', '90%', '60%', '40%', '24000 RU'];
    const values_12 = ['50%', '50%', '50%', '50%', '50%', '50%', '40%', '40%', '14000 RU'];
    const values_13 = ['90%', '90%', '50%', '15%', '90%', '90%', '40%', '20%', '15000 RU'];
    const values_14 = ['50%', '50%', '90%', '80%', '30%', '50%', '80%', '60%', '50000 RU'];

    
    
    return (
        <div>
            <Select_item name='Армейский бронежилет' img='Армейский_бронежилет(ico)' params={params}  values={values_1} slot='suit_img' />
            <Select_item name='Куртка бандита"' img='Иконка_куртки_бандита' params={params}  values={values_2} slot='suit_img' />
            <Select_item name='Бронекостюм «Берилл-5М»' img='Старая_иконка_Берилл' params={params}  values={values_3} slot='suit_img' />
            <Select_item name='Бронекостюм «Булат»' img='Старая_иконка_Булата' params={params}  values={values_4} slot='suit_img' />
            <Select_item name='Кожаная куртка' img='Иконка_кожаной_куртки' params={params}  values={values_5} slot='suit_img' />
            <Select_item name='Комбинезон «Ветер свободы»' img='Старая_иконка_Ветра_свободы' params={params}  values={values_6} slot='suit_img' />
            <Select_item name='Комбинезон «Заря»' img='Старая_иконка_Зари' params={params}  values={values_7} slot='suit_img' />
            <Select_item name='Комбинезон «Монолита»' img='Иконка_комбинезона_Монолита' params={params}  values={values_8} slot='suit_img' />
            <Select_item name='Комбинезон «СЕВА»' img='Иконка_комбинезона_СЕВА' params={params}  values={values_9} slot='suit_img' />
            <Select_item name='Комбинезон «Страж свободы»' img='Иконка_комбинезона_Страж_свободы' params={params}  values={values_10} slot='suit_img' />
            <Select_item name='Комбинезон ССП-99М' img='Иконка_ССП-99М' params={params}  values={values_11} slot='suit_img' />
            <Select_item name='ПСЗ-9д «Броня "Долга"»' img='Старая_иконка_ПС5-М' params={params}  values={values_12} slot='suit_img' />
            <Select_item name='ССП-99 «Эколог»' img='Иконка_ССП-99' params={params}  values={values_13} slot='suit_img' />
            <Select_item name='Экзоскелет' img='Старая_иконка_экзоскелета' params={params}  values={values_14} slot='suit_img' />
        </div>
    );
}

export default Suit_select;