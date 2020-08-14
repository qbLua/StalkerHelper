import Store_character from './Character/Store_character';
import { Player_stats, Compare, locations, player, Bag_index } from './Logics/Logics';


const Take = (slot_img, item_img, slot, params, fun, id) => {
    /*
    Обновляет параметры игрока
    Если эта функция была вызвана в результате выбора оружия,
    то вызывается еще функция для сохранения информации о подходящих калибрах
    */
    if (slot == 'gun') {
        fun(id);
      }
    Player_stats(slot, params, id);
    Store_character._currentValue[slot_img] = item_img;
    window.history.back();
}

export const Take_location = (index, bag) => {
    return Compare(player, locations[`i${index}`], bag, Bag_index);
}

export default Take;