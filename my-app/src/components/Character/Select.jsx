import React from 'react';
import Select_item from './Select_item';

const Select = () => {
    const params = ['Боеприпасы', 'Стоимость', 'Темп огня', 'Точность', 'Убойность', 'Дальность', 'Настильность', 'Отдача', 'Удобность', 'Магазин', 'Вес', 'Ресурс'];
    const values_1 = ['9х39 мм ПАБ-9', '1200', '600', '0,05', '65', '400', '290', '0,125', '89,6', '10', '3,2', '5000'];
    const values_2 = ['9х39 мм ПАБ-9', '1000', '750', '0,18', '58', '400', '310', '0,3', '89,5', '20', '3,2', '10000'];
    const values_3 = ['9х39 мм ПАБ-9', '1200', '600', '0,05', '65', '400', '290', '0,125', '89,6', '10', '3,2', '5000'];
    const values_4 = ['9х39 мм ПАБ-9', '1200', '600', '0,05', '65', '400', '290', '0,125', '89,6', '10', '3,2', '5000'];

    
    
    return (
        <div>
            <Select_item name='Винтарь-ВС' img='Иконка_Винтарь-ВС' params={params}  values={values_1}  />
            <Select_item name='Гром-С14' img='Иконка_Гром-С14' params={params}  values={values_2}  />
            <Select_item name='Обрез' img='Иконка_обреза' params={params}  values={values_3}  />
            <Select_item name='РПГ-7у' img='Иконка_РПГ-7у' params={params}  values={values_4}  />
        </div>
    );
}

export default Select;