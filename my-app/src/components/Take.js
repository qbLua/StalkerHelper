import Store_character from './Character/Store_character';
import { Player_stats, Compare, locations, player } from './Logics/Logics';

const Take = (slot_img, item_img, slot, params) => {
    console.log(slot_img, slot)
    Player_stats(slot, params);
    Store_character._currentValue[slot_img] = item_img;
    window.history.back();
}

export const Take_location = (index) => {
    Compare(player, locations[index])
}

export default Take;